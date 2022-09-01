import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import News from "./News";
import Message from "./Message";
class Nested extends Component {
  render() {
    console.log(News);
    console.log(Message);
    return (
      <div>
        <a href="https://www.bilibili.com/video/BV1wy4y1D7JT?is_story_h5=false&p=1&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=9C39DA01-8C07-48FF-8595-93B3829A506F&share_source=WEIXIN&share_tag=s_i&timestamp=1662028997&unique_k=Ot67fIS">react视频教程</a>
      </div>
    );
  }
}

export default Nested;
