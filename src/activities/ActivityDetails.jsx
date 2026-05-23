import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getActivity, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";

/**I need a function to call ActivityDetails
 * and grab id using useParams
 */
export default function ActivityDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity();
  }, [id]);

  const tryDeleteActivity = async () => {
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
      {token && <button onClick={tryDeleteActivity}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </article>
  );
}
