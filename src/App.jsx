import { Route, Routes } from "react-router";

import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import ActivityDetails from "./activities/ActivityDetails.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */

/** I need to refactor App to use a layout route, and define the appropriate routes.*/
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*I need to set my index element to the ActivitiesPage */}
        <Route index element={<ActivitiesPage />} />
        {/*if (page === "activities") return <ActivitiesPage />;*/}
        <Route path="/activities" element={<ActivitiesPage />} />
        {/* I need to add a Route path for ActivityDetails */}
        <Route path="/activities/:id" element={<ActivityDetails />} />
        {/* if (page === "register") return <Register />;*/}
        <Route path="/register" element={<Register />} />
        {/*if (page === "login") return <Login />;*/}
        <Route path="/login" element={<Login />} />
        {/*return <Error404 />;*/}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
