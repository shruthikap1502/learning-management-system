import { Link } from "react-router-dom";

function Welcome() {
  const courses = [
    {
      icon: "🐍",
      title: "Python",
      description: "Beginner friendly",
    },
    {
      icon: "☕",
      title: "Java",
      description: "Object-oriented programming",
    },
    {
      icon: "🟨",
      title: "JavaScript",
      description: "Web development",
    },
    {
      icon: "⚛️",
      title: "React",
      description: "Build modern interfaces",
    },
    {
      icon: "🟢",
      title: "Node.js",
      description: "Backend development",
    },
    {
      icon: "🍃",
      title: "MongoDB",
      description: "Database fundamentals",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 text-slate-900">

      {/* ================= NAVBAR ================= */}

      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <span className="text-3xl">🎓</span>

            <div>
              <h1 className="text-xl font-extrabold text-violet-600">
                Code & Learn
              </h1>

              <p className="text-xs text-slate-500">
                Learning Management System
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-6">

            <Link
              to="/courses"
              className="text-slate-600 hover:text-violet-600 font-medium transition"
            >
              Courses
            </Link>

            <Link
              to="/dashboard"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl font-semibold transition shadow-sm"
            >
              Dashboard
            </Link>

          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100/70 via-white to-blue-100/70">

  {/* Decorative background glow */}

  <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl"></div>

  <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-blue-300/25 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>

  {/* Decorative dots */}

  <div className="absolute top-24 left-10 text-violet-300 text-4xl">
    •
  </div>

  <div className="absolute top-40 right-20 text-blue-300 text-5xl">
    •
  </div>

  <div className="absolute bottom-20 left-20 text-purple-300 text-3xl">
    •
  </div>

        {/* Background decoration */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>


        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                🎓 Student Learning Platform
              </div>


              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">

                Learn to
                <span className="text-violet-600"> Code.</span>

                <br />

                Build your
                <span className="text-blue-600"> Future.</span>

              </h1>


              <p className="text-lg text-slate-600 leading-relaxed mt-6 max-w-xl">

                Learn programming through structured video lessons,
                practical assignments and progress tracking — all in
                one simple learning platform.

              </p>


              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/courses"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-violet-200"
                >
                  Explore Courses →
                </Link>


                <Link
                  to="/dashboard"
                  className="bg-white border border-slate-300 hover:border-violet-400 hover:text-violet-600 px-7 py-3.5 rounded-xl font-semibold transition"
                >
                  Open Dashboard
                </Link>

              </div>


              {/* SMALL STATS */}

              <div className="flex flex-wrap gap-8 mt-10">

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    6+
                  </p>

                  <p className="text-sm text-slate-500">
                    Programming Courses
                  </p>
                </div>


                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    30+
                  </p>

                  <p className="text-sm text-slate-500">
                    Video Lessons
                  </p>
                </div>


                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    24/7
                  </p>

                  <p className="text-sm text-slate-500">
                    Learn Anytime
                  </p>
                </div>

              </div>

            </div>


            {/* RIGHT - COURSE PREVIEW */}

            <div className="relative">

              <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-xl shadow-slate-200/70">

                <div className="flex items-center justify-between mb-6">

                  <div>
                    <p className="text-sm text-violet-600 font-semibold">
                      LEARNING PATH
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                      What you can learn 🚀
                    </h2>
                  </div>

                  <div className="bg-violet-100 w-11 h-11 rounded-xl flex items-center justify-center text-xl">
                    📚
                  </div>

                </div>


                <div className="grid grid-cols-2 gap-4">

                  {courses.map((course) => (

                    <div
                      key={course.title}
                      className="group border border-slate-200 rounded-2xl p-5 hover:border-violet-300 hover:shadow-md transition bg-slate-50"
                    >

                      <div className="text-3xl mb-3">
                        {course.icon}
                      </div>

                      <h3 className="font-bold text-lg">
                        {course.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {course.description}
                      </p>

                    </div>

                  ))}

                </div>


                <div className="mt-5 bg-violet-50 border border-violet-100 rounded-2xl p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 bg-violet-600 text-white rounded-xl flex items-center justify-center">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Track your progress
                      </h3>

                      <p className="text-sm text-slate-500">
                        Complete lessons and monitor your learning journey.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="bg-white border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-violet-600 font-semibold">
              SIMPLE & EFFECTIVE
            </p>

            <h2 className="text-4xl font-extrabold mt-2">
              Everything you need to learn
            </h2>

            <p className="text-slate-500 mt-4">
              A simple platform designed to make programming
              learning easier and more organized.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">


            {/* FEATURE 1 */}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">

              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-2xl">
                📚
              </div>

              <h3 className="text-xl font-bold mt-5">
                Structured Courses
              </h3>

              <p className="text-slate-500 mt-2 leading-relaxed">
                Learn programming through organized courses
                divided into simple lessons.
              </p>

            </div>


            {/* FEATURE 2 */}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">

              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                ▶️
              </div>

              <h3 className="text-xl font-bold mt-5">
                Video Lessons
              </h3>

              <p className="text-slate-500 mt-2 leading-relaxed">
                Watch curated YouTube lessons and learn each
                programming topic step by step.
              </p>

            </div>


            {/* FEATURE 3 */}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">

              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                📊
              </div>

              <h3 className="text-xl font-bold mt-5">
                Track Progress
              </h3>

              <p className="text-slate-500 mt-2 leading-relaxed">
                Mark lessons as completed and monitor your
                overall learning progress.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RESEARCH ================= */}

      <section className="bg-gradient-to-br from-violet-50 via-white to-blue-50">

        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="text-center">

            <p className="text-violet-600 font-semibold">
              📋 RESEARCH & FEEDBACK
            </p>

            <h2 className="text-4xl font-extrabold mt-3">
              Help us improve the LMS
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              This feedback form is part of my BSc.IT CEP research.
              Your responses will help evaluate the usefulness and
              usability of the learning platform.
            </p>

          </div>


          {/* GOOGLE FORM */}

          <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden p-3">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeHLPjEfTnfahCR4WwJZAkdj1JCrChYr8qe6mnmIU6XFKou0w/viewform?embedded=true"
              width="100%"
              height="850"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="LMS Research and Feedback Form"
              className="rounded-2xl"
            >
              Loading…
            </iframe>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>

              <h2 className="text-xl font-bold">
                🎓 Code & Learn
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Learning Management System
              </p>

            </div>


            <div className="text-sm text-slate-400">

              <p>
                BSc.IT CEP Project
              </p>

              <p className="mt-1">
                © 2026 Code & Learn
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Welcome;