import React, { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  const baseStyles = "px-[17px] py-[11px] font-semibold text-base rounded-xl";

  const styles =
    variant === "primary"
      ? `bg-primary text-white ${baseStyles}`
      : `bg-secondary text-primary border border-primary ${baseStyles}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
