import { saveUserDetails } from '../../utils/LocalStorage';

const UserDetails__FormInputControlStyle = {
  width: 'fit-content', 
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4em'
}

export default function UserDetails() {
  return (
    <div className="view user-details-form-view">
      <h1 className="color-purple-900 m-top-6" style={{ textAlign: 'center' }}>Hey there, love to see you here :D</h1>
      <div className="user-details-form-container m-x-auto m-top-6 card border-light border-color-purple-300 shadow" 
        style={{ 
          width: 'fit-content', 
          height: 'fit-content',
          display: 'grid',
          gridTemplateColumn: 'auto',
          alignItems: 'flex-start',
          gap: '1.6em'
        }}>
        <div className="form-input-control" style={UserDetails__FormInputControlStyle}>
          <h4 className="neutral-gray-900">Full Name</h4>
          <input type="text" placeholder="Enter your full name" className="full-name__input" id="full-name-input" />
        </div>
        <div className="form-input-control" style={UserDetails__FormInputControlStyle}>
          <h4 className="neutral-gray-900">Username</h4>
          <input type="text" placeholder="Create a username" className="username__input" id="username-input" />
        </div>
        <div className="form-input-control" style={UserDetails__FormInputControlStyle}>
          <h4 className="neutral-gray-900">Create a new workspace name</h4>
          <input type="text" placeholder="New workspace name" className="workspace-name__input" id="workspace-name-input" />
        </div>
        <button className="primary-btn bg-color-purple-900" 
          onClick={() => {
            if (document.getElementById('full-name-input').value === ''
              || document.getElementById('username-input').value === ''
              || document.getElementById('workspace-name-input').value === ''
            ) {
              alert('Your user details are not correct!');
            } else {
              const userDetailsObject = {
                'full_name': document.getElementById('full-name-input').value,
                'username': document.getElementById('username-input').value,
                'workspace_name': document.getElementById('workspace-name-input').value
              };

              if (saveUserDetails(userDetailsObject)) {
                window.location.href = "/";
              } else {
                alert('something is not working with your user details, try again!');
              }
            }
          }}
        >Create workspace</button>
      </div>
    </div>
  )
}