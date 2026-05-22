import { useState, useEffect } from "react";
import { useParams } from "react-router";

/**I need a function to call ActivitiyDetails
 * and grab id using useParams
 */
export default function ActivityDetails() {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();
  return <div>Activity Details</div>;
}
