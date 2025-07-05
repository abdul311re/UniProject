import { useEffect, useState } from "react";
import { GET, REMOVE } from "../../apicontroll/apicontroll";
import Filters from "./Filters";
import EmployeeTable from "./Employeetable";

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
    <div className="bg-white ">
      <div className="border-b border-grey p-5">
        <button className="bg-black text-white py-[6px] px-3 rounded tracking-widest uppercase text-sm">
          New Staff Member
        </button>
      </div>
      <div className="relative">
      <Filters
        selectedRole={selectedRole}
        selectedStatus={selectedStatus}
        handleRoleChange={handleRoleChange}
        handleStatusChange={handleStatusChange}
      />
      <EmployeeTable
        employees={filteredEmployees}
        getLatestAttendance={getLatestAttendance}
        handleDelete={handleDelete}
      />
      </div>
    </div>
  );
}
