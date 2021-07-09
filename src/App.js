import "./App.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserDetail from './Components/UserDetail';
import UsersList from './Components/UsersList';
import Spinner from './Components/Spinner';
import { fetchUserById, fetchUsers } from './Redux/reducers';

function App() {
  const users = useSelector((state) => state.user.list);
  const userDetail = useSelector((state) => state.user.current);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  //const [users, setUsers] = useState(userList);
  //const [userDetail, setUserDetail] = useState({});

  const handleUserDetail = (id) => {
    //setUserDetail(userData);
    dispatch(fetchUserById(id));
  }

  useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container-sm">
      <div className="row">
        <header className="col header">
          <h1>Users</h1>
        </header>
      </div>
      <div className="row">
        <div className="col">
          <UsersList users={users} onClick={handleUserDetail} />
        </div>
        <div className="col">
          {loading && <Spinner />}
          {userDetail.id && <UserDetail user={userDetail} />}
        </div>
      </div>
    </div>
  );
}

export default App;
