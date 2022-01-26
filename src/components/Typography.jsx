import React from "react";
import styled from "styled-components";
export const Paragraph = styled.div`
  font-size: 1rem;
  line-height: 1.75;
  margin: 0.5rem 0;
  strong {
    font-weight: 600;
    color: #222;
  }

` 
export const H3 = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75;
  font-weight: 600;
  color: #222;
  margin: 0.75rem 0 0.25rem;
` 
export const H4 = styled.h4`
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 600;
  color: #222;
  margin: 0.75rem 0 0.25rem;
` 
export const Subtext = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  margin: 0rem 0 0.5rem;
  color: #777;

`

export const PageBreak = styled.div`
  page-break-before: always;
  @media only print {
    margin-bottom: 2rem;
    width: 100%;
    height: 1px;
    box-sizing: border-box;
  }
`