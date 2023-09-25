import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import cam from "../../img/cam.png";
import add from "../../img/add.png";
import more from "../../img/more.png";
import { ChatContext } from "../../context/ChatContext";
const ChatBar = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chatbar">
      <div className="chat-header">
        <span>{data.user?.displayName}</span>
        <div className="icons">
          <img src={cam} alt="cam" />
          <img src={add} alt="add" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default ChatBar;
