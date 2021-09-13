import React from "react";
import "./Video.css";
import { Avatar } from "@material-ui/core";

function Video(props){
    return (
        <div className="video">
            <video 
                className="thumbnail"
                loop={false}
                controls>
                    <source src={props.vidURL} type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
            </video>
            
            {/* <img className="thumbnail" alt={props.title} src={props.vidURL} /> */}
            <div className="videoInfo">
                <Avatar
                    className="channel-img"
                    alt={props.channelName}
                    src={props.profile}
                />
                <div className="videoText">
                    <h4 className="title">{props.title}</h4>
                    <p className="channel">{props.channelName}</p>
                    <p className="views-time">{props.views} • {props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default Video;