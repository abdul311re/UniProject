import { useLocation } from "react-router-dom";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
const Projectdetail = ()=>{
  const { state } = useLocation();
  const lead = state?.lead;
    return(<>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Create Project</CardTitle>
        <CardDescription>
          Make changes to your Project here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="projectName">Project Name :</Label>
          <Input id="projectName" placeholder="Project Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientName">Client Name :</Label>
          <Input id="clientName" placeholder="Client Name" defaultValue={lead?.fullName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone :</Label>
          <Input id="phone" placeholder="Phone" defaultValue={lead?.phone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email :</Label>
          <Input id="email" placeholder="Email" defaultValue={lead?.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City :</Label>
          <Input id="city" placeholder="City" defaultValue={lead?.city} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget :</Label>
          <Input id="budget" placeholder="Budget" defaultValue={lead?.budget} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Starting Date :</Label>
          <Input id="startDate" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date :</Label>
          <Input id="dueDate" type="date" />
        </div>
        <div className="space-y-2 md:col-span-3">
          <Label htmlFor="details">Project Details :</Label>
          <textarea
            id="details"
            placeholder="Description"
            defaultValue={lead?.discription}
            className="border w-full p-2 rounded text-sm"
          />
        </div>
      </CardContent>

    </>)
}
export default Projectdetail;