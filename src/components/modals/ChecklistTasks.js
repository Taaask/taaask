import { useState } from "react"

// styling objects
const InputStyle = {
  width: '100%'
}

export default function ChecklistTasks(__ChecklistDetails) {
  const [editChecklistDetailsModeState, setEditChecklistDetailsModeState] = useState('no-edit-mode');
  if (editChecklistDetailsModeState === 'no-edit-mode') {
    return (
      <div className="checklist-tasks-details-container">
        <div className="checklist-tasks-container__header-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1 className="color-purple-900">{__ChecklistDetails.checklist_title}</h1>
          <div className="cta-buttons-wrapper"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1.2em'
            }}
          >
            <button className="outline-btn border-color-purple-900 color-purple-900"
              onClick={() => setEditChecklistDetailsModeState('edit-mode')}
            >Edit Checklist</button>
          </div>
        </div>
        <p className="neutral-gray-500 m-top-2">{__ChecklistDetails.checklist_description}</p>
        <div className="labels-wrapper">{__ChecklistDetails.checklist_labels}</div>
      </div>
    )
  } else if (editChecklistDetailsModeState === 'edit-mode') {
    return (
      <div className="checklist-tasks-edit-mode-container">
        <div className="checklist-tasks-container__header-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1 className="color-purple-900">Edit / {__ChecklistDetails.checklist_title}</h1>
          <div className="cta-buttons-wrapper"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1.2em'
            }}
          >
            <button className="primary-btn bg-color-purple-900"
              onClick={() => {
                setEditChecklistDetailsModeState('no-edit-mode');
              }}
            >Save changes</button>
          </div>
        </div>
        <div className="checklist-details-edit-input-wrapper">
          <div className="edit-checklist-title-input-wrapper m-top-4">
            <p className="neutral-gray-900">Checklist Title</p>
            <input type="text"
              className="m-top-2"
              placeholder="Title of the checklist"
              style={InputStyle}
              defaultValue={__ChecklistDetails.checklist_title} />
          </div>
          <div className="edit-checklist-title-input-wrapper m-top-4">
            <p className="neutral-gray-900">Description</p>
            <input type="text"
              className="m-top-2"
              placeholder="Title of the checklist"
              style={InputStyle}
              defaultValue={__ChecklistDetails.checklist_description} />
          </div>
          <div className="edit-checklist-title-input-wrapper m-top-4">
            <p className="neutral-gray-900">Checklist Labels</p>
            <input type="text"
              className="m-top-2"
              placeholder="Title of the checklist"
              style={InputStyle}
              defaultValue={__ChecklistDetails.checklist_labels_data} />
          </div>
        </div>
      </div>
    )
  }
}