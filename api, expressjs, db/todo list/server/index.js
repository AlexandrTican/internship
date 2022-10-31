// require - nodejs built-in function that loads modules
// modules are a way to split an app into separate files 
// instead of having all applications in one file
const express = require("express")
// this express variable loads  the express module
// it allows my code to access functionality of express....
const app = express();
const cors = require("cors");
const pool = require("./db");
// middleware
app.use(cors());
// lets us access req.body - one of many uses
app.use(express.json());

app.get('/todos',async (_,res)=>{
    // let {description} = req.body;
    try{
    const AllTodos = await pool.query('select * from todo')
    res.json(AllTodos.rows);
    }
    catch(err){
    console.log(err.message)
    }
})

app.get('/todos/:id',async(req,res)=>{
    try{
        // destructuring the req params object to find the stuff inside id key
        const { id } = req.params
        // we await SQL execution
        const oneTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        res.send(oneTodo.rows)
        // we send the todo row
    }
    catch(err) {
        console.log(err.message)
    }
    
})

app.delete('/todos/del/:id',async (req,res)=>{
    try{
    const {id} = req.params;
    const deleteTodo = await pool.query('DELETE from todo WHERE todo_id = $1 RETURNING*;',[id])
    res.json(deleteTodo.rows);
    }
    catch(err){
        console.log(err.message)
    }
})

app.post('/todos/create',async(req,res)=> {
   try{
   const {description} = req.body;
   const createTodo  = await pool.query('INSERT into todo(description) VALUES($1) RETURNING *;',[description]);
   res.json(createTodo.rows);
   }
   catch(err){
    console.log(err.message);
   }
})

app.put('/todos/modify/:id',async(req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const changeTodo = await pool.query('UPDATE todo SET description = $2 WHERE todo_id = $1 RETURNING *;',
        [id,description]);
        res.json(changeTodo.rows);
    }
    catch(err){
        console.log(err.message);
    }
})
// frontend - gets a  name , current year , birth year, 
// on backend - we find out age, send out " This user ${name}  has ${age}"
// CREATE A TODO 
// first - path, req, res
// req - user's request, res - response they get
// app.post("/todos", async(req, res) =>{
//     // await - waits for the function to complete 
//     // before it continues
//     try {
//         // console.log(req.body)
//         const { description } = req.body;
//         // we get request body from frontend(postman for now)
//         // and we use destructuring to get just the value of the obj
//     
//         // so less info will be sent as a response
//        
//     // try - catch, error handling
//     // it runs a regular code, and every time it fails - its going to
//     // catch it, and throw it out
// })
// get all todos
// app.get("/todos", async(req,res)=> {
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         // res object gets the rows from the constant alltodos which 
//         // itself is awaiting a postgresql query to be done first
//         res.json(allTodos.rows);
//         //  .rows because we get all items
//     } catch(err) {
//         console.log(err.message)
//     }
// })

// get a todo
// can be named however you want " /todos/:subject"
// app.get("/todos/:id",async(req,res)=> {
//     try{
//         // using destructuring we get id
//         const {id} = req.params;
        
//         const todo = await pool.query("SELECT * from todo WHERE todo_id = $1", 
//         [id])

//         res.json(todo.rows[0])
//         // .rows[0] cuz we get only one item
//         // console.log(req.params);
//         // params is whatever we specified in the URL field
//     } catch(err) {
//         console.error(err.message);
//     }
// })
// update a todo

// delete a todo
app.listen(5000, () => {
    console.log("server has started on port 5000")
})