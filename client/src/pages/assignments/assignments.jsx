import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import assignments from "../../data/assignments";

function Assignments() {
  const [submitted, setSubmitted] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({});

  // Load previously submitted assignments
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("submittedAssignments")) || {};

    setSubmitted(saved);
  }, []);

  // When student selects a file
  function handleFileChange(id, file) {
    setSelectedFiles((previous) => ({
      ...previous,
      [id]: file,
    }));
  }

  // Submit assignment
  function handleSubmit(id) {
    if (!selectedFiles[id]) {
      alert("Please select your assignment file first! 📎");
      return;
    }

    const updated = {
      ...submitted,
      [id]: true,
    };

    setSubmitted(updated);

    localStorage.setItem(
      "submittedAssignments",
      JSON.stringify(updated)
    );

    alert("Assignment Submitted Successfully! 🎉");

    // Remove selected file from state
    setSelectedFiles((previous) => {
      const updatedFiles = { ...previous };
      delete updatedFiles[id];
      return updatedFiles;
    });
  }

  return (
    <MainLayout>

      {/* PAGE HEADER */}

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Programming Assignments 📝
        </h1>

        <p className="text-slate-500 mt-2">
          Complete your programming assignments and submit them
          before the deadline.
        </p>
      </div>


      {/* ASSIGNMENT CARDS */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {assignments.map((assignment) => (

          <div
            key={assignment.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >

            {/* Course */}

            <p className="text-sm text-violet-600 font-semibold">
              {assignment.course}
            </p>


            {/* Assignment Title */}

            <h2 className="text-2xl font-bold text-slate-800 mt-2">
              {assignment.title}
            </h2>


            {/* Deadline */}

            <div className="mt-4 bg-slate-50 rounded-xl p-4">

              <p className="text-slate-600">
                📅 <span className="font-semibold">Deadline:</span>{" "}
                {assignment.deadline}
              </p>

            </div>


            {/* STATUS */}

            <div className="mt-5">

              {submitted[assignment.id] ? (

                <div className="bg-green-50 border border-green-200 rounded-xl p-4">

                  <p className="text-green-600 font-semibold">
                    ✅ Assignment Submitted
                  </p>

                  <p className="text-green-500 text-sm mt-1">
                    Your assignment has been marked as submitted.
                  </p>

                </div>

              ) : (

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">

                  <p className="text-yellow-600 font-semibold">
                    ⏳ Assignment Pending
                  </p>

                  <p className="text-yellow-600 text-sm mt-1">
                    Select your assignment file and submit it below.
                  </p>

                </div>

              )}

            </div>


            {/* FILE UPLOAD */}

            {!submitted[assignment.id] && (

              <div className="mt-6">

                <label className="block text-slate-700 font-semibold mb-2">
                  Upload Assignment
                </label>

                <input
                  type="file"
                  onChange={(e) =>
                    handleFileChange(
                      assignment.id,
                      e.target.files[0]
                    )
                  }
                  className="block w-full text-sm text-slate-600
                  border border-slate-300 rounded-xl
                  bg-slate-50 cursor-pointer
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:bg-violet-600 file:text-white
                  hover:file:bg-violet-700"
                />

                {/* Selected file name */}

                {selectedFiles[assignment.id] && (

                  <p className="text-sm text-slate-500 mt-3">
                    📎 Selected:{" "}
                    <span className="font-semibold">
                      {selectedFiles[assignment.id].name}
                    </span>
                  </p>

                )}

              </div>

            )}


            {/* SUBMIT BUTTON */}

            {!submitted[assignment.id] && (

              <button
                onClick={() => handleSubmit(assignment.id)}
                className="mt-6 w-full bg-violet-600
                hover:bg-violet-700
                text-white font-semibold
                p-3 rounded-xl
                transition duration-200
                shadow-sm"
              >
                Submit Assignment 🚀
              </button>

            )}

          </div>

        ))}

      </div>


      {/* INFORMATION BOX */}

      <div className="mt-10 bg-violet-50 border border-violet-200 rounded-2xl p-6">

        <h2 className="text-xl font-bold text-violet-700">
          📌 Assignment Information
        </h2>

        <p className="text-slate-600 mt-2">
          Select your completed assignment file and click
          "Submit Assignment". Your submission status will be
          saved so you can see whether an assignment has been
          completed.
        </p>

      </div>

    </MainLayout>
  );
}

export default Assignments;