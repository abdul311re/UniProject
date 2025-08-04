import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useNavigate } from "react-router-dom";
import useLeads from "./Apitabs";

export default function TabsHeader() {
  const { totalLeads, totalProjects, completedProjects, stopProjects , pendingProjects } = useLeads();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = searchParams.get("tab") || "converted";

  const leads = [
    {
      id: 1,
      label: "CONVERTED LEADS",
      value: totalProjects,
      total: totalLeads,
      tab: "converted",
    },
    {
      id: 2,
      label: "PROJECTS IN PROGRESS",
      value: pendingProjects,
      total: totalProjects,
      tab: "progress",
    },
    {
      id: 3,
      label: "COMPLETED PROJECTS",
      value: completedProjects,
      total: totalProjects,
      tab: "completed",
    },
    {
      id: 4,
      label: "STOPPED PROJECTS",
      value: stopProjects,
      total: totalProjects,
      tab: "unfinished",
    },
  ];

  const handleTabClick = (tab) => {
    navigate(`/Projects?tab=${tab}`);
  };

  return (

      <Tabs defaultValue={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-gray-50 rounded-none px-10  h-26 ">
          {leads.map((lead) => (
            <TabsTrigger
              key={lead.id}
              value={lead.tab}
              onClick={() => handleTabClick(lead.tab)}
              className="p-0 rounded-none w-full h-0"
            >
              <div className="w-full bg-white p-4 rounded-md shadow-sm border hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-gray-600">
                    {lead.label}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {lead.value}
                    <span className="text-gray-400 font-normal">
                      /{lead.total}
                    </span>
                  </p>
                </div>

                <div className="relative h-2 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-300"
                    style={{
                      width: `${lead.total ? (lead.value / lead.total) * 100 : 0}%`,
                    }}
                  ></div>
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
  );
}
