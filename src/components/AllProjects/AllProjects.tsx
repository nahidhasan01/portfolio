import projects, { projectDescription } from "@/data/project";
import Card from "../ui/card";

const AllProjects = () => {
  return (
    <div className="my-16">
      <h2 className="text-7xl font-bold mb-6 text-center uppercase">
        My Portfolio
      </h2>
      <p className="max-w-[600px] mx-auto mb-16 text-center">
        {projectDescription}
      </p>
      <section className="py-10 px-16 shadow-[0px_-1px_0px_0px_#202020a6] rounded-[120px] mb-20">
        <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-4 h-fit">
          My Portfolio
        </h4>
        <div className="mt-8">
          {projects.map(({ id, title, videoLinks, tags }, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className="mb-20"
            >
              <Card
                videoLink={videoLinks[0]}
                title={title}
                tags={tags}
                link={`/projects/${id}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
