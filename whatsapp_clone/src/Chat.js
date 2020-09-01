import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton, Icon } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase"

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("")
  const [allmessages, setAllMessages] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
        setRoomName(snapshot.data().roomname)
        console.log(roomName)
      }
      );

      // go to rooms collection, inside there, find specific roomId, find collection called messages, order it by timestamp ascending, then take a snapshot, and inside there, for all docs, go through each doc, and set doc.data in grpmessages

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
        setAllMessages(snapshot.docs.map(doc => doc.data()))
      ))

      console.log(allmessages);
    }
  }
    , [roomId])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
      user: user.displayName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log(`You sent ${input}`);
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.random() * 10000);
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>{
            new Date(allmessages[allmessages.length - 1]?.timestamp?.toDate()).toUTCString()
          }</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__window">
        {
          allmessages.map(
            (eachmessage) => (
              <p className={`chat__message ${
                eachmessage.user === user.displayName
                && `chat__receiver`}`}>
                <span className="chat__username">{eachmessage.user}</span>
                {eachmessage.message}
                <span className="chat__timestamp">{new Date(eachmessage.timestamp?.toDate()).toUTCString()}</span>
              </p>
            )
          )
        }
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={sendMessage} />
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
