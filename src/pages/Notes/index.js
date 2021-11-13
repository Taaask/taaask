import { Link } from 'react-router-dom';

export default function Notes() {
  return (
    <div className="view notes">
      <Link to="/">
        <button className="m-top-1 outline-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
    </div>
  )
}