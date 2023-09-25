import { onSnapshot,doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Firebase";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  // to fetch realtime - onSnapshot
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub();
      }
    }

    currUser.uid && getChats();
  }, [currUser.uid]);

  console.log(chats)

  const handleSelect = (user) => {
    dispatch({ type:"CHANGE_USER",payload:user})
  }
  return (
    <div className="chats">
      {chats && Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map(chat => (
        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
          <img
            src={chat[1].userInfo.photoURL}
            alt="chat"
          />
          <div className="userInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text }</p>
          </div>
        </div>  
      ))}
      
    </div>
  );
};

export default Chats;
