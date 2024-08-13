import React from 'react';

const ProjectCard = ({ title, description, image, techStack, liveLink, repoLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src={image} alt={title} className="rounded-md mb-4" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex space-x-2 mt-4">
        {techStack.map((tech) => (
          <span key={tech} className="text-sm text-white bg-gray-800 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
      <div className="mt-6 flex space-x-4">
        <a href={liveLink} className="text-blue-500 hover:underline">Live Demo</a>
        <a href={repoLink} className="text-blue-500 hover:underline">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
