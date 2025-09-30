import Menubar from "./Components/Menubar"
import Herro from "./pages/Herro"
import Footer from "./pages/Footer" 
import Tabs from "./Components/Navbar";
import { Routes, Route,  } from "react-router-dom";
import NewCLass from "./pages/Waitnewclass";
import CourseCard from "./pages/Teach/TeachCard";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div className="min-h-screen w-screen  bg-cover bg-center bg-no-repeat bg-[url('https://fairway-main-v5kqlh.laravel.cloud/images/abstract-blur-bg.svg')] ">
      <Menubar /> 
      <Routes>
        <Route path="/"  element={ <Tabs /> } /> 
        <Route path="/waitclass"  element={ <NewCLass /> } /> 
        <Route path="/herro"  element={ <Herro /> } /> 
        <Route path="/teachcard"  element={ <CourseCard /> } /> 
        <Route path="/contact"  element={ <Contact /> } /> 

      </Routes>
      {/* <Herro />  */}
      <Footer /> 
    </div>
  )
}