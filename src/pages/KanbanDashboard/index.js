import { Link } from 'react-router-dom';

export default function KanbanDashboard() {
  return (
    <div className="view kan-ban-dashboard">
      <Link to="/">
        <button className="m-top-1 outline-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      
    </div>
  )
}