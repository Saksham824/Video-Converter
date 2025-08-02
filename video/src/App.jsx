import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Converter from "./pages/Converter";
import About from "./pages/About";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/converter" element={<Converter/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
