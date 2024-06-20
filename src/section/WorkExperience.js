import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectBlock from '../components/ProjectBlock';
import { work } from '../markdown/projects';

export const MapProject = (projects) =>
  projects.map((data) => (
    <div key={data.id}>
      <ProjectBlock data={data} />
      {data.id !== projects.length && <hr />}
    </div>
  ));

function Project({ scrollRef }) {
  return (
    <div ref={(cur) => (scrollRef.current[4] = cur)}>
      <SectionTitle>Work Experience</SectionTitle>
      {MapProject(work)}
    </div>
  );
}

export default Project;
