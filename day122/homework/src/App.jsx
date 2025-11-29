import Greating from "./components/Greating";
import Card from "./components/Cards";
import MyComponents from "./components/mycomponent";


function App() {
  return ( 
    <>
      <Greating Greating = "luka"/>
      <Card>
        <div>
          <h1>Hello</h1>
          <p>i am Luka</p>
        </div>
      </Card>
      <MyComponents/>
    </>
  );
}

export default App;