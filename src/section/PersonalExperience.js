import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personal } from '../markdown/projects';
import { MapProject } from './WorkExperience';

function Project({ scrollRef }) {
    return (
        <div ref={(cur) => (scrollRef.current[5] = cur)}>
            <SectionTitle>Project Experience</SectionTitle>
            {MapProject(personal)}
        </div>
    );
}

export default Project;
