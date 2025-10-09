 import { Clock, DollarSign ,Info } from "lucide-react";
 import { Plus } from "lucide-react";
 import { Link } from "react-router";
 
 const course2 = [
    { 
        id:1,
        title: "Professional Web Developer 2 (onine)",
        level: "ကျွမ်းကျင်အဆင့်",
    levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",
        week: "12 week",
        prize: "300000 ကျပ် "

    }, 
     { 
        id:2,
        title: "Programming Basic (Weekends) ",
        level: "ကျွမ်းကျင်အဆင့်",
    levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",

        week: "14 week",
        prize: "350000 ကျပ် "

    },
     { 
        id:3,
        title: "Professional Web Developer 1 (onine)",
        level: "ကျွမ်းကျင်အဆင့်",
    levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",

        week: "12 week",
        prize: "300000 ကျပ် "

    },
     { 
        id:4,
        title: "Professional Graphic Design ",
        level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",

        week: "12 week",
        prize: "350000 ကျပ် "

    },
     { 
        id:5,
        title: "Programming Basic (Weekends) ",
        level: "အခြေခံအဆင့်",
       levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
        week: "12 week",
        prize: "300000 ကျပ် "
    },
     { 
        id:6,
        title: "Computer Basic",
        level: "အစပြုအဆင့်",
       levelcolor: "px-1 py-1 border border-gray-600    ",
        week: " 8 week",
        prize: "80000 ကျပ် "

    },
     { 
        id:7,
        title: "Programming Basic (Weekdays)",
        level: "အခြေခံအဆင့်",
       levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
        week: " 8 week",
        prize: "300000 ကျပ် "

    },
     { 
        id:8,
        title: "Professional Web Developer 1 ",
        level: "ကျွမ်းကျင်အဆင့်",
        levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",
        week: "14 week",
        prize: "350000 ကျပ် "

    },
]


export default function NewCLass() {
    return (
        <div > 
            <div className="w-full bg-[var(--color-bc)] text-[var(--color-text)]  h-20 border  md:px-40 items-center  flex  text-center border-gray-300">
                <h1 className=" flex  justify-start items-start px-3 md:items-center md:justify-center sm:text-sm md:text-xl  ">အတန်းသစ်စောင့်ရန်</h1>
            </div>  
            <div className="flex justify-center   " >

            <div className="flex w-200 flex-col h-25 justify-start rounded-2xl  bg-[var(--color-bn)] text-[var(--color-texd)] px-4 py-4  mt-10"> 
                <div className="flex mb-4 ">
               <Info className="w-5 h-5 mt-1  text-white  rounded-full bg-blue-500" />
               <div className="flex flex-col px-2 text-[var(--color-texd)] ">

                <h1 className="text-sm md:text-xl" >တန်းခွဲသစ်များကို စောင့်ဆိုင်းလိုပါက အသုံးပြုန်ရန်ဖြစ်သည်</h1>
                <h1 className="mt-2">မကြာခင်ဖွင့်တော့မည် တန်းခွဲများကို 
                    <Link to={"/"} className="underline text-emerald-900 dark:text-blue-500 cursor-pointer" > ပင်မစာမျက်နှာ  </Link>
                      
                     တွင် ကြည့်ပါ </h1>
               </div>
                </div>
            </div> 
            </div> 
            <div className="flex justify-center  mt-4" >

            <div className="flex bg-[var(--color-bc)] text-[var(--color-text)]  flex-col w-200 h-full rounded-2xl px-8  ">
                <h1 className="mt-5  text-sl opacity-40 ">ရှိသည့်အတန်းများ</h1> 
                <div className="border mt-5 border-gray-400 opacity-50"></div> 
                <div>                     
                  <div className="flex flex-col  mb-4"> 
                 {course2.map((course) => ( 
                    <>
                    <div className="mb-5 mt-4 justify-between flex">
                        <div>

                   <div className="py-2 text-xl" key={course.id}>{course.title}</div> 
                   <div className="flex gap-4 py-2">
                    <h1 className={`px-1 py-1 rounded items-center flex text-center  bg-[var(--color-bc)] text-sm ${course.levelcolor}`} >  {course.level}</h1>
                    <div className="flex gap-1 mt-1" >
                    <Clock className="w-4 h-4 opacity-50 mt-1 text-sm bg-gray-400 rounded-full" />
                    <h1 className="text-sm" >  {course.week}</h1>
                    </div> 
                    <div className="flex gap-1 mt-1">
                    <DollarSign className="w-4 h-4 mt-1 opacity-50 text-sm bg-gray-400 rounded-full" />
                    <h1 className="text-sm" >{course.prize}</h1>
                    </div>
                   </div> 
                        </div>
               <div className="flex items-center justify-center text-center">
                    <button className="flex items-center justify-center text-center gap-2 text-blue-500 border border-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
                      <Plus className="w-4 h-4 mt-1 flex items-center justify-center text-center" />
                      အတန်းသစ်စောင့်ရန်
                    </button>
                  </div>
                </div>         
                <div className="border  border-gray-400 opacity-50"></div> 
                    </>

                  
                             ))}
                      </div>                  
                </div>
            </div> 
            </div>
        </div>
    )
}