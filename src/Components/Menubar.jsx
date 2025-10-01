import { Sun,  Moon, Bell, Mail } from "lucide-react"; 
import { useState } from "react";
import { useTheme } from "../ThemeProvider";
import { Link } from "react-router-dom";

export default function Menubar() {  
  const { dark, toggleTheme } = useTheme();
  const [active , setActive] = useState("calendar");

  return ( 
    <div>
      <div className="flex justify-between bg-[var(--color-bc)] text-[var(--color-text)] w-full h-15  items-center px-40 border border-gray-300">
        {/* Logo */}
        <div>
          <h1 className="text-2xl">Fairway Clone</h1>
        </div> 

        {/* Navbar Links */}
        <div>
          <ul className="flex gap-8">
            <Link  to={"/"}
              onClick={() => setActive("calendar")} 
              className={`cursor-pointer ${
                active === "calendar" ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500"
              }`}
            >
              ပင်မစာမျက်နှာ
            </Link> 
            <Link to={"/waitclass"} 
              onClick={() => setActive("class-waiting")} 
              className={`cursor-pointer ${
                active === "class-waiting" ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500"
              }`}
            >
              အတန်းသစ်စောင့်ရန်
            </Link>
            <Link to={"/contact"} 
              onClick={() => setActive("contact")} 
              className={`cursor-pointer ${
                active === "contact" ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-500"
              }`}
            >
              ဆက်သွယ်ရန်
            </Link>
          </ul>
        </div> 

        {/* Icons */}
        <div className="flex gap-4">
          {/* <Moon className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" /> */} 
                     
                      <button
        onClick={toggleTheme}
        className=" rounded-full hover:bg-[--color-card-hover] transition"
      >
        {dark ? (
          <Sun className="w-6 h-6 text-[--color-text]" />
        ) : (
          <Moon className="w-6 h-6 text-[--color-text]" />
        )}
      </button>

          <Bell className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <Mail className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div> 

        {/* Profile / Name */}
        <div>
          <h1 className="cursor-pointer">ဝင်မည်</h1>
        </div>
      </div> 

      {/* Tabs */}
      {/* <Tabs /> */}
    </div>
  );
}
