/** I need a list of sets,
 * with an activity from the activity list,
 * and a delete set button.
 */
export default function SetList({ sets, syncRoutine }) {
  return (
    <ul>
      {sets.map((set) => (
        <SetListItem key={set.id} set={set} syncRoutine={syncRoutine} />
      ))}
    </ul>
  );
}
