// File: AccountTab.jsx
import { useEffect, useState } from "react";
import Projectsdetail from "./Projectsdetail";
import { Card } from "@/components/ui/card";
import { GET, UPDATE } from "../../../apicontroll/apicontroll";

export default function AccountTab() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employeesMap, setEmployeesMap] = useState({});

  const fetchProjects = async () => {
    try {
      const res = await GET("projects/completed");
      const projectList = Array.isArray(res) ? res : res?.projects ?? [];
      setProjects(projectList);

      // Fetch teams for all projects
      const teamMap = {};
      await Promise.all(
        projectList.map(async (project) => {
          const res = await GET(`projects/completed/${project.id}/team`);
          const team = Array.isArray(res) ?res :res?.team ?? [];
          console.log(team)
        })
      );
      setEmployeesMap(teamMap);
    } catch (err) {
      console.error("Error fetching projects or teams:", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const updateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  const updateStatus = async (projectId, newStatus) => {
    try {
      const updatedProject = await UPDATE("projects", projectId, { status: newStatus });
      updateProject(updatedProject);
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const addProjectImage = async (projectId, imageFile) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const updatedProject = await UPDATE("projects", projectId, formData);
      updateProject(updatedProject);
    } catch (err) {
      console.error("Error adding image:", err);
    }
  };

  const getCompletedProjects = () => {
    return projects.filter((project) => project.status === "completed");
  };

  return (
    <Card className="p-4">
      <Projectsdetail
        projects={projects}
        loading={loading}
        onUpdateProject={updateProject}
        onUpdateStatus={updateStatus}
        onAddImage={addProjectImage}
        onFetchCompleted={getCompletedProjects}
        employeesMap={employeesMap}
      />
    </Card>
  );
}
