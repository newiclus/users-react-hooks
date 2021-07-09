const getUsers = () => (
  // https://reqres.in/api/users?per_page=10
  fetch("https://api.github.com/users?per_page=15")
  .then((response) => response.json())
  .then((json) => json)
  .catch((error) => console.log(error.message))
);

const getUserById = (id) => (
  fetch("https://api.github.com/user/"+id)
  .then((response) => response.json())
  .then((json) => json)
  .catch((error) => console.log(error.message))
);

export {
  getUsers,
  getUserById
}