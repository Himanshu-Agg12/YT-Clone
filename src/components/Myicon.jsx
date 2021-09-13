import React, {useContext} from "react";
import { MyContext } from "../Context/Context";
import "./Myicon.css";

function Myicon(props) {
  const {dark} = useContext(MyContext);
  return (
    <div className={`icon ${props.selected && "selected"} ${dark && "darked"} `}>
      <div className="pic">{props.Icon}</div>
      <p>{props.label}</p>
    </div>
  );
}

export default Myicon;
