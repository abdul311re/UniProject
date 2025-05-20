import { Input } from "@/components/ui/input";
import { useState } from "react";

const Form = () => {
  const [picture, setPicture] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleFile = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    formData.append("fullName", document.getElementById("fullName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("employeeId", document.getElementById("employeeId").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("bankAccount", document.getElementById("bankAccount").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("nationality", document.getElementById("nationality").value);
    formData.append("jobTitle", document.getElementById("jobTitle").value);
    formData.append("city", document.getElementById("city").value);
    formData.append("workShift", document.getElementById("workShift").value);
    formData.append("salary", document.getElementById("salary").value);
    formData.append("degree", document.getElementById("degree").value);
    formData.append("experience", document.getElementById("experience").value);
    formData.append("date", document.getElementById("date").value);
    formData.append("address", document.getElementById("text-area").value);
    formData.append("employmentType", selectedOption);

    if (picture) {
      formData.append("resume", picture);
    }

    try {
      const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Server Response:", result);
      alert("Submitted successfully!");
      form.reset();
      setPicture(null);
      setSelectedOption("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed!");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-[75%] max-w-5xl p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8  text-gray-800">Employee Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" id="fullName" placeholder="John Doe" />
            <InputField label="Email" id="email" placeholder="john@example.com" />
            <InputField label="Employee ID" id="employeeId" placeholder="EMP12345" />
            <InputField label="Phone No" id="phone" placeholder="0301-2345678" />
            <InputField label="Bank Account No" id="bankAccount" placeholder="Account number" />
            <InputField label="Gender" id="gender" placeholder="Male/Female/Other" />
            <InputField label="Nationality" id="nationality" placeholder="Pakistani" />
            <InputField label="Job Title" id="jobTitle" placeholder="Frontend Developer" />
            <InputField label="City" id="city" placeholder="Lahore" />
            <InputField label="Work Shift" id="workShift" placeholder="Morning/Night" />
            <InputField label="Salary" id="salary" placeholder="50000 PKR" />
            <InputField label="Highest Degree" id="degree" placeholder="BSCS" />
            <InputField label="Experience (Years)" id="experience" placeholder="2" />

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
              <input
                type="date"
                id="date"
                className="w-full h-10 border border-gray-300 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="text-area" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                id="text-area"
                rows="2"
                placeholder="Enter full address"
                className="w-full border border-gray-300 px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="w-full h-10 border border-gray-300 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">-- Select Type --</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="contract">Contract</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF only)</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf"
                onChange={handleFile}
                className="w-full text-sm border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={!picture}
              className={`w-full py-3 text-white rounded-md font-semibold transition ${
                picture
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, id, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <Input
      id={id}
      placeholder={placeholder}
      className="w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

export default Form;
