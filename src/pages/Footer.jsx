import { MapPin, Phone } from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[var(--color-bc)] text-[var(--color-text)] border-t border-gray-300 opacity-90 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 sm:px-12 md:px-24 lg:px-40 py-10 text-left">

        {/* Contact Info */}
        <div className="flex-1 w-full">
          <h1 className="text-lg sm:text-xl font-bold mb-6">ဆက်သွယ်ရန်</h1>
          <ul className="space-y-5 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-1" />
              <span>
                အမှတ် (၄၂၉) အခန်း (8-A)၊ ကုန်သည်လမ်း (သိမ်ဖြူလမ်းထောင့်)
                ၊ ဗိုလ်တစ်ထောင်မြို့နယ်၊ ရန်ကုန်မြို့။
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0" />
              <span>(09) 252 426 388</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex-1 w-full">
          <h1 className="text-lg sm:text-xl font-bold mb-6">လင့်များ</h1>
          <ul className="space-y-4 text-sm">
            <li className="hover:underline cursor-pointer"> <a href="https://fairway-main-v5kqlh.laravel.cloud/">မူရင်းပင်မစာမျက်နှာ</a></li>
            <li className="hover:underline cursor-pointer">သင်တန်းဆင်းလက်မှတ်စစ်</li>
            <li className="hover:underline cursor-pointer">Facebook Page</li>
            <li className="hover:underline cursor-pointer">စာအုပ်များရယူရန်</li>
          </ul>
        </div>

        {/* Apps */}
        <div className="flex-1 w-full">
          <h1 className="text-lg sm:text-xl font-bold mb-6">Apps</h1>
          <div className="flex justify-start gap-5">
            <FaAndroid className="w-6 h-6 hover:text-green-600 cursor-pointer transition-colors" />
            <FaApple className="w-6 h-6 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div> 
         
      </div>

      {/* Footer Bottom */}
      <footer className="flex flex-col items-start justify-start border-t border-gray-400 py-6 px-6 sm:px-12 md:px-24 lg:px-40">
        <h1 className="text-xs sm:text-sm opacity-80">
          © 2025 Fairway Technology. All rights reserved.
        </h1>
      </footer>
    </div>
  );
}
