import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../contexts/CurrencyContext";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Added icons

export default function Footer() {
  const { currency, setCurrency } = useCurrency();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
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
          <p className="text-sm text-gray-400">📍 Hurghada, Egypt</p>
          <p className="text-sm text-gray-400">📞 +20 123 456 7890</p>
          <p className="text-sm text-gray-400">
            ✉️ Info{" "}
            <a
              href="https://www.quick-deals.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.quick-deals.net
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl mb-4">
            <a
              href="https://www.instagram.com/quickdeals545/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576620510853&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <label
            htmlFor="currency"
            className="text-sm font-semibold block mb-2"
          >
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="text-white bg-gray-800 px-2 py-1 rounded text-sm"
          >
            <option className="text-black" value="USD">
              USD ($)
            </option>
            <option className="text-black" value="EUR">
              EUR (€)
            </option>
            <option className="text-black" value="SAR">
              SAR (ر.س)
            </option>
            <option className="text-black" value="KWD">
              KWD (د.ك)
            </option>
          </select>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Quick Deals. All rights reserved.
      </div>
    </footer>
  );
}
