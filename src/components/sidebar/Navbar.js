import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Navbar = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo">
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3481/3481038.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="user-details">
        <img
          src={currUser.photoURL}
          alt="avatar"
        />
        <span>{currUser.displayName}</span>

        <button className="btn" onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
