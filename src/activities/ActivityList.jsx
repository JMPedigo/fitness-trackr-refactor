import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity, syncActivities }) {
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
    <li>
      <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
      {token && <button onClick={tryDeleteActivity}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
