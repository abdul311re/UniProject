import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  
  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, "").replaceAll("/", "");
  
  const projectTypeRoleMap = {
    web: ["Frontend", "Backend", "Ui&Ux", "Devops", "Contentwriter"],
    app: ["mobile", "frontend", "backend", "uiux"],
    game: ["game", "unity", "unreal", "developer"],
    software: ["software", "backend", "frontend", "devops"],
    uiux: ["designer", "uiux"],
    fullstack: ["fullstack", "frontend", "backend"],
    wordpress: ["wordpress", "designer", "contentwriter"],
    ai: ["ai", "ml", "data", "python"],
    devops: ["devops", "infrastructure", "sysadmin"],
  };
  
  const EmployeeProject = ({
    employees,
    projectType,
    setProjectType,
    selectedEmployees,
    setSelectedEmployees,
  }) => {
    const handleSelectChange = (roleKey, empId) => {
      setSelectedEmployees((prev) => ({
        ...prev,
        [roleKey]: empId,
      }));
    };

    return (
      <>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Add Employee</CardTitle>
          <CardDescription>
            Select a project category to assign developers by role.
          </CardDescription>
        </CardHeader>
  
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project Type Selector */}
          <div className="md:col-span-3">
            <div className="space-y-2 w-80">
              <Label htmlFor="projectCategory">Project Category:</Label>
              <select
                id="projectCategory"
                className="w-full border p-2 rounded"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="">Select Project Type</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="game">Game Development</option>
                <option value="software">Software Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="wordpress">WordPress Development</option>
                <option value="ai">AI / ML Project</option>
                <option value="devops">DevOps / Infrastructure</option>
              </select>
            </div>
          </div>
  
          {/* Role-based dropdowns */}
          {projectType &&
            projectTypeRoleMap[projectType]?.map((roleKey) => {
              const normalizedRoleKey = normalize(roleKey);
              const available = employees.filter((emp) =>
                normalize(emp.jobTitle || "").includes(normalizedRoleKey)
              );
  
              return (
                <div key={roleKey} className="space-y-2 md:col-span-1">
                  <Label>{roleKey} Developer</Label>
                  {available.length > 0 ? (
                    <select
                      className="w-full border p-2 rounded"
                      value={selectedEmployees[normalizedRoleKey] || ""}
                      onChange={(e) =>
                        handleSelectChange(normalizedRoleKey, e.target.value)
                      }
                    >
                      <option value="">Select {roleKey}</option>
                      {available.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                          {emp.fullName || emp.name} — {emp.jobTitle}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No available {roleKey} developers
                    </p>
                  )}
                </div>
              );
            })}
        </CardContent>
      </>
    );
  };
  
  export default EmployeeProject;
  