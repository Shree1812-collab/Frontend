import { useState } from "react"
import AddTask from "./AddTask"
import TaskCount from "./TaskCount"
import TaskList from "./TaskList"

function TaskManager() {

  const [tasks, setTasks] = useState([]);
  const addnewTask = (taskObj) => {
      //keep all the old tasks and add the new one at the end
      setTasks([...tasks, taskObj]);
  }

  return (
      <div className='min-h-screen bg-gray-100 p-4 md:p-10'>
          <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
              <header className="bg-blue-600 text-white py-6">
                  <h1 className="text-3xl font-bold text-center tracking-wide">
                      Task Manager
                  </h1>
              </header>

              {/* for mobile and for desktop screens */}
              <div className="flex flex-col lg:flex-row justify-between p-6 gap-6">
                
                  <div className="flex-1 bg-white p-5 rounded-xl border-2 border-dashed border-gray-100">
                      <AddTask addnewTask={addnewTask} />
                  </div>
                  
                  <div className="flex-1 bg-blue-50 p-5 rounded-xl border border-blue-100 flex flex-col justify-center">
                      <TaskCount tasks={tasks} />
                  </div>

                  <div className="flex-1 bg-white p-5 rounded-xl border-2 border-gray-50 shadow-inner max-h-[400px] overflow-y-auto">
                      <TaskList tasks={tasks} />
                  </div>

              </div>
          </div>
      </div>
  )
}

export default TaskManager