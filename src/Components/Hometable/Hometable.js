import React from 'react'
import { Row, Table, Card, Dropdown, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { base_url } from '../../services/base_url';



function Hometable({ displaydata ,deletedid}) {
    console.log(displaydata);
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
                                            <th>No</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Status</th>
                                            <th>Profile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {displaydata.length > 0 ? displaydata.map((item,index) => (

                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{item.fname} {item.lname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.gender}</td>
                                                <td>

                                                        <Badge bg={item.status==='Active'?'primary':'danger'}> {item.status}</Badge>
                                                      
                                                 

                                                </td>

                                                <td>
                                                    <img width={'50px'} height={'50px'} src={`${base_url}/uploads/${item.profile}`} alt="" />
                                                </td>
                                                <td><Dropdown>
                                                    <Dropdown.Toggle variant='light' id="dropdown-classic">
                                                        <i class="fa-solid fa-list-ul"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item> <Link to={`/profile/${item._id}`} className='text-decoration-none'><i class="fa-solid fa-eye text-success fs-5"></i><span className='ms-2' style={{ color: 'black' }}> View</span></Link></Dropdown.Item>
                                                        <Dropdown.Item ><Link to={`/edit/${item._id}`} className='text-decoration-none'><i class="fa-solid fa-pen text-success fs-5"></i><span className='ms-2' style={{ color: 'black' }}>Edit</span></Link></Dropdown.Item>
                                                        <Dropdown.Item ><div>
                                                            <div onClick={()=>deletedid(item._id)}>
                                                            <i class="fa-solid fa-trash text-danger fs-5"></i><span className='ms-2' style={{ color: 'black' }}>Delete</span>

                                                            </div>
                                                        </div></Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                            </tr>
                                        ))
                                            :
                                            <tr className='d-flex justify-content-center'>Sorry Nothing to display</tr>
                                        }

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
