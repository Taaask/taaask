import { getUserDetails } from '../utils/LocalStorage';

function RenderUsername() {
  if (getUserDetails()[1] === undefined) {
    return "user"
  }
  else if (getUserDetails()[1] !== undefined) {
    return getUserDetails()[1].username;
  }
}

function RenderWorkspace() {
  if (getUserDetails()[1] === undefined) {
    return "no-workspace"
  } else if (getUserDetails()[1] !== undefined) {
    return getUserDetails()[1].workspace_name;
  }
}

function RenderFullName() {
  if (getUserDetails()[1] === undefined) {
    return "Full Name Not Found";
  } else if (getUserDetails()[1] !== undefined) {
    return getUserDetails()[1].full_name;
  }
}

export {
  RenderFullName,
  RenderUsername,
  RenderWorkspace
}