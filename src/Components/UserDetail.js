import React from "react";
import PropTypes from 'prop-types';

function UserDetail({ user }) {
  const iconImg = 'https://github.githubassets.com/images/icons/emoji/unicode/2709.png?v8';
  return (
    <div className="user-detail" data-id={user.id}>
      <figure>
        <img className="rounded-circle avatar" src={user.avatar} alt={`avatar of ${user.first_name}`}/>
      </figure>
      <h4>{user.first_name} {user.last_name}</h4>
      <address>
        <img src={iconImg} alt="icon" height="22" /> &nbsp;
        <a href={`mailto:${user.first_name}`}>{user.email}</a>
      </address>
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