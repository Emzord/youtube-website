import { FiMoreVertical } from "react-icons/fi";

function VideoCard({ thumbnail, title, channel, views, time }) {
  return (
    <div className="video-card">

      <img
        src={thumbnail}
        alt={title}
        className="video-thumbnail"
      />

      <div className="video-info">

        <div className="channel-avatar">
          {channel.charAt(0)}
        </div>

        <div className="video-details">
          <h3>{title}</h3>
          <p>{channel}</p>
          <p>{views} • {time}</p>
        </div>

        <FiMoreVertical className="video-menu" />

      </div>

    </div>
  );
}

export default VideoCard;