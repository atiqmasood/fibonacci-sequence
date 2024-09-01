import React from "react";

interface HeaderProps {
  logoSrc: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <header className="flex items-center pl-6 py-[19px] bg-primary text-white w-full h-full">
      <img src={logoSrc} alt="Logo" className="h-[42px] w-[42px] mr-[9px]" />
      <div className="md:text-[32px] text-[24px] font-semibold font-sans">
        {title}
      </div>
    </header>
  );
};

export default Header;
