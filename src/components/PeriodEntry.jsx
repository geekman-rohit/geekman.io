import React from 'react';
import styled from 'styled-components';
const Dot = styled.div`
  position: absolute;
  height: 1rem;
  width: 1rem;
  display: block;
  left: 0; 
  top: 0;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -8px;
    margin-top: -8px;
    height: 16px;
    width: 16px;
    position: absolute;
    border-radius: 50%;
    background-color: #0ba376;
    opacity: .25;
    z-index: 0;
    box-sizing: border-box;

  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -4px;
    margin-top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    border: 2px solid #0ba376;
    background-color: #fff;
    z-index: 1;
    box-sizing: border-box;
  }

`
const Container = styled.div`
  padding-left: 2rem;
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2rem;
  &:nth-child(2) {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }


`

const Content = styled.div`
  flex-grow: 1;
`
const MetaInfo = styled.div`
  width: 15rem;
`
const Time = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1;
`
export function PeriodEntry(props) {
  const time = props.time;
  const location = props.location;
  return (
    <Container>
      <Dot />
      <MetaInfo>
      <Time>{time}</Time>
      </MetaInfo>
      <Content>
        {props.children}  
      </Content>    
    </Container>
  );
}