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

      <PeriodEntry time="October 2021 to present day">
        <H3>Flipkart</H3>
        <Subtext>UI Engineer III</Subtext>
        <Paragraph>
          <strong>Building and Improving the Post Order Customer Experience:</strong> I help build a seamless post order experience for Flipkart's customers.
          My Responsibilities include:
          <List>
            <li>
                Building UI components and pages that are fully driven and controlled by data, allowing quick experimentation and minor modifications without future developer efforts.
            </li>
            <li>
              Working closely with Product teams and Designers to define and build cross platform experiences
            </li>
            <li>
                Start and Drive initiatives to improve Code Quality and Test Coverage
            </li>

          </List>
        </Paragraph>
      </PeriodEntry>
      

      <PeriodEntry time="August 2018 to October 2021">
        <H3>Thoughtworks</H3>
        <Subtext>UI Developer - Senior Consultant.</Subtext>
        <Paragraph>
          <strong>Luxury ecommerce project for a world famous fashion brand:</strong> Between January 2019 to October 2021 I helped define and build a new shopping experience for a world renonwned ultra luxury fashion brand. The project I worked on has world wide visibility and millions of daily visitors. Some of my responsibilities included:
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
          <span> Between August 2018 to January 2019 I helped build customizable onboarding platform, which was data driven, configurable and customizable.</span>
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

        <PageBreak />

        <PrintPush />
    
      <PeriodEntry time="2013 to October 2016">
        <H3>HRNeeti Pvt. Ltd</H3>
        <Subtext>Senior Software Engineer (2015-2016)</Subtext>
        <Paragraph>
        I helped lead the development of the product on the technology side. Some Technologies I worked with: <strong>Angular</strong>, <strong>PHP</strong>, <strong>jQuery</strong>
        </Paragraph>


        <Subtext>Software Engineer <em><strong>(part-time)</strong></em> (2013-2015)</Subtext>
        <Paragraph>
        Developed a Human Resource Management System (hrneeti.com) for HR Neeti (Pune, India), between June 2013-August 2015, while finishing college.
        </Paragraph>
      </PeriodEntry>
      </PrintPage>
    </Container>
  ); 
}