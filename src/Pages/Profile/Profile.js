import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Card,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getsingleuser } from '../../services/allapi'
import { base_url } from '../../services/base_url'



function Profile() {

  const {id}= useParams()

  const [userdetail,setuserdetail]=useState({})

  const userdetails=async()=>{
    const {data}= await getsingleuser(id)

    setuserdetail(data)
  }
  useEffect(()=>{
       userdetails()
  },[])

  console.log(userdetail);
  return (
    <>
    <div className="container mb-5">

      <Card className='shadow col-lg-6 mx-auto mt-5'>

        <Card.Body>
          <Row>
            <div className="col">
              <div className="image d-flex justify-content-center">
              <img width={'300px'} height={'275px'} src={`${base_url}/uploads/${userdetail.profile}`}  alt="" />

              </div>
            </div>
          </Row>

          <div className="text-center mt-4">
            <h3 >{`${userdetail.fname} ${userdetail.lname}`}</h3>
            <h5><i  class="fa-solid fa-envelope text-primary fs-3"></i>{userdetail.email}</h5>
            <h5><i  class="fa-thin fa-mobile fs-3 text-primary"></i>:- {userdetail.mobile}</h5>
            <h5><i  class="fa-solid fa-venus-mars text-info fs-3"></i>{userdetail.gender}</h5>
            <h5><i  class="fa-solid fa-location-dot fs-3"></i>{userdetail.location}</h5>
            <h5><i  class="fa-solid fa-chart-line fs-3 text-success me-3"></i>Status: {userdetail.status}</h5>
          </div>

        </Card.Body>

      </Card>

    </div>
    </>
  )
}

export default Profile

//VObANdVX5J3iXt65