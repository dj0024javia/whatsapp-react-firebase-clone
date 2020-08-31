import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton, Icon } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(`You sent ${input}`);
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.random() * 10000);
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at ...</p>
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
        <p className={`chat__message ${true && `chat__receiver`}`}>
          <span className="chat__username">DJ</span>
          Hello
          <span className="chat__timestamp">5:55PM</span>
        </p>
        {/* <p className={`chat__message ${true && `chat__receiver`}`}>
          <span className="chat__username">DJ</span>
          2nd msg
          <span className="chat__timestamp">5:55PM</span>
        </p> */}
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
