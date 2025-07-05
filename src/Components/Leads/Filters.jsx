// Filters.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Filters({
  selectedRole,
  selectedStatus,
  handleRoleChange,
  handleStatusChange,
}) {
  return (
    <div className="p-5 flex flex-wrap gap-10">
      {/* Role Filter */}
      <div className="relative w-60">
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          className="border-2 appearance-none rounded border-[#C2BCC4] px-2 w-full py-[5px] pr-10"
        >
          <option value="">Filter by Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="partTime">Part Time</option>
          <option value="contract">Contract</option>
          <option value="intern">Intern</option>
        </select>
        <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>

      {/* Status Filter */}
      <div className="relative w-60">
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="border-2 appearance-none rounded border-[#C2BCC4] px-2 w-full py-[5px] pr-10"
        >
          <option value="">Filter by Status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}
