import React from "react";

function UserList ({users, onClick}) {

  const handleId = (event) => {
    const { target } = event;
    const id = parseInt(target.getAttribute('data-id'));
    onClick(id);
  }

  return (
    <React.Fragment>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <p>
                <a onClick={handleId} data-id={user.id} href={`#${user.id}`}>
                  {user.login}
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