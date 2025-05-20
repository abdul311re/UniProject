import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoList';

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = () => {
    if (input.trim() === '') return;

    if (editingId !== null) {
      // Update existing task
      setTasks(
        tasks.map((task) =>
          task.id === editingId ? { ...task, text: input.trim() } : task
        )
      );
      setEditingId(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }

    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setInput(task.text);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">📝 To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        />
        <button
          onClick={addOrUpdateTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer flex-1 ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {task.text}
            </span>
            <div className="flex space-x-2 ml-2">
              <button
                onClick={() => startEditing(task)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                ✏
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
