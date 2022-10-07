import React from 'react'
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Employee({Employee,SelectedTeam,handleEmployeeCardClick,handleTeamChange}) {
    return (
        <div className='container'>
            <div className='row justify-content-center  mt-3 mb-3'>
                <div className='col-8'>
                    <Form.Select size="lg" value={SelectedTeam}
                        onChange={(event) =>handleTeamChange(event)}>
                        <option className='TeamA'>TeamA</option>
                        <option className='TeamB'>TeamB</option>
                        <option className='TeamC'>TeamC</option>
                        <option className='TeamD'>TeamD</option>
                    </Form.Select>
                    <div className='card-collection'>
                        {
                            Employee.map((emp) => (
                                <Card className={(emp.teamName === SelectedTeam ? 'm-2 card-selected' :'m-2')}
                                 style={{
                                    cursor: 'pointer',
                                }}
                                    onClick={()=>handleEmployeeCardClick(emp.id)}
                                >
                                    {
                                        emp.gender === 'Male' ? <Card.Img variant="top" src={maleProfile} /> : <Card.Img variant="top" src={femaleProfile} />
                                    }
                                    <Card.Body>
                                        <Card.Title>
                                            Full Name: {emp.fullName}
                                        </Card.Title>
                                        <Card.Text>
                                            Designation: {emp.designation}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee