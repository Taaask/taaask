
import { RenderFullName, RenderUsername, RenderWorkspace } from '../../components/RenderUserData';
import { getDataFromLocalStorage } from '../../utils/LocalStorage';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="view profile">
      <Link to="/">
        <button className="m-top-1 m-bottom-2 outline-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <h2>Your Profile</h2>
      <div className="user-details-wrapper card border-neutral-gray-200 m-top-3"
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around'
        }}
      >
        <div className="input-control">
          <h3 className="m-bottom-2">Full Name</h3>
          <input type="text" placeholder="Your Full Name" defaultValue={RenderFullName()} />
        </div>
        <div className="input-control">
          <h3 className="m-bottom-2">Username</h3>
          <input type="text" placeholder="Your username" defaultValue={RenderUsername()} />
        </div>
        <div className="input-control">
          <h3 className="m-bottom-2">Workspace Name</h3>
          <input type="text" placeholder="Your workspace name" defaultValue={RenderWorkspace()} />
        </div>
      </div> 
      <button className="outline-btn color-purple-900 border-color-purple-900 m-top-3">Edit your user details</button>
      <div className="user-statistics-section m-top-5">
        <h2>Your Statistics</h2>
        <div className="user-statistics-wrapper m-top-2" 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '0.6em'
          }}
        >
          <div className="user-statistics-checklists card border-neutral-gray-200" style={{ width: 'fit-content' }}>
            <h4 className="neutral-gray-800">Number of checklists in use</h4>
            <h1 className="color-purple-900">{getDataFromLocalStorage('checklists').length}</h1>
          </div>
          <div className="user-statistics-checklists card border-neutral-gray-200" style={{ width: 'fit-content' }}>
            <h4 className="neutral-gray-800">Number of checklists in use</h4>
            <h3 className="neutral-gray-400">feature under development ⚙️</h3>
          </div>
          <div className="user-statistics-checklists card border-neutral-gray-200" style={{ width: 'fit-content' }}>
            <h4 className="neutral-gray-800">Number of checklists in use</h4>
            <h3 className="neutral-gray-400">feature under development ⚙️</h3>
          </div>
        </div>
      </div>
    </div>
  )
}