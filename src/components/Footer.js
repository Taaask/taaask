
export default function Footer() {
  return (
    <div className="footer" style={{
      position: 'absolute',
      bottom: '0',
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <span className="m-left-4" style={{ fontSize: '14px' }}>
        Copyrights &copy; {new Date().getFullYear()} / Taaask and it's parent organization 
        <a href="https://www.thedesignsystems.com" className="link" target="_blank">
          The DesignSystems
        </a>
      </span>
    </div>
  )
}