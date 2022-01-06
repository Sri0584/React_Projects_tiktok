import React, { useState } from "react";
import FavoriteIcon from "./icons/FavouriteIcon";
import FavouriteBorderedIcon from "./icons/FavouriteBordered";
import MessageIcon from "./icons/Message";
import ShareIcon from "./icons/Share";
import "./FooterRight.css";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="footer-right">
      <div className="sidebar-icon">
        {liked ? (
          <FavoriteIcon
            style={{ width: "40px", height: "40px" }}
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavouriteBorderedIcon
            style={{ width: "40px", height: "40px" }}
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="sidebar-icon">
        <MessageIcon style={{ width: "40px", height: "40px" }} />
        <p>{messages}</p>
      </div>
      <div className="sidebar-icon record-below">
        <ShareIcon style={{ width: "40px", height: "40px" }} />
        <p>{shares}</p>
      </div>
      <div className="sidebar-icon record">
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="discImage"
        />
      </div>
    </div>
  );
}

export default VideoSidebar;
