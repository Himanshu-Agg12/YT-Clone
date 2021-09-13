import React, { useContext, useState } from 'react';
import { MyContext } from '../../Context/Context';
import "./Uploadform.css";
import {firestore, storage} from "../../authentication/firebase";
// import firebase from "firebase/app";

function UploadForm() {
    const {dark,user,setupload} = useContext(MyContext);
    const [videoAsFile, setVideoAsFile] = useState('');
    // const [imageAsFile, setImageAsFile] = useState('');
    const [title, setTitle] = useState("");
    const [progress, setProgress] = useState(0);
//This ensure that selected video should be set as videoFile
    function handleVideoFile(e){
        let video = e.target.files[0];
        setVideoAsFile(video);
    }
    // function handleThumbnail(e){
    //     let img = e.target.files[0];
    //     setImageAsFile(img);
    // }

    function handleSubmit(e){
        e.preventDefault();
        // if(imageAsFile==='')
        //     alert("Select a Image of type .png or .jpg to Upload.");
        if(videoAsFile==='')
            alert("Select a Video of type .mp4 to Upload !");
        if(title==='')
            alert("Select a Title for your video to Upload !");
        const uploadTask = storage.ref(`/videoStore/${videoAsFile.name}`).put(videoAsFile); 

        uploadTask.on('state_changed',
        (snapshot) => {
            var transferRate = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            setProgress(transferRate);
        },(err) => {
            console.log(err);
        },() => {
            storage.ref('videoStore').child(videoAsFile.name).getDownloadURL()
            .then(firebaseURL => {
                firestore.collection('videos').add({
                    videoUrl: firebaseURL,
                    Title: title,
                    userName: user.displayName,
                    channelPic: user.photoURL
                })
            })
            setProgress(0);
            setTitle("");
            setVideoAsFile(null);
            setupload(false);

        }
        );
    }
        return (
        <div className={`upload ${dark && "darked"}`}>
        <form onSubmit={handleSubmit}>
           <div class="wrap"> 
                <label>Title </label>
                <input placeholder="Title of video.." 
                    onChange={(event)=>{setTitle(event.target.value)}} 
                    value={title} 
                    type="text"/>
           </div>
           {/* <div class="wrap"> 
                <label>Thumbnail </label>
                <input type="file" 
                accept="image/png, image/jpeg"
                onChange={handleThumbnail} />
           </div> */}
           <div class="wrap"> 
                <label>Video </label>
                <input type="file" 
                accept="video/webm/mp4, video/*"
                onChange={handleVideoFile} />
           </div>
           <div class="wrap">
                <progress value={progress} max="100" />
           </div>
           <div class="wrap">
                <button type="submit">Upload</button>
           </div>
        </form>
        </div>
        
    )
}

export default UploadForm
