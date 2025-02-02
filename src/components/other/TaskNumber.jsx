import React from 'react'

const TaskNumber = ({data}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5">
        <div className="rounded-xl bg-yellow-500 py-6 px-8   text-center shadow-lg">
          <h2 className="text-4xl font-bold">{data.new}</h2>
          <h3 className="text-lg font-medium mt-1">New Task</h3>
        </div>
      
        <div className="rounded-xl bg-red-300 py-6 px-8 text-center shadow-lg">
          <h2 className="text-4xl font-bold">{data.active}</h2>
          <h3 className="text-lg font-medium mt-1">Active Task</h3>
        </div>
      
        <div className="rounded-xl bg-blue-400 py-6 px-8 text-center shadow-lg">
          <h2 className="text-4xl font-bold">{data.completed}</h2>
          <h3 className="text-lg font-medium mt-1">Completed Task</h3>
        </div>
      
        <div className="rounded-xl bg-green-400 py-6 px-8 text-center shadow-lg">
          <h2 className="text-4xl font-bold">{data.failed}</h2>
          <h3 className="text-lg font-medium mt-1">Failed Task</h3>
        </div>
      </div>
      
    )
  }

export default TaskNumber