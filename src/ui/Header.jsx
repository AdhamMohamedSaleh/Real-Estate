import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="w-full flex justify-between items-center bg-gray-50 px-20 py-4 shadow-md fixed top-0 z-50">
      <Link to="/">
        <img
          src="/logo_black.png"
          alt="logo"
          className="h-16 transition-all duration-300 w-[228px] ease-in-out hover:scale-105"
        />
      </Link>
      <Button variant="default">Contact Us</Button>
    </div>
  );
}

export default Header;
