import { checkUser } from '@/lib/checkUser'
import React from 'react'


const MainLayout = async ({ children }) => {
  await checkUser()
  return (


  
    <main className='container mx-auto my-32 '>
     
      {children}
    </main>

  )
}

export default MainLayout