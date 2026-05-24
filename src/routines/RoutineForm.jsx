import { useAuth } from "../auth/AuthContext";
import { createRoutine } from "../api/routines";
import { useState } from "react";
/** I need a form that allows a user to create a new routine with a name and goal.
 * Requires a valid token.*/
export default function RoutineForm({ syncRoutines }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryCreateRoutine = async (formData) => {
    setError(null);

    const name = formData.get("name");
    const goal = formData.get("goal");

    try {
      await createRoutine(token, { name, goal });
      syncRoutines();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Add a new routine</h2>
      <form action={tryCreateRoutine}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Goal
          <input type="text" name="goal" />
        </label>
        <button>Add routine</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
