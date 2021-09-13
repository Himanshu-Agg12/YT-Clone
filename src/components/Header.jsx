import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import {MyContext} from "../Context/Context";
import UploadForm from "./upload/UploadForm"
import { auth, SignInWithGoogle } from "../authentication/firebase";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {Modal} from "@material-ui/core"


function Header() {
  const {toggler, settoggler} = useContext(MyContext);
  const {user, setUser} = useContext(MyContext);
  const {dark, setDark} = useContext(MyContext);
  const {upload, setupload} = useContext(MyContext);

  const [appear,setAppear] = useState(false);
  

  function signIn() {    //Handling Sign in process
    SignInWithGoogle();
    setUser(null);
  }

  useEffect(() => {     //On authorization setting user to loged in user
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user] );

  function handleProfile() {   //Handling appeaar for logout div
    setAppear(!appear);
  }
  function handleToggler(){    //handling toggle of yt-menu(3-dashed line)
    settoggler(!toggler);
  }
  
  function handleUploadForm(){
    setupload(!upload);
  }

  return (
    <div className={`header ${dark && "darked"}`}>
    <Modal 
      open={upload}
      onClose={()=>{setupload(!upload)}}>
      <div className={`myModal ${dark && "darked"}`}>
      <div onClick={()=>{setupload(!upload)}} style={{float :"right", cursor:"pointer"}}>❌</div><br/>
        <h2 id="modalHead">  Upload a Video</h2>
        <p id="modalPara">
          Enter all the required details...
        </p>
        <UploadForm/>
      </div>
    </Modal>
      <div className="left-icons">
        <div onClick={handleToggler}><MenuIcon className={`ytMenu ${toggler && "toggler"} ${dark &&"darked"}`} /></div>
        <div className="ytBrand">
          <YouTubeIcon className="ytLogo" />
          <span>
            YouTube<sup>IN</sup>
          </span>
        </div>
      </div>
      <div className="middle-icons">
        <input placeholder="Search"></input>
        <button>
          <SearchIcon className="search" />
        </button>
      </div>
      <div className="right-icons">
        {user !== null ? (
          <>
          <div onClick={handleUploadForm} className={`${dark &&"darked"}`}>
            <VideoCallIcon style={{cursor: "pointer"}} />
          </div>
           {/*onClick render upload form after submiting that form func handleUpload*/}
            <AppsIcon 
              className={`"my-ic" ${dark &&"darked"}`} 
              style={{marginLeft: "10px"}}
            />
            <NotificationsIcon
              className={`"my-ic" ${dark &&"darked"}`} 
              style={{marginLeft: "10px"}}
            />
            <button onClick={() => {handleProfile()}} className="profile">
              <img
                alt={user.displayName}
                src={
                  user.photoURL ||
                  "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
                }
                style={{borderRadius:"50%", height:"32px",width:"32px",float:"right"}}
              />
            </button>
            {appear?
              (
                <div className={`logout-div ${dark && "darked"}`}>
                  <p>Signed in as: 
                  <p className="user">{user.displayName}</p>
                  <p style={{fontWeight: "bold"}}>Email: </p>
                  <p style={{wordWrap:"break-word"}}>{user.email}</p>
                  </p>
                  <p>🌗 Appearance:
                      {/* <input type="checkbox" 
                      checked={dark}
                      style={{float: "right"}}
                      onChange={()=>{setDark(!dark)}} /> */}
                      <label className="switch">
                        <input className="box" type="checkbox" checked={dark}
                        style={{float: "right"}}
                        onChange={()=>{setDark(!dark)}} />
                        <span className="slider"></span>
                      </label>
                  </p>
                    <hr/>
                  <button onClick={()=>{auth.signOut();setAppear(false) }}>Logout</button>
                </div>
              ):
              null
              }
          </>
        ) : (
          <>
            <button onClick={signIn} className={`login ${dark && "darked"}`}>
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
    
  );
}

export default Header;
