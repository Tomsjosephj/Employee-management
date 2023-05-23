import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loadingicon() {
  return (
    <div className='text-center mt-5 pt-5'>
      <Spinner animation="border" variant="primary" /> Loading...
    </div>
  )
}

export default Loadingicon
