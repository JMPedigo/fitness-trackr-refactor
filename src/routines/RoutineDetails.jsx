import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteRoutine, getRoutine } from "../api/routines";
import { useAuth } from "../auth/AuthContext";

import SetList from "./sets/SetList";

/**I need a function to call RoutineDetails and grab id using useParams */
export default function RoutineDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [routine, setRoutine] = useState(null);
  const [error, setError] = useState(null);

  /**I need to call getRoutine and setRoutine to obtain and change its data */

  const syncRoutine = async () => {
    const data = await getRoutine(id);
    setRoutine(data);
  };
  useEffect(() => {
    syncRoutine();
  }, [id]);

  /**I need to request the API to delete a routine
   * Requires a valid token
   */
  const tryDeleteRoutine = async () => {
    try {
      await deleteRoutine(token, routine.id);
      navigate("/routines");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!routine) return <p>Loading...</p>;
  /**I need to return an element that provides routine name, creator and description */
  return (
    <article>
      <h1>{routine?.name}</h1>
      <p>Created by: {routine?.creatorName}</p>
      <p>{routine?.goal}</p>
      {/* I need a button to delete the routine, requires valid token */}
      {token && <button onClick={tryDeleteRoutine}>Delete</button>}
      {error && <p role="alert">{error}</p>}

      {/** I need a list of sets
       * A delete set button
       * And an add a set form
       * */}
      <SetList sets={routine.sets} syncRoutine={syncRoutine} />
    </article>
  );
}
