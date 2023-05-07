import React from 'react'
import { Row, Table, Card, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Hometable() {
    return (
        <>
            <div className="container">
                <Row>
                    <div className="col">
                        <Card>
                            <div className="shadow">
                                <Table className='allign-items-center' responsive="sm">
                                    <thead className='thead-dark'>
                                        <tr className='table-dark'>
                                            <th>ID</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Status</th>
                                            <th>Profile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>Mark</td>
                                            <td><Dropdown>
                                                <Dropdown.Toggle  id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
                                                    
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            </td>
                                            
                                            <td>
                                                <img width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                            </td>
                                            <td><Dropdown>
                                                <Dropdown.Toggle variant='light'  id="dropdown-classic">
                                                <i class="fa-solid fa-list-ul"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item> <Link to={'/profile/1'} className='text-decoration-none'><i  class="fa-solid fa-eye text-success fs-5"></i><span className='ms-2' style={{color:'black'}}> View</span></Link></Dropdown.Item>
                                                    <Dropdown.Item ><Link to={'/edit/1'} className='text-decoration-none'><i class="fa-solid fa-pen text-success fs-5"></i><span className='ms-2' style={{color:'black'}}>Edit</span></Link></Dropdown.Item>
                                                    <Dropdown.Item ><div>

                                                    <i class="fa-solid fa-trash text-danger fs-5"></i><span className='ms-2' style={{color:'black'}}>Delete</span>
                                                        </div></Dropdown.Item>
                                                    
                                                </Dropdown.Menu>
                                            </Dropdown></td>
                                        </tr>

                                    </tbody>

                                </Table>
                            </div>
                        </Card>

                    </div>
                </Row>

            </div>

        </>
    )
}

export default Hometable
