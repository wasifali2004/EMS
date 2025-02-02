import React from 'react'
import { useState } from 'react'

export const Login = ( {LoginHandle}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const submitted = (e) => {
        e.preventDefault()
        console.log("Email is: ",email)
        console.log("Password is:", password)
        LoginHandle(email, password)
        setemail("")
        setpassword("")
    }


  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2  p-20 rounded-xl border-emerald-600'>
            <form className='flex flex-col items-center justify-center' onSubmit={(e) => { submitted(e)}}>
                <input required type="text" placeholder='Enter your email' className='text-black outline-none bg-transparent py-4 px-8 placeholder:text-white border-emerald-600 text-xl border-2 rounded-full' value={email} onChange={(e) => { setemail(e.target.value)} } />
                <input required type="password" name="" placeholder="Enter password"   className='text-black outline-none bg-transparent py-4 px-8 placeholder:text-white border-emerald-600 text-xl border-2 rounded-full mt-5' value={password} onChange={(e) => { setpassword(e.target.value)} }/>
                <button  className='text-black outline-none py-4 placeholder:text-white bg-emerald-600 text-xl border-none rounded-full mt-6 px-10 '>Login In</button>
            </form>
        </div>
    </div>
    </>
  )
}
