// src/hooks/useLeads.js
import { useEffect, useState } from "react";
import { GET as GET1 } from "../../apicontroll/apicontrollp"; // For leads
import { GET as GET2 } from "../../apicontroll/apicontroll";  // For projects

const useLeads = () => {
  const [totalLeads, setTotalLeads] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [pendingProjects, setPendingProjects] = useState(0)
  const [completedProjects, setCompletedProjects ] = useState(0);
  const [stopProjects, setStopProjects] = useState(0);
  useEffect(() => {
    const fetchLeadsAndProjects = async () => {
      try {
        // ✅ Fetch leads from first API
        const resLeads = await GET1("leads");
        const leads = Array.isArray(resLeads) ? resLeads : resLeads.data;
        if (Array.isArray(leads)) {
          setTotalLeads(leads.length);
        } else {
          console.error("Leads is not an array:", leads);
        }
        
        // ✅ Fetch  projects from second Api
          
        const resProjects = await GET2("projects");
        const projects = Array.isArray(resProjects) ? resProjects : resProjects.data;
        if (Array.isArray(projects)) {
          setTotalProjects(projects.length);
        } else {
          console.error("Projects is not an array:", projects);
        }

      } catch (error) {
        console.error("Error fetching leads or projects:", error);
      }
      

        // ✅ Fetch pending projects from second API
        const respendingProjects = await GET2("projects/pending");
        const pendingprojects = Array.isArray(respendingProjects) ? respendingProjects : respendingProjects.data;
        if (Array.isArray(pendingprojects)) {
          setPendingProjects(pendingprojects.length);
        } else {
          console.error("Projects is not an array:", pendingprojects);
        }

      
      const resCompletedProject = await GET2("projects/completed")
        const completedprojects = Array.isArray(resCompletedProject) ? resCompletedProject : resCompletedProject.data;
        if (Array.isArray(completedprojects)) {
          setCompletedProjects(completedprojects.length);
        } else {
          console.error("Projects is not an array:", completedprojects);
        }

        const resStopProject = await GET2("projects/stopped")
        const Stopprojects = Array.isArray(resStopProject) ? resStopProject : resStopProject.data;
        if (Array.isArray(Stopprojects)) {
          setStopProjects(Stopprojects.length);
        } else {
          console.error("Projects is not an array:", Stopprojects);
        }

    };
     
    fetchLeadsAndProjects();
  }, []);

  return { totalLeads, totalProjects, completedProjects, stopProjects, pendingProjects };
};

export default useLeads;
