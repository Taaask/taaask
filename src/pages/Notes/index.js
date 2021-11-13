import { Link } from 'react-router-dom';
import RecentlyCreatedNotes from './RecentlyCreatedNotes';

export default function Notes() {
  return (
    <div className="view notes">
      <Link to="/">
        <button className="m-top-1 outline-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <h3 className="neutral-gray-900 m-top-2">Home / Notes</h3>
      {/* recent notes section */}
      <div className="recent-notes-section m-top-5">
        <p className="recent-notes-section-title neutral-gray-500">
          All of your created Notes
        </p>
        <div className="recent-notes-wrapper">
          <RecentlyCreatedNotes />
        </div>
      </div>
    </div>
  )
}