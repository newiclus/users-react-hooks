import React from "react";

function UserList ({users, handleClick}) {

  const handleId = (event) => {
    const { target } = event;
    const id = parseInt(target.getAttribute('data-id'));
    handleClick(id);
  }

  return (
    <React.Fragment>
      <h1>Users List</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <p>
                <a onClick={handleId} data-id={user.id} href={`#${user.id}`}>
                  {user.first_name} {user.last_name}
                </a>
              </p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default UserList;