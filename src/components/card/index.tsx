import React from "react";

interface CardProps {
  children: React.ReactNode;
  shadow?: boolean;
  width?: string;  // Tailwind width class, e.g. "w-40"
  height?: string; // Tailwind height class, e.g. "h-60"
}

export const Card: React.FC<CardProps> = ({
  children,
  shadow = true,
  width = "w-40",
  height = "h-60",
}) => {
  return (
    <div
      className={`
        ${width} ${height}
        rounded-xl overflow-hidden bg-gray-800
        transition-transform duration-300
        hover:scale-105
        ${shadow ? "shadow-lg hover:shadow-xl" : ""}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
