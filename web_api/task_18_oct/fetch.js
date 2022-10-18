
// // function getUsers
// function getUsers(){fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
//     .then(json => console.table(json))
// }
// getUsers();
// function renderUsers()
// // function renderUsers
const ul = document.getElementById('authors');
 const list = document.createDocumentFragment();
  const url = 'https://jsonplaceholder.typicode.com/users/'

fetch(url) .then((response) => { return response.json(); }) 
.then((json) => { json.map(function(author) 
  { let li = document.createElement('li'); 
  let name = document.createElement('h2'); 
  let email = document.createElement('span');
  let username = document.createElement('div');
  let street = document.createElement('div');
  let suite = document.createElement('div');   

    name.innerHTML = `${author.name}`;
    email.innerHTML = `${author.email}`;
    username.innerHTML = `${author.username}`;
    street.innerHTML = `${author.address.street}`;
    suite.innerHTML = `${author.address.suite}`;
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