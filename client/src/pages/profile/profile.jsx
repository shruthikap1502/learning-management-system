import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import courses from "../../data/courses";

function Profile() {
  const [completedLessons, setCompletedLessons] = useState(0);

  // Calculate completed lessons from all courses
  useEffect(() => {
    let totalCompleted = 0;

    for (let i = 1; i <= courses.length; i++) {
      const saved = JSON.parse(
        localStorage.getItem(`course-${i}`) || "[]"
      );

      totalCompleted += saved.length;
    }

    setCompletedLessons(totalCompleted);
  }, []);

  // Your courses have 6 lessons each
  const totalLessons = courses.length * 6;

  const progress =
    totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0;

  return (
    <MainLayout>

      {/* PAGE HEADER */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          My Profile 👤
        </h1>

        <p className="text-slate-500 mt-2">
          View your learning progress and course activity.
        </p>

      </div>


      {/* PROFILE CARD */}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* PROFILE ICON */}

          <div className="w-28 h-28 rounded-full bg-violet-100 flex items-center justify-center text-6xl">
            👩‍💻
          </div>


          {/* STUDENT INFORMATION */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold text-slate-900">
              Student
            </h2>

            <p className="text-slate-500 mt-1">
              BSc.IT Student
            </p>

            <p className="text-slate-400 text-sm mt-2">
              Learning Management System
            </p>

          </div>

        </div>

      </div>


      {/* LEARNING STATISTICS */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {/* COURSES */}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <div className="text-3xl">
            📚
          </div>

          <p className="text-slate-500 mt-4">
            Total Courses
          </p>

          <p className="text-4xl font-bold text-violet-600 mt-2">
            {courses.length}
          </p>

        </div>


        {/* COMPLETED */}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <div className="text-3xl">
            ✅
          </div>

          <p className="text-slate-500 mt-4">
            Completed Lessons
          </p>

          <p className="text-4xl font-bold text-green-500 mt-2">
            {completedLessons}
          </p>

        </div>


        {/* PROGRESS */}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

          <div className="text-3xl">
            📊
          </div>

          <p className="text-slate-500 mt-4">
            Overall Progress
          </p>

          <p className="text-4xl font-bold text-yellow-500 mt-2">
            {progress}%
          </p>

        </div>

      </div>


      {/* OVERALL PROGRESS */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mt-8">

        <div className="flex justify-between items-center mb-4">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Learning Progress
            </h2>

            <p className="text-slate-500 mt-1">
              Keep learning and complete your lessons! 🚀
            </p>

          </div>

          <span className="text-2xl font-bold text-violet-600">
            {progress}%
          </span>

        </div>


        {/* PROGRESS BAR */}

        <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">

          <div
            className="bg-violet-600 h-5 rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>


        <p className="text-slate-500 mt-4">
          {completedLessons} of {totalLessons} lessons completed
        </p>

      </div>


      {/* COURSE PROGRESS */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mt-8">

        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Course Progress 📚
        </h2>

        <div className="space-y-5">

          {courses.map((course) => {

            const saved = JSON.parse(
              localStorage.getItem(`course-${course.id}`) || "[]"
            );

            const completed = saved.length;

            const courseTotal = 6;

            const courseProgress = Math.min(
              Math.round((completed / courseTotal) * 100),
              100
            );

            return (
              <div
                key={course.id}
                className="border border-slate-200 rounded-2xl p-5"
              >

                <div className="flex justify-between items-center mb-3">

                  <h3 className="font-semibold text-slate-900">
                    {course.title}
                  </h3>

                  <span className="text-sm font-semibold text-violet-600">
                    {courseProgress}%
                  </span>

                </div>


                <div className="w-full bg-slate-200 rounded-full h-3">

                  <div
                    className="bg-violet-500 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${courseProgress}%`,
                    }}
                  ></div>

                </div>


                <p className="text-sm text-slate-500 mt-2">
                  {completed} of {courseTotal} lessons completed
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </MainLayout>
  );
}

export default Profile;