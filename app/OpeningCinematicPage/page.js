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
  width: 100vw;
  height: 370px;
  background: url(/space1.jpg) center no-repeat;
  background-size: cover;
  max-width: 600px;
  min-width: 375px;
  border-radius: 7px;
`;

const TextBox = styled.div`
    background: url(/ui600.png) center no-repeat;
    width: 100vw;
    height: 170px;
    min-width: 375px;
    max-width: 600px;
    padding: 27px 27px;
    overflow: hidden;
    line-height: 20px;
    background-size: 100% 100%;
    
  @media only screen and (max-width: 400px) {
    background: url(/ui375.png) center no-repeat;
    background-size: cover;
  }
`;

const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;