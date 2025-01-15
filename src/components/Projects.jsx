import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center"
          >
            <div className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
              >
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              </a>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-sky-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
