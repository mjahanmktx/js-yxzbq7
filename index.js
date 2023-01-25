async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await response.json();
  console.log(users);
}

getUsers().catch(console.error);
