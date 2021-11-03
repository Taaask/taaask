
const FullWidthInput = {
  width: '100%'
};

export default function CreateChecklistModalForm() {
  return (
    <div className="create-checklist-modal-form">
      <h3 className="m-bottom-3">Create a new checklist</h3>
      <div className="new-checklist-details-form-wrapper m-top-3">
        <div className="checklist-title-input-wrapper m-bottom-4">
          <p className="neutral-gray-800">Name of the new Checklist <span className="color-red-900">*</span></p>
          <input type="text" 
            placeholder="Eg. School homework, client meetings etc" 
            style={FullWidthInput} 
            className="m-top-2"
            id="checklist-title-input"
          />
        </div>
        <div className="checklist-description-input-wrapper m-bottom-4">
          <p className="neutral-gray-800">Description of the new checklist</p>
          <input type="text" 
            placeholder="eg. School homework, client meetings etc" 
            style={FullWidthInput} 
            className="m-top-2"  
            id="checklist-description-input"
          />
        </div>
        <div className="checklist-labels-input-wrapper">
          <p className="neutral-gray-800">Add labels/tags to your checklist (comma separated)</p>
          <input type="text" 
            placeholder="eg. basics, work, office, finance" 
            style={FullWidthInput}
            className="m-top-2"
            id="checklist-labels-input"
          />
        </div>
      </div>
    </div>
  )
}