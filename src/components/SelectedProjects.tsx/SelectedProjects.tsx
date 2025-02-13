import projects from "@/data/project";
import LinkToPage from "../LinkToPage/LinkToPage";
import Card from "../ui/card";

const SelectedProjects = () => {
  return (
    <section className="py-10 px-16 shadow-[0px_-1px_0px_0px_#202020a6] rounded-[120px] mb-20">
      <div className="flex justify-between">
        <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-4 h-fit">
          Selected Projects
        </h4>
        <LinkToPage link="/projects" text="More Projects" />
      </div>
      <div className="mt-8">
        {projects.slice(0, 3).map(({ id, title, videoLinks, tags }, i) => (
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
  );
};

export default SelectedProjects;
