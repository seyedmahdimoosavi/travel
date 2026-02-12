import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Login from "../../assets/icons/login.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-[60px] py-2 px-7 bg-[#f5f5f5] rounded-[18px] flex justify-between items-center mt-6 mb-10">
      <div className="flex gap-10 items-center">
        <Link to={"/"}>
          <img src={Logo} className="w-full min-w-[58px]" />
        </Link>
        <Link to="/" className="text-[#424242] hover:text-[#424242] whitespace-nowrap">جستجوی بلیط</Link>
        <Link to="/" className="text-[#424242] hover:text-[#424242] whitespace-nowrap">درباره‌ی ما</Link>
        <Link to="/" className="text-[#424242] hover:text-[#424242] whitespace-nowrap">پرسش‌های متداول</Link>
        <Link to="/" className="text-[#424242] hover:text-[#424242] whitespace-nowrap">درباره‌ی ما</Link>
      </div>
      <Link
        to="/register"
        className="flex justify-center items-center text-sm gap-1 w-[162px] h-10 rounded-[14px] bg-black"
      >
        <img src={Login} className="w-5 h-5 relative top-" />
        ورود/ثبت‌نام
      </Link>
    </div>
  );
}
