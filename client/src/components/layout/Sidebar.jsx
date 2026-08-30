import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">

      {/* LOGO */}

      <div className="p-7">

        <div className="flex items-center gap-2">

          <span className="text-3xl">
            🎓
          </span>

          <h1 className="text-2xl font-extrabold text-violet-600">
            Code and Learn
          </h1>

        </div>

        <p className="text-slate-400 text-sm mt-2">
          Learning Management System
        </p>

      </div>


      {/* NAVIGATION */}

      <nav className="flex-1 px-4 mt-5">

        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 font-medium transition ${
            isActive("/dashboard")
              ? "bg-violet-100 text-violet-700"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          🏠
          <span>Dashboard</span>
        </Link>


        <Link
          to="/courses"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 font-medium transition ${
            isActive("/courses")
              ? "bg-violet-100 text-violet-700"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          📚
          <span>Courses</span>
        </Link>


        <Link
          to="/assignments"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 font-medium transition ${
            isActive("/assignments")
              ? "bg-violet-100 text-violet-700"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          📝
          <span>Assignments</span>
        </Link>


        <Link
          to="/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 font-medium transition ${
            isActive("/profile")
              ? "bg-violet-100 text-violet-700"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          👤
          <span>Profile</span>
        </Link>

      </nav>


      {/* BOTTOM */}

      <div className="p-5">

        <Link
          to="/"
          className="block text-center bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition"
        >
          ← Home
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;