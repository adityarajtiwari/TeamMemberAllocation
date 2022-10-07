import React from 'react'

const Header = ({
  SelectedTeam,
  teamMemberCount,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h1>Team Member Allocation </h1>
          <h3>{SelectedTeam} has {teamMemberCount} Members  </h3>
        </div>
      </div>
    </div>
  )
}

export default Header