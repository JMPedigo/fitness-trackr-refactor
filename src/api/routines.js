const API = import.meta.env.VITE_API;

/** Fetches an array of routines from the API. */
export async function getRoutines() {
  try {
    const response = await fetch(API + "/routines");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/** Fetches a single routine list item from the API by id */
export async function getRoutine(id) {
  try {
    const response = await fetch(`${API}/routines/${id}`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
