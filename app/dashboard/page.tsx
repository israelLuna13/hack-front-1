"use client"
import Table from "@/components/Table";
import Table2 from "@/components/Table2";
import ModalContainer from "@/components/ui/ModalContainer";
import { useState } from "react";
// import { auth, currentUser } from '@clerk/nextjs/server'


export default function DashboardPage() {

  const [activeTable,setActiveTable] = useState('')

  const renderTable=()=>{
  switch(activeTable){
    case 'A' : return <Table/>
    case 'B': return <Table2/>
    default : return 'Select table'
  }
}
  //   // Get the Backend API User object when you need access to the user's information
  //const user = await currentUser()

  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  // const { isAuthenticated } = await auth()

  // Protect the route by checking if the user is signed in
  // if (!isAuthenticated) {
  //   return <div>Sign in to view this page</div>
  // }
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
              <button onClick={()=>setActiveTable('A')}>Tabla A</button>
              <button onClick={()=>setActiveTable('B')}>Tabla B</button>
            </div>
          </div>
        </div>
      </div>
      { renderTable()}

      <ModalContainer />
    </>
  );
}
