function Footer() {
  return (
    <div className="bg-gray-50 w-full flex justify-between items-center px-20 py-2 shadow-md">
      <img src={"/logo_black.png"} width={256} height={64} />

      <h3 className="text-gray-800">
        © 2025 Property Sorted. All rights reserved.
      </h3>

      <div className="flex gap-2">
        <img src={"/Facebook.png"} width={32} height={32} />
        <img src={"/Instagram.png"} width={32} height={32} />
      </div>
    </div>
  );
}

export default Footer;
