const ProjectDetails = ({ project }) => {
  const { title, details, videoLinks, tags, industry, date, fullDescription } =
    project;
  return (
    <div className="my-16">
      <h2 className="text-7xl font-bold mb-6 text-center uppercase">{title}</h2>
      <p className="max-w-[600px] mx-auto mb-16 text-center">{details}</p>
      <div className="rounded-[30px] overflow-hidden">
        <div className="overflow-hidden rounded-[30px]">
          <iframe
            src={videoLinks[0]}
            title="YouTube video player"
            className="w-full h-[500px] object-cover transition-all"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-10">
          <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold my-6">
            Details
          </h4>
          <div className="flex gap-2">
            <span className="w-24 mt-4 font-semibold">Services:</span>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-semibold px-6 py-3 rounded-full border "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 my-6">
            <span className="w-24 mt-4 font-semibold">Industry:</span>
            <div className="flex gap-2 flex-wrap">
              {industry.map((tag, i) => (
                <span
                  key={i}
                  className="font-semibold px-6 py-3 rounded-full border "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <span className="w-24 mt-4 font-semibold">Date:</span>
            <span className="font-semibold px-6 py-3 rounded-full border ">
              {date}
            </span>
          </div>
        </div>
        <div className="py-10">
          <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold my-6">
            Overview
          </h4>
          <p className="-tracking-tighter">{fullDescription}</p>
        </div>
        <div className="py-10">
          <h4 className="w-fit px-7 py-3 bg-[#1c1c1c] rounded-full shadow-[0_-1px_0px_0px_#777] font-semibold mt-6 mb-8">
            More Videos
          </h4>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
            {videoLinks.slice(1).map((videoLink) => (
              <div className="overflow-hidden rounded-[30px]">
                <iframe
                  src={videoLink}
                  title="YouTube video player"
                  className="w-full h-[350px] object-cover transition-all"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
