import React from 'react';
import styled from 'styled-components';
const H2 = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin: 2rem 0;
`
export function Heading(props) {
  return (
    <H2>
      {props.children}
    </H2>
  );
}