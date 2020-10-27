import React, { useState, useEffect } from "react";
import styles from "./App.scss";
import UserDetail from './Components/UserDetail';
import UsersList from './Components/UsersList';

const userList = [];

function App() {
  const getUser = () => (
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
    <div>
      <div className={styles.App}>
        <UsersList users={users} handleClick={handleUserDetail} />
      </div>
      {userDetail.id && <UserDetail user={userDetail} />}
    </div>
  );
}

export default App;
