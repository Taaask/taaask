import FeatherIcons from 'feather-icons-react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="view header p-top-6 p-bottom-3" 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="header-logo-wrapper">
          <Link to="/" className="header-logo taaask-logo" 
            style={{ 
              fontSize: '24px',
              textDecoration: "none",
              color: 'inherit'
            }}>
              ta<span className="color-purple-900">aa</span>sk
          </Link>
        </div>
        <div className="header-options-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.8em'
          }}
        >
          <button className="primary-btn bg-color-purple-900" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.6em' 
            }}
            >
              <FeatherIcons icon="tag" /> Manage Labels
          </button>
          <button className="outline-btn border-color-purple-900 color-purple-900" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.6em' 
            }}
            onClick={() => window.open('https://www.github.com/DesignSystemsOSS')}
            >
              <FeatherIcons icon="github" /> Support The DesignSystems
          </button>
        </div>
      </div>
  )
}