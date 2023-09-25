import React, { useContext } from "react";
import SideBar from "../components/sidebar/SideBar";
import ChatBar from "../components/ChatBar/ChatBar";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currUser } = useContext(AuthContext);
  console.log("curr",currUser)
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <ChatBar />
      </div>
    </div>
  );
};

export default Home;
