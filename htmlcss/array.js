const users = fetch("https://jsonplaceholder.typicode.com/users");
//pending
console.log(users);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
