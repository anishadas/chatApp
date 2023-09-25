import React, { useContext, useState } from "react";
import upload from "../../img/attach.png";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const storage = getStorage();
  const handleSend = async() => {
    if (img) {
      const storageRef = ref(storage, uuid());
   
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              //use uuid lib
              id: uuid(),
              text,
              senderId: currUser.uid,
              date: Timestamp.now(),
              img:downloadURL
            })
          })
        });
      })
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          //use uuid lib
          id: uuid(),
          text,
          senderId: currUser.uid,
          date:Timestamp.now(),
        })
      })
    }
    await updateDoc(doc(db, 'userChats', currUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("")
    setImg(null)
  }
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter something..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file2"
          onChange={e => setImg(e.target.files[0])} />
        <label htmlFor="file2">
          <img src={upload} alt="upload" />
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};

export default Input;
