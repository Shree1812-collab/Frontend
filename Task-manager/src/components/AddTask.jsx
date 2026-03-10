import React from 'react'
// We import useForm to handle our input easily without many useStates
import { useForm } from 'react-hook-form' 

function AddTask({ addnewTask }) {
    // register: ties the input field to the form
    // handleSubmit: a special function that validates data before calling our onSubmit
    // reset: a handy function to clear the input box after we click the button
    const { register, handleSubmit, reset } = useForm();

    // This function runs only when the user clicks the "Add Task" button
    const onSubmit = (taskObj) => {
        // taskObj looks like this: { taskName: "Value from input" }
        addnewTask(taskObj); 
        
        // Clear the input box so the user can type a new task immediately
        reset(); 
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-xl font-bold text-blue-600 mb-4'>Add New Task</h2>
                
                <input 
                    type="text" 
                    {...register("taskName", { required: true })} 
                    className='w-full border-2 border-gray-200 p-2 rounded-lg mb-3 focus:outline-none focus:border-blue-400 transition-colors' 
                    placeholder='Add task here...'
                />

                <button 
                    type="submit"
                    className='w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-all active:scale-95 shadow-sm'
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default AddTask