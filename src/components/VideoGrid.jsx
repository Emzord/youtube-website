import VideoCard from "./VideoCard";

import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import picture5 from "../assets/picture5.jpg";
import picture6 from "../assets/picture6.jpg";

function VideoGrid() {

  const videos = [
    {
      thumbnail: picture1,
      title: "Learning JavaScript",
      channel: "Coding Elf",
      views: "44 views",
      time: "4 months ago",
    },
    {
      thumbnail: picture2,
      title: "ASMR Programming",
      channel: "AsmrProg",
      views: "197K views",
      time: "2y ago",
    },
    {
      thumbnail: picture3,
      title: "Power from Reading Books",
      channel: "Robert Greene",
      views: "915 views",
      time: "1 yr ago",
    },
    {
      thumbnail: picture4,
      title: "Top News Today",
      channel: "Channels Television",
      views: "25K views",
      time: "3 hours ago",
    },
    {
      thumbnail: picture5,
      title: "Where The Internet Lives",
      channel: "Network Chucks",
      views: "18K views",
      time: "1 yr ago",
    },
    {
      thumbnail: picture6,
      title: "Cyber security Engineer",
      channel: "The Social Dork",
      views: "32K views",
      time: "7 hours ago",
    },
  ];

  return (
    <div className="video-grid">

      {videos.map((video) => (
        <VideoCard
          key={video.title}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
        />
      ))}

    </div>
  );
}

export default VideoGrid;