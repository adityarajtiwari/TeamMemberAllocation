import React from 'react'
const Footer = () => {
  var date = new Date();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h5>Team Allocation Member App - {
            date.getFullYear()
          }</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer