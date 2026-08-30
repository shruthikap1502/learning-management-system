import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import courses from "../../data/courses";

function Dashboard() {
  const [completedLessons, setCompletedLessons] = useState(0);

  useEffect(() => {
    let totalCompleted = 0;

    // Read completed lessons from all 6 courses
    for (let i = 1; i <= 6; i++) {
      const saved = JSON.parse(localStorage.getItem(`course-${i}`));

      if (saved) {
        totalCompleted += saved.length;
      }
    }

    setCompletedLessons(totalCompleted);
  }, []);

  const totalCourses = courses.length;
  const totalLessons = 30; // 6 courses × 5 lessons
  const totalAssignments = 6;

  const progress = Math.round(
    (completedLessons / totalLessons) * 100
  );

  return (
    <MainLayout>

      {/* Welcome Section */}
      <div className="mb-10">

        <h1 className="text-4xl md:text-5xl font-bold text-violet-950">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Continue your learning journey and build new skills. 🌱
        </p>

      </div>


      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


        {/* Courses */}
        <div className="bg-white rounded-3xl p-6 border border-violet-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-slate-500 font-medium">
                Courses
              </h2>

              <p className="text-4xl font-bold text-violet-700 mt-3">
                {totalCourses}
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
              📚
            </div>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Courses available to learn
          </p>

        </div>


        {/* Assignments */}
        <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-slate-500 font-medium">
                Assignments
              </h2>

              <p className="text-4xl font-bold text-pink-600 mt-3">
                {totalAssignments}
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
              📝
            </div>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Learning activities
          </p>

        </div>


        {/* Completed Lessons */}
        <div className="bg-white rounded-3xl p-6 border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-slate-500 font-medium">
                Completed Lessons
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-3">
                {completedLessons}
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
              ✅
            </div>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Lessons completed
          </p>

        </div>


        {/* Overall Progress */}
        <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-slate-500 font-medium">
                Progress
              </h2>

              <p className="text-4xl font-bold text-amber-500 mt-3">
                {progress}%
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">
              🎯
            </div>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Overall learning progress
          </p>

        </div>

      </div>


      {/* Overall Progress Section */}
      <div className="bg-white rounded-3xl p-8 mt-10 border border-violet-100 shadow-sm">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>

            <h2 className="text-2xl font-bold text-violet-950">
              Overall Progress 📈
            </h2>

            <p className="text-slate-500 mt-2">
              Keep learning and complete your lessons!
            </p>

          </div>

          <div className="bg-violet-100 text-violet-700 px-5 py-2 rounded-full font-semibold">
            {progress}% Complete
          </div>

        </div>


        {/* Progress Bar */}
        <div className="w-full bg-violet-100 rounded-full h-5 overflow-hidden">

          <div
            className="bg-gradient-to-r from-violet-500 to-purple-600 h-5 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          ></div>

        </div>


        <div className="flex justify-between mt-4 text-sm">

          <p className="text-slate-500">
            {completedLessons} of {totalLessons} lessons completed
          </p>

          <p className="font-semibold text-violet-600">
            {totalLessons - completedLessons} remaining
          </p>

        </div>

      </div>


      {/* Learning Message */}
      <div className="mt-10 rounded-3xl p-8 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              Keep Growing! 🌱
            </h2>

            <p className="text-violet-100 mt-2">
              Every lesson brings you one step closer to your goals.
            </p>

          </div>

          <div className="text-6xl">
            🎓
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;
