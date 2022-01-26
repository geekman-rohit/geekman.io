import React from 'react';
import styled from 'styled-components';
import memoji from '../images/me.jpg'
import GithubIcon from '../images/github.svg'
import LinkedInIcon from '../images/linkedin.svg'
import StackIcon from '../images/stackoverflow.svg'
import HeartIcon from '../images/heart.svg'
import { media } from '../utils/media';


const Container = styled.div`
  background: linear-gradient(#0b7080, #0ba376);
  width: 24rem;
  min-height: 100vh;
  position: fixed;
  left: 0; 
  top: 0;
  color: white;
  text-align: center;
  padding-top: 6rem;
  box-sizing: border-box;
  ${media.medium} {
    position: static;
    width: initial;
    padding-bottom: 6rem;

    height: initial;
    min-height: initial;
  }
  @media only print {
    position: absolute;
    height: 100vh;
  }
 
`
const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border: 3px solid white;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;
const Name = styled.h1`
  font-size: 2.1rem;
  font-weight: 500;
  margin: 1em 0 0.25em;
  
`
const Designation = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0.25em 0 2rem;
  font-family: 'Roboto Mono', monospace;
`
const SocialLinks = styled.div`
  text-align: center;
  margin: 2rem 0;
`
const EmailLink = styled.address`
  text-align: center;
  font-style: normal;
  margin: 1rem 0;
`
const SiteLink = styled.a`
  text-align: center;
  font-style: normal;
  color: inherit;
  text-decoration: none;
  margin: 1rem 0;
`
const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 1.5rem;
  background-size: 1.8rem;
  &:last-child {
    margin-right: 0;
  }
`
const PrintOnly = styled.span`
  display: none;
  @media only print {
    display: inline;
  }
`
const ScrenOnly = styled.span`
  display: inline;
  @media only print {
    display: none;
  }
`

const GithubLink = styled(SocialLink)`
  background-image:url("${GithubIcon}");
`
const StackOverflowLink = styled(SocialLink)`
  background-image:url("${StackIcon}");
`
const LinkedinLink = styled(SocialLink)`
  background-image:url("${LinkedInIcon}");
`
const Note = styled.p`
  margin-top: 4rem;
  font-weight: 300;
  line-height: 1.4;
  font-style: italic;
  padding: 0 3rem;
  letter-spacing: 1px;
`
const Heart = styled.span`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:url("${HeartIcon}");

`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
`
export function Sidebar(props) {
  return (
    <Container>
      <Avatar src={memoji} />
      <Name>Rohit Mulange</Name>
      <Designation>&lt;Software Engineer /&gt;</Designation>
      <SocialLinks>
        <GithubLink href="https://github.com/geekman-rohit"></GithubLink>
        <StackOverflowLink href="https://stackoverflow.com/users/1682650/geekman"></StackOverflowLink>
        <LinkedinLink href="https://in.linkedin.com/in/rohitmulange"></LinkedinLink>
      </SocialLinks>


      <EmailLink>rohit@geekman.io</EmailLink>
      <SiteLink href="https://geekman.io/">geekman.io</SiteLink>
      <Note>
        Built by me with <Heart /> using react, gatsby, html5 and css3. 
        <br />
        <ScrenOnly>This website can be printed and exported to a pdf resume.</ScrenOnly>
        <PrintOnly>This resume is a pdf print export of my <Link href="https://geekman.io/">website</Link>.</PrintOnly>

      </Note>
    </Container>
  );
}