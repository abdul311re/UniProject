import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Sales() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Loop over the form fields
    for (let key in data) {
      if (key === "resume") {
        if (data[key]?.[0]) {
          formData.append(key, data[key][0]);
        }
      } else {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await axios.post("employees", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 shadow rounded bg-white space-y-4">
      <h2 className="text-xl font-semibold mb-4">Employee Application</h2>

      <input {...register("fullName")} placeholder="Full Name" className="input w-full" required />
      <input {...register("email")} type="email" placeholder="Email" className="input w-full" required />
      <input {...register("employeeId")} placeholder="Employee ID" className="input w-full" required />
      <input {...register("phone")} placeholder="Phone" className="input w-full" required />
      <input {...register("bankAccount")} placeholder="Bank Account" className="input w-full" required />
      <input {...register("gender")} placeholder="Gender" className="input w-full" required />
      <input {...register("nationality")} placeholder="Nationality" className="input w-full" required />
      <input {...register("jobTitle")} placeholder="Job Title" className="input w-full" required />
      <input {...register("city")} placeholder="City" className="input w-full" required />
      <input {...register("workShift")} placeholder="Work Shift" className="input w-full" required />
      <input {...register("salary")} type="number" placeholder="Salary" className="input w-full" required />
      <input {...register("degree")} placeholder="Degree" className="input w-full" required />
      <input {...register("experience")} placeholder="Experience" className="input w-full" required />
      <input {...register("date")} type="date" className="input w-full" required />
      <input {...register("address")} placeholder="Address" className="input w-full" required />
      <input {...register("employmentType")} placeholder="Employment Type" className="input w-full" required />

      <label className="block">
        <span className="text-gray-700">Resume:</span>
        <input type="file" {...register("resume")} required className="mt-1 block w-full" />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default Sales;
