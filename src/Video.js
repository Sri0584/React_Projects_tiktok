import React, { useRef } from "react";
import Footer from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./Video.css";

export default function Video(props) {
  const { url, channel, description, song, likes, shares, messages } = props;
  const videoRef = useRef(null);
  const prevScrollY = useRef(0);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const pauseVideo = (e) => {
    const currentScrollY = e.target.scrollTop;
    console.log(currentScrollY);
    if (prevScrollY.current < currentScrollY) {
      console.log(currentScrollY);
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
    prevScrollY.current = currentScrollY;
  };
  return (
    <div className="video">
      <video
        className="player"
        onClick={onVideoPress}
        onScroll={pauseVideo}
        muted
        ref={videoRef}
        loop
        src={url}
      ></video>
      <div className="bottom-controls">
        <Footer channel={channel} description={description} song={song} />
        <FooterRight likes={likes} shares={shares} messages={messages} />
      </div>
    </div>
  );
}
