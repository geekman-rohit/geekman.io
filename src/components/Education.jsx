import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { PeriodEntry } from './PeriodEntry';
import { H3, Paragraph, Subtext } from './Typography';
const Container = styled.section`
  padding: 0rem 0rem;
`


export function Education(props) {
  return (
    <Container>
      <Heading>Education</Heading>
      <PeriodEntry time="2011 to June 2015">
        <H3>Bachelor of Technology</H3>
        <Subtext>Shri Guru Gobind Sighji Institute of Engineering and Technology, Nanded</Subtext>
      </PeriodEntry>
    </Container>
  ); 
} 