import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";

const Messages = () => {
  const [msgs, setMsgs] = useState([]);
  const { data } = useContext(ChatContext);
  console.log(data)
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMsgs(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {msgs.map(msg => (
        <Message message={msg} key={msg.id}/>
      ))}
    </div>
  );
};

export default Messages;
