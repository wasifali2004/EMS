import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvides';

const CreateTask = () => {

   const [user,setUser] = useContext(AuthContext);
  const [tasktitle, settasktitle] = useState('')
  const [taskdate, settaskdate] = useState('')
  const [taskname, settaskname] = useState('')
  const [taskassignto, settaskassignto] = useState('')
  const [taskdescription, settaskdescription] = useState('')
  const [task, settask] = useState([])
  
  const submitHandle = (e) => {
    e.preventDefault();
    const newTask = {
      tasktitle,
      taskdescription,
      taskdate,
      active: false,
      new_task: true,
      failed: false,
      completed_task: false,
    };

    settask([...task, newTask]);

    const data = user
    data.forEach((element) => {
      if(element.firstName == taskassignto) {
        element.tasks.push(newTask)
        element.taskNumber.newTask = element.taskNumber.newTask+1;
      }
    });
    setUser(data)
    

    settasktitle("");
    settaskdate("");
    settaskassignto("");
    settaskdescription("");
  }

  return (
    <>
        <div className='flex items-start justify-between bg-[#1c1c1c] rounded p-5 mt-5 mx-10 py-7' >
        <div className='w-1/2'>
            <form onSubmit={(e) => {
              submitHandle(e)
            }}>

                <h2 className='text-gray-300 mb-1.5 '>Task Title</h2>
                <input type="text"  placeholder='Make a UI design' className='text-sm py-1 px-2 rounded outline bg-transparent w-3/5 border-[1px] mb-4' value={taskname} onChange={(e) => {
                  settaskname(e.target.value)
                }}/>

                <h2 className='text-gray-300 mb-1.5'>Date</h2>
                <input type="date" placeholder='dd/mm/yyyy' className='text-sm py-1 px-2 rounded outline bg-transparent w-3/5 border-[1px] mb-4' value={taskdate} onChange={(e) => {
                  settaskdate(e.target.value)
                }}/>

                <h2 className='text-gray-300 mb-1.5'>Assign To</h2>
                <input type="text" placeholder='Employee name' className='text-sm py-1 px-2 rounded outline bg-transparent w-3/5 border-[1px] mb-4' value={tasktitle} onChange={(e) => {
                  settasktitle(e.target.value)
                }}/>

                <h2 className='text-gray-300 mb-1.5'>Category</h2>
                <input type="category" placeholder='design,dev,etc' className='text-sm py-1 px-2 rounded outline bg-transparent w-3/5 border-[1px] mb-4' value={taskassignto} onChange={(e) => {
                  settaskassignto(e.target.value)
                }}/>

                <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm ml-50 mt-9 font-semibold'>Create Task</button>

            </form>
        </div>

        <div className='flex items-start flex-col x-2/5 w-[40%] '>
            <h2 className='text-gray-300 mb-1.5'>Description</h2>
            <textarea name="" id="" className='h-44 w-full py-2 px-4 rounded mt-2 outline-none bg-transparent border-[1px] border-gray-400 ' value={taskdescription} onChange={(e) => {
                  settaskdescription(e.target.value)
                }}></textarea>
        </div>
    </div>
    
    </>    
  )
}

export default CreateTask