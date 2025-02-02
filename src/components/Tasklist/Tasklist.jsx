import React from 'react'
import "./task.css"
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  console.log({data})
  return (
    <div id='tasks' className='h-[55%] mt-10 flex items-center justify-start gap-5 flex-nowrap py-2 w-full overflow-x-auto'>
      { data.tasks.map((ele, idx)=>{
        if(data.active) {
          return <AcceptTask key={idx} data={ele}/>
        }
        if(data.NewTask) {
          return <NewTask key={idx} data={ele}/>
        }
        if(data.CompletedTask) {
          return <CompletedTask key={idx} data={ele}/>
        }
        if(data.FailedTask) {
          return <FailedTask key={idx} data={ele}/>
        }
      }) }

    </div>
  )
}

export default Tasklist