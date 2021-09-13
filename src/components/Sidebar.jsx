import React, {useContext} from "react";
import "./Sidebar.css";
import {MyContext} from "../Context/Context";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoSharpIcon from "@material-ui/icons/OndemandVideoSharp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TheatersIcon from "@material-ui/icons/Theaters";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import BathtubIcon from "@material-ui/icons/Bathtub";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

import Myicon from "./Myicon";
function Sidebar() {
  const {toggler, dark} = useContext(MyContext);
  return (
    
    <div className={`sidebar ${toggler && "toggle"} ${dark && "darked"}`}>
      <Myicon selected Icon={<HomeIcon />} label="Home" />
      <Myicon Icon={<ExploreIcon />} label="Explore" />
      <Myicon Icon={<SubscriptionsIcon />} label="Subscriptions" />
      <hr />
      <Myicon Icon={<VideoLibraryIcon />} label="Library" />
      <Myicon Icon={<HistoryIcon />} label="History" />
      <Myicon Icon={<OndemandVideoSharpIcon />} label="Your videos" />
      <Myicon Icon={<WatchLaterIcon />} label="Watch later" />
      <Myicon Icon={<ThumbUpAltIcon />} label="Liked videos" />
      <Myicon Icon={<ExpandMoreIcon />} label="Show more" />
      <hr />
      <p className="subs">SUBSCRIPTIONS</p>
      <p className="subs detail">No subscribed channel :(</p>
      <hr />
      <p className="subs">MORE FROM YOUUTUBE</p>
      <Myicon Icon={<YouTubeIcon />} label="YouTube Premium" />
      <Myicon Icon={<TheatersIcon />} label="Movies" />
      <Myicon Icon={<SportsEsportsIcon />} label="Gaming" />
      <Myicon Icon={<LiveTvIcon />} label="Live" />
      <Myicon Icon={<BathtubIcon />} label="Fashion & Beauty" />
      <Myicon Icon={<EmojiObjectsIcon />} label="Learning" />
      <Myicon Icon={<SportsBasketballIcon />} label="Sports" />
      <hr />
      <Myicon Icon={<SettingsIcon />} label="Setting" />
      <Myicon Icon={<FlagIcon />} label="Report history" />
      <Myicon Icon={<HelpIcon />} label="Help" />
      <Myicon Icon={<FeedbackIcon />} label="Send feedback" />
      <hr />
      <p className="subs footer">
       <a href="https://www.youtube.com/about/">About</a> <a href="https://blog.youtube/press/">Press</a> <a href="https://www.youtube.com/howyoutubeworks/policies/copyright/">Copyright</a>
        <br />
        <a href="https://www.youtube.com/t/contact_us/">Contact us</a> <a href="https://www.youtube.com/creators/">Creators</a>
        <br />
        <a href="https://www.youtube.com/ads/">Advertise</a> <a href="https://developers.google.com/youtube">Developers</a>
        <br />
        <br />
        <a href="https://www.youtube.com/t/terms">Terms</a> <a href="https://policies.google.com/privacy?hl=en">Privacy</a> <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/">Policy & Safety</a>
        <br />
        <a href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">How YouTube works</a>
        <br />
        <a href="https://www.youtube.com/new">Test new features</a>
        <br />
      </p>
      <p className="subs detail cpy">© 2021 Google LLC</p>
    </div>
  );
}

export default Sidebar;
