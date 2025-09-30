 import { MapPin, Phone, Truck } from "lucide-react";
 
 
 export default function Contact() {
    return ( 
        <>
        <div className="w-375 h-full px-4 py-4 bg-blue-100 mt-4 m-4">
            <div className="">
                <h1 className="text-xl ">ဆက်သွယ်ရန် </h1>
                <h1 className="text-2xl mt-8" >Fairway Technology </h1> 
                <div className="flex gap-4 mt-8 text-blue-500">
                    <MapPin  className="w-5 h-5 mt-1"/> 
                   <h1> အမှတ် (၄၂၉) အခန်း (8-A)၊ ကုန်သည်လမ်း (သိမ်ဖြူလမ်းထောင့်)၊ ဗိုလ်တစ်ထောင်မြို့နယ်၊ ရန်ကုန်မြို့။  </h1> 
                </div> 
                <div className="mt-8 flex gap-4 text-blue-500 ">
                    <Phone className="w-5 h-5 mt-1" />
                   <h1>  09 252 426 388  </h1>
                </div> 
                <div className="flex flex-col mt-8">
                    <div className="flex gap-4">

                    <Truck className="w-5 h-5 mt-1 text-blue-500" /> 
                    <h1 className="text-blue-500">ကြယ်ငါးပွင့်မှတ်တိုင် (သိမ်ဖြူလမ်း)</h1>
                    </div>
                     <div className="flex items-center text-center gap-8 mt-3 pl-10  text-amber-900">
                        <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">25</span>
                        <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">34</span>
                        <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">45</span>
                        <span className="flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">64</span>

                     </div> 

                </div> 
                <div className="mt-8 mb-8"> 
                    <div className="flex gap-4">

                    <Truck className="w-5 h-5 mt-1 text-blue-500" /> 
                    <h1 className="text-blue-500">ဘိုကလေးစျေးမှတ်တိုင် (ကုန်သည်လမ်း)</h1> 
                    </div> 
                     <div className="flex items-center text-center gap-8 mt-3 pl-10  text-amber-900" >

                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full" >3</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">7</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">20</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">31</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">56</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">70</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">81</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">82</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">89</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">98</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">110</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">111</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">112</span>
                    <span className=" flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">113</span>
                     </div>
                </div>
            </div>
        <div class="">
  <iframe
  className="w-150 h-100 rounded-2xl"
    src="https://www.google.com/maps?q=16.772132,96.156969&z=17&output=embed"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
        </div> 
        </>
    )
}