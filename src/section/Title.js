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
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${0 * v}s;
    }
    path:nth-child(2) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${1 * v}s;
    }
    path:nth-child(3) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${2 * v}s;
    }
    path:nth-child(4) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${3 * v}s;
    }
    path:nth-child(5) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${4 * v}s;
    }
    path:nth-child(6) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${5 * v}s;
    }
    path:nth-child(7) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${6 * v}s;
    }
    path:nth-child(8) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${7 * v}s;
    }
    path:nth-child(9) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${8 * v}s;
    }
    path:nth-child(10) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${9 * v}s;
    }
    path:nth-child(11) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${10 * v}s;
    }
    path:nth-child(12) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${11 * v}s;
    }
    path:nth-child(13) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${12 * v}s;
    }
    path:nth-child(14) {
        animation: ${animation} ${24 * v}s linear infinite;
        animation-delay: ${13 * v}s;
    }
`;

function Sign() {
    return (
        <StyledSignSVG width="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680.1 373">
            {/* <path d="M66.6,82c17.67,9.13,25.71,20.07,27.09,30.98,2.61,20.58,4.91,46.02-64.09,52.02-21.98,1.91,178.26-57.04,13,61-21,15,43-71,100-24" />
            <path d="M176.6,272c-45-1-154.98,13.8-171,9-10-3,109,22,87-75" />
            <path d="M159.6,5c47,126,32,239,32,363" />
            <path d="M228.1,150.5c46,1,119.11-33.89,92-21-143,68-33,99,15,63" />
            <path d="M367.1,55.5c19.06,68.83,22,183,13,231-3.15,16.82-5-147,66-154" />
            <path d="M532.1,112.5c-106,67-4,109,12,2" />
            <path d="M584.1,27.5c27,74,18,139,7,182" />
            <path d="M523.1,209.5c12,98,102,55,152,24" /> */}
            {/* <path d="M1.79102 76.372C5.28795 68.4456 47.5031 31.291 54.2458 37.6123C58.832 41.9118 50.3993 70.2698 50.1114 71.4624C42.8325 101.618 32.5128 130.718 22.7212 160.093" />
            <path d="M48.3027 104.279C61.6432 114.655 70.9733 132.544 80.8609 146.14" />
            <path d="M94.8145 8.93018C104.673 51.5199 104.117 95.6493 104.117 139.163" />
            <path d="M55.2793 143.814C57.4769 153.574 60.5677 196.619 71.8168 202.083C88.8484 210.355 120.5 194.463 136.675 190.326" />
            <path d="M192.489 8.93018C191.281 56.051 183.94 102.085 176.21 148.465" />
            <path d="M187.838 88C198.986 99.1481 205.639 116.524 213.419 129.86" />
            <path d="M213.419 62.4188C226.108 66.3233 240.039 61.7076 252.954 60.0933" />
            <path d="M255.279 8.93018C266.074 46.3503 280.861 81.1377 280.861 120.558" />
            <path d="M255.28 146.14C255.28 151.634 253.16 181.423 259.414 183.091C273.098 186.74 301.282 155.791 294.427 142.651C291.404 136.859 284.909 130.283 278.535 128.052C271.757 125.68 265.615 134.943 259.931 136.838" />
            <path d="M329.698 22.8838C339.365 50.8378 351.314 81.145 348.303 111.256" />
            <path d="M336.675 36.8371C347.666 31.8413 359.227 29.8604 371.3 29.8604C386.957 29.8604 390.62 45.7165 394.427 58.8009C397.976 71.0005 399.439 88.5096 396.752 101.049C394.763 110.331 366.858 104.686 359.931 104.279" />
            <path d="M394.814 1.95361C411.762 16.2254 411.778 53.5446 415.486 73.5298C417.365 83.653 420.396 93.9133 420.396 104.279" />
            <path d="M401.791 127.535C402.205 133.747 403.054 149.122 411.352 150.274C425.955 152.302 443.546 145.003 457.605 141.489" /> */}
            <path d="M11.0277 74.1214C27.2338 62.3018 43.4789 50.1167 61.0373 41.6727C75.1097 34.9053 73.7013 47.8267 72.6339 63.5577C69.6678 107.27 48.9742 175.694 15.0182 197.415" />
            <path d="M67.4297 127.974C75.9245 137.985 83.5362 146.987 93.6845 153.816" />
            <path d="M113.029 5.88086C116.37 58.6192 125.977 112.188 125.875 165.115" />
            <path d="M83.3105 168.743C83.5644 184.544 76.2418 233.957 97.358 232.48C122.66 230.71 147.608 228.939 172.91 229.71" />
            <path d="M284.789 24.3126C285.045 49.7534 272.388 74.0467 259.254 93.2126C251.439 104.616 241.074 112.769 233.519 124.315" />
            <path d="M264.49 91.0908C272.491 99.5821 289.16 119.565 300.924 107.351" />
            <path d="M295.73 85.0928C304.862 81.4187 314.444 78.7826 323.807 76.4088" />
            <path d="M325.903 16.7393C327.588 39.3092 329.548 62.0241 332.023 84.4481C332.91 92.488 335.843 101.256 335.165 109.447" />
            <path d="M333.976 155.832C295.531 142.182 278.11 195.671 293.863 219.699C311.323 246.333 351.492 236.876 358.513 209.793C363.267 191.454 356.002 171.198 335.048 166.327" />
            <path d="M449.641 45.3794C453.325 50.3504 453.912 61.5424 454.832 67.4968C457.443 84.4048 458.715 101.833 462.547 118.421C463.838 124.009 465.037 129.802 466.512 135.276" />
            <path d="M456.252 35.7921C460.154 41.1299 477.026 38.7068 482.504 39.0541C491.416 39.6191 500.118 39.9823 509.045 38.3854C514.015 37.4964 529.114 37.0833 530.413 43.273C532.949 55.3598 531.558 69.8479 532.236 82.3719C532.679 90.5467 534.187 98.3695 534.802 106.486C535.015 109.295 537.445 116.287 534.904 117.282" />
            <path d="M467.317 125.659C471.824 132.638 492.581 127.548 499.382 126.111C503.881 125.16 509.916 124.268 514.342 124.642C521.693 125.264 529.874 123.984 537.429 124.054" />
            <path d="M564.265 2C567.141 13.8926 563.701 29.2797 564.932 41.8799C566.55 58.4299 567.795 74.8191 568.508 91.5386C569.332 110.872 569.264 130.389 569.922 149.76" />
            <path d="M534.587 150.651C545.115 162.993 544.692 176.532 546.001 193.258C546.382 198.124 547.533 202.746 548.005 207.577C548.151 209.076 547.238 213.504 547.912 214.714C548.714 216.153 552.436 215.122 553.284 214.991C564.156 213.314 575.021 212.048 585.913 210.747C599.427 209.133 613.422 210.178 626.67 206.932" />
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
