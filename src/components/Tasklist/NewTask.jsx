import React from 'react'
 
const NewTask = () => {
  return (
    <div className='bg-green-700 w-[300px] rounded-xl flex-shrink-0 h-[100%]'> 
          <div className='flex justify-between py-1 px-1.5 mt-1.5'>
            <h2 className='bg-red-600 py-0.5 px-2 rounded text-white '> High</h2>
            <h3 className='font-semibold'>{data.date}</h3>
          </div>
          <div  className='mt-3 ml-1.5'>
            <h1 className='text-3xl font-semibold'>{data.title}</h1>
            <p className='mt-1.5'>{data.description}</p>
          </div>

          <div className='mt-3.5  flex justify-center'> 
            <button className='py-2 px-4 bg-amber-950 text-white rounded'>Accept Task</button>
          </div>
      </div>
  )
}

export default NewTask