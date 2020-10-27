import React from "react";
import PropTypes from 'prop-types';

function UserDetail({ user }) {
  return (
    <div>
      <p>Id: {user.id}</p>
      <img src={user.avatar} alt={`avatar of ${user.first_name}`}/>
      <p>Name: {user.first_name} {user.last_name}</p>
      <address>Address: <a href={`mailto:${user.first_name}`}>{user.email}</a></address>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
  })
}

export default UserDetail;