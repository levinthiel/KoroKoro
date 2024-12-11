'use client';

import styled from "styled-components";
import Link from "next/link";

export default function OpeningCinematicPage() {
    
    return(
        <Wrapper>
            <MovieDisplay/>
            <TextBox>
              <p>
              In the vast expanse of the universe, there exists a cluster of shimmering nebulas 
              known as the Hikaru Stellar Hatchery—a birthplace of mysterious, sentient life forms called Korokoro.
              </p>
            </TextBox>
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
  width: 100%;
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
    width: 100vw;
    height: 170px;
    min-width: 375px;
    max-width: 600px;
    padding: 20px;
    overflow: hidden;
    line-height: 20px;
`;

const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;