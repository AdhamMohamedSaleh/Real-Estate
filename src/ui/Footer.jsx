import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Deals</h3>
          <p className="text-sm text-gray-400">
            Your trusted platform for premium real estate listings in Egypt and
            beyond.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:underline">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">📍 Aswan, Egypt</p>
          <p className="text-sm text-gray-400">📞 +20 123 456 7890</p>
          <p className="text-sm text-gray-400">✉️ info@quick-deals.net</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              🌐
            </a>
            <a href="#" className="hover:text-blue-400">
              🐦
            </a>
            <a href="#" className="hover:text-blue-400">
              📸
            </a>
            <a href="#" className="hover:text-blue-400">
              📘
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Quick Deals. All rights reserved.
      </div>
    </footer>
  );
}

// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="bg-gray-50 w-full flex justify-between items-center px-20 py-2 shadow-md">
//       <img src={"/logo_black.png"} width={256} height={64} />

//       <h3 className="text-gray-800">
//         © 2025 Property Sorted. All rights reserved.
//       </h3>

//       <div className="flex gap-8">
//         <Link to={"https://www.facebook.com/profile.php?id=100088926761727"}>
//           <img src={"/Facebook.png"} className="w-8 h-8" />
//         </Link>
//         <Link to={"https://www.instagram.com/quickdeals/"}>
//           <img src={"/Instagram.png"} className="w-8 h-8" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Footer;
