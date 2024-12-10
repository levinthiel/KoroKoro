'use client';

import styled from "styled-components";
import Link from "next/link";

export default function OpeningCinematicPage() {
    
    return(
        <Wrapper>
            <MovieDisplay/>
            <TextBox/>
        <LinkWrapper>
            <Link href=".">back to home</Link>
        </LinkWrapper>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0 auto;
  border: 2px solid white;
  min-width: 450px;
  min-height: 667px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MovieDisplay = styled.div`
  border: 2px solid green;
  width: 600px;
  height: 370px;
  background-color: #A8C64E; // resembles color of LCD screen 
`;

const TextBox = styled.div`
  border: 2px solid red;
  width: 600px;
  height: 170px;
`;

const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
  position: absolute;
  top: 600px
`;