import Tabs from "../Components/Navbar"

export default function Herro() {
    return ( 
      <> 
      <Tabs />

        <div className="flex flex-col md:flex-row  justify-start gap-8 mt-10 px-12 md:px-40 ">
            <div className="w-90 h-100 rounded-2xl bg-[var(--color-bc)] text-[var(--color-text)]   ">
                 <img className="w-90 h-50 rounded-t-2xl" src="https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/PdAZUbte8C1W8YFg2N5NZRH2JrGxWIUHdu0FK4Zy.jpg" alt="" />
                 <div className="flex justify-between px-2 py-2">
                    <div>

                 <h1>Computer Basic</h1>
                 <h6 className="text-xs text-gray-400">Batch: cb-4 </h6>
                    </div> 
                    <button className="text-sm text-gray-200 px-3 py-1 rounded-2xl  bg-gray-400">အစပြုအဆင့်</button>

                 </div> 
                 <div className="py-2 px-2 text-gray-500" >
                    <h2>သင်တန်းကာလ 8-weeks</h2>
                    <h2>အချိန်စာရင်း- Monday , Tuesday - at - 10:10</h2>
                    <h2>စရက်- set 19 , 2025</h2>
                 </div>  
                 <div className="flex justify-center mt-3">

                 <div className="flex justify-center py-2 px-2 w-85 p-2 h-8 text-center items-center rounded  bg-blue-400 ">
                 <button className="text-sm text-white font-bold cursor-pointer">အသေးစိတ်ကြည့်ရန်</button>
                 </div>
                 </div>
            </div>
            <div className="w-90 bg-[var(--color-bc)] text-[var(--color-text)]  h-100  rounded-2xl  ">
                 <img className="w-90 h-50 rounded-t-2xl" src="https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/ZuXNIZ8K1UK05BdfMpHhwWgvemE2qnIMFaB3hSob.jpg" alt="" />
                 <div className="flex justify-between px-2 py-2">
                    <div>

                 <h1>Computer Basic</h1>
                 <h6 className="text-xs text-gray-400">Batch: cb-4 </h6>
                    </div> 
                    <button className="text-sm text-gray-200 px-3 py-1 rounded-2xl  bg-gray-400">အစပြုအဆင့်</button>

                 </div> 
                 <div className="py-2 px-2 text-gray-500" >
                    <h2>သင်တန်းကာလ 8-weeks</h2>
                    <h2>အချိန်စာရင်း- Monday , Tuesday - at - 10:10</h2>
                    <h2>စရက်- set 19 , 2025</h2>
                 </div>  
                 <div className="flex justify-center mt-3">

                 <div className="flex justify-center py-2 px-2 w-85 p-2 h-8 text-center items-center rounded  bg-blue-400 ">
                 <button className="text-sm text-white font-bold cursor-pointer">အသေးစိတ်ကြည့်ရန်</button>
                 </div> 
                 </div>
            </div>
        </div>
      </>
    )
}