import List from "./components/List";
import TowSection from "./components/Section";
import StudentName from "./components/StudentName";
import Welcome from "./components/Welcome";


function App() {
  const Students = {
    name:"Luka", surname:"Ivanishvili"
  }


  return ( 
    <>
    <StudentName studentsArr={Students}/>
      <Welcome />
      <List />
      <TowSection /> 
    </>
  );
}

export default App;