import { useState } from "react";
import ReactModal from 'react-modal';
import CreateChecklistModalForm from '../../components/modals/CreateChecklistModalForm';
import { getDataFromLocalStorage, saveChecklistData } from "../../utils/LocalStorage";

// styling objects
const RecentChecklistsWrapperStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto',
  width: 'fit-content',
  gap: '1.2em',
  alignItems: 'stretch'
};

const RecentChecklistButtonStyle = {
  width: '180px'
}

const CTAButtonsWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.8em'
}

ReactModal.setAppElement('#root');
export default function RecentlyCreatedChecklists() {
  const [recentChecklistData, setRecentChecklistData] = useState(getDataFromLocalStorage('checklists'));
  const [createNewChecklistModalState, setCreateNewChecklistModalState] = useState(false);
  return (
    <div className="recently-created-checklists-container">
      {/* recently created checklists */}
      <div className="recent-checklists-wrapper m-top-5">
        <RenderRecentChecklistsData checklistData={recentChecklistData} />
        {/* create new checklist button */}
        <button className="primary-btn bg-color-purple-900 m-top-3"
          onClick={() => setCreateNewChecklistModalState(true)}
        >
          <div className="create-new-button-inner-content">
            ➕ New Checklist
          </div>
        </button>
      </div>
      <ReactModal
        isOpen={createNewChecklistModalState}
        onRequestClose={() => setCreateNewChecklistModalState(false)}
        style={{
          overlay: {
            backgroundColor: 'var(--color-purple-700)'
          },
          content: {
            width: '60%',
            height: 'fit-content',
            padding: '1.6em',
            margin: 'auto',
            boxShadow: '0px 6px 20px #00000045'
          }
        }}
      >
        <CreateChecklistModalForm />
        <div className="cta-button-wrapper create-new-checklist-modal-button-wrapper m-top-4"
          style={CTAButtonsWrapper}
        >
          <button className="primary-btn bg-color-purple-900" 
            onClick={() => {
              // fetching values and storing to local-storage
              let checklistTitle = document.getElementById('checklist-title-input').value;
              let checklistDescription = document.getElementById('checklist-description-input').value;
              let checklistLabels = document.getElementById('checklist-labels-input').value;

              if (!checklistTitle) { alert('The checklist title is important. Do try again!') }
              else {
                const newChecklistObject = {
                  'checklist_title': checklistTitle,
                  'checklist_description': checklistDescription,
                  'checklist_labels': checklistLabels
                };
                if (saveChecklistData(newChecklistObject, 'checklists')) {
                  setRecentChecklistData(getDataFromLocalStorage('checklists'));
                  setCreateNewChecklistModalState(false);
                } else {
                  alert(`some error occurred while create the checklist
                         ChecklistTitle=${checklistTitle} (isSaved=false)`); 
                }
              }
            }}
          >
            Create checklist
          </button>
          <button className="outline-btn outline-btn__danger"
            onClick={() => setCreateNewChecklistModalState(false)}
          >
            Discard
          </button>
        </div>
      </ReactModal>
    </div>
  )
}

// function renderRecentChecklists(recentChecklistsDataObject) {
//   if (!recentChecklistsDataObject) {
//     return (
//       <h3 className="neutral-gray-400">You don't have any recently created checklist. Create a new checklist now 🚀</h3>
//     )
//   } else {
//     recentChecklistsDataObject.map((checklist_data, index) => {
//       console.log(checklist_data);
//       return (
//         <button className="outline-btn recent-checklist-button border-color-purple-900 color-purple-900"
//           key={index}
//           style={RecentChecklistButtonStyle}
//         >
//           <div className="recent-checklist-button__inner-content p-top-2 p-bottom-2">
//             <span className="recent-checklist-title">{checklist_data.checklist_title}</span>
//           </div>
//         </button>
//       )
//     })
//   }
// }

function RenderRecentChecklistsData(__RecentChecklistsObject) {
  console.log(__RecentChecklistsObject.checklistData)
  if (__RecentChecklistsObject.checklistData === null) {
    return (
      <h3 className="neutral-gray-400">You don't have any recently created checklist. Create a new checklist now 🚀</h3>
    )
  } else {
    return (
      <div className="recent-checklists-container" style={RecentChecklistsWrapperStyle}>
        {__RecentChecklistsObject.checklistData.map((checklist_data, index) => {
          return (
            <button className="outline-btn recent-checklist-button border-color-purple-900 color-purple-900"
              key={index}
              style={RecentChecklistButtonStyle}
            >
              <div className="recent-checklist-button__inner-content p-top-2 p-bottom-2">
                <span className="recent-checklist-title">{checklist_data.checklist_title}</span>
              </div>
            </button>
          )
        })}
      </div>
    )
  }
}