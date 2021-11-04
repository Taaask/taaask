import { useState } from "react"
import ReactModal from 'react-modal';

// styling objects
const InputStyle = {
  width: '100%'
}

const CTAButtonsWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.8em'
};

export default function ChecklistTasks(__ChecklistDetails) {
  const [editChecklistDetailsModeState, setEditChecklistDetailsModeState] = useState('no-edit-mode');
  const [discardConfirmationModalState, setDiscardConfirmationModalState] = useState(false);
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
            <button className="outline-btn border-color-purple-900 color-purple-900"
              onClick={() => {
                setDiscardConfirmationModalState(true);
              }}
            >Discard Changes</button>
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
        <ReactModal
          isOpen={discardConfirmationModalState}
          onRequestClose={() => setDiscardConfirmationModalState(false)}
          style={{
            overlay: {
              backgroundColor: 'var(--neutral-gray-500)'
            },
            content: {
              width: 'fit-content',
              height: 'fit-content',
              padding: '1.6em',
              margin: 'auto',
              boxShadow: '0px 6px 20px #00000045'
            }
          }}
        >
          <h2>Are you sure you want to discard/exit?</h2>
          <div className="cta-buttons-wrapper m-top-3"
            style={CTAButtonsWrapper}
          >
            <button className="primary-btn bg-color-purple-900"
              onClick={() => setDiscardConfirmationModalState(false)}
            >No, don't discard the changes</button>
            <button className="outline-btn border-color-purple-900 color-purple-900"
              onClick={() => {
                setDiscardConfirmationModalState(false);
                setEditChecklistDetailsModeState('no-edit-mode');
              }}
            >
              Yes, discard these changes
            </button>
          </div>
        </ReactModal>
      </div>
    )
  }
}