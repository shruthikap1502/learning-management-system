import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Welcome from "../pages/Welcome";
import Dashboard from "../pages/dashboard/dashboard";
import Courses from "../pages/courses/Courses";
import CourseDetails from "../pages/courses/CourseDetails";
import Assignments from "../pages/assignments/assignments";
import Profile from "../pages/profile/profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Welcome Page */}
        <Route
          path="/"
          element={<Welcome />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={<Courses />}
        />

        {/* Individual Course */}
        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />

        {/* Assignments */}
        <Route
          path="/assignments"
          element={<Assignments />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;