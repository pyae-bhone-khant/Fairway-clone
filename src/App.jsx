import Menubar from "./Components/Menubar"
import Herro from "./pages/Herro"
import Footer from "./pages/Footer"
export default function App() {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('https://fairway-main-v5kqlh.laravel.cloud/images/abstract-blur-bg.svg')] ">
      <Menubar />
      <Herro /> 
      <Footer />
    </div>
  )
}