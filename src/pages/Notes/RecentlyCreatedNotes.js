import { useState } from "react"
import NoteButton from "../../components/NoteButton";
import { getDataFromLocalStorage } from "../../utils/LocalStorage"

// styling objects
const RecentNotesWrapperStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  width: 'fit-content',
  gap: '1.2em',
  alignItems: 'stretch'
};

const CTAButtonsWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.8em'
};


export default function RecentlyCreatedNotes() {
  const [recentNotesData, setRecentNotesData] = useState(getDataFromLocalStorage('notes'));
  const [createNewNoteModalState, setCreateNewNoteModalState] = useState(false);
  return (
    <div className="recently-created-notes">
      <button className="primary-btn bg-color-green-900 m-top-3">
        <div className="create-new-button-inner-content">
          Create a note
        </div>
      </button>
      <div className="recent-notes-wrapper m-top-5">
        
      </div>
    </div>
  )
}

function RenderRecentNotesData(__RecentNotesObject) {
  if (__RecentNotesObject.notesData === null) {
    <h3 className="neutral-gray-400 m-x-auto" style={{ width: 'fit-content' }}>You don't have any recently created notes. Create a new notes now 🚀</h3>
  } else {
    return (
      <div className="recent-notes-container" style={RecentNotesWrapperStyle}>
        {__RecentNotesObject.notesData.map((note_data, index) => (
          <NoteButton 
            key={index}
            note_title={note_data.notes_title}
            note_description={note_data.note_description}
            note_labels={note_data.note_labels}
          />
        ))}
      </div>
    )
  }
}