import styled from 'styled-components';

// Portfolio Page Margin
export const Margin = styled.div`
  background-color: 'yellow';
  margin: 0 18% 0 18%;
  @media screen and (max-width: 1500px) {
    margin: 0 16% 0 16%;
  }
  @media screen and (max-width: 1440px) {
    margin: 0 8% 0 8%;
  }
`;

// Contain Navigation & MainSection
export const MainContainer = styled.div`
  padding-top: 20px;
`;

// MainSection Container
export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  gap: 30px;
  margin-left: calc(230px + 5%);
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
