
import { RenderFullName, RenderUsername, RenderWorkspace } from '../../components/RenderUserData';

export default function Profile() {
  return (
    <div className="view profile">
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
    </div>
  )
}