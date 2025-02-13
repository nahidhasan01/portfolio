import { myStats } from "@/data/myInfo";

const MyStats = () => {
  return (
    <section
      id="counterSection"
      className="py-10 px-16 shadow-[0px_-1px_0px_0px_#202020a6] rounded-[120px] mb-20"
    >
      <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-4">
        My Stats
      </h4>
      <div className="grid grid-cols-3 mt-16">
        {myStats.map(({ title, value }, i) => (
          <div data-aos="zoom-in" key={i} className="text-center">
            <h2 className="text-7xl font-bold mb-4">{value}</h2>
            <p className="font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyStats;
