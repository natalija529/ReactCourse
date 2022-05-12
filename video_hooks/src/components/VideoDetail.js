import React from "react";

const VideoDetail = ({ video }) => {
  const videoURL = "https://www.youtube.com/embed/";
  if (!video) {
    return <div></div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.snippet.title}
          src={`${videoURL}${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title} </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
