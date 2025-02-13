import { banner } from "@/data/myInfo";
import Image from "next/image";
import LinkToPage from "../LinkToPage/LinkToPage";
import Availability from "../Availability/Availability";

const Banner = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6">
      <div className="w-full relative mt-8">
        <Image
          src={banner.image}
          alt="Profile Picture"
          width={250}
          height={250}
          className="w-72 h-72 object-cover rounded-2xl mx-auto"
        />
        <h1
          data-aos="fade-up"
          className="absolute w-full text-5xl font-bold uppercase -bottom-[58px] text-center text-[90px]"
        >
          {banner.name}
        </h1>
      </div>
      <div className="mt-20">
        <Availability />
      </div>
      <p className="mt-8 max-w-lg">{banner.shortInfo}</p>
      <LinkToPage link="#" text="More About Me" />
    </section>
  );
};

export default Banner;
