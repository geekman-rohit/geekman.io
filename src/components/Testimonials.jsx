import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { PeriodEntry } from './PeriodEntry';
import { H3, Paragraph, Subtext } from './Typography';
const Container = styled.section`
  padding: 1rem 0rem;
`
const SectionContainer = styled.section`
  margin-bottom: 2rem;
`
const SubtextUp = styled(Subtext)`
  margin-top: -1rem;
`
const Link = styled.a`
  text-decoration: none;
  color: #08699E;
`
export function Testimonials(props) {
  return (
    <Container>
      <Heading>Client Testimonials</Heading>
      <SubtextUp>
        Between 2016-2018 I was self employed and worked on multiple projects. 
        Some of the testimonials from clients are mentioned below. All of these can be verified on my 
        <Link href="https://www.upwork.com/freelancers/~012463231f744d6d58"> Upwork profile</Link>
         
      </SubtextUp>
      <SectionContainer>
        <H3>Timeloop Services, India</H3>
        <Paragraph>
          "Fantastic working experience working with Rohit. His work in Frontend development has been excellent and of world-class quality. Will definitely want to work again with Rohit in future!"
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <H3> Private Client, New Zealand</H3>
        <Paragraph>
          "Rohit did great and went beyond our expectations delivering a flawless task. Would recommend him to anyone looking for a reliable developer"
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <H3>Bitgate Inc, Netherlands</H3>
        <Paragraph>
        "This was the 3rd time hiring Rohit, and we're starting the 4th project now. I've worked with so many people of the past years and Rohit is exceptionally good. Fluent English, knows what we're looking for, gets it done and always goes above expectations. Knows his stuff inside-out and also does stuff the right way instead of just making sure the job is done. Rohit is our go-to for anything web related!"
        </Paragraph>
      </SectionContainer>
    </Container>
  ); 
}