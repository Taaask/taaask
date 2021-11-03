import FeatherIcons from 'feather-icons-react';

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
        <a href="/" className="header-logo taaask-logo" 
          style={{ 
            fontSize: '24px',
            textDecoration: "none",
            color: 'inherit'
          }}>
            ta<span className="color-purple-900">aa</span>sk
        </a>
      </div>
      <div className="header-options-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.8em'
        }}
      >
        <button className="primary-btn bg-color-purple-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6em' }}>
          <FeatherIcons icon="tag" />
          Manage Labels
        </button>
        <button className="outline-btn border-color-purple-900 color-purple-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6em' }}>
          <FeatherIcons icon="github" /> Support The DesignSystems
        </button>
      </div>
    </div>
  )
}