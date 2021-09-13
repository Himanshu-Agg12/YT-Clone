import React, {useState, useEffect, useContext} from "react";
import {MyContext} from "../Context/Context";
import "./Content.css";
import Video from "./Video";
import {firestore} from "../authentication/firebase";

function Content() {
  const {dark, toggler} = useContext(MyContext);
  const [videos, setVideos] = useState([]);
  //video now is in videos array in collection videos
  useEffect(() => {
    firestore.collection('videos').onSnapshot(snapshot =>{
      setVideos(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data()
      })
      ));
    })
  }, []);


  return (
    <div className={`content content-vids ${dark && "darked"} ${!toggler && "toggler"}`}>
    {
      videos.map(({id, data}) => (
            <Video
              key= {id}
              vidURL={data.videoUrl}
              // thumbnailURL={data.}
              profile={data.channelPic}  //vid.profilePic from database after uploading
              title={data.Title}
              channelName={data.userName}  //user.displayName from header using context API
              views="10M Views"
              time="1 day"
            />
          ))
      }
      
    </div>
    );
  }
export default Content;
