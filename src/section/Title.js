import React from 'react';
import styled, { keyframes } from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 100;
    font-size: 36px;
    padding: 20px 0px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const SignContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 160px;
    border-bottom: solid 1px;
`;

// 속도
const v = 0.4;

const animation = keyframes`
  0% {
    stroke-dashoffset: 450;
  }
  6.25%{
    stroke-dashoffset: 0;
  }
  56.25%{
    stroke-dashoffset: 0;
  }
  62.5%{
    stroke-dashoffset: 450;
  }
  100%{
    stroke-dashoffset: 450;
  }
`;

const StyledSignSVG = styled.svg`
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 10px;
    stroke-dasharray: 450;
    stroke-dashoffset: 450;
    path:nth-child(1) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${0 * v}s;
    }
    path:nth-child(2) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${1 * v}s;
    }
    path:nth-child(3) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${2 * v}s;
    }
    path:nth-child(4) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${3 * v}s;
    }
    path:nth-child(5) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${4 * v}s;
    }
    path:nth-child(6) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${5 * v}s;
    }
    path:nth-child(7) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${6 * v}s;
    }
    path:nth-child(8) {
        animation: ${animation} ${16 * v}s linear infinite;
        animation-delay: ${7 * v}s;
    }
`;

function Sign() {
    return (
        <StyledSignSVG width="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680.1 373">
            <path d="M66.6,82c17.67,9.13,25.71,20.07,27.09,30.98,2.61,20.58,4.91,46.02-64.09,52.02-21.98,1.91,178.26-57.04,13,61-21,15,43-71,100-24" />
            <path d="M176.6,272c-45-1-154.98,13.8-171,9-10-3,109,22,87-75" />
            <path d="M159.6,5c47,126,32,239,32,363" />
            <path d="M228.1,150.5c46,1,119.11-33.89,92-21-143,68-33,99,15,63" />
            <path d="M367.1,55.5c19.06,68.83,22,183,13,231-3.15,16.82-5-147,66-154" />
            <path d="M532.1,112.5c-106,67-4,109,12,2" />
            <path d="M584.1,27.5c27,74,18,139,7,182" />
            <path d="M523.1,209.5c12,98,102,55,152,24" />
        </StyledSignSVG>
    );
}

function Title({ scrollRef }) {
    return (
        <div
            ref={(cur) => {
                if (cur) {
                    scrollRef.current[0] = cur;
                }
            }}
        >
            <TitleContainer>
                <span>" 안녕하세요</span>
                <SignContainer>
                    <Sign />
                </SignContainer>
                <span>입니다. "</span>
            </TitleContainer>
        </div>
    );
}
export default Title;
