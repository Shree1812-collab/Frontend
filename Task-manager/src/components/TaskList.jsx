import React from 'react'

function TaskList({ tasks }) {
return (
    <div className="bg-slate-50 p-6 rounded-lg border border-gray-100">
        <h3 className='text-xl font-bold text-blue-600 mb-4'>Your Tasks</h3>
        
        {/* We use a ternary operator if length is 0, show No tasks, or show the list. */}
        {tasks.length === 0 ? (
            <p className="text-gray-400 italic">No tasks yet</p>
        ) : (
            <ul className="space-y-3">
    
                {tasks.map((taskObj, index) => (
                    <li key={index} className='bg-white p-3 border-l-4 border-blue-500 shadow-sm rounded-r-md flex justify-between items-center animate-fadeIn'>
                        <span className="text-gray-700 font-medium">
                            {taskObj.taskName}
                        </span>
                    </li>
                ))}
            </ul>
        )}
    </div>
)
}

export default TaskList