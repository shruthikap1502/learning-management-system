import { useNavigate } from "react-router-dom";
import student from "../../assets/images/student.png";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="min-h-screen flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}

          <div>

            <p className="text-violet-400 font-semibold text-lg mb-3">
              🎓 Welcome to
            </p>

            <h1
              className="text-6xl md:text-7xl font-extrabold leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Code
              <br />
              And
              <br />
              <span className="text-violet-400">
                Learn!
              </span>
            </h1>

            <p className="text-slate-400 text-lg mt-6 max-w-xl">
              A simple Learning Management System designed
              to help students learn programming, watch video
              lessons, complete assignments and track their progress.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => navigate("/dashboard")}
                className="bg-violet-600 hover:bg-violet-700
                transition px-7 py-3 rounded-xl
                font-semibold text-lg"
              >
                🚀 Start Learning
              </button>

              <button
                onClick={() => navigate("/courses")}
                className="border border-violet-500
                text-violet-400 hover:bg-violet-500
                hover:text-white transition px-7 py-3
                rounded-xl font-semibold text-lg"
              >
                📚 Explore Courses
              </button>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="bg-gradient-to-br
              from-violet-600 via-purple-600 to-blue-600
              rounded-3xl p-10 shadow-2xl">

              <img
                src={student}
                alt="Student learning"
                className="w-80 md:w-96"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20 bg-slate-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Everything You Need to Learn 💜
          </h2>

          <p className="text-slate-400 text-center mt-3">
            Learn programming at your own pace.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-12">


            {/* CARD 1 */}

            <div className="bg-slate-800 rounded-2xl p-7">

              <div className="text-4xl">
                💻
              </div>

              <h3 className="text-xl font-bold mt-4">
                Programming Courses
              </h3>

              <p className="text-slate-400 mt-3">
                Learn Python, Java, JavaScript, React,
                Node.js and MongoDB.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="bg-slate-800 rounded-2xl p-7">

              <div className="text-4xl">
                🎥
              </div>

              <h3 className="text-xl font-bold mt-4">
                Video Lessons
              </h3>

              <p className="text-slate-400 mt-3">
                Watch carefully selected YouTube tutorials
                for each course lesson.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="bg-slate-800 rounded-2xl p-7">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="text-xl font-bold mt-4">
                Track Your Progress
              </h3>

              <p className="text-slate-400 mt-3">
                Mark lessons as completed and monitor
                your overall learning progress.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= GOOGLE FORM ================= */}

      <section className="px-6 py-20 bg-slate-950">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Help Us Improve 📝
          </h2>

          <p className="text-slate-400 text-center mt-3 max-w-2xl mx-auto">
            Your feedback will help us understand how useful
            this Learning Management System is and how it
            can be improved.
          </p>


          <div className="bg-white rounded-2xl overflow-hidden mt-10 shadow-2xl">

            <iframe
              src="PASTE_YOUR_GOOGLE_FORM_EMBED_LINK_HERE"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="LMS Feedback Form"
            >
              Loading…
            </iframe>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 py-8 text-center">

        <p className="text-slate-400">
          © 2026 Code and Learn — Learning Management System
        </p>

        <p className="text-slate-500 text-sm mt-2">
          Created as a CEP Project
        </p>

      </footer>

    </div>
  );
}

export default LoginForm;