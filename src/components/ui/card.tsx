"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type CardProps = {
  videoLink: string;
  title: string;
  tags: string[];
  link: string;
};

const Card: React.FC<CardProps> = ({ videoLink, title, tags, link }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="bg-[#1c1c1c] text-white rounded-xl overflow-hidden">
      <div className="overflow-hidden ">
        {/* <Image
          width={200}
          height={200}
          src={imageUrl}
          alt={title}
          className={`w-full h-[500px] object-cover transition-all ${
            isHovering && "scale-110"
          }`}
        /> */}
        <iframe
          src={videoLink}
          title="YouTube video player"
          className="w-full h-[500px] object-cover transition-all"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Link href={link}>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="p-8"
        >
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-semibold px-3 py-1 rounded-full border "
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className={`py-2 px-5 rounded-3xl border transition-all ${
                isHovering && "bg-white text-[#1c1c1c]"
              }`}
            >
              <FaArrowRight
                className={`transition-all ${isHovering && "-rotate-[30deg]"}`}
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
