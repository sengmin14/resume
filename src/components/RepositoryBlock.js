import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';
import { FaRegStar } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
const RepositoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  border: solid 1.5px #d0d7de;
  border-radius: 6px;
`;

function RepositoryBlock({ repo }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setData({
          name: res.name,
          description: res.description,
          url: res.html_url,
          stars: res.stargazers_count,
          forks: res.forks,
        });
      });
  }, [repo]);
  return (
    <a style={{ textDecoration: 'none', color: 'inherit' }} href={data.url}>
      <RepositoryDiv style={{ width: '380px' }}>
        <p style={{ fontWeight: 500, fontSize: '18px' }}>{data.name}</p>
        <p>{data.description}</p>
        <div
          style={{
            fontSize: theme.font.small,
            color: 'gray',
            display: 'flex',
            gap: '20px',
          }}
        >
          <div>
            <FaRegStar />
            {data.stars}
          </div>{' '}
          <div>
            <GoRepoForked />
            {data.forks}
          </div>
        </div>
      </RepositoryDiv>
    </a>
  );
}

export default RepositoryBlock;
