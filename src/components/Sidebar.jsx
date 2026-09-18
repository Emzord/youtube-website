import {
  FiHome,
  FiPlayCircle,
  FiUser,
  FiClock,
  FiList,
  FiThumbsUp,
  FiDownload,
  FiVideo
} from "react-icons/fi";

function Sidebar({ sidebarOpen }) {

  const menuItems = [
    { name: "Home", icon: <FiHome /> },
    { name: "Shorts", icon: <FiPlayCircle /> },
  ];

  const youItems = [
    { name: "Your channel", icon: <FiUser /> },
    { name: "History", icon: <FiClock /> },
    { name: "Playlists", icon: <FiList /> },
    { name: "Watch later", icon: <FiClock /> },
    { name: "Liked videos", icon: <FiThumbsUp /> },
    { name: "Your videos", icon: <FiVideo /> },
    { name: "Downloads", icon: <FiDownload /> },
  ];


  const subscriptions = [
  "DonAza Extra",
  "DonAza",
  "Salvation Ministry",
  "Adamslink Media",
  "Antony Trades",
  "Big Vicki Tv",
  "JJ Simon"
  ];
  

  return (
   <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

      <div className="sidebar-section">
        {menuItems.map((item) => (
          <div
  className={`sidebar-item ${item.name === "Home" ? "active" : ""}`}
  key={item.name}
>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-section">

  <h3>Subscriptions ›</h3>

  {subscriptions.map((channel) => (
    <div className="sidebar-item" key={channel}>

      <div className="subscription-avatar">
        {channel.charAt(0)}
      </div>

      <span>{channel}</span>

    </div>
  ))}

</div>

      <div className="sidebar-section">
        <h3>You</h3>

        {youItems.map((item) => (
          <div className="sidebar-item" key={item.name}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

    </aside>
  );
}

export default Sidebar;