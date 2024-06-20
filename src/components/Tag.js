import React from 'react';
import styled from 'styled-components';

const TagBlock = styled.div`
    padding: 0px 10px;
    background: #f0f0f0;
    border-radius: 50px;
`;

function Tag({ children }) {
    return <TagBlock>{children}</TagBlock>;
}

export default Tag;
