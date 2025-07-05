// src/components/leadsloyeeTable.jsx
export default function LeadsTable({ leads, handleDelete,handleNavigate }) {
    return (
      <div className="bg-[#fcf9f9] m-5 overflow-x-auto rounded">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="py-2 px-2 font-medium">ID</th>
              <th className="py-2 px-2 font-medium">Name</th>
              <th className="py-2 px-2 font-medium">Phone</th>
              <th className="py-2 px-2 font-medium">Email</th>
              <th className="py-2 px-2 font-medium">City</th>
              <th className="py-2 px-2 font-medium">Budget</th>
              <th className="py-2 px-2 font-medium">Created lead</th>
              <th className="py-2 px-2 font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-4">
                  No leads records found.
                </td>
              </tr>
            ) : (
              leads.map((leads, index) => {
                return (
                  <tr key={leads.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2">{index + 1}</td>
                    <td className="py-3 px-2">{leads.fullName}</td>
                    <td className="py-3 px-2">{leads.phone}</td> 
                    <td className="py-3 px-2">{leads.email}</td>
                    <td className="py-3 px-2">{leads.city}</td>
                    <td className="py-3 px-2">{leads.budget || "-"}</td>
                    <td className="py-3 px-2">{leads.created_at || "-"}</td>
                    <td className="py-3 px-2"><button onClick={() => handleNavigate(leads)}>Use This Lead</button></td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
  