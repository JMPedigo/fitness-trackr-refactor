import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { deleteSet } from "../../api/sets";

/** I need a list of sets,
 * with an activity from the activity list,
 * and a delete set button.
 * Need a conditional ternary to display a list of sets, or a message if there are none.
 */
export default function SetList({ sets, syncRoutine }) {
  return (
    <>
      <h3>Sets</h3>
      {sets.length > 0 ? (
        <ul>
          {sets.map((set) => (
            <SetListItem key={set.id} set={set} syncRoutine={syncRoutine} />
          ))}
        </ul>
      ) : (
        <p>This routine does not have any sets. Add one?</p>
      )}
    </>
  );
}
/** I need a list item that contains an activity name * count
 * and a delete set button
 * that requires a valid token.
 */
function SetListItem({ set, syncRoutine }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryDeleteSet = async () => {
    setError(null);

    try {
      await deleteSet(token, set.id);
      syncRoutine();
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <li>
      <p>
        {set.name} x {set.count}
      </p>
      {token && <button onClick={tryDeleteSet}>Delete set</button>}
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
