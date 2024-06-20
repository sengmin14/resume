import React from 'react';
import theme from '../assets/theme';
import styled from 'styled-components';

const Title = styled.div`
  padding: 50px 0px 10px 0px;
  font-size: ${theme.font.big};
  font-weight: 500;
`;

function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}

export default SectionTitle;
