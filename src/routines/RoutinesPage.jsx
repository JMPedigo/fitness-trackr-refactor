import { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";

import RoutinesList from "./RoutinesList";

export default function RoutinesPage() {
  /**I need to create routines and setRoutines*/
  const [routines, setRoutines] = useState([]);

  const syncRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };

  useEffect(() => {
    syncRoutines();
  }, []);

  return (
    <>
      <hi>Routines</hi>
      <RoutinesList routines={routines} syncRoutines={syncRoutines} />
    </>
  );
}
