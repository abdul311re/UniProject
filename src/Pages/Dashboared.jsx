import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function ConvertedLeads() {
  const [leads, setLeads] = useState([
    { id: 1, label: 'CONVERTED LEADS', value: 0, total: 0 ,path: "/Projects", tab: "account"},
    { id: 2, label: 'PROJECTS in PROGRESS', value: 0, total: 0  ,path: "/Projects",tab: "password"},
    { id: 3, label: 'COMPLETED PROJECTS', value: 0, total: 0 },
    { id: 4, label: 'TASK NOT FINISHED ', value: 0, total: 0 },
  ]);

  const increment = (index) => {
    const newLeads = [...leads];
    newLeads[index].value += 1;
    newLeads[index].total += 1;
    setLeads(newLeads);
  };

  return (
    <div className="bg-gray-50 py-4  px-10">
    <div className="flex gap-4">
      {leads.map((lead, index) => (
           <Link   to={`${lead.path}?tab=${lead.tab}`} key={lead.id} className="flex-1 bg-white px-4 pt-3 rounded-sm shadow-sm border border-gray-200" >
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-normal text-gray-700">{lead.label}</div>
            <div className="text-sm">
              <span className="text-blue-600">{lead.value}</span>
              <span className="text-gray-400">/{lead.total}</span>
            </div>
          </div>
          <div className="relative h-1 w-full bg-gray-200 rounded-full mb-4 mt-2 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${lead.value}%` }}
          ></div>
        </div>
          {/* <button
          onClick={() => increment(index)}
          className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Increment
        </button> */}
        </Link>
      ))}
    </div>
  </div>
  );
}
