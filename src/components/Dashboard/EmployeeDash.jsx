import React from 'react'
import {Header} from "../other/Header"
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../Tasklist/Tasklist'

export const EmployeeDash = (props) => {
  return (
    <div className='bg-[#1C1C1C] p-20 h-screen'>
        <Header data={props.data} changeUser = {props.changeUser}/>
        <TaskNumber data={props.data} changeUser = {props.changeUser}/>
        <Tasklist data={props.data} changeUser = {props.changeUser}/>
    </div>
  )
}
