"use client";
import projects from "@/data/project";
import { useParams } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  return (
    <div className="w-11/12 max-w-7xl mx-auto">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
