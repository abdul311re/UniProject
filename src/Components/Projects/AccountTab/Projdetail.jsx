import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Projectdetail = ({ project, setProject }) => {
  const { state } = useLocation();
  const lead = state?.lead;

  useEffect(() => {
    if (lead) {
      setProject((prev) => ({
        ...prev,
        clientName: lead.fullName || "",
        clientEmail: lead.email || "",
        clientPhone: lead.phone || "",
        city: lead.city || "",
        budget: lead.budget || "",
        description: lead.discription || "",
      }));
    }
  }, [lead, setProject]);

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Create Project</CardTitle>
        <CardDescription>
          Make changes to your Project here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="projectName">Project Name:</Label>
          <Input
            id="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, projectName: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientName">Client Name:</Label>
          <Input
            id="clientName"
            placeholder="Client Name"
            value={project.clientName}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, clientName: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone:</Label>
          <Input
            id="phone"
            placeholder="Phone"
            value={project.clientPhone}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, clientPhone: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            placeholder="Email"
            value={project.clientEmail}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, clientEmail: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City:</Label>
          <Input
            id="city"
            placeholder="City"
            value={project.city}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget:</Label>
          <Input
            id="budget"
            placeholder="Budget"
            value={project.budget}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, budget: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Starting Date:</Label>
          <Input
            id="startDate"
            type="date"
            value={project.startDate}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, startDate: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date:</Label>
          <Input
            id="dueDate"
            type="date"
            value={project.dueDate}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, dueDate: e.target.value }))
            }
          />
        </div>
        <div className="space-y-2 md:col-span-3">
          <Label htmlFor="description">Project Details:</Label>
          <textarea
            id="description"
            placeholder="Description"
            className="border w-full p-2 rounded text-sm"
            value={project.description}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
      </CardContent>
    </>
  );
};

export default Projectdetail;
