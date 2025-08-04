import React, { useState } from "react";
import Popover from "./NewTodo";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center  ">
      <div className="w-[90%] bg-gray-50 my-5 relative">
        <div>
          <h1 className="text-center font-bold text-[30px] pt-5">TODO LIST</h1>
        </div>
        <div className="mx-5 border-b py-2">
          <button
            className="p-2 bg-black text-white text-sm rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ADD NEW +
          </button>

          {isOpen && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 z-10">
            <Popover onClose={() => setIsOpen(false)} />
          </div>
          )}
        </div>

        <div className="py-5 mx-5">
          <div className="flex gap-5">
            <div className="bg-white p-2 basis-1/2">
              <div className="border-b">Title :</div>
              <div>description :</div>
              <div className="flex justify-between">
                <div>Date :</div>
                <div>Due Date:</div>
              </div>
            </div>
            <div className="bg-white p-2 basis-1/2">
              <div className="border-b">Title :</div>
              <div>description :</div>
              <div className="flex justify-between">
                <div>Date :</div>
                <div>Due Date:</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Todo;
