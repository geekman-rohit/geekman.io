import * as React from "react"
import styled from "styled-components";
import photo from "../images/me.jpg"
import "normalize.css/normalize.css";
import "./index.css";
import GithubIcon from '../images/github.svg';
import LinkedinIcon from '../images/linkedin.svg';
import StackOverflowIcon from '../images/stackoverflow.svg';
import {Helmet} from "react-helmet";


const Photo = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100px;
`
const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;
const PhotoContainer = styled.div`
  text-align: center;
`
const Padding = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100px;
`
const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 2em;
  margin: 1.2rem 0 0.9rem 0;
  strong {
    font-weight: 400;
    color: #0071E3;
  }
`
const Subtitle = styled.h3`
  font-weight: 300;
  text-align: center;
  font-style: italic;
  font-size: 1.1em;
  margin: 0 0 1rem 0;
  strong {
    font-weight: 400;
    color: #0071E3;
  }
`
const ExternalLink = styled.a`
  color: #0071E3;
  text-decoration: none;
`
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
`;
const SocialButton = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  background-size: 40px;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 0px;
  margin: 0 15px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
const Email = styled.p`
  display: block;
  text-align: center;
  color: #0071E3;
  font-weight: 500;
  font-size: 1.1em;
  margin-top: 1.5rem;
  em {
    letter-spacing: 2px;
  }
`;

const BGSquare = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  position: fixed;
  top: 30%;
  height: 350px;
  width: 350px;
  left: 10%;
  background-color: #0071E3;
  opacity: 0.1;
`
const BGSquare2 = styled(BGSquare)`
  margin-left: 200px;
  margin-top: -200px;
`
const IndexPage = () => {
  return(
    <>
    <Helmet>
    <title>Rohit Mulange | geekman.io</title>
    </Helmet>
    <BGSquare></BGSquare>
    <BGSquare2></BGSquare2>
    <Container>
      <PhotoContainer>
        <Photo src={photo} />
      </PhotoContainer>
      <H1>I am <strong>Rohit Mulange</strong></H1>
      <Subtitle>UI Developer @ <ExternalLink href="https://thoughtworks.com">ThoughtWorks</ExternalLink></Subtitle>
      <SocialLinks>
        <SocialButton href="https://github.com/geekman-rohit">
          <img src={GithubIcon}></img>
        </SocialButton>
        <SocialButton href="https://in.linkedin.com/in/rohitmulange">
          <img src={LinkedinIcon}></img>
        </SocialButton>
        <SocialButton href="http://stackoverflow.com/users/1682650/geekman">
          <img src={StackOverflowIcon}></img>
        </SocialButton>
      </SocialLinks>
      <Email>rohit<em>@</em>geekman.io</Email>
    </Container>
    </>
  )
}
export default IndexPage;