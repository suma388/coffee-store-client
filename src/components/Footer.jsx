import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 bg-[#F4F3F0] text-[#331A15]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Espresso Emporium</h2>
          <p className="text-sm mb-6 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <FaFacebookF className="text-xl cursor-pointer hover:text-[#C07F50]" />
            <FaTwitter className="text-xl cursor-pointer hover:text-[#C07F50]" />
            <FaInstagram className="text-xl cursor-pointer hover:text-[#C07F50]" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#C07F50]" />
          </div>

          {/* Contact Info */}
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <MdPhone /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Connect with Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md outline-none"
            ></textarea>

            <button
              type="submit"
              className="border border-[#331A15] px-6 py-2 rounded-full hover:bg-[#331A15] hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#331A15] text-white text-center py-4 text-sm">
        Copyright Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
