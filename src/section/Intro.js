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
                    <mark>사용자 입장을 생각하는</mark>개발자가 되기 위해 노력합니다.
                    <br />
                    개발에 있어 <mark>소통을 </mark>매우 중요하게 생각합니다.
                </p>
                {/* <p>
                    <mark>더 잘 개발하기 위해 클린코드</mark>를 고민하고 개선합니다.
                </p> */}
            </div>
        </IntroContainer>
    );
}

export default Intro;
