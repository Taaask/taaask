import { Link } from 'react-router-dom';
import { getUserDetails } from '../utils/LocalStorage';

export default function Header() {
  const UserDetails = getUserDetails()[1];
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
      <div className="user-profile-wrapper">
        <Link to="/profile" className="link">
          <button className="user-profile-link-wrapper outline-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4em'
            }}
          >
            <i className="fas fa-user"></i>
            {UserDetails.username}
          </button>
        </Link>
      </div>
    </div>
  )
}