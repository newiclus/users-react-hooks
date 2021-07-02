import React, { useState, useEffect } from "react";
import "./App.scss";
import UserDetail from './Components/UserDetail';
import UsersList from './Components/UsersList';

const userList = [];

function App() {
  const getUser = () => (
    // https://api.github.com/users?per_page=10
    fetch("https://reqres.in/api/users?per_page=10")
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => console.log(error.message))
  );

  const [users, setUsers] = useState(userList);
  const [userDetail, setUserDetail] = useState({});

  const handleUserDetail = (id) => {
    const userData= users.filter(user => user.id === id)[0];
    console.log(userData);
    setUserDetail(userData);
  }

  useEffect(() => {
    getUser().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container-sm">
      <div className="row">
        <header className="col header">
          <h1>Users</h1>
        </header>
      </div>
      <div className="row">
        <div className="col">
          <UsersList users={users} handleClick={handleUserDetail} />
        </div>
        <div className="col">
          {userDetail.id && <UserDetail user={userDetail} />}
        </div>
      </div>
    </div>
  );
}

export default App;
