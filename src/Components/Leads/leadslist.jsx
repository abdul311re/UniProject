import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET, REMOVE } from "../../apicontroll/apicontrollp";
import Filters from './Filters'
import LeadsTable from "./leadstable";
 const Leadslist = () => {
  const [leads, setLeads] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const handleRoleChange = (e) => setSelectedRole(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  const loadLeads = async () => {
    try {
      const res = await GET("leads");
      setLeads(res.reverse());
    } catch (err) {
      console.error("Failed to load leads", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this leads?")) return;
    try {
      await REMOVE("leads", id);
      await   loadLeads();
    } catch (err) {
      console.error("Failed to delete leads", err);
    }
  };

  useEffect(() => {
    loadLeads();
   
  }, []);
  const handleNavigate = (lead) => {
    navigate("/Projects", { state: { lead } });
  };
  const filteredLeads = leads.filter((leads) => {
    const matchRole = selectedRole ? leads.jobTitle === selectedRole : true;
    const matchStatus = selectedStatus ? leads.status === selectedStatus : true;
    return matchRole && matchStatus;
  });



  return (
    <div>
        <div className="bg-white">
      <div className="border-b border-grey p-5">
        <button className="bg-black text-white py-[6px] px-3 rounded tracking-widest uppercase text-sm">
          New Lead
        </button>
      </div>
      <Filters
        selectedRole={selectedRole}
        selectedStatus={selectedStatus}
        handleRoleChange={handleRoleChange}
        handleStatusChange={handleStatusChange}
      />
      <LeadsTable
        leads={filteredLeads}
        handleDelete={handleDelete}
        handleNavigate={handleNavigate}
      />
    </div>
    </div>
  );
}
export default Leadslist;