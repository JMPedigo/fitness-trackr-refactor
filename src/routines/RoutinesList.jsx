import { Link } from "react-router";

/** I need to map routines into an unordered list, with a list item that returns a routine */
export default function RoutinesList({ routines }) {
  return (
    <ul>
      {routines.map((routine) => (
        <RoutineListItem key={routine.id} routine={routine} />
      ))}
    </ul>
  );
}

/** I need a routine list item that creates a link to the specified routine */
function RoutineListItem({ routine }) {
  return (
    <li>
      <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
    </li>
  );
}
