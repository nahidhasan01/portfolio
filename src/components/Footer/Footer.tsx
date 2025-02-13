import * as FaIcons from "react-icons/fa6";
import { banner, myContacts } from "@/data/myInfo";
import Link from "next/link";
import Availability from "../Availability/Availability";
import MenuBar from "../MenuBar/MenuBar";

const Footer = () => {
  return (
    <footer>
      <div className="bg-hero-pattern bg-cover h-[400px] md:h-[500px] xl:h-[700px] max-h-screen flex flex-col justify-center items-center xl:rounded-[40px] rounded-3xl">
        <Availability />
        <Link
          href={`mailto:${myContacts.email}`}
          className="text-3xl xl:text-[80px] md:text-6xl font-bold mt-5 md:mt-10 uppercase"
        >
          {myContacts.email}
        </Link>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-20">
        <h1 className="text-4xl font-bold uppercase">{banner.brand}</h1>
        <MenuBar className="space-x-1 mt-6" />
        <div className="flex space-x-4 mt-4">
          {myContacts.social.map((social, index) => {
            const IconComponent = FaIcons[social.icon as keyof typeof FaIcons];
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {IconComponent && <IconComponent size={26} />}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
