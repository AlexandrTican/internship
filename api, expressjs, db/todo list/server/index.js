// require - nodejs built-in function that loads modules
// modules are a way to split an app into separate files 
// instead of having all applications in one file
const express = require("express")
// this express variable loads  the express module
// it allows my code to access functionality of express....
const app = express();
const cors = require("cors");
const pool = require("./db");
// middlewarec
app.use(cors());
// lets us access req.body - one of many uses
app.use(express.json());

// ROUTES//

// CREATE A TODO 
// first - path, req, res
// req - user's request, res - response they get
app.post("/todos", async(req, res) =>{
    // await - waits for the function to complete 
    // before it continues
    try {
        // console.log(req.body)
        const { description } = req.body;
        // we get request body from frontend(postman for now)
        // and we use destructuring to get just the value of the obj
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *", 
        [description]
        );
        // so less info will be sent as a response
        res.json(newTodo.rows[0]);
        // new Todo
    } catch(err) {
        console.log(err.message);
    }
    // try - catch, error handling
    // it runs a regular code, and every time it fails - its going to
    // catch it, and throw it out
})
// get all todos
app.get("/todos", async(req,res)=> {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        // res object gets the rows from the constant alltodos which 
        // itself is awaiting a postgresql query to be done first
        res.json(allTodos.rows);
    } catch(err) {
        console.log(err.message)
    }
})

// get a todo
// can be named however you want " /todos/:subject"
app.get("/todos/:id",async(req,res)=> {
    try{
        // 
        console.log(req.params);
        // params is whatever we specified in the URL field
        // it will
    } catch(err) {
        console.error(err);
    }
})
// update a todo

// delete a todo
app.listen(5000, () => {
    console.log("server has started on port 5000")
})