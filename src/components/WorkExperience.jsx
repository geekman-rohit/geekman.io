import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { PeriodEntry } from './PeriodEntry';
import { H3, Paragraph, Subtext, H4, PageBreak } from './Typography';
const Container = styled.section`
  padding: 1.5rem 0rem;
`
const List = styled.ul`
  margin: 0 1rem;
  padding: 0 1rem;
`
const PrintPage = styled.div`
`
const PrintPush = styled.div`
@media only print {
  margin-bottom: 4rem;
  width: 100%;
  height: 1px;
  box-sizing: border-box;
}
` 

export function WorkExperience(props) {
  return (
    <Container>
      <PrintPage>
      <Heading>Work Experience</Heading>
      <PeriodEntry time="August 2018 to present day">
        <H3>Thoughtworks</H3>
        <Subtext>UI Developer - Senior Consultant.</Subtext>
        <Paragraph>
          <strong>Luxury ecommerce project for a world famous fashion brand:</strong> For the last 2.5 years I have been helping define and build a new shopping experience for a client (a world renonwned ultra luxury fashion brand). The project I worked on has world wide visibility and millions of daily visitors. Some of my responsibilities include:
          <List>
            <li>
              Helping define the plan to renovate an existing monolith by breaking it into Microfrontends.
            </li>
            <li>
              Building frontend applications. During our engagement with the client, I helped build multiple Microfrontends, Microservices and Single Page Applications.
              Some prominent technlogies I have used include:  
              <strong> reactjs</strong>, <strong>redux</strong>, <strong>nextjs</strong>, <strong>gatsby</strong>, <strong>nodejs</strong>, <strong>aws</strong>
            </li>
            <li>Following <strong>Test Driven Development</strong> practices. Writing <strong>unit tests</strong>, <strong>integration tests</strong> and helping define the overall testing strategy.</li>
            <li>
              Working closely with designers to achieve pixel perfection and build quick experimental prototypes.
            </li>
            <li>
              Analyzing frontend site performance and improving it where needed.
            </li>
            <li>
              Working with client business stakeholders in an <strong>agile</strong> environment to define stories, do estimations, and plan sprints.
            </li>
          </List>
        </Paragraph>
        <Paragraph>
          <strong>Data Driven Client Onboarding Portal for a international bank: </strong> 
          <span> Between August 2018 to January 2019 I worked on customizable onboarding platform. Some of my responsibilities included:</span>
          <List>
            <li>
              Building end user forms that are customizable from an admin portal using <strong>angular</strong>
            </li>
            <li>
              Leading the team in terms of styling of the application, reviewing frontend pull requests.
            </li>
          </List>
        </Paragraph>
      </PeriodEntry>
      
      
      <PeriodEntry time="October 2016 to July 2018">
        <H3>Self Employed</H3>
        <Subtext>Freelancer</Subtext>
        <Paragraph>
        I quit full time job in October 2016 to spend time learning and working on my own Projects. For two years I worked on multiple freelancing projects and some of my own.
        A list of my freelancing clients(that I am allowed to disclose) and their testimonials can be found on the last page.
        </Paragraph>

      </PeriodEntry>


      <PeriodEntry time="August 2015 to October 2016">
        <H3>HRNeeti Pvt. Ltd</H3>
        <Subtext>Senior Software Engineer</Subtext>
        <Paragraph>
        I helped lead the development of the product on the technology side. Some Technologies I worked with: <strong>Angular</strong>, <strong>PHP</strong>, <strong>jQuery</strong>
        </Paragraph>
      </PeriodEntry>
      </PrintPage>
      <PageBreak />
      <PrintPush />
      <PeriodEntry time="May to Augst 2015">
        <H3>Google Summer of Code</H3>
        <Subtext>Oper Source Contributor for jQuery Foundation</Subtext>
        <Paragraph>
        I worked with the <strong>jQuery Foundation</strong> in development of css-chassis, a css framework for javascript ui libraries. (https://jquery.org)
        </Paragraph>
      </PeriodEntry>
      
      <PeriodEntry time="2013 to August 2015">
        <H3>HRNeeti Pvt. Ltd</H3>
        <Subtext>Software Engineer (Part time)</Subtext>
        <Paragraph>
        Developed a Human Resource Management System (hrneeti.com) for HR Neeti (Pune, India), between June 2013-August 2015, while finishing college.
        </Paragraph>
      </PeriodEntry>
    </Container>
  ); 
}