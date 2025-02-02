import React, { useContext } from 'react';
import "../Tasklist/task.css";
import { AuthContext } from '../../context/AuthProvides';

export const AllTask = () => {
  const [user,setUser] = useContext(AuthContext);

  return (
    <div id='scroll' className='bg-[#1c1c1c] ml-10 mr-10 mt-5 h-48 overflow-y-auto'>

      <div className='bg-gray-600 flex justify-between py-4 rounded px-3 mb-1'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h4 className='w-1/5'>Active Task</h4>
        <h4 className='w-1/5'>Completed Task</h4>
        <h4 className='w-1/5'>Failed Task</h4>
      </div>


      {user.map((ele, index) => {
      const newTasks = ele.tasks.reduce((sum, task) => sum + task.new_task, 0);
      const activeTasks = ele.tasks.reduce((sum, task) => sum + task.active, 0);
      const completedTasks = ele.tasks.reduce((sum, task) => sum + task.completed_task, 0);
      const failedTasks = ele.tasks.reduce((sum, task) => sum + task.failed, 0);

  return (
    <div key={ele.id || index} className='bg-[#1c1c1c] flex justify-between py-4 rounded px-3 mb-1 border border-white'>
      <h2 className='w-1/5 font-semibold'>{ele.firstName}</h2>
      <h3 className='w-1/5 font-semibold'>{newTasks}</h3>
      <h4 className='w-1/5 font-semibold'>{activeTasks}</h4>
      <h4 className='w-1/5 font-semibold'>{completedTasks}</h4>
      <h4 className='w-1/5 font-semibold'>{failedTasks}</h4>
    </div>
   );
  })}

      
    </div>
  );
};
