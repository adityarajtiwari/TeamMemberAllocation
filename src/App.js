import "./styles.css";
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Employeee from "./Employee";
import { useEffect, useState } from 'react'
export default function App() {
  const [SelectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem("SelectedTeam"))||"TeamB");
  const [Employee, setEmployee] = useState(JSON.parse(localStorage.getItem("Employee"))||[{
      id: 1,
      fullName: 'John Doe',
      designation: 'Software Engineer',
      gender: "Male",
      teamName: 'TeamA',
  },
  {
      id: 2,
      fullName: 'Peter Parker',
      designation: "Junior Software Engineer",
      gender: 'Male',
      teamName: 'TeamB',
  },
  {
      id: 3,
      fullName: 'Mary Jane',
      designation: 'Senior Software Engineer',
      gender: 'Female',
      teamName: 'TeamA',
  },
  {
      id: 4,
      fullName: 'Tony Stark',
      designation: 'Node.js Developer',
      gender: 'Male',
      teamName: 'TeamB'
  },
  {
      id: 5,
      fullName: 'Steve Rogers',
      designation: 'React Developer',
      gender: 'Male',
      teamName: 'TeamC',
  },
  {
      id: 6,
      fullName: 'Natasha Romanoff',
      designation: 'Angular Developer',
      gender: "Female",
      teamName: 'TeamC',
  },
  {
      id: 7,
      fullName: 'Bruce Banner',
      designation: 'Vue.js Developer',
      gender: "Male",
      teamName: 'TeamD',
  },
  {
      id: 8,
      fullName: 'Thor Odinson',
      designation: 'Full Stack Developer',
      gender: "Male",
      teamName: 'TeamD',
  },
  {
      id: 9,
      fullName: 'Wanda Maximoff',
      designation: 'Software Engineer',
      gender: "Female",
      teamName: 'TeamC',
  },
  {
      id: 10,
      fullName: 'Clint Barton',
      designation: 'Software Engineer',
      gender: "Male",
      teamName: 'TeamA',
  },
  {
      id: 11,
      fullName: 'T Challa',
      designation: 'Project Engineer',
      gender: "Male",
      teamName: 'TeamB',
  },
  {
      id: 12,
      fullName: 'Natalia Alianovna Romanova',
      designation: 'Software Testing Engineer',
      gender: "Female",
      teamName: 'TeamD',
  },

  ])
  // console.log(SelectedTeam)
  const handleEmployeeCardClick = (e) => {
      console.log(e)
      const transformedEmployee = Employee.map((emp) => 
          emp.id === e ? emp.teamName === SelectedTeam ? { ...emp, teamName: "" } : { ...emp, teamName: SelectedTeam } : emp);
      setEmployee(transformedEmployee);
      console.log(transformedEmployee)
  }
  const handleTeamChange = (e) => {
      setSelectedTeam(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("Employee", JSON.stringify(Employee));
    }, [Employee]);

    useEffect(() => {
        localStorage.setItem("SelectedTeam", JSON.stringify(SelectedTeam));
        console.log()
    }, [SelectedTeam]);
  return (
    <div className="App">
      <Header 
        SelectedTeam={SelectedTeam}
        teamMemberCount={Employee.filter((emp) => emp.teamName === SelectedTeam).length}
      />
      <Employeee Employee={Employee} SelectedTeam={SelectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamChange={handleTeamChange}/>
      <Footer />
    </div>
  );
}
