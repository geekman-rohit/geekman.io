import React from 'react';
import styled from "styled-components";
import { Heading } from './Heading';
import { Paragraph } from './Typography';

const Container = styled.section`
  padding: 2rem 0rem 0rem;
`
export function AboutMe(props) {
  return (
    <Container>
      <Heading>About Me</Heading>
      <Paragraph>
        I am a Software Engineer with 6+ years of experience building Web applications.
        I am passionate about using cutting edge modern technologies to build beautiful, interactive and  high performance User Interfaces. 
        I like contributing to open source and am a proud <strong>Google Summer of Code 2015</strong> alumni, and <strong>Google Summer of Code 2016</strong> mentor.
        These days, you can find me working for <strong>Thoughtworks</strong>, building amazing <strong>Microfrontends</strong>, obsessing over <strong>clean code</strong> and advocating for <strong>Web Accessibility</strong>.
      </Paragraph>
    </Container>
  );
}