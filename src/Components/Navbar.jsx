import { useState } from "react";
import { Calendar, Presentation } from "lucide-react";

export default function Tabs() {
  const [active, setActive] = useState("calendar");

  return ( 
    <div className="px-40" >

    <div className="flex gap-8 border-b  items-center border-gray-300 mt-12">
      {/* Tab 1 */}
      <button
        onClick={() => setActive("calendar")}
        className={`flex  cursor-pointer items-center font-bold gap-2 pb-2 transition-colors ${
          active === "calendar"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
      >
        <Calendar className="w-5 h-5" />
        အတန်းသစ်
      </button>

      {/* Tab 2 */}
      <button
        onClick={() => setActive("presentation")}
        className={` cursor-pointer font-bold flex items-center gap-2 pb-2 transition-colors ${
          active === "presentation"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
      >
        <Presentation className="w-5 h-5" />
        သင်ကြားနေဆဲ
      </button>
    </div>
    </div>
  );
}
