import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebarchat.css";
import db from "./firebase";
import { Route, Link } from "react-router-dom";

function Sidebarchat({ id, roomname, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [rooms, setRooms] = useState([]);
    const [allmsgs, setAllMsgs] = useState([])

    useEffect(() => {
        setSeed(Math.random() * 10000);
    }, []);

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot =>
                    setAllMsgs(snapshot.docs.map(doc => doc.data())))
        }
    }, [id])

    const createChat = () => {
        const room_name = prompt("Enter New Room Name:");
        if (room_name) {
            console.log(`new room ${room_name} added`);
            db.collection("rooms").add({ roomname: room_name });
        }
    };


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarchat__info">
                    <h2>{roomname}</h2>
                    <p>{allmsgs[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
            <div className="sidebarchat" onClick={createChat}>
                <h2>Add New Chat</h2>
            </div>
        );
}

export default Sidebarchat;
