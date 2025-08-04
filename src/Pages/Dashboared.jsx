import Tabs from "../Components/Projects/TabsDash";
import Calender from "../Components/Dashboared.jsx/Calender";

export default function ConvertedLeads() {
  return (
    <div className="flex flex-col items-start ">
      <div className="w-full">
        <Tabs />
      </div>
      <div className="w-2/3 p-5   bg-gray-50">
        <Calender compact={true} />
      </div>
    </div>
  );
}
