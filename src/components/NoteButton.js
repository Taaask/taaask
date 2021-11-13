import { useState } from "react";

// styling objects
const RecentNoteButtonStyle = {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

export default function NoteButton() {
  const [noteModalState, setNoteModalState] = useState(false);
  return (
    <button className="outline-btn recent-checklist-button border-color-white color-purple-900 shadow"
      onClick={() => setNoteModalState(true)}
    >
      
    </button>
  )
}