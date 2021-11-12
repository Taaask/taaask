import { Link } from "react-router-dom";
import { useState } from "react";
import { getUserDetails } from "../../utils/LocalStorage";

const ContentOptionsData = [
  {
    "title": "Notes",
    "emoji": "🗒️",
    "color": "bg-color-green-900",
    "path": "/notes"
  },
  {
    "title": "Checklists",
    'emoji': "✅",
    "color": "bg-color-blue-900",
    "path": "/checklists"
  },
  {
    "title": "Kab-ban Boards",
    "emoji": "🔥",
    "color": "bg-color-purple-900",
    "path": "/kan-bans"
  }
]

export default function Home() {
  const UserDetails = getUserDetails()[1];
  const [contentOptionsData] = useState(ContentOptionsData);
  return (
    <div className="view home">
      <div className="home-title-wrapper m-top-4">
        <h1 className="font-sans">
          Welcome <span className="color-purple-900">{UserDetails.username}</span>, 
          <br />Hope you're doing good today!</h1>
      </div>
      <div className="content-options-wrapper m-top-6">
        <h4 className="neutral-gray-800">Your Notes, Checklists, or Kan-ban Boards</h4>
        <div className="content-category-section-wrapper m-top-4" 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1em'
          }}
        >
          {contentOptionsData.map((option, index) => (
            <Link to={option.path} key={index} className="link">
              <div className={option.color + ' primary-btn shadow-high'}>
                {option.title} {option.emoji}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="recently-used-content-wrapper m-top-8">
        <h4 className="neutral-gray-800">Recently created stuff</h4>
        <div className="recent-content-list">

        </div>
      </div>
    </div>
  )
}