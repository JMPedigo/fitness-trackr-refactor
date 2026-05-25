import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { getActivities } from "../../api/activities";
import { createSet } from "../../api/sets";

/** Form for a user to create a new set within a routine with an activity name and repcount
 * Requires a valid token to create.
 */
export default function SetForm({ routineId, syncRoutine }) {
  const { token } = useAuth();
  const [error, setError] = useState(null);

  const [activities, setActivities] = useState([]);
  /** I need to send a request to the API to gain access to the activity list */
  useEffect(() => {
    const syncActivities = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    syncActivities();
  }, []);
  const tryCreateSet = async (formData) => {
    setError(null);

    const activityId = formData.get("activity");
    const repCount = formData.get("count");
    try {
      await createSet(token, { activityId, routineId, repCount });
      syncRoutine();
    } catch (e) {
      setError(e.message);
    }
  };
  return <div>SetForm</div>;
}
