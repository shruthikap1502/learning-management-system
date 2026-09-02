import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Python",
    icon: "🐍",
  },
  {
    id: 2,
    title: "Java",
    icon: "☕",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "🟨",
  },
  {
    id: 4,
    title: "React",
    icon: "⚛️",
  },
  {
    id: 5,
    title: "Node.js",
    icon: "🟢",
  },
  {
    id: 6,
    title: "MongoDB",
    icon: "🍃",
  },
];

export default function Profile() {
  const [completedLessons, setCompletedLessons] = useState(0);

  const totalLessons = 30;

  useEffect(() => {
    let total = 0;

    courses.forEach((course) => {
      const saved = localStorage.getItem(`course-${course.id}`);

      if (saved) {
        try {
          const lessons = JSON.parse(saved);

          if (Array.isArray(lessons)) {
            total += lessons.length;
          }
        } catch {
          console.log("Unable to read course progress");
        }
      }
    });

    setCompletedLessons(total);
  }, []);

  const progress = Math.min(
    100,
    Math.round((completedLessons / totalLessons) * 100)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl">🎓</div>

            <div>
              <h1 className="text-xl font-bold text-violet-600">
                Code & Learn
              </h1>

              <p className="text-xs text-gray-500">
                Learning Management System
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">

            <Link
              to="/courses"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-violet-50 hover:text-violet-600 sm:block"
            >
              Courses
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Dashboard
            </Link>

          </div>
        </div>
      </header>


      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">

        {/* PAGE TITLE */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-600">
            Student Account
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            My Profile
          </h2>

          <p className="mt-2 max-w-xl text-gray-500">
            Manage your learning profile and keep track of your progress.
          </p>
        </div>


        {/* PROFILE HERO */}
        <section className="relative mb-6 overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8">

          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* AVATAR */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-blue-500 text-4xl font-bold text-white shadow-lg shadow-violet-200">
              S
            </div>

            {/* INFO */}
            <div className="flex-1">

              <p className="mb-1 text-sm font-medium text-violet-600">
                Welcome back 👋
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Student
              </h3>

              <p className="mt-1 text-gray-500">
                Programming Learner
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
                  🎓 Student
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  💻 Developer in progress
                </span>

              </div>
            </div>

          </div>
        </section>


        {/* STATS */}
        <section className="mb-6 grid gap-4 sm:grid-cols-3">

          <div className="card-hover rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl">
              📚
            </div>

            <p className="text-sm font-medium text-gray-500">
              Courses
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              6
            </p>
          </div>


          <div className="card-hover rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              ✅
            </div>

            <p className="text-sm font-medium text-gray-500">
              Lessons completed
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {completedLessons}
            </p>
          </div>


          <div className="card-hover rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
              🚀
            </div>

            <p className="text-sm font-medium text-gray-500">
              Overall progress
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {progress}%
            </p>
          </div>

        </section>


        {/* PROGRESS */}
        <section className="mb-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Learning progress
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Keep going — you're building your skills!
              </p>
            </div>

            <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-bold text-violet-600">
              {progress}%
            </span>

          </div>


          <div className="h-3 overflow-hidden rounded-full bg-gray-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />

          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-400">
            <span>{completedLessons} lessons completed</span>
            <span>{totalLessons} total lessons</span>
          </div>

        </section>


        {/* COURSES */}
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Your learning path
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              Enrolled courses
            </h3>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {courses.map((course) => (

              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="card-hover group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5"
              >

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                    {course.icon}
                  </div>

                  <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-violet-500">
                    →
                  </span>

                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {course.title}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Programming course
                </p>

              </Link>

            ))}

          </div>

        </section>


        {/* FOOTER */}
        <div className="py-8 text-center">

          <p className="text-sm text-gray-400">
            Keep learning. Keep building. Keep growing. ✨
          </p>

        </div>

      </main>

    </div>
  );
}