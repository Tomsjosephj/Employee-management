import React from 'react'
import './Register.css'
import { Card, Form, Row,Button } from 'react-bootstrap'
import Select from 'react-select'




function Register() {

  const option = [

    { value:'Active', label:'Active' },

    { value:'Inactive', label:'Inactive' }

  ]
  return (
    <>
      <div className="container mb-5">

        <h2 className='text-center mt-3'>Register Employee Details</h2>

        <Card className='shadow mt-3 p-3'>

          <div className="text-center mb-2">
            <img width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />


          </div>

          <Form>
            <Row>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfirstname">
                <Form.Label>First name</Form.Label>
                <Form.Control name='fname' type="text" placeholder="First Name" />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control name='lname' type="text" placeholder="Last Name" />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="@gmail.com" />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control name='mobile' type="text" placeholder="Enter your number" />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>

                <Form.Check

                  type={'radio'}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                />
                <Form.Check

                  type={'radio'}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                />

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicseect">
                <Form.Label>Select employee status</Form.Label>
                <Select options={option}>
                  
                </Select>

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicpicture">
                <Form.Label>Choose profile picture</Form.Label>
                <Form.Control name='profile' type="file"  />

              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Employee location</Form.Label>
                <Form.Control name='location' type="text" placeholder="Employee location" />

              </Form.Group>

              <Button variant='primary' type='submit'>Submit</Button>

            </Row>
          </Form>




        </Card>

      </div>

    </>
  )
}

export default Register
