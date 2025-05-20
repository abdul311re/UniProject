import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountTab  from "./AccountTab";
import PasswordTab  from "./Pasword";
import { useSearchParams } from "react-router-dom";

 const TabsDemo = ({}) => {
//   const [activeTab, setActiveTab] = useState("account");
  const [leads, setLeads] = useState([
    { id: 1, label: 'CONVERTED LEADS', value: 0, total: 0 },
    { id: 2, label: 'PROJECTS in PROGRESS', value: 0, total: 0 },
    { id: 3, label: 'COMPLETED PROJECTS', value: 0, total: 0 },
    { id: 4, label: 'TASK NOT FINISHED ', value: 0, total: 0 },
  ]);
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'account';
  const increment = (index) => {
    const newLeads = [...leads];
    newLeads[index].value += 1;
    newLeads[index].total += 1;
    setLeads(newLeads);
  };
  return (
    <div className="flex justify-center items-center px-10 py-2  bg-gray-50">
      <Tabs 
       defaultValue={activeTab}
        className="w-full "
      >
        <TabsList className="grid w-full grid-cols-4 !h-20">
          <TabsTrigger value="account">
          {leads.slice(0,1).map((lead, index) => (
        <div 
          className="flex-1 bg-white px-4 pt-3 rounded-sm shadow-sm border border-gray-200 " 
          key={lead.id}
        >
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
        </div>
      ))}
          </TabsTrigger>
          <TabsTrigger value="password">
          {leads.slice(0,1).map((lead, index) => (
        <div 
          className="flex-1 bg-white px-4 pt-3 rounded-sm shadow-sm border border-gray-200" 
          key={lead.id}
        >
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
        </div>
      ))}
          </TabsTrigger>
          <TabsTrigger value="account">
          {leads.slice(0,1).map((lead, index) => (
        <div 
          className="flex-1 bg-white px-4 pt-3 rounded-sm shadow-sm border border-gray-200" 
          key={lead.id}
        >
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
        </div>
      ))}
          </TabsTrigger>
          <TabsTrigger value="account">
          {leads.slice(0,1).map((lead, index) => (
        <div 
          className="flex-1 bg-white px-4 pt-3 rounded-sm shadow-sm border border-gray-200" 
          key={lead.id}
        >
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
        </div>
      ))}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="mt-10">
          <AccountTab />
        </TabsContent>
        
        <TabsContent value="password"  className="mt-10">
          <PasswordTab />
        </TabsContent>
        <TabsContent value="password"  className="mt-10">
          <PasswordTab />
        </TabsContent>
        <TabsContent value="password"  className="mt-10">
          <PasswordTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default TabsDemo;