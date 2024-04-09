"use client"
import VideoJs from "video.js";
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';

import {
  useRef,
  useEffect
} from "react";

export default function Index() {
  const videoRef:any = useRef(null);
  const player:any = useRef(null);
  const options = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: '/demo.mp4',
        type: 'video/mp4'
      }
    ],
    fluid: true,
    playbackRates: [0.5,1,1.5,2,2.5]
  }

  useEffect(() => {
    // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
    const videoElement = document.createElement("video-js");
    videoElement.classList.add('video-js');
    videoElement.classList.add('vjs-big-play-centered');
    videoElement.classList.add('vjs-theme-fantasy');
    videoRef.current.appendChild(videoElement);
    console.log(options)
    player.current = VideoJs(videoElement,options);
    return ()=>{
      player.current.dispose();
      player.current = null;
    }
  }, []);

  const update = ()=>{
    player.current.src({
      src: '/test.mp4',
      type: 'video/mp4'
    });
  }

  const uploadAndPlay = (e:any)=>{
    const input = e.target;
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    player.current.src({
      src: url,
      type: file.type
    });
  }

  const design = (
    <>
     <div data-vjs-player className="w-9/12">
      <div ref={videoRef} />
    </div>
    </>
  );
  return design;
}
