import React, { useContext, useEffect, useState } from 'react'
import { Card, Form, Row,Button } from 'react-bootstrap'
import Select from 'react-select'
import './Edit.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { edituser, getsingleuser } from '../../services/allapi';
import { base_url } from '../../services/base_url';
import { useNavigate, useParams } from 'react-router-dom';
import { updatedata } from '../../Components/contexts/Contextshare';





function Edit() {

  const {id}=useParams()

  const {editdata,seteditdata}=useContext(updatedata)

  const navigate=useNavigate()

  const userdetails=async()=>{
    const {data}= await getsingleuser(id)

    setinputdata(data)
    setstatus(data.status)
    setextimage(data.profile)
  }
   
    const option = [

      { value:'Active', label:'Active' },
  
      { value:'Inactive', label:'Inactive' }
  
    ]
   // state to hold normal inputs
  const [inputdata,setinputdata]=useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    gender:"",
    location:""
  })

  //to hold existing user image

  const [extimage,setextimage]=useState('')
  
  //set status
  const [status,setstatus]=useState("Active")

  //set state

  const [image,setimage]=useState("")

 
   
  //to update input data
  const setinutvalue=(e)=>{

    const {name,value}=e.target

    setinputdata({...inputdata,[name]:value})
  }
  console.log(inputdata);

  //to update status

  const setstatusvalue=(e)=>{
          setstatus(e.value)
  }

  console.log(status);

  //to set image

  const setprofile=(e)=>{
    

    setimage(e.target.files[0])

  
  }

  console.log(image);

  //preview state

  const [preview,setpreview]= useState('')

  useEffect(()=>{
    userdetails()
  },[id])

useEffect(()=>{

  if(image){
    setextimage('')
   setpreview(URL.createObjectURL(image))
  }
},[image])

const handlesubmit = async(e) =>{
  
 e.preventDefault()

 const {fname,lname,email,mobile,gender,location}=inputdata

 if(fname===""){
  
  toast.error("First name required")
 }
 else if(lname===""){
  
  toast.error("Last name required")
 }
 else if(email===""){
  
  toast.error("Email required")
 }
 else if(mobile===""){
  
  toast.error("Mobile number required")
 }
 else if(gender===""){
  
  toast.error("Gender required")
 }
 else if(status===""){
  
  toast.error("status required")
 }
 else if(image===""){
  
  toast.error("Image required")
 }
 else if(location===""){
  
  toast.error("Location required")
 }
 else{
  //toast.success("Registration successfull")
  const data= new FormData()
  data.append("user_profile",image || extimage)
  data.append("fname",fname)
  data.append("lname",lname)
  data.append("mobile",mobile)
  data.append("email",email)
  data.append("gender",gender)
  data.append("location",location)
  data.append("status",status)


  const headerconfig={
       "Content-Type":"multipart/form-data"
  }

  const response= await edituser(id,data,headerconfig)

  //console.log(response);
   
  seteditdata(response.data)

  navigate('/')

 }

};

  
  return (
    <>
      <div className="container mb-5">

        <h2 className='text-center mt-3'>Update Employee Details</h2>

        <Card className='shadow mt-3 p-3'>

          <div className="text-center mb-2">
         <img width={'50px'} height={'50px'} src={preview?preview:`${base_url}/uploads/${extimage}`} alt="" />

          </div>

          <Form>
            <Row>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfirstname">
                <Form.Label>First name</Form.Label>
                <Form.Control onChange={setinutvalue} name='fname' type="text" placeholder="First Name" value={inputdata.fname} />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control onChange={setinutvalue} name='lname' type="text" placeholder="Last Name" value={inputdata.lname} />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={setinutvalue} name='email' type="email" placeholder="@gmail.com" value={inputdata.email} />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control onChange={setinutvalue} name='mobile' type="text" placeholder="Enter your number" value={inputdata.mobile} />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>

                <Form.Check

                  type={'radio'}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  checked={inputdata.gender=='Male'?true:false}
                  onChange={setinutvalue}
                />
                <Form.Check

                  type={'radio'}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  checked={inputdata.gender=='Female'?true:false}
                  onChange={setinutvalue}
                />

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicseect">
                <Form.Label>Select employee status</Form.Label>
                <Select options={option} placeholder={status} onChange={setstatusvalue}>
                  
                </Select>

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicpicture">
                <Form.Label>Choose profile picture</Form.Label>
                <Form.Control  name='user_profile' type="file" onChange={setprofile}  />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Employee location</Form.Label>
                <Form.Control onChange={setinutvalue} name='location' type="text" placeholder="Employee location" value={inputdata.location} />

              </Form.Group>

              <Button onClick={handlesubmit} variant='primary' type='submit'>Submit</Button>

            </Row>
          </Form>




        </Card>

      </div>
      {/* toast*/}
      <ToastContainer position='top-center' autoClose={5000}/>

    </>
  )
  
}

export default Edit
