import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-50 w-full flex justify-between items-center px-20 py-2 shadow-md">
      <img src={"/logo_black.png"} width={256} height={64} />

      <h3 className="text-gray-800">
        © 2025 Property Sorted. All rights reserved.
      </h3>

      <div className="flex gap-8">
        <Link to={"https://www.facebook.com/profile.php?id=100088926761727"}>
          <img src={"/Facebook.png"} className="w-8 h-8" />
        </Link>
        <Link to={"https://www.instagram.com/quickdeals/"}>
          <img src={"/Instagram.png"} className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
