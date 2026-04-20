import { useState } from "react";
import {
  LayoutDashboard,
  Repeat,
  Users,
  Sparkles,
  Book,
  Wallet,
  Contact,
  Mic,
  CalendarCheck,
  Triangle,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="hidden lg:block w-64  p-5 bg-white  shadow">
        <Triangle color="#8c24a8" className="align-bottom" />
      <h1 className="font-bold align-text-right text-lg mb-6 text-purple-600"><span>Super Finti</span></h1>

      <div className="space-y-3">
        <p className="text-xs text-black align-text-top">Main Navigation</p>
        <div
          onClick={() => setActive("Dashboard")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Dashboard"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <LayoutDashboard size={18} color="#8c24a8"/>
          <span>Dashboard</span>
        </div>

        <div
          onClick={() => setActive("Transactions")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Transactions"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Repeat size={18} color="#8c24a8"/>
          <span>Transactions</span>
        </div>

        <div
          onClick={() => setActive("Contacts")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Contacts"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Users size={18} color="#8c24a8"/>
          <span>Contacts</span>
        </div>

        <div
          onClick={() => setActive("Features")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Features"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Sparkles size={18} color="#8c24a8"/>
          <span>Features</span>
        </div>

        <div
          onClick={() => setActive("Library")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Library"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Book size={18} color="#8c24a8"/>
          <span>Library</span>
        </div>
        <br></br>
        <p className="text-xs text-black align-text-top">Settings & Schedules</p>
        <div
          onClick={() => setActive("Base Wallet")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Base Wallet"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Wallet  size={18} color="#8c24a8"/>
          <span>Base Wallet</span>
        </div>

            <div
          onClick={() => setActive("My Contacts")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "My Contacts"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Contact  size={18} color="#8c24a8"/>
          <span>My Contacts</span>
        </div>

        <div
          onClick={() => setActive("Invoices")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Invoices"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Mic size={18} color="#8c24a8" />
          <span>Invoices</span>
        </div>
        <div
          onClick={() => setActive("Schedules")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active === "Schedules"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <CalendarCheck  size={18} color="#8c24a8"/>
          <span>Schedules</span>
        </div>
      </div>

      <div className="mt-10 bg-orange-200 p-4 rounded-xl text-center">
        <p className="font-semibold text-sm">Help Center</p>
        <button className="mt-2 bg-white px-3 py-1 rounded-lg text-sm">
          Go
        </button>
      </div>

    </div>
  );
}
