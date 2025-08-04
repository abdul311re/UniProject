import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UPDATE } from "../../../apicontroll/apicontroll";

export default function Popover({
  project,
  onClose,
  onUpdateProject,
  onUpdateStatus,
  employees = []
}) {
  const [form, setForm] = useState({ ...project });

  useEffect(() => {
    if (project?.id) {
      setForm({ ...project });
    }
  }, [project?.id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleStatusChange = (e) => {
    setForm((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
    }
  };

  const updateProject = async () => {
    const projectId = form.id || project?.id;
  if (!projectId) {
    console.error("No project ID found for update");
    return;
  }
    try {
      const formData = new FormData();
      formData.append("projectName", form.projectName || "");
      formData.append("clientName", form.clientName || "");
      formData.append("clientEmail", form.clientEmail || "");
      formData.append("clientPhone", form.clientPhone || "");
      formData.append("city", form.city || "");
      formData.append("projectType", form.projectType || "");
      formData.append("budget", form.budget || "");
      formData.append("startDate", form.startDate || "");
      formData.append("dueDate", form.dueDate || "");
      formData.append("description", form.description || "");
      formData.append("status", form.status || "pending");

      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      const response = await UPDATE("projects", projectId, formData);
         console.log(projectId, "project check")
      if (response?.success) {
        onUpdateProject(response.data);
        onClose();
      } else {
        console.error("Update failed:", response);
      }
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  return (
    <div className="absolute top-10 left-12 bg-gray-50 text-black w-[1033px] h-[520px] overflow-y-auto rounded py-10 px-14 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-2xl font-semibold">Update Project</h1>
        <button onClick={onClose} className="text-red-500 font-bold text-xl">×</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 px-1">
        <InputField label="Project Name" id="projectName" value={form.projectName} onChange={handleChange} />
        <InputField label="Client Name" id="clientName" value={form.clientName} onChange={handleChange} />
        <InputField label="Client Email" id="clientEmail" value={form.clientEmail} onChange={handleChange} />
        <InputField label="Phone Number" id="clientPhone" value={form.clientPhone} onChange={handleChange} />
        <InputField label="city" id="city" value={form.city} onChange={handleChange} />
        <InputField label="Project Type" id="projectType" value={form.projectType} onChange={handleChange} />
        <InputField label="Budget" id="budget" value={form.budget} onChange={handleChange} />
        <InputField label="Start Date" id="startDate" type="date" value={form.startDate} onChange={handleChange} />
        <InputField label="Last Date" id="dueDate" type="date" value={form.dueDate} onChange={handleChange} />
        <InputField label="description" id="description"  value={form.description} onChange={handleChange} />
        <div>
          <label className="block text-sm font-medium text-gray-700">Status:</label>
          <select
            id="status"
            value={form.status || ""}
            onChange={handleStatusChange}
            className="w-full h-10 border-b border-gray-300 rounded-xs px-1 focus:outline-none focus:border-orange-400 focus:border-b-2"
          >
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="stop">Stopped</option>
          </select>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          />
        </div>
      </div>

      {/* <div className="mt-6">
        <h2 className="uppercase text-2xl font-semibold mb-2 pt-10">Employees in this project:</h2>
        {employees.length === 0 ? (
          <p className="text-gray-500 text-sm">No employees assigned.</p>
        ) : (
          <ul className="space-y-4">
            {employees.map((emp, index) => (
              <li key={emp.id ?? index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  {emp.image ? (
                    <img
                      src={`http://localhost:4500/uploads1/${emp.image}`}
                      alt={emp.employeeName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 mt-1 flex items-center justify-center bg-gray-200 text-xs text-gray-500 rounded-full">
                      {emp.employeeName?.slice(0, 2).toUpperCase() || "NA"}
                    </div>
                  )}
                  <div className="pl-4">
                    <p className="font-medium">{emp.employeeName}</p>
                    <p className="text-xs text-gray-500">{emp.role || "No role"}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}

      <div className="col-span-1 flex justify-end items-end mt-8">
        <Button className="bg-orange-500 hover:bg-orange-600" onClick={updateProject}>
          UPDATE
        </Button>
      </div>
    </div>
  );
}

const InputField = ({ label, id, value, onChange, type = "text" }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 text-start">{label}:</label>
    <Input
      id={id}
      type={type}
      value={value || ""}
      onChange={onChange}
      className="w-full h-10 border-0 border-b border-gray-300 rounded-xs px-1 focus:outline-none focus:border-b-2 focus:border-orange-400"
    />
  </div>
);
