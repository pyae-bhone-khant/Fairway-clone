import { Calendar, Presentation } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Tabs() {
  const location = useLocation();

  return (
    <div className="px-40">
      <div className="flex gap-8 border-b items-center border-gray-300 mt-12">
        {/* Tab 1 */}
        <Link
          to="/herro"
          className={`flex cursor-pointer items-center font-bold gap-2 pb-2 transition-colors ${
            location.pathname === "/herro"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          <Calendar className="w-5 h-5" />
          အတန်းသစ်
        </Link>

        {/* Tab 2 */}
        <Link
          to="/teachcard"
          className={`flex cursor-pointer font-bold items-center gap-2 pb-2 transition-colors ${
            location.pathname === "/teachcard"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          <Presentation className="w-5 h-5" />
          သင်ကြားနေဆဲ
        </Link>
      </div>
    </div>
  );
}
