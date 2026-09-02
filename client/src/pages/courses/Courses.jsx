import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const courses = [
  {
    id: 1,
    title: "Python",
    description:
      "Learn Python fundamentals, programming concepts, and problem-solving from the beginning.",
    icon: "🐍",
    category: "Programming",
    level: "Beginner",
    lessons: 5,
    accent: "from-blue-500 to-cyan-400",
    light: "bg-blue-50",
  },
  {
    id: 2,
    title: "Java",
    description:
      "Understand object-oriented programming and build a strong foundation in Java.",
    icon: "☕",
    category: "Programming",
    level: "Beginner",
    lessons: 5,
    accent: "from-orange-500 to-red-400",
    light: "bg-orange-50",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "Learn the language behind modern websites and create interactive web experiences.",
    icon: "JS",
    category: "Web Development",
    level: "Beginner",
    lessons: 5,
    accent: "from-yellow-400 to-orange-400",
    light: "bg-yellow-50",
  },
  {
    id: 4,
    title: "React",
    description:
      "Build modern and interactive user interfaces using components and React.",
    icon: "⚛",
    category: "Web Development",
    level: "Intermediate",
    lessons: 5,
    accent: "from-cyan-500 to-blue-500",
    light: "bg-cyan-50",
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "Learn backend development and understand how JavaScript works on the server.",
    icon: "◆",
    category: "Backend",
    level: "Intermediate",
    lessons: 5,
    accent: "from-green-500 to-emerald-400",
    light: "bg-green-50",
  },
  {
    id: 6,
    title: "MongoDB",
    description:
      "Understand databases, collections, documents, and the fundamentals of MongoDB.",
    icon: "🍃",
    category: "Database",
    level: "Beginner",
    lessons: 5,
    accent: "from-emerald-500 to-green-400",
    light: "bg-emerald-50",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = {};

    courses.forEach((course) => {
      const saved = localStorage.getItem(`course-${course.id}`);

      if (saved) {
        try {
          const completed = JSON.parse(saved);

          if (Array.isArray(completed)) {
            savedProgress[course.id] = completed.length;
          }
        } catch {
          savedProgress[course.id] = 0;
        }
      } else {
        savedProgress[course.id] = 0;
      }
    });

    setProgress(savedProgress);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const text = `${course.title} ${course.category} ${course.level}`;

    return text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#f8f9ff]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl">🎓</div>

            <div>
              <h1 className="font-['Poppins'] text-xl font-bold text-violet-600">
                Code & Learn
              </h1>

              <p className="text-xs text-gray-500">
                Learning Management System
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">

            <Link
              to="/courses"
              className="rounded-xl bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600"
            >
              Courses
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
            >
              Dashboard
            </Link>

          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50">

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm">
              📚 Learning Library
            </div>

            <h2 className="font-['Poppins'] text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Choose your next
              <span className="text-violet-600"> skill.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              Explore structured programming courses designed to help you
              learn step by step, practice what you learn, and track your
              progress.
            </p>

          </div>


          {/* SEARCH */}
          <div className="mt-8 max-w-xl">

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search for a course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-5 text-sm text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />

            </div>

          </div>

        </div>
      </section>


      {/* COURSES */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8">

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Explore courses
            </p>

            <h3 className="mt-1 font-['Poppins'] text-2xl font-bold text-slate-900 sm:text-3xl">
              Start learning today
            </h3>
          </div>

          <p className="text-sm text-gray-400">
            {filteredCourses.length} courses available
          </p>

        </div>


        {filteredCourses.length === 0 ? (

          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">

            <div className="text-4xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              No courses found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching for another programming language.
            </p>

          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredCourses.map((course) => {

              const completed = progress[course.id] || 0;

              const percentage = Math.min(
                100,
                Math.round((completed / course.lessons) * 100)
              );

              return (

                <article
                  key={course.id}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50"
                >

                  {/* CARD TOP */}
                  <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${course.accent}`}>

                    <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-white/10" />

                    <div className="absolute -bottom-10 left-24 h-28 w-28 rounded-full bg-white/10" />

                    <div className="relative flex h-full items-center justify-between px-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg">
                        {course.icon}
                      </div>

                      <span className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        {course.level}
                      </span>

                    </div>

                  </div>


                  {/* CARD CONTENT */}
                  <div className="p-6">

                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-500">
                      {course.category}
                    </div>

                    <h4 className="font-['Poppins'] text-2xl font-bold text-slate-900">
                      {course.title}
                    </h4>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                      {course.description}
                    </p>


                    {/* COURSE META */}
                    <div className="mt-5 flex items-center gap-4 border-y border-gray-100 py-4">

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>📖</span>
                        <span>{course.lessons} lessons</span>
                      </div>

                      <div className="h-4 w-px bg-gray-200" />

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>▶️</span>
                        <span>Video lessons</span>
                      </div>

                    </div>


                    {/* PROGRESS */}
                    <div className="mt-5">

                      <div className="mb-2 flex justify-between text-xs">

                        <span className="font-medium text-gray-500">
                          Your progress
                        </span>

                        <span className="font-bold text-violet-600">
                          {percentage}%
                        </span>

                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />

                      </div>

                    </div>


                    {/* BUTTON */}
                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-violet-600"
                    >
                      {percentage > 0 ? "Continue learning" : "Start course"}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              );
            })}

          </div>

        )}


        {/* BOTTOM CTA */}
        <section className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white shadow-xl shadow-violet-200 sm:p-10">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-semibold text-violet-100">
                KEEP GOING 🚀
              </p>

              <h3 className="mt-2 font-['Poppins'] text-2xl font-bold">
                Your next skill is waiting.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-violet-100">
                Choose a course, complete the lessons, and build your
                programming skills one step at a time.
              </p>

            </div>

            <Link
              to="/dashboard"
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet-600 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              View my progress →
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}