import React from 'react'
function TaskCount({ tasks }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">

        <h3 className='text-xl font-bold text-blue-600 mb-3'>Total Tasks</h3>
        <p className='text-5xl font-bold text-gray-700'>
            {tasks.length}
        </p>
        {tasks.length === 0 && (
          <p className="text-sm text-gray-400 mt-2 italic font-medium">
            Add some task!
          </p>
        )}
    </div>
  )
}

export default TaskCount