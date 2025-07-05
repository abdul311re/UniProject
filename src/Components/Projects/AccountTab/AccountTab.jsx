import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GET } from "../../../apicontroll/apicontroll";
import Project from "./Projdetail";
import Employee from "./Empproject";
export default function AccountTab() {
  const [employees, setEmployees] = useState([]);
  const [projectType, setProjectType] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState({});

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

  const handleEmployeeSelect = (empId) => {
    setSelectedEmployees((prevSelected) =>
      prevSelected.includes(empId)
        ? prevSelected.filter((id) => id !== empId)
        : [...prevSelected, empId]
    );
  };

  const handleSave = () => {
    console.log("Selected Employees:", selectedEmployees);
    // Optional: submit with project form data
  };

  return (
    <Card>
      {/* Project Form - unchanged */}
    
      <Project/>

      {/* Employee Section */}
     <Employee
      employees={employees}
      projectType={projectType}
      setProjectType={setProjectType}
      selectedEmployees={selectedEmployees}
      setSelectedEmployees={setSelectedEmployees} />
      <CardFooter>
        <Button onClick={handleSave}>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
