import { MapPin, Phone} from "lucide-react"; 
import { FaAndroid, FaApple } from "react-icons/fa";



export default function Footer() {
    return (
        <div className=" bg-[var(--color-bc)] text-[var(--color-text)] border w-full h-100 opacity-70 bg-opacity-50 border-t-gray-300 mt-20 border-b-0 "> 
        <div className="flex  justify-between px-40 mt-10  text-center" >

            <div className="w-100  ">
                <h1 className="text-xl font-bold">ဆက်သွယ်ရန်</h1>
                 <div>
                    <ul className="flex flex-col mt-10">
                          <li className="flex  gap-4 text-sm">
                             <MapPin className="w-5 h-5" /> 
                               <span>အမှတ် (၄၂၉) အခန်း (8-A)၊ ကုန်သည်လမ်း (သိမ်ဖြူလမ်းထောင့်)
                                ၊ ဗိုလ်တစ်ထောင်မြို့နယ်၊ ရန်ကုန်မြို့။</span>
                          </li> 
                          <li className="flex gap-4 mt-5">
                             <Phone className="w-5 h-5" /> 
                             <span>(09) 252 426 388</span>
                          </li>
                    </ul>
                 </div>
            </div>  
             <div className="w-100 "> 
                <h1 className="text-xl font-bold">လင့်များ</h1>
                     <div>
                        <ul className="flex flex-col mt-10  items-center text-center justify-start text-sm">
                           <li className="">ပင်မစာမျက်နှာ</li>
                           <li className="mt-5" >သင်တန်းဆင်းလက်မှတ်စစ်</li>
                           <li className="mt-5">Facebook Page</li>
                           <li className="mt-5" >စာအုပ်များရယူရန်</li>
                        </ul>
                     </div>
             </div> 
             <div className="w-100 "> 
                <h1 className="text-xl font-bold" >Apps</h1>
                    <div className="flex justify-center mt-10 gap-3 ">                         
                          <FaAndroid className="w-5 h-5 hover:text-green-600 cursor-pointer" />
                       <FaApple className="w-5 h-5 hover:text-black cursor-pointer" />
                    </div>
             </div>
        </div> 
                        
                    <footer className="flex justify-center flex-col items-center mt-8 ">
                        <div className="border w-310 border-gray-400 opacity-40  "></div>
                        <h1 className="text-sm mt-10" >© 2025 Fairway Technology. All rights reserved. </h1>
                    </footer>
        </div>
    )
}