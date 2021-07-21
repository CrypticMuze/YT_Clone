import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headeline">
          {channel} ·{" "}
          <span className="videoRow__headelineSubs">
            <span className="videoRow__headelineSubsNumber">{subs}</span> subscribers
          </span>{" "}
          {views} views · {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
