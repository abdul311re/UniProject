import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import AccountTab from "./AccountTab/AccountTab";
import PasswordTab from "./Pasword/Pasword";
import Completed from "./Completed/Pasword";
import Stopped from "./Stop/Pasword";


export default function TabPanels({ leads }) {
  return (
    <>
      {leads.map((lead) => (
        <TabsContent key={lead.tab} value={lead.tab} className="mt-2">
          {lead.tab === "converted" && <AccountTab />}
          {lead.tab === "progress" && <PasswordTab />}
          {lead.tab === "completed" && <Completed/>}
          {lead.tab === "unfinished" && <Stopped/>}
        </TabsContent>
      ))}
    </>
  );
}
