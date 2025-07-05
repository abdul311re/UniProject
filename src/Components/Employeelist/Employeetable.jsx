import React, { useState } from "react";
import PopoverData from "./Popover";

export default function EmployeeTable({ employees, getLatestAttendance, handleDelete }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="m-5 overflow-x-auto rounded">
      <table className="min-w-full text-sm text-gray-700 bg-white">
        <thead className="bg-gray-100 text-sm uppercase font-light text-gray-600">
          <tr>
            <th className="px-3 py-1">Id</th>
            <th className="px-3 py-1">Picture</th>
            <th className="px-3 py-1">Name</th>
            <th className="px-3 py-1">Email</th>
            <th className="px-4 py-1">Joining</th>
            <th className="px-3 py-1">Role</th>
            <th className="px-3 py-1">Sex</th>
            <th className="px-3 py-1">Details</th>
            <th className="px-3 py-1">Last Login</th>
            <th className="px-3 py-1">Active</th>
            <th className="px-3 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan={11} className="text-center p-4 text-gray-400">
                No employee records found.
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => {
              const isOpen = openIndex === index;
              return (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-50 even:bg-gray-50 border-b transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-xs text-gray-500 rounded-full">
                        {emp.fullName?.slice(0, 2).toUpperCase()}
                      </div>
                  
                  </td>
                  <td className="p-3 font-medium text-center">{emp.fullName}</td>
                  <td className="p-3 text-center">{emp.email}</td>
                  <td className="px-1 py-3">{emp.date?.split("T")[0] || "-"}</td>
                  <td className="p-3 text-center">{emp.jobTitle || "-"}</td>
                  <td className="p-3 text-center">{emp.gender || "-"}</td>
                  <td className="p-3">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="px-3 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Details
                    </button>
                    {isOpen && (
                      <PopoverData employee={emp} onClose={() => setOpenIndex(null)}   
                      handleDelete={handleDelete}/>
                    )}
                  </td>
                  <td className="p-3">{emp.lastLogin || "-"}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        emp.active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.active ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        emp.status === "online"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {emp.status}
                    </span>
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
