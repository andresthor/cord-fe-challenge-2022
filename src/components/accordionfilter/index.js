import React, { useState } from 'react';
import styled from 'styled-components';
import { fontColor } from '../../colors';
import Checkbox from '../checkbox';

const AccordionFilter = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <Title onClick={toggleOpen}>
        <Marker>{isOpen ? '－' : '＋'}</Marker>
        {title}
      </Title>
      <Collapsible isOpen={isOpen}>
        {items.map((item, i) => (
          <Checkbox
            key={`${item.id}_${item.name}`}
            id={item.id}
            label={item.name}
            onChange={() => null}
          />
        ))}
      </Collapsible>
    </>
  );
};

const Collapsible = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  overflow: hidden;
  transition: 0.5s;

  li:last-child {
    padding-bottom: 1em;
  }
`;

const Title = styled.button`
  display: flex;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  background-color: white;
  color: ${fontColor};
  font-size: 1em;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

const Marker = styled.span`
  font-size: 2em;
  line-height: 1em;
  margin-left: -5px;
`;

export default AccordionFilter;
