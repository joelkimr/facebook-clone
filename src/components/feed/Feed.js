import React from "react";
import MessageSender from "../../messageSender/MessageSender";
import Post from "../../post/Post";
import StoryReel from "../../StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https:///'
        message='Make fun out of it!!!'
        timestamp='This is a timestamp'
        username='ccccena'
        image='https://code.org/shared/images/social-media/codeorg2019_social.png'
      />
    </div>
  );
}

export default Feed;
