import { useEffect, useState } from "react";
import { GET, REMOVE } from "../../apicontroll/apicontroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [attendence, setAttendence] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleRoleChange = (e) => setSelectedRole(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  const loadEmployees = async () => {
    try {
      const res = await GET("employees");
      setEmployees(res.reverse());
    } catch (err) {
      console.error("Failed to load employees", err);
    }
  };

  const loadAttendence = async () => {
    try {
      const res = await GET("attendence");
      setAttendence(res.reverse());
    } catch (err) {
      console.error("Failed to load attendance", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    try {
      await REMOVE("employees", id);
      await loadEmployees();
    } catch (err) {
      console.error("Failed to delete employee", err);
    }
  };

  useEffect(() => {
    loadEmployees();
    loadAttendence();
    const interval = setInterval(() => {
      loadEmployees();
      loadAttendence();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getLatestAttendance = (empId) => {
    const records = attendence.filter((a) => a.employee_id === empId);
    return records.length > 0 ? records[0] : null;
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchRole = selectedRole ? emp.jobTitle === selectedRole : true;
    const matchStatus = selectedStatus ? emp.status === selectedStatus : true;
    return matchRole && matchStatus;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-grey p-5">
        <button className="bg-black text-white py-[6px] px-3 rounded tracking-widest uppercase text-sm">
          <Link to="/Form">New Staff Member</Link>
        </button>
      </div>

      {/* Filters */}
      <div className="p-5 flex flex-wrap gap-10">
        {/* Role Filter */}
        <div className="relative w-60">
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            className="border-2 appearance-none rounded border-[#C2BCC4] px-2 w-full py-[5px] pr-10"
          >
            <option value="">Filter by Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="intern">Intern</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>

        {/* Status Filter */}
        <div className="relative w-60">
          <select
            value={selectedStatus}
            onChange={handleStatusChange}
            className="border-2 appearance-none rounded border-[#C2BCC4] px-2 w-full py-[5px] pr-10"
          >
            <option value="">Filter by Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-[#fcf9f9] m-5 overflow-x-auto rounded">
  <table className="min-w-full text-sm text-left">
    <thead>
      <tr className="bg-[#f4f4f4]">
        <th className="py-2 px-2 font-medium">ID</th>
        <th className="py-2 px-2 font-medium">HR Code</th>
        <th className="py-2 px-2 font-medium">Full Name</th>
        <th className="py-2 px-2 font-medium">Email</th>
        <th className="py-2 px-2 font-medium">Joining</th>
        <th className="py-2 px-2 font-medium">Sex</th>
        <th className="py-2 px-2 font-medium">details</th>
        <th className="py-2 px-2 font-medium">Last Login</th>
        <th className="py-2 px-2 font-medium">Active</th>
        <th className="py-2 px-2 font-medium">Status</th>
      </tr>
    </thead>
    <tbody>
      {filteredEmployees.length === 0 ? (
        <tr>
          <td colSpan={10} className="text-center py-4">
            No employee records found.
          </td>
        </tr>
      ) : (
        filteredEmployees.map((emp, index) => {
          const latest = getLatestAttendance(emp.id);
          return (
            <tr key={emp.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-2">{index + 1}</td>
              <td className="py-3 px-2">{emp.jobTitle || "-"}</td>
              <td className="py-3 px-2">{emp.fullName}</td>
              <td className="py-3 px-2">{emp.email}</td>
              <td className="py-3 px-2">{emp.joiningDate || "-"}</td>
              <td className="py-3 px-2">{emp.gender || "-"}</td>
              <td className="py-3 px-2">{emp.jobTitle || "-"}</td>
              <td className="py-3 px-2">{emp.lastLogin || "-"}</td>
              <td className="py-3 px-2">{emp.active ? "Yes" : "No"}</td>
              <td className="py-3 px-2">
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${
                    emp.status === "online"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
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

    </div>
  );
}
