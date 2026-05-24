import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRoutine } from "../api/routines";

/**I need a function to call RoutineDetails and grab id using useParams */
export default function RoutineDetails() {
  const { id } = useParams();
  const [routine, setRoutine] = useState(null);

  /**I need to call getRoutine and setRoutine to obtain and change its data */
  useEffect(() => {
    const syncRoutine = async () => {
      const data = await getRoutine(id);
      setRoutine(data);
    };
    syncRoutine();
  }, [id]);

  /**I need to return an element that provides routine name, creator and description */
  return (
    <article>
      <h1>{routine?.name}</h1>
      <p>Created by: {routine?.creatorName}</p>
      <p>{routine?.goal}</p>
    </article>
  );
}
