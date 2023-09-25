import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { AuthContext } from '../../context/AuthContext';

const Search = () => {
  const [searchUser, setSearchUser] = useState("");
  const [resultUser, setResultUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currUser } = useContext(AuthContext);
  const handleSearch = async () => {

    const usersRef = collection(db, "users");

    const q = query(usersRef, where("displayName", "==", searchUser));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        setResultUser(doc.data())
      });
    } catch (err) {
      console.log(err)
      setErr(true);
    }
  }

  const handleSelect = async () => {
    console.log("1",resultUser)
    //check whether group exists or not else create new one
    const comboId = currUser.uid > resultUser.uid ? currUser.uid + resultUser.uid : resultUser.uid + currUser.uid;
    console.log("2",comboId)
    try {
      const res = await getDoc(doc(db, 'chats', comboId));
      //exists()- firebase method
      console.log("3",res)
      if (!res.exists()) {
        //create a chart in charts collection
        await setDoc(doc(db, 'chats', comboId), { messages: [] })
        console.log("4")
        //create user charts
        await updateDoc(doc(db, "userChats", resultUser.uid), {
          [comboId + ".userInfo"]: {
            uid: currUser.uid,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL
          },
          [comboId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", currUser.uid), {
          [comboId + ".userInfo"]: {
            uid: resultUser.uid,
            displayName: resultUser.displayName,
            photoURL: resultUser.photoURL
          },
          [comboId + ".date"]: serverTimestamp()
        });
        console.log("5")
      }
    } catch (err) {
      
    }
    
    setResultUser(null);
    setSearchUser("")

  }
  return (
    <div className="search">
      <div className="search-form">
        <input type="text"
          placeholder="Find a user"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3077/3077325.png"
            alt="search"
          />
        </button>
      </div>
      {err && <span>user not found</span>}
      {resultUser &&
        <div className="userChat" onClick={handleSelect}>
          <img
            src={resultUser.photoURL}
            alt="chat"
          />
          <div className="userInfo">{resultUser.displayName}</div>
        </div>
      }
    </div>
  )
};

export default Search;
