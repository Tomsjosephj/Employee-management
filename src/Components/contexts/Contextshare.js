
import React, { createContext, useState } from 'react'
export const adddata=createContext()
export const updatedata= createContext()
export const deleteduserdata=createContext()

function Contextshare({children}) {
    const[useradd,setuseradd]= useState("")

    const [editdata,seteditdata]=useState('')

    const [deletedata,setdeletedata]=useState('')

  return (
    
        <>
      <adddata.Provider value={{useradd,setuseradd}}>
      <updatedata.Provider value={{editdata,seteditdata}}>
        <deleteduserdata.Provider value={{deletedata,setdeletedata}}>
      {children}

      </deleteduserdata.Provider>

      </updatedata.Provider>

      </adddata.Provider>
    </>
      
    
  )
}

export default Contextshare






