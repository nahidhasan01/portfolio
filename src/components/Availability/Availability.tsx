import { banner } from "@/data/myInfo";
import Dot from "../ui/dot";

const Availability = () => {
  return (
    <div>
      {banner.availability === "available" ? (
        <button className="mt-4 bg-[#1c1c1c] px-7 py-4 rounded-full flex items-center gap-3">
          <div className="size-4 flex justify-center items-center rounded-full bg-[#33ff0040] animate-fade-in ">
            <Dot className="bg-green-500" />
          </div>{" "}
          Available For Work
        </button>
      ) : (
        <button className="mt-4 bg-[#1c1c1c] px-7 py-4 rounded-full flex items-center gap-3">
          <Dot className="bg-red-500" /> Unavailable For Work
        </button>
      )}
    </div>
  );
};

export default Availability;
