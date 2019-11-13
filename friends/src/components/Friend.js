import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendList from "./FriendList";
import SignupForm from "./SignupForm";
import Header from '../components/Header';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [newGet, setNewGet] = useState();
  const [edit, setEdit] = useState(false);
  const [newFriend, setnewFriend] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    setNewGet(false);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("GET", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, [newGet]);

  return (
      
    <div className="friends">
        <Header/>
        <button onClick={()=> sessionStorage.clear()}>Logout</button>
      <h1>Friends List</h1>
      <FriendList
        friends={friends}
        setNewGet={setNewGet}
        setEdit={setEdit}
        newFriend={newFriend}
        setnewFriend={setnewFriend}
      />
      <SignupForm
        setNewGet={setNewGet}
        newFriend={newFriend}
        setnewFriend={setnewFriend}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
};

export default Friends;