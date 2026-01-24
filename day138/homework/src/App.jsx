import { Route, Routes } from "react-router-dom";
import Home from "../src/page/Home.jsx"
import About from "../src/page/About.jsx"
import Profile from "../src/page/Profile.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/about" element={<About /> }/>
        <Route path="/profile" element={<Profile /> }/>
      </Routes>
    </>
  );
}

export default App;