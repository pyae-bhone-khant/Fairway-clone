import { MapPin, Phone, Truck } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 bg-[var(--color-bc)] text-[var(--color-text)] mt-6 rounded-2xl shadow-sm">
      <div>
        <h1 className="text-xl font-semibold">ဆက်သွယ်ရန်</h1>
        <h1 className="text-2xl font-bold mt-4">Fairway Technology</h1>

        {/* Address */}
        <div className="flex items-start gap-3 mt-6 text-blue-500">
          <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="leading-relaxed text-sm sm:text-base">
            အမှတ် (၄၂၉) အခန်း (8-A)၊ ကုန်သည်လမ်း (သိမ်ဖြူလမ်းထောင့်)၊
            ဗိုလ်တစ်ထောင်မြို့နယ်၊ ရန်ကုန်မြို့။
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 mt-6 text-blue-500">
          <Phone className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm sm:text-base">09 252 426 388</p>
        </div>

        {/* First Stop */}
        <div className="mt-8">
          <div className="flex items-center gap-3 text-blue-500">
            <Truck className="w-5 h-5 flex-shrink-0" />
            <p>ကြယ်ငါးပွင့်မှတ်တိုင် (သိမ်ဖြူလမ်း)</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 pl-8 text-amber-900">
            {["25", "34", "45", "64"].map((num) => (
              <span
                key={num}
                className="flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full text-sm font-medium"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {/* Second Stop */}
        <div className="mt-8">
          <div className="flex items-center gap-3 text-blue-500">
            <Truck className="w-5 h-5 flex-shrink-0" />
            <p>ဘိုကလေးစျေးမှတ်တိုင် (ကုန်သည်လမ်း)</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 pl-8 text-amber-900">
            {[
              "3",
              "7",
              "20",
              "31",
              "56",
              "70",
              "81",
              "82",
              "89",
              "98",
              "110",
              "111",
              "112",
              "113",
            ].map((num) => (
              <span
                key={num}
                className="flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full text-sm font-medium"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <iframe
            className="w-full h-64 sm:h-80 rounded-2xl border-0"
            src="https://www.google.com/maps?q=16.772132,96.156969&z=17&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
