import data from "../../data.json";

export function getCurrentUser() {
  if (data.currentUser) {
    return data.currentUser;
  } else {
    return null;
  }
}
