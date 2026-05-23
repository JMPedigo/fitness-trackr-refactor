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
  return (
    <li>
      <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
      {token && <button onClick={tryDeleteActivity}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
