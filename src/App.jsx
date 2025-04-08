import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "../components/Menubar";
import Woman from "../components/Woman";
import Man from "../components/Man";
import Tech from "../components/Tech";
import Jewelery from "../components/Jewelery";
import Home from "../components/Home";


function App() {

  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/woman" element={<Woman />}/>
        <Route path="/man" element={<Man />}/>
        <Route path="/tech" element={<Tech />}/>
        <Route path="/jewelery" element={<Jewelery />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
