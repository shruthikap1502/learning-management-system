import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import courses from "../../data/courses";
import courseLessons from "../../data/courseLessons";

function CourseDetails() {
  const { id } = useParams();
  const lessons = courseLessons[id] || [];
  const [completedLessons, setCompletedLessons] = useState([]);
  useEffect(() => {
  const saved = JSON.parse(
    localStorage.getItem(`course-${id}`)
  );

  if (saved) {
    setCompletedLessons(saved);
  }
}, [id]);

const markCompleted = (index) => {
  if (completedLessons.includes(index)) return;

  const updated = [...completedLessons, index];

  setCompletedLessons(updated);

  localStorage.setItem(
    `course-${id}`,
    JSON.stringify(updated)
  );
};

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-3xl">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <Link
        to="/courses"
        className="text-violet-400 hover:text-violet-300"
      >
        ← Back to Courses
      </Link>

      <div className="mt-6">

        <h1 className="text-5xl font-bold">
          {course.title}
        </h1>

        <p className="text-slate-400 mt-3">
          Instructor: {course.instructor}
        </p>

        <p className="mt-2 text-violet-400">
          {course.level}
        </p>

        <p className="mt-6 text-slate-300 leading-8">
  This course provides hands-on learning through video lessons,
  practical coding exercises and assignments. Complete all lessons
  to strengthen your programming skills and build real-world projects.
</p>

        <div className="w-full bg-slate-800 rounded-full h-4 mt-8">
          <div
            className="bg-violet-500 h-4 rounded-full"
            style={{
  width: `${(completedLessons.length / lessons.length) * 100}%`
}}
          ></div>
        </div>

        <p className="mt-2 text-slate-400">
          Progress: {Math.round((completedLessons.length / lessons.length) * 100)}%
        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Lessons
        </h2>

        <div className="space-y-6">

  {lessons.map((lesson, index) => (

    <div
      key={index}
      className="bg-slate-900 rounded-2xl p-6 hover:shadow-xl hover:shadow-violet-500/20 transition"
    >

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-2xl font-bold text-white">
            Lesson {index + 1}
          </h3>

          <h4 className="text-xl mt-2 text-violet-400">
            {lesson.title}
          </h4>

          <p className="text-slate-400 mt-3">
            {lesson.description}
          </p>

        </div>

      </div>

      <a
        href={lesson.video}
        target="_blank"
        rel="noreferrer"
      >

        <button className="mt-6 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition">

          ▶ Watch Lesson

        </button>

        <button
  onClick={() => markCompleted(index)}
  className="mt-3 ml-3 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
>
  {completedLessons.includes(index)
    ? "✅ Completed"
    : "Mark as Completed"}
</button>

      </a>

    </div>

  ))}

</div>

      </div>

      <div className="bg-slate-900 rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-bold">
          Assignment
        </h2>

        <p className="mt-3">
          Create a mini project based on this course and upload your work before the deadline.
        </p>

        <p className="text-red-400 mt-2">
         Deadline: 6th July 2026
        </p>

        <button className="mt-6 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl">
          Upload Assignment
        </button>

      </div>

    </div>
  );
}

export default CourseDetails;