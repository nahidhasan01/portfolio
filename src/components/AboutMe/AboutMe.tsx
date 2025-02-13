import { aboutMe } from "@/data/myInfo";
import MyStats from "../MyStats/MyStats";

const AboutMe = () => {
  return (
    <div className="my-16">
      <h2 className="text-7xl font-bold mb-6 text-center uppercase">
        About Me
      </h2>
      <p className="max-w-[600px] mx-auto mb-16 text-center">
        {aboutMe.description}
      </p>
      <section className="py-10 px-16 shadow-[0px_-1px_0px_0px_#202020a6] rounded-[120px] mb-20">
        <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-4 mb-8 h-fit">
          More Info
        </h4>
        {aboutMe.moreInfo.map((info, i) => (
          <p key={i} className="mb-3 leading-6">
            {info}
          </p>
        ))}
      </section>
      <MyStats />
      <section className="py-10 px-16 shadow-[0px_-1px_0px_0px_#202020a6] rounded-[120px] mb-20">
        <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-4 h-fit">
          My Expeirence
        </h4>
        {aboutMe.myExperience.map(({ title, duration }, i) => (
          <div
            key={i}
            className="flex justify-between items-center mb-3 mt-8 font-semibold"
          >
            <p>{title}</p>
            <p className="text-[#828282]">{duration}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutMe;
