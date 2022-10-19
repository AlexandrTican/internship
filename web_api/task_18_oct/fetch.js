
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
  let email = document.createElement('div');
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



function search() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByTagName('li');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}