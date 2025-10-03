import { Sun, Moon, Bell, Mail } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../ThemeProvider";
import { Link } from "react-router-dom";

export default function Menubar() {
  const { dark, toggleTheme } = useTheme();
  const [active, setActive] = useState("calendar");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between bg-[var(--color-bc)] text-[var(--color-text)] w-full h-15 items-center px-6 sm:px-40 border border-gray-300">
        {/* Logo */}
        <div>
          <h1 className="text-2xl">Fairway Clone</h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <Link
              to={"/"}
              onClick={() => setActive("calendar")}
              className={`cursor-pointer ${
                active === "calendar"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              ပင်မစာမျက်နှာ
            </Link>
            <Link
              to={"/waitclass"}
              onClick={() => setActive("class-waiting")}
              className={`cursor-pointer ${
                active === "class-waiting"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              အတန်းသစ်စောင့်ရန်
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setActive("contact")}
              className={`cursor-pointer ${
                active === "contact"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              ဆက်သွယ်ရန်
            </Link>
          </ul>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Icons */}
        <div className="hidden sm:flex gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full hover:bg-[--color-card-hover] transition"
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

        {/* Profile */}
        <div className="hidden sm:block">
          <h1 className="cursor-pointer">ဝင်မည်</h1>
        </div>
      </div>

      {/* Mobile slide-over menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-0 right-0 w-64 h-full bg-white p-6 shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-6 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              ✕
            </button>

            <ul className="space-y-4">
              <Link
                to={"/"}
                onClick={() => {
                  setActive("calendar");
                  setMenuOpen(false);
                }}
                className={`block ${
                  active === "calendar"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                ပင်မစာမျက်နှာ
              </Link>
              <Link
                to={"/waitclass"}
                onClick={() => {
                  setActive("class-waiting");
                  setMenuOpen(false);
                }}
                className={`block ${
                  active === "class-waiting"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                အတန်းသစ်စောင့်ရန်
              </Link>
              <Link
                to={"/contact"}
                onClick={() => {
                  setActive("contact");
                  setMenuOpen(false);
                }}
                className={`block ${
                  active === "contact"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                ဆက်သွယ်ရန်
              </Link>
            </ul>

            {/* Profile + Icons inside mobile menu */}
            <div className="mt-6 space-y-4">
              <h1 className="cursor-pointer">ဝင်မည်</h1>
              <div className="flex gap-4">
                <button
                  onClick={toggleTheme}
                  className="rounded-full hover:bg-[--color-card-hover] transition"
                >
                  {dark ? (
                    <Sun className="w-6 h-6 text-gray-800" />
                  ) : (
                    <Moon className="w-6 h-6 text-gray-800" />
                  )}
                </button>
                <Bell className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
