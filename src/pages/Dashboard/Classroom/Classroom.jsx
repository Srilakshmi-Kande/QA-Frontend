import React from 'react'
import { useNavigate } from 'react-router-dom'

const Classroom = () => {

    const navigate = useNavigate();

  return (
    <div className='w-full h-screen'>
      <div className='h-1/2 w-full md:w-2/3 md:m-auto'>
        <div className="p-8 space-y-8 min-h-screen">
          <div className='bg-white text-fuchsia-900 p-8 rounded-xl shadow-lg flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Class Room</h1>
            <p>Welcome, user</p>
          </div>
          <div className='bg-white text-fuchsia-900 p-8 rounded-xl shadow-lg'>
            <p className='m-2'>If you have any doubts you can ask your profeesor. Add your doubt and post it to your professor.</p>
            <div className='w-full flex justify-between items-center flex-wrap gap-5'>
                <input placeholder='Enter your query...' className='w-2/3 border-2 border-fuchsia-900 p-2.5 rounded-lg'  />
                <button className='bg-fuchsia-900 text-white font-semibold rounded-lg p-3 tracking-wide sm:w-1/4'>Post</button>
            </div>
          </div>
          <div className='bg-white text-fuchsia-900 p-8 rounded-xl shadow-lg flex justify-between items-center flex-wrap gap-5'>
            <p>No Questions</p>
          </div>
          <button className='bg-red-700 text-white font-semibold rounded-lg p-3 tracking-wide' onClick={() => navigate("/dashboard")}>Leave ClassRoom</button>
        </div>
      </div>
    </div>
  )
}

export default Classroom
