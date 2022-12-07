import React from "react";
import "./StoryReel.css";
import Story from "./story/Story";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://sayingimages.com/wp-content/uploads/funny-relationship-facebook-status-memes.jpg'
        profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
        title='Abigael'
      />

      <Story
        image='https://nextnationalday.com/wp-content/uploads/2022/07/girlfriend-day-funny-memes-3.jpg'
        profileSrc='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png'
        title='Caroline'
      />

      <Story
        image='https://i.chzbgr.com/full/8068652032/hDFC2317F/some-girlfriends-are-just-a-burden'
        profileSrc='https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/1/0/e/10e6c0a439e17280a6f3fa6ae059819af5517efd.png'
        title='Rafah'
      />

      <Story
        image='https://media.tenor.com/jQILQzFky6IAAAAM/wow-funny.gif'
        profileSrc=''
        title='Aaron Bernath'
      />

      <Story
        image='https://media.tenor.com/tbAlzAsBICsAAAAC/funny-laughing.gif'
        profileSrc='https://cdnb.artstation.com/p/marketplace/presentation_assets/000/705/407/large/file.jpg?1612184740'
        title='Sam'
      />
    </div>
  );
}

export default StoryReel;
