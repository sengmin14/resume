import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MdWest } from 'react-icons/md';
import theme from '../assets/theme';

const NavButtonBlock = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  gap: 10px;
`;

const NavButton = forwardRef((props, scrollRef) => {
  const isCurrent = props.index === Math.min(...props.currentIndex);
  const onScroll = () => {
    scrollRef.current[props.index].scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <NavButtonBlock onClick={onScroll}>
      <p
        style={{
          color: isCurrent ? 'black' : 'rgba(0,0,0,0.3)',
          fontSize: theme.font.medium,
        }}
      >
        {props.title}
      </p>
      {isCurrent && <MdWest size={20} color="black" />}
    </NavButtonBlock>
  );
});

export default NavButton;
