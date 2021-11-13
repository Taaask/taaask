import RecentlyCreatedChecklists from "./RecentlyCreatedChecklists";
import { Link } from 'react-router-dom';

// styling objects
const HomeViewTopHeaderWrapperStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between'
};

const CTAButtonsWrapper = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '0.8em'
}

export default function Checklists() {
	return (
		<div className="view checklists">
			<Link to="/">
				<button className="m-top-1 outline-btn">
					<i className="fas fa-arrow-left"></i>
				</button>
			</Link>
			<div className="checklists-view-top-header-wrapper m-top-2" style={HomeViewTopHeaderWrapperStyle}>
				<h3 className="checklists-view-title">Home / Checklists</h3>
			</div>
			{/* recent checklists section */}
			<div className="recent-checklists-section m-top-5">
				<p className="recent-checklists-title neutral-gray-500">Recently created checklists</p>	
				<div className="recent-checklists-wrapper">
					<RecentlyCreatedChecklists />
				</div>
			</div>
		</div>
	)
}
