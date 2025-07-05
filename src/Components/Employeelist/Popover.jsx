import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash,faPhone,faEnvelope,faMars } from "@fortawesome/free-solid-svg-icons";
export default function PopoverData({ employee, onClose,handleDelete }) {
  return (
    <>

      {/* Popover Box */}
      <div className="fixed top-[14%] left-[21.3%]  z-50 bg-gray-100 border border-gray-300 rounded shadow-lg p-4 w-[74%] h-[545px] overflow-y-auto ">
        <div className="flex justify-between">
             <p className=" text-lg mb-2 text-black">Personal Info</p>
              <div className="flex gap-3">
                 <button
                  
                  className="mt-1 w-6 h-6  bg-red text-black rounded-full "
                 >
                 <FontAwesomeIcon icon={faPenToSquare} />
                 </button>
                 <button
                  onClick={() => handleDelete(employee.id)}

                  className="mt-1 w-6 h-6  bg-white text-black rounded-full "
                 >
                   <FontAwesomeIcon icon={faTrash} />
                 </button>
                 <button
                  onClick={onClose}
                  className="mt-1 w-6 h-6  bg-white text-black rounded-full "
                 >
                   &#10005;
                 </button>
             </div>   
        </div>
        <div className="bg-white p-5 rounded-lg">
          <p className="text-lg text-black">Basic Information</p>
           <div className="flex">
             <div className="flex flex-row basis-1/2   border-r">
                    <div className="basis-1/3">  
                      {employee.image ? (
                      <img
                        src={`http://localhost:4500/uploads1/${employee.image}`}
                        alt={employee.fullName}
                        className="w-32 h-32 rounded-full object-cover mt-6 border ring-1 ring-gray-300"
                      />
                    ) : (
                      <div className="w-32 h-32 mt-4 flex items-center justify-center bg-gray-200 text-xs text-gray-500 rounded-full">
                        {employee.fullName?.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    </div>
                    <div className="basis-2/3 pt-4">
                      <p className="text-xl text-black">{employee.fullName}</p>
                      <p className="pt-1">{employee.phone}</p>
                      <div className="pt-3 flex flex-col gap-2">
                        <p className="uppercase text-xs"><span className="pr-3"><FontAwesomeIcon icon={faMars} style={{color:"gray"}} /></span>{employee.gender}</p>
                        <p className="text-xs"><span className="pr-3 "><FontAwesomeIcon icon={faEnvelope} style={{color:"gray"}} /></span>{employee.email}</p>
                        <p className="text-xs"><span className="pr-3 "><FontAwesomeIcon icon={faPhone} style={{color:"gray"}} /></span>{employee.phone}</p>
                      </div>
                    </div>
             </div>
             <div className="basis-1/2 flex p-5">
               <div className="basis-1/3 flex flex-col gap-2 text-black">
                <p>Employement ID :</p>
                <p>Nationality :</p>
                <p>City :</p>
                <p>Job Role :</p>
                <p>Joining Date :</p>
               </div>
               <div className="basis-2/3 flex flex-col gap-2">
               <p>{employee.employeeId}</p>
                <p>{employee.nationality}</p>
                <p>{employee.city}</p>
                <p>{employee.jobTitle}</p>
                <p>{employee.date}</p>
               </div>
             </div>
           </div>
        </div>
        <div className="flex mt-2 gap-2">
          <div className="basis-1/2 rounded-lg  bg-white p-5">
           <p className="text-lg text-black">Address</p>
          <div className="flex">
            <div className="flex flex-col gap-2 py-4 text-black basis-1/3">
               <p className="pt-2">City :</p>
               <p>Nationality :</p>
               <p>Address :</p>
            </div>
           <div className="flex flex-col gap-2 py-4  basis-2/3 ">
               <p className="pt-2">{employee.city}</p>
               <p>{employee.nationality}</p>
               <p>{employee.address}</p>
           </div>
          </div>
          </div>
         <div className="basis-1/2 rounded-lg  bg-white p-5">
          <p className="text-lg text-black">Emergency Contact</p>
          <div className="flex">
            <div className="flex flex-col gap-2 py-4 text-black basis-1/3">
               <p className="pt-2">Name :</p>
               <p>Gender :</p>
               <p>Phone number :</p>
            </div>
           <div className="flex flex-col gap-2 py-4  basis-2/3 ">
               <p className="pt-2">{employee.fullName}</p>
               <p>{employee.gender}</p>
               <p>{employee.phone}</p>
           </div>
          </div>
         </div>
        </div>
        <div className="flex mt-4 ">
          <div className="bg-white rounded-lg w-full flex items-center justify-center">
              {employee.resume ? (
          <embed
            src={`http://localhost:4500/uploads/${employee.resume}#toolbar=0`}
            title="application/pdf"
            width="83%"
            height="400px"
            className="rounded mt-4"
            style={{ border: "none", backgroundColor: "white" }}
          />
        ) : (
          <p className="text-gray-400 text-sm">No resume uploaded</p>
        )} 
          </div>
        </div>
      </div>
    </>
  );
}
