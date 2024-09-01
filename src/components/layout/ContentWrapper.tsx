import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}
const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white px-[23px] pt-[28px]">{children}</div>
  );
};

export default ContentWrapper;
