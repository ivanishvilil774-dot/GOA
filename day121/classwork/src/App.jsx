import MyInfo from "./components/MyInfo";
import Info from "./components/Info";

function App() {
  function Login() {
    return <p>Luka Ivanishvili</p>;
  }

  return (
    <div>
      <MyInfo MyName="Luka" MyLastName="Ivanishvili" MyAcademi="GOA" />
      <Info LogInfo={Login} />
    </div>
  );
}

export default App;
