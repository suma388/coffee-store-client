import { useState } from "react";
import logo from "../assets/H-logo.png";

const Header2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="max-w-18 cursor-pointer">
          <img src={logo} alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
          <li className="hover:text-blue-600 text-xl text-[#646060] transition">
            Home
          </li>
          <li className="hover:text-blue-600 text-xl text-[#646060] transition">
            Services
          </li>
          <li className="hover:text-blue-600 text-xl text-[#646060] transition">
            Doctors
          </li>
          <li className="hover:text-blue-600 text-xl text-[#646060] transition">
            Membership
          </li>
          <li className="hover:text-blue-600 text-xl text-[#646060] transition">
            Contact
          </li>
        </ul>

        {/* CTA Button on Desktop */}
        <div className="hidden md:block md:grid-cols-2">
          <a
            href="#appointment"
            className="bg-gradient-to-r mr-3 border-2 border-[#13763b] px-6 py-3 rounded-full font-semibold hover:from-[#0d5329] hover:to-[#0b4d25] hover:text-white transition"
          >
            Login
          </a>
          <a
            href="#appointment"
            className="bg-gradient-to-r from-[#009e3e] to-[#067e36] text-white px-6 py-3 rounded-full font-semibold hover:from-[#0d5329] hover:to-[#0b4d25] transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-xl md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col text-center gap-6 text-gray-700 font-medium text-base">
            <li className="hover:text-blue-600 transition">Home</li>
            <li className="hover:text-blue-600 transition">Services</li>
            <li className="hover:text-blue-600 transition">Doctors</li>
            <li className="hover:text-blue-600 transition">Membership</li>
            <li className="hover:text-blue-600 transition">Contact</li>
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-5 py-2 rounded-full block mx-auto hover:bg-blue-700 transition"
            >
              Book Appointment
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header2;
