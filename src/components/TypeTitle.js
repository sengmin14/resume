import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.title};
    min-height: 60px;
    font-weight: 700;
    color: rgb(220, 220, 220);
`;

const TEXT = [
    '안녕하세요. 소프트웨어 엔지니어 진성민입니다. ',
    '프론트엔드 개발자라면!!! ',
    '포트폴리오 정도는 내 손으로 만들어봐야지 라는 생각을 담아  ',
    '개발중인 페이지 입니다 :) ',
];

function TypeTitle() {
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const index = useRef(0);

    useEffect(() => {
        let target = TEXT[index.current];
        const loop = setInterval(() => {
            setTitle((Text) => {
                let updated = Text;
                updated = Text + target[count];
                return updated;
            });
            setCount(count + 1);
        }, 100);
        const next = () => {
            clearInterval(loop);
            setTitle('');
            setCount(0);
            index.current = (index.current + 1) % 4;
        };
        count === target.length && next();
        return () => {
            clearInterval(loop);
        };
    });
    return <TitleDiv>{title}</TitleDiv>;
}

export default TypeTitle;
