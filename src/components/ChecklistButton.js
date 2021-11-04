
// styling objects
const RecentChecklistButtonStyle = {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

export default function ChecklistButton(__ChecklistButtonDataObject) {
  return (
    <button className="outline-btn recent-checklist-button border-color-purple-900 color-purple-900">
      <div className="recent-checklist-button__inner-content p-top-2 p-bottom-2"
        style={RecentChecklistButtonStyle}
      >
        <h3 className="recent-checklist-title">{__ChecklistButtonDataObject.checklist_title}</h3>
        <RenderChecklistDescription 
          checklist_description={__ChecklistButtonDataObject.checklist_description} />
        <RenderChecklistLabels 
          checklist_labels={__ChecklistButtonDataObject.checklist_labels} />
      </div>
    </button>
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
  // removing start/end spaces from the elements

  // rendering labels in the checklist-button
  return (
    <div className="checklist-label-items-wrapper m-top-3" style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      alignItems: 'center',
      gap: '0.4em',
      rowGap: '0.4em'
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