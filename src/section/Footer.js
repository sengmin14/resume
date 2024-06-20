import React from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';

const FooterContainer = styled.p`
    color: rgba(0, 0, 0, 0.3);
    font-size: ${theme.font.small};
    font-weight: 500;
    line-height: 20px;
    padding: 100px 0px 60px 0px;
`;

function Footer() {
    return (
        <FooterContainer>
            SEONGMIN RESUME
            <br />
            © 2024 seongmin. all rights reserved. Please contact
            <br />
            sengmin14@naver.com
        </FooterContainer>
    );
}

export default Footer;
