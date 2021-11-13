import { Link } from "react-router-dom";
import { useState } from "react";
import { RenderUsername, RenderWorkspace } from '../../components/RenderUserData';

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
  const [contentOptionsData] = useState(ContentOptionsData);
  return (
    <div className="view home">
      <div className="home-header-container" 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
      <div className="main-header-content">
        <div className="home-title-wrapper m-top-4">
          <h1 className="font-sans">
            Welcome <span className="color-purple-900"><RenderUsername /></span>, 
            <br />Hope you're doing good today!</h1>
            <p className="neutral-gray-700 m-top-2">Currently in <b className="color-green-900"><RenderWorkspace /></b></p>
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
                  <div className={option.color + ' primary-btn shadow-medium'}>
                    {option.title} {option.emoji}
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </div>
        <div className="time-container-wrapper shadow p-4 border-color-purple-400 border" style={{
          marginRight: '10%'
        }}>
          <h3>Current time in your zone is</h3>
          <h1 className="color-purple-900" style={{ fontSize: '92px' }}>
            {new Date().getHours()}:{new Date().getMinutes()}
          </h1>
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