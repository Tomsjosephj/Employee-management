import React from 'react'
import './Profile.css'
import { Card,Row } from 'react-bootstrap'



function Profile() {
  return (
    <>
    <div className="container mb-5">

      <Card className='shadow col-lg-6 mx-auto mt-5'>

        <Card.Body>
          <Row>
            <div className="col">
              <div className="image d-flex justify-content-center">
              <img width={'300px'} height={'275px'} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />

              </div>
            </div>
          </Row>

          <div className="text-center mt-4">
            <h3 >Max Miller</h3>
            <h5><i  class="fa-solid fa-envelope text-primary fs-3"></i> Max@gmail.com</h5>
            <h5><i  class="fa-thin fa-mobile fs-3 text-primary"></i>:- 1234567890</h5>
            <h5><i  class="fa-solid fa-venus-mars text-info fs-3"></i>Male</h5>
            <h5><i  class="fa-solid fa-location-dot fs-3"></i>Brooklyn</h5>
            <h5><i  class="fa-solid fa-chart-line fs-3 text-success me-3"></i>Status: Active</h5>
          </div>

        </Card.Body>

      </Card>

    </div>
    </>
  )
}

export default Profile

//VObANdVX5J3iXt65