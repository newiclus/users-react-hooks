import React from "react";
import PropTypes from 'prop-types';

function UserDetail({ user }) {
  const iconOcto = 'https://github.githubassets.com/images/icons/emoji/octocat.png?v8';
  const iconLink = 'https://github.githubassets.com/images/icons/emoji/unicode/1f517.png?v8';
  const iconHouse = 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png?v8';

  return (
    <div className="user-detail" data-id={user.id}>
      <figure>
        <img className="rounded-circle avatar" src={user.avatar_url} alt={`avatar of ${user.name}`} height="160"/>
      </figure>
      <h4>{user.name}</h4>
      <address>
        <img src={iconOcto} alt="icon" height="22" /> &nbsp;
        <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
      </address>
      <address>
        <img src={iconLink} alt="icon" height="22" /> &nbsp;
        <a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a>
      </address>
      <address>
        <img src={iconHouse} alt="icon" height="22" /> &nbsp;
        <span>{user.location}</span>
      </address>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string,
    name: PropTypes.string,
    html_url: PropTypes.string
  })
}

export default UserDetail;