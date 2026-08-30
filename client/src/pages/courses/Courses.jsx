import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import courses from "../../data/courses";


function Courses() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-white">
        Your Courses 📚
      </h1>

      <p className="text-slate-400 mt-2 mb-8">
        Continue learning your favourite programming languages.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {courses.map((course) => (

          <div
            key={course.id}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            <div
              className={`h-40 bg-gradient-to-r ${course.color} flex items-center justify-center`}
            >
              <h2 className="text-3xl font-bold text-white">
                {course.title}
              </h2>
            </div>

            <div className="p-6">

              <p className="text-slate-300">
                👨‍🏫 {course.instructor}
              </p>

              <p className="text-slate-400 mt-2">
                📖 {course.lessons} Lessons
              </p>

              <p className="text-violet-400 mt-2">
                {course.level}
              </p>

              <Link
                to={`/courses/${course.id}`}
              >
                <Link
                to={`/courses/${course.id}`}
                className="block text-center bg-violet-600 hover:bg-violet-700 p-3 rounded-xl font-semibold"
                >
                    Open Course
                </Link>
              
              </Link>

            </div>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default Courses;