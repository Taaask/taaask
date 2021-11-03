
function saveChecklistData(dataToStore) {
  if (!dataToStore) return false;

  let localStorageChecklistData;
  if (localStorage.getItem('checklists') === null) {
    localStorageChecklistData = [];
  } else {
    localStorageChecklistData = JSON.parse(localStorage.getItem('checklists'));
  }
  localStorageChecklistData.push(dataToStore);
  localStorage.setItem('checklists', JSON.stringify(localStorageChecklistData));
  return true;
}

function saveChecklistTodoData(dataToStore) {
  if (!dataToStore) return false;

  let localStorageChecklistTodoData;
  if (localStorage.getItem('todos') === null) {
    localStorageChecklistTodoData = [];
  } else {
    localStorageChecklistTodoData = JSON.parse(localStorage.getItem('todos'));
  }
  localStorageChecklistTodoData.push(dataToStore);
  localStorage.setItem('todos', JSON.stringify(localStorageChecklistTodoData));
  return true;
}
function getDataFromLocalStorage(dataLocation) {
  return JSON.parse(localStorage.getItem(dataLocation));
}

export {
  saveChecklistData,
  saveChecklistTodoData,
  getDataFromLocalStorage
}