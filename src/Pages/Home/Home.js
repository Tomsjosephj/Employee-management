import React, { useContext, useEffect, useState, } from 'react'
import './Home.css'
import { Form,Button,Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../../Components/Hometable/Hometable'
import Loadingicon from '../../Components/Spinners/Loadingicon'
import { adddata, deleteduserdata, updatedata } from '../../Components/contexts/Contextshare'
import { ToastContainer} from 'react-toastify';
import { deleteuser, getallusers } from '../../services/allapi'
import Footer from '../../Components/Footer/Footer'



function Home() {

  //state to hold search

  const [search,setsearch]=useState('')

  //to hold allusers

  const [userdata,setuserdata]=useState([])

  const {useradd,setuseradd}= useContext(adddata)

  const {editdata,seteditdata}=useContext(updatedata)

  const {deletedata,setdeletedata}= useContext(deleteduserdata)


  const [showspin,setshowspin]=useState(true)
 
const navigate= useNavigate()

const adduser=()=>{
  navigate('/register')
}

//api call to get allusers data

const getuserdata=async()=>{
 const response= await getallusers(search)

 setuserdata(response.data)

 
}

console.log(userdata);

useEffect(()=>{

  getuserdata()
  setTimeout(() => {
    setshowspin(false)
 
  }, 2000);
},[search])

 //delete user        

 const deleteUser= async(id)=>{

     const response=  await deleteuser(id)

     if(response.status===200){
        getuserdata()

        setdeletedata(response.data)

     }
     else{
      console.log('error');
     }
 }

 



  return (
    <>


    {
      useradd&& <Alert className='text-center' variant="success" onClose={() => setuseradd('')} dismissible>
        {useradd.fname.toUpperCase()} Succesfully Reegistered....
      </Alert>

    }

{
      editdata&& <Alert className='text-center' variant="success" onClose={() => seteditdata('')} dismissible>
        {editdata.fname.toUpperCase()} Edited successfully
      </Alert>

    }

{
      deletedata&& <Alert className='text-center' variant="success" onClose={() => setdeletedata('')} dismissible>
        {deletedata.fname.toUpperCase()} Deleted successfully
      </Alert>

    }






    <div className='container mt-5'>
      <div className="mainly">
      <div className="main">
      
        <div className="searchadd d-flex justify-content-between">
            <div className="search col-lg-6 ">
              <form className='d-flex' >
              <Form.Control onChange={(ev=>setsearch(ev.target.value))} className='me-2' type="text" placeholder="Search here" />
              <Button variant="primary">Search</Button>
              </form>

            </div>
            <div className="add">
            <Button onClick={adduser} variant="success"><i class="fa-solid fa-plus"></i>Add</Button>
            </div>
        </div>


      </div>
       {/*table*/}

       <div className="second-div mt-5">
           {
            showspin?<Loadingicon />:
            
            <Hometable displaydata={userdata}  deletedid={deleteUser} />}
      </div>


      </div>                                          

     
      
    </div>

    <ToastContainer position='top-center' autoClose={3000}/>

    <Footer/>

    </>
  )
}

export default Home
