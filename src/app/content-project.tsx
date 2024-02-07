"use client";

import Image from 'next/image';
import { Project } from './model';

export default function ProjectContainer({ project }: { project: Project }) {
  return  <div className="projects-container">
    <div className="project-box">
      <div><h3>{project.title}</h3></div>
      <div className="project-details">
        <div className="project-img">
          <Image
            src={`/images/${project.image.imgName}`}
            alt={project.image.imgAlt}
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="project-skills-status-wrapper">
          <div><b>Project status</b> <div><span>{project.projectStatus}</span></div></div>
          <div>
            <b>Skills used</b>
            <div>
              {
                project.skills.map((skill, i) => <span key={i}>{skill}</span>)
              }
            </div>
          </div>
          <div>
            <b>Link</b>
            <ul>
              {
                project.link.map((l, i) => <li key={i}><a key={i} href={l.href}>{l.text}</a></li>)
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="project-description">
        {project.description}
      </div>
    </div>
  </div>;
}