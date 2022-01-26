import {TimelineLite} from "gsap";
import { useState, useEffect } from "react";

const VideoContainer = ({data}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const tl = new TimelineLite({delay: 0.3});

  useEffect(() => {
    if(isPlaying) {
      tl.fromTo('#mainVideoName', {y : 0, opacity: 1}, {y: -20, opacity: 0})
    } else {
      tl.fromTo('#mainVideoName', {y : -20, opacity: 0}, {y: 0, opacity: 1})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, data]);

  return (
    <div className="relative w-full h-full">
        <video 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className='min-w-full min-h-full w-auto h-auto bg-cover'
        controls
        src={data.videoSrc}></video>
        <div className="absolute top-0 left-0 z-10 w-full h-[60px] py-4 px-3 bg-gradient-to-b from-black to-transparent">
            <h2 id="mainVideoName" className='text-textColor font-semibold'>{data.name}</h2>
        </div>
    </div>
  )
};

export default VideoContainer;
