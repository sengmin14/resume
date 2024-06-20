import React from 'react';
import RepositoryBlock from '../components/RepositoryBlock';
import SectionTitle from '../components/SectionTitle';
import { studies } from '../markdown/studies';

const MapRepository = (studies) => studies.map((data) => <RepositoryBlock repo={data.repo} key={data.id} />);

function RecentStudy({ scrollRef }) {
    return (
        <div ref={(cur) => (scrollRef.current[3] = cur)}>
            <SectionTitle>Recent Study</SectionTitle>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    padding: '10px 0px',
                }}
            >
                {MapRepository(studies)}
            </div>
        </div>
    );
}

export default RecentStudy;
