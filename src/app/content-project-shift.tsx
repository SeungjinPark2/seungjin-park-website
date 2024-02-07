"use client";

import { useCallback, useState } from 'react';
import "./content-project-shift.scss";
import { Project } from './model';
import ProjectContainer from './content-project';
import Image from 'next/image';

export default function ProjectShiftContainer({
  projects,
}: Readonly<{
  projects: Project[];
}>) {
  const [index, setIndex] = useState(0);

  const indexManipulation = useCallback((plusOrMinus: 'plus' | 'minus') => {
    if (plusOrMinus === 'plus') {
      if (index < projects.length - 1) {
        setIndex(i => i + 1);
      }
    } else {
      if (index > 0) {
        setIndex(i => i - 1);
      }
    }
  }, [index, projects]);

  return <div className="project-shift-container">
    <div className="button-box">
      <button className="minus" onClick={() => {indexManipulation('minus');}}>
        <Image
          src={"/images/right-arrow.png"}
          alt="arrow img"
          width={30}
          height={30}
        />
      </button>
      <button className="plus" onClick={() => {indexManipulation('plus');}}>
        <Image
          src={"/images/right-arrow.png"}
          alt="arrow img"
          width={30}
          height={30}
        />
      </button>
    </div>
    <ProjectContainer project={projects[index]}/>
  </div>;
}