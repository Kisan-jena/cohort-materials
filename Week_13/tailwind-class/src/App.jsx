import React from 'react'
import Otp_page from './Otp_page'

const App = () => {
  return (

    //^ Grid  
    <div>
      <Otp_page/>
     <div className='grid grid-cols-4 sm:grid-cols-20 gap-4 px-4 pt-4 pb-4 md:bg-yellow-500 sm:bg-blue-700 bg-red-300 '>
         <h1 className='col-span-4 bg-gray-100 ' >Helllo v4</h1>
         <h1 className='col-span-4 bg-blue-100' >Helllo v4</h1>
         <h1 className='col-span-4 bg-pink-200' >Helllo v4</h1>
         <h1 className='col-span-4 bg-pink-200' >Helllo v4</h1>
         <h1 className='col-span-4 bg-pink-200' >Helllo v4</h1>
     </div>
    </div>

    //^ FLEX
    // <div>
    //   <div className='flex justify-between gap-4 px-4 pt-4 pb-4 container bg-red-500'>
    //     <h1>Helllo v4</h1>
    //     <h1>Helllo v4</h1>
    //     <h1>Helllo v4</h1>
    //   </div>
    // </div>
  )
}

export default App
