import * as React from "react"
import styled from "styled-components";
import photo from "../images/me.jpg"
import "normalize.css/normalize.css";
import "./index.css";
import GithubIcon from '../images/github.svg';
import LinkedinIcon from '../images/linkedin.svg';
import StackOverflowIcon from '../images/stackoverflow.svg';
import { Helmet } from "react-helmet";
import { Sidebar } from "../components/Sidebar";
import { AboutMe } from "../components/AboutMe";
import { WorkExperience } from "../components/WorkExperience";
import { Education } from "../components/Education";
import { Technologies } from "../components/Technologies";
import { PageBreak } from "../components/Typography";
import { Testimonials } from "../components/Testimonials";
import { media } from "../utils/media";



const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;
const Page = styled.div`
  padding: 0 4rem;
  box-sizing: border-box;
  ${media.medium} {
    padding: 0 2rem;
  }
  @media only print {
    padding: 0 4rem;
  }

`
const PageWrapper = styled.div`
  margin-left: 24rem;
  ${media.medium} {
    margin-left: 0;
  }
  @media only print {
    margin-left: 0;
  }
`
const PrintPage = styled.div`
  @media only print {
    margin-left: 24rem;
  }
`
const Talk = styled.div`
  background: #eee;
  padding: 1.5rem;
  line-height: 1.7;
  font-style: italic;
  margin-top: 4rem;
  margin-bottom: 4rem;


`
const Link = styled.a`
  font-style: normal;
  font-weight: 500;  
  text-decoration: none;
  color: #08699E;
`
const IndexPage = () => {
  return(
    <>
    <Helmet>
      <title>Rohit Mulange | geekman.io</title>
    </Helmet>
    <Container>
      <Sidebar />
      <PageWrapper>
        <Page>
          <PrintPage>
            <AboutMe />
            <Technologies />
            <Talk>
              I recently talked at Thoughtworks GeekNight about Effective Webpacking for Microfrontends.
              <br /><Link href="https://youtu.be/T6J22zjNIfE">You can watch a replay here.</Link>
            </Talk>
          </PrintPage>
          <PageBreak />
          <WorkExperience />
          <Education />
          <Testimonials />
        </Page>
      </PageWrapper>
    </Container>
    </>
  )
}
export default IndexPage;