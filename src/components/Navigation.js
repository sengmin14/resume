import React, { forwardRef } from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 230px;
    position: fixed;
    top: 50px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Navigation = forwardRef((props, scrollRef) => {
    return (
        <NavContainer>
            <NavButton index={0} title="Introduction" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={1} title="Contact" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={2} title="Skill" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={3} title="Recent Study" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={4} title="Work Experience" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={5} title="Personal Experience" ref={scrollRef} currentIndex={props.currentIndex} />
            <NavButton index={6} title="Awards/Certifications" ref={scrollRef} currentIndex={props.currentIndex} />
            {/* <NavButton
        index={6}
        title="Timeline"
        ref={scrollRef}
        currentIndex={props.currentIndex}
      /> */}
        </NavContainer>
    );
});

export default Navigation;
