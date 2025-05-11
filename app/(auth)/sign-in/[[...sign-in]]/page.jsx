'use client'

import {SignIn, useAuth} from "@clerk/nextjs";

const Page =()=>{
  const {isSignedIn} = useAuth()

  if(isSignedIn){
    return null
  }
  return <SignIn />
  
}

export default Page