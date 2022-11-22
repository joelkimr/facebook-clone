import React from "react";
import MessageSender from "../../messageSender/MessageSender";
import StoryReel from "../../StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;
