
// // function getUsers
// function getUsers(){fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
//     .then(json => console.table(json))
// }
// getUsers();
// function renderUsers()
// // function renderUsers
const ul = document.getElementById('users');
 const list = document.createDocumentFragment();
  const url = 'https://jsonplaceholder.typicode.com/users/';

fetch(url) .then((response) => { return response.json(); }) 
.then((json) => { json.map(function(user) 
  { let li = document.createElement('li'); 
  let name = document.createElement('h2'); 
  let email = document.createElement('span');
  let username = document.createElement('div');
  let street = document.createElement('div');
  let suite = document.createElement('div');   

    name.innerHTML = `${user.name}`;
    email.innerHTML = `${user.email}`;
    username.innerHTML = `${user.username}`;
    street.innerHTML = `${user.address.street}`;
    suite.innerHTML = `${user.address.suite}`;
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(username);
    li.appendChild(street);
    li.appendChild(suite);
    list.appendChild(li);
    ul.appendChild(list);
  });
})
.catch(function(error) {
  console.log(error);
});

function search(){
    let list = document.getElementById("")
    let field = document.getElementById("");
    let searchString= field.value;
    let users = search(searchString);

    list.innerHTML = "";
    users.forEach(user=> {
        let li = document.createElement("li");
        li.
    })
}