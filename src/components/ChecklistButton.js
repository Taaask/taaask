import { useState } from "react";
import ReactModal from 'react-modal';
import ChecklistTasks from "./modals/ChecklistTasks";

// styling objects
const RecentChecklistButtonStyle = {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

export default function ChecklistButton(__ChecklistButtonDataObject) {
  const [checklistTaskModalState, setChecklistTaskModalState] = useState(false);

  return (
    <div>
      <div className="recent-checklist-button__inner-content p-top-2 p-bottom-2"
        style={RecentChecklistButtonStyle}
      >
        <h3 className="recent-checklist-title">{__ChecklistButtonDataObject.checklist_title}</h3>
        <RenderChecklistDescription 
          checklist_description={__ChecklistButtonDataObject.checklist_description} />
        <RenderChecklistLabels 
          checklist_labels={__ChecklistButtonDataObject.checklist_labels} />
      </div>
      <button className="outline-btn recent-checklist-button border-color-white color-purple-900 shadow"
      onClick={() => setChecklistTaskModalState(true)}
    >Open</button>
      <ReactModal
        isOpen={checklistTaskModalState}
        onRequestClose={() => setChecklistTaskModalState(false)}
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
        <ChecklistTasks 
          checklist_key={__ChecklistButtonDataObject.key}
          checklist_title={__ChecklistButtonDataObject.checklist_title}
          checklist_description={__ChecklistButtonDataObject.checklist_description}
          checklist_labels={<RenderChecklistLabels checklist_labels={__ChecklistButtonDataObject.checklist_labels} />}
          checklist_labels_data={__ChecklistButtonDataObject.checklist_labels}
        />
        <button className="text-btn text-btn__danger m-top-3"
          onClick={() => setChecklistTaskModalState(false)}
        >
          Back
        </button>
      </ReactModal>
    </div>
  )
}

function RenderChecklistDescription({checklist_description}) {
  if (!!checklist_description) {
    return (
      <p className="neutral-gray-500 m-top-2">{checklist_description}</p>
    )
  } else {
    return (
      <p className="neutral-gray-500 m-top-2">No description found</p>
    )
  }
}

function RenderChecklistLabels({checklist_labels}) {
  if (!checklist_labels) {
    return (
      <p className="color-green-800 m-top-2">NO LABELS ADDED</p>
    )
  } 
  // if labels string is present - rendering labels logic
  // operation 01 - modifying string input keep it consistent
  // changing all the (, ) to (,)
  let checklistLabelsArray =  checklist_labels.split(',');

  // rendering labels in the checklist-button
  return (
    <div className="checklist-label-items-wrapper m-top-3" style={{
      display: 'grid',
      flexDirection: 'row',
      gridTemplateColumns: 'auto auto auto auto auto',
      alignItems: 'center',
      gap: '0.4em',
      rowGap: '0.4em',
      width: 'fit-content'
    }}
      >
        {checklistLabelsArray.map((checklist_label_item, index) => (
          <div
            key={index}
            className="bg-color-green-900 text-color-white"
              style={{
                paddingTop: '4px',
                paddingBottom: '4px',
                paddingRight: '6px',
                paddingLeft: '6px',
                borderRadius: '8px'
              }}
            >
              {checklist_label_item}
          </div>
        ))}
    </div>
  )
  
}