import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebarchat.css";
import { db } from "./firebase";

function Sidebarchat({ id, roomname, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setSeed(Math.random() * 10000);
  }, []);

  const createChat = () => {
    const roomname = prompt("Enter New Room Name:");
    if (roomname) {
      console.log(`new room ${roomname} added`);
    }
  };

  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchat__info">
        <h2>{roomname}</h2>
        <p>Last Message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarchat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
