import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
const Message = ({ message }) => {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()
  // console.log(message)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [message]);

  return (
    <div ref={ref}
      className={`message ${message.senderId === currUser.uid && "owner"}`}>
      <div className="msgInfo">
        <img src={message.senderId === currUser.uid ? currUser.photoURL : data.user.photoURL} />
        <span>just now</span>
      </div>
      <div className="msgCont">
        {console.log("hi",message.text)}
        <p>{message.text}</p>
        {message.img && <img
          src={message.img}
          alt="img"
        />
        }
      </div>
    </div>
  );
};

export default Message;
