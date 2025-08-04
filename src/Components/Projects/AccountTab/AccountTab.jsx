import { useEffect, useState } from "react";
import {
  Card,
  CardFooter,
} from "@/components/ui/card";
import { GET, POST } from "../../../apicontroll/apicontroll";
import Project from "./Projdetail";
import Employee from "./Empproject";

export default function AccountTab() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState({});
  const [project, setProject] = useState({
    projectName: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    city: "",
    budget: "",
    startDate: "",
    dueDate: "",
    details: "",
    projectType: "",
  });

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const res = await GET("employees");
        setEmployees(res.reverse());
      } catch (err) {
        console.error("Failed to load employees", err);
      }
    };
    loadEmployees();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("Project data going to backend:", project);
    console.log("Selected Employees:", selectedEmployees);

    try {
      const response = await POST("projects", {
        ...project,
        employees: Object.entries(selectedEmployees).map(([role, employeeId]) => ({
          role,
          employeeId,
        })),
      });
      
      console.log("Project saved:", response);
      alert("Project saved successfully!");
      
      setProject({
        projectName: "",
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        city: "",
        budget: "",
        startDate: "",
        dueDate: "",
        description: "",
        projectType: "",
      });
      setSelectedEmployees({});
    } catch (err) {
      console.error("Failed to save project", err);
      alert("Failed to save project");
    }
  };

  return (
    <Card>
      <Project
        project={project}
        setProject={setProject}
      />
      <Employee
        employees={employees}
        projectType={project.projectType}
        setProjectType={(type) =>
          setProject((prev) => ({ ...prev, projectType: type }))
        }
        selectedEmployees={selectedEmployees}
        setSelectedEmployees={setSelectedEmployees}
      />
      <CardFooter>
        <button
        type="button"
        onClick={(e) => handleSave(e)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save changes
        </button>
      </CardFooter>
    </Card>
  );
}
