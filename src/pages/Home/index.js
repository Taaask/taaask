import RecentlyCreatedChecklists from "./RecentlyCreatedChecklists";

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

export default function Home() {
	return (
		<div className="view home">
			<div className="home-view-top-header-wrapper m-top-2" style={HomeViewTopHeaderWrapperStyle}>
				<h3 className="home-view-title">Home / Dashboard</h3>
				<div className="cta-buttons-wrapper" style={CTAButtonsWrapper}>
					{/* <button className="primary-btn">
						➕ Create a new checklist
					</button>
					<button className="outline-btn">
						Edit Checklists
					</button>
					<input type="text" placeholder="Search checklists, labels, tasks" /> */}
				</div>
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
