import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import Tag from '../components/Tag';

function ProjectBlock({ data }) {
  const [project, setProject] = useState('');
  fetch(data.md)
    .then((response) => {
      return response.text();
    })
    .then((text) => setProject(text));
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px 0px',
      }}
    >
      <div style={{ width: '250px' }}>
        <p style={{ fontWeight: 500, fontSize: '18px' }}>{data.title}</p>
        <p style={{ fontSize: '14px', color: 'gray' }}>{data.date}</p>
        {data.img ? (
          <div style={{ padding: '10px 0px' }}>
            <img src={data.img} alt={data.title} width="100px" />
          </div>
        ) : (
          <></>
        )}
        <br />
      </div>
      <div style={{ maxWidth: '500px' }}>
        <MarkdownRenderer>{project}</MarkdownRenderer>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '15px',
          }}
        >
          {data.tag?.map((data) => (
            <Tag key={data}>{data}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
