import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../assets/profile.png';
import theme from '../assets/theme';

const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

function Intro() {
    return (
        <IntroContainer>
            <img
                src={ProfileImg}
                alt="profile"
                style={{
                    width: '260px',
                    height: '260px',
                    objectFit: 'contain',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <p style={{ fontSize: theme.font.medium, fontWeight: 500 }}>
                    안녕하세요. 소프트웨어 엔지니어 진성민 입니다.
                </p>
                <p>
                    <mark>사용자와 가까운 영역</mark>에서 개발하고 임팩트를 내는 것을 좋아합니다.
                    <br />
                    <mark>코드로 UX를 디자인합니다.</mark> 좋은 사용자 경험을 만드는 것에 것에 큰 의미를 두고 있습니다.
                </p>
                <p>
                    <mark>더 잘 개발하기 위해 DX를</mark> 고민하고 개선합니다.
                </p>
            </div>
        </IntroContainer>
    );
}

export default Intro;
