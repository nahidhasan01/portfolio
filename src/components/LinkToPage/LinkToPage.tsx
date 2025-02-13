"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const LinkToPage = ({ link, text }: { link: string; text: string }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      href={link}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="mt-6 font-semibold flex items-center gap-3 mb-16"
    >
      <span
        className={`border-b transition-all ${
          isHovering && "border-transparent"
        }`}
      >
        {text}
      </span>
      <FaArrowRight
        className={`transition-all ${isHovering && "-rotate-[20deg]"}`}
      />
    </Link>
  );
};

export default LinkToPage;
