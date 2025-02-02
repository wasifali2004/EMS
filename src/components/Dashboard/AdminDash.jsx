import React from 'react'
import { Header } from '../other/Header'
import CreateTask from '../other/CreateTask'
import { AllTask } from '../other/AllTask'
import "../Tasklist/task.css"

const AdminDash = (props) => {
  return (
    <>
    <div id='roll' className='w-full h-screen p-7'>
    <Header data={props.data} changeUser = {props.changeUser}/>
    <CreateTask data={props.data} changeUser = {props.changeUser}/>
    <AllTask data={props.data} changeUser = {props.changeUser}/>

    </div>
    </> 
   
  )
}

export default AdminDash