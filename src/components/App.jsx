import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {MyContext} from "../Context/Context";

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  }
  const [toggler, settoggler] = useState(true);
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(getMode());
  const [upload, setupload] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={`App ${dark && "darked"}`}>
    <MyContext.Provider value={{toggler, settoggler, user, setUser, dark, setDark, upload, setupload}}>
      <Header />
      <div className={`mainpage ${dark && "darked"}`}>
        <div className="side"><Sidebar /></div>
        <div className="content"><Content /></div>
      </div>
      {/* <Modal
      open={upload}
      onClose={()=>{setupload(!upload)}}>
      <div className="myModal">
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
      </Modal> */}
    </MyContext.Provider>
    </div>
  );
}

export default App;
