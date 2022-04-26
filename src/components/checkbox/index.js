import React from 'react';
import styled from 'styled-components';

export default function Checkbox({ id, name, checked, label, onChange }) {
  return (
    <CheckboxCont>
      <Input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      ></Input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

const Input = styled.input`
  margin-right: 1em;
`;

const CheckboxCont = styled.li`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding-top: 0.5em;
`;
