import React, { useState } from "react";
import PopoverData from "./Popover";

export default function Projectsdetail({
  projects = [],
  loading = false,
  onUpdateProject,
  onUpdateStatus,
  onAddImage,
  employeesMap = {}
}) {
  const [openIndex, setOpenIndex] = useState(null);

  if (loading) {
    return <p className="text-center text-gray-500 py-6">Loading projects...</p>;
  }

  return (
    <div className="m-5 overflow-x-auto rounded">
      <table className="min-w-full text-sm text-gray-700 bg-white">
        <thead className="bg-gray-100 text-sm uppercase font-light text-gray-600">
          <tr>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Project Name</th>
            <th className="px-3 py-2">Client Name</th>
            <th className="px-3 py-2">Phone Number</th>
            <th className="px-3 py-2">Project Type</th>
            <th className="px-3 py-2">Budget</th>
            <th className="px-3 py-2">Start Date</th>
            <th className="px-3 py-2">End Date</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan={10} className="text-center p-4 text-gray-400">
                No project records found.
              </td>
            </tr>
          ) : (
            projects.map((project, index) => {
              const isOpen = openIndex === index;
              const employees = employeesMap[project.id] || [];

              return (
                <tr
                  key={project.id || index}
                  className="hover:bg-gray-50 even:bg-gray-50 border-b transition"
                >
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3 text-center font-medium">{project.projectName}</td>
                  <td className="p-3 text-center">{project.clientName}</td>
                  <td className="p-3 text-center">{project.clientPhone || "-"}</td>
                  <td className="p-3 text-center">{project.projectType || "-"}</td>
                  <td className="p-3 text-center">{project.budget || "-"}</td>
                  <td className="p-3 text-center">{project.startDate?.split("T")[0] || "-"}</td>
                  <td className="p-3 text-center">{project.dueDate?.split("T")[0] || "-"}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : project.status === "stopped"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status || "Unknown"}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="bg-black text-white text-sm rounded px-2 py-1"
                    >
                      Update
                    </button>
                    {isOpen && (
                      <PopoverData
                        project={project}
                        onClose={() => setOpenIndex(null)}
                        onUpdateProject={onUpdateProject}
                        onUpdateStatus={onUpdateStatus}
                        onAddImage={onAddImage}
                        employees={employees}
                      />
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}