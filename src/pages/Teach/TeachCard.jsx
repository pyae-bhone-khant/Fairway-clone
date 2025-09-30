import React from "react";
import Tabs from "../../Components/Navbar";

const courses = [
  {
    id: 1,
    title: "Programming Basic (Weekends)",
    level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",

    batch: "PBE-4",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 15:00",
    startDate: "Jul 12, 2025",
    status: "အသေးစိတ်ကြည့်ရန်",
    progress: 0,
    totalWeeks: 12,
    color: "bg-blue-400 text-white font-bold",
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/yoZOEib0uK5gnfXmqoVorfLeYI7KaWwfE8hvwc0U.jpg",
  },
  {
    id: 2,
    title: "Programming Basic (Weekdays)",
    level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
   
    batch: "PBD-5",
    duration: "8 weeks",
    schedule: "Monday, Tuesday, Wednesday at 13:00",
    startDate: "Jul 28, 2025",
    status: "အသေးစိတ်ကြည့်ရန်",
    progress: 0,
    totalWeeks: 8,
    color: "bg-green-100 text-green-700",
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/yuvgcPbhBpaiWgyhfpwXCCKlCcdxkvJryTe7FrDi.jpg",
  },
  {
    id: 3,
    title: "Professional Web Developer 1 (Online)",
    level: "ကျွမ်းကျင်အဆင့် ",
    levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",
    
    batch: "PWD-1-O-2",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 15:00",
    startDate: "Aug 9, 2025",
    status: "လူပြည့်သွားပါပြီ",
    progress: 3,
    totalWeeks: 12,
    color: "bg-red-100 text-red-700",
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/tpDHYKen4C9JFpM5PWWJMrJOxZW8ghuWEhGDDp9S.jpg",
  }, 
  {
    id: 4,
    title: "Programming Basic (weekends)",
  
    level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
   
    batch: "PBE-5",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 13:00",
    startDate: "Aug 16 , 2025",
    status: "အသေးစိတ်ကြည့်ရန်",
    progress: 8,
    totalWeeks: 12,
    color: "bg-blue-400 text-white font-bold",
   
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/yoZOEib0uK5gnfXmqoVorfLeYI7KaWwfE8hvwc0U.jpg",
  },
  {
    id: 5,
    title: "Professional Web Developer 2 (Online)",
    level: "ကျွမ်းကျင်အဆင့် ",
    levelcolor: "px-1 py-1 border border-blue-600   bg-blue-100 text-blue-700 bg-opacity-2 ",
   

    batch: "PWD-2-O-1",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 08:00",
    startDate: "Aug 16, 2025",
    status: "လူပြည့်သွားပါပြီ",
    progress: 5,
    totalWeeks: 12,
    color: "bg-red-100 text-red-700",
    
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/iTl8kBBeqhdDKRfcc6xrtQk6TI8YeQGP0A26GMsA.jpg",
  },
  {
    id: 6,
    title: "Professional Web Developer 1 (Online)",
    level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
    
    batch: "PWD-1-O-2",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 15:00",
    startDate: "Aug 9, 2025",
    status: "လူပြည့်သွားပါပြီ",
    progress: 9,
    totalWeeks: 12,
    color: "bg-red-100 text-red-700",
   
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/yuvgcPbhBpaiWgyhfpwXCCKlCcdxkvJryTe7FrDi.jpg",
  },
  {
    id: 7,
    title: "Programming Basic (weekends)",
    level: "အခြေခံအဆင့် ",
    levelcolor: "px-1 py-1 border border-green-600   bg-green-100 text-green-700 bg-opacity-2 ",
    
    batch: "PBD-6",
    duration: "8 weeks",
    schedule: "Monday, Tuesday , Wednesday , at 10:00",
    startDate: "Set 15, 2025",
    status: "လူပြည့်သွားပါပြီ",
    progress: 2,
    totalWeeks: 12,
    color: "bg-red-100 text-red-700",
    
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/lINFZZLhkN8NEukszGB7g4d9BhQa2JmBtc9RSvlS.jpg",
  },
  {
    id: 8,
    title: "Professional Web Developer 1 ",
    level: " အစပြုအဆင့်",
    levelcolor: "px-1 py-1 border border-gray-600    ",

    batch: "PWD-1-O-2",
    duration: "12 weeks",
    schedule: "Saturday, Sunday at 15:00",
    startDate: "Aug 9, 2025",
    status: "အသေးစိတ်ကြည့်ရန်",
    progress: 6,
    totalWeeks: 12,
    color: "bg-blue-400 text-white font-bold",
   
    image: "https://fls-9e54280e-b04d-4956-9a2f-15260199fe02.laravel.cloud/courses/t1WINGshSjQt0TBoLqXkFCzdY8NGoQVwtRAwaX4K.jpg",
  },
];

const CourseCard = () => {
  return (
    <>
      <Tabs />
      <div className="grid grid-cols-1 md:grid-cols-3  justify-start gap-8 mt-10 px-40 ">
        {courses.map((course) => {
          const percentage = Math.round(
            (course.progress / course.totalWeeks) * 100
          );
          return (
            <div
              key={course.id}
              className="w-90 h-120 rounded-2xl bg-white"
            >
              {/* Course Image */} 
              

              <img
                src={course.image}
                alt={course.title}
                className="w-90 h-50 rounded-t-2xl"
              /> 
              <div className="px-4">
                
                    <div className="flex  justify-between mt-2 mb-2 " >
                        <div>

              <h2 className="text-sm  font-bold ">{course.title}</h2>
              <p className="text-sm  text-gray-600">Batch: {course.batch}</p> 
                        </div >  
                        <div  className="flex items-center" >

                        <h1 className={`  text-sm  rounded ${course.levelcolor}`} >{course.level}</h1>
                        </div>
                    </div> 
                    <div className="opacity-50">

              <p className="text-sm py-2">သင်တန်းကြာချိန် - {course.duration}</p>
              <p className="text-sm py-2">အချိန်ဇယား - {course.schedule}</p>
              <p className="text-sm py-2">စရက် - {course.startDate}</p>
                    </div>
                 <div className=" flex justify-center text-center items-center " >

              <span
                className={` flex items-center justify-center  w-100 h-7 rounded text-xs  ${course.color}`}
              >
                {course.status}
              </span>
                 </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>
                    ({course.progress}/{course.totalWeeks} weeks)
                  </span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CourseCard;
