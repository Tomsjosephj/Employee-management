import React from 'react'
import './Home.css'
import { Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../../Components/Hometable/Hometable'



function Home() {
 
const navigate= useNavigate()

const adduser=()=>{
  navigate('/register')
}

  return (
    <>
    <div className='container mt-5'>
      <div className="mainly">
      <div className="main">
      
        <div className="searchadd d-flex justify-content-between">
            <div className="search col-lg-6 ">
              <form className='d-flex' >
              <Form.Control className='me-2' type="text" placeholder="Search here" />
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
           <Hometable />
      </div>


      </div>

     
      
    </div>
    </>
  )
}

export default Home
