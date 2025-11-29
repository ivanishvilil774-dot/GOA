import Name from "./components/Name";
import HelloBUtton from "./components/HelloButton";


function App() {
  function helloFuntions(){
    alert("hello")
  }

  return (  
    <>
      <Name name="luka"/>
      <HelloBUtton helloFuntions={helloFuntions}/>
    </>
  );
}

export default App;