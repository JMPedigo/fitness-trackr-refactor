import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getActivity, deleteActivity } from "../api/activities";

/**I need a function to call ActivityDetails
 * and grab id using useParams
 */
export default function ActivityDetails() {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity();
  }, [id]);

  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryDeleteActivity = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <article>
      <h1>{activity?.name}</h1>
      <p>Created by: {activity?.creatorName}</p>
      <p>{activity?.description}</p>
    </article>
  );
}
