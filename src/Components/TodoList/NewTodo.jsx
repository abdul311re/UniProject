import { useState } from 'react';
import { Label } from '@/components/ui/label';

const Popover = () => {
  const [form, setForm] = useState({
    topic: '',
    description: '',
    startDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-white w-[500px] rounded shadow p-6">
      <div className="text-center text-xl font-semibold pb-4">
        <h1>NEW TODO</h1>
      </div>

      <div className="space-y-6 mx-4">
        {/* Topic Input */}
        <div className="flex items-center">
          <Label htmlFor="topic" className="text-sm font-medium text-gray-700  min-w-[50px]">
            Topic :
          </Label>
          <input
            id="topic"
            type="text"
            placeholder="Enter Topic"
            value={form.topic}
            onChange={handleChange}
            className="border-b border-black w-52 px-1 py-1 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description Textarea */}
        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700 pr-2">
            Description:
          </Label>
          <div className="w-full border-b border-black">
            <textarea
              id="description"
              placeholder="Enter Description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-1 pt-2 text-sm focus:outline-none resize-none overflow-hidden bg-transparent"
              rows={1}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>
        </div>

        {/* Start Date */}
        <div className="flex items-center gap-4">
  {/* Due Date Input */}
  <Label
    htmlFor="dueDate"
    className="text-sm font-medium text-gray-700 min-w-[80px]"
  >
    Due Date:
  </Label>
  <input
    id="dueDate"
    type="date"
    value={form.dueDate}
    onChange={handleChange}
    className="border-b border-black px-1 py-1 text-sm focus:outline-none focus:border-blue-500"
  />

  {/* Important Checkbox */}
  <Label
    htmlFor="important"
    className="text-sm font-medium text-gray-700 pl-4"
  >
    Important:
  </Label>
  <input
    id="important"
    type="checkbox"
    checked={form.important}
    onChange={(e) => setForm({ ...form, important: e.target.checked })}
    className="w-4 h-4 focus:ring-2 focus:ring-blue-500"
  />
</div>

      </div>
      <button className='absolute top-6 right-10'>Close</button>
    </div>
  );
};

export default Popover;
