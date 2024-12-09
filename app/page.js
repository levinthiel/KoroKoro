'use client'

import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Wrapper>
      <IntroScreen1>studio logo</IntroScreen1>
      <IntroScreen2>game logo</IntroScreen2>
      <IntroScreen3>
        <Link href="./KoroDexPage">KoroDexPage</Link>
        <br/>
        <br/>
        <Link href="./OpeningCinematicPage">Opening Movie</Link>
      </IntroScreen3>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  margin: 0 auto;
  border: 2px solid white;
  min-width: 450px;
  min-height: 667px;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroScreen1 = styled.div`
  width: 100px;
  height: 100px;
  opacity: 0;
  background-color: red;
  position: relative;
  animation-name: example1;
  animation-duration: 4s;
  transition: all ease-in-out 0.3s;

  @keyframes example1 {
  0%   {opacity: 0;}
  25%  {opacity: 1;}
  75%  {opacity: 1;}
  100% {opacity: 0;}
}
`

const IntroScreen2 = styled.div`
  width: 100px;
  height: 100px;
  opacity: 0;
  background-color: green;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-delay: 4s;
  animation-fill-mode: forwards;

  @keyframes example2 {
  0%   {opacity: 0}
  25%  {opacity: 1}
  75%  {opacity: 1}
  100% {opacity: 0}
}
`

const IntroScreen3 = styled.div`
  width: 100px;
  height: 100px;
  opacity: 0;
  background-color: blue;
  position: relative;
  animation-name: example3;
  animation-duration: 1s;
  animation-delay: 8s;
  animation-fill-mode: forwards;

  @keyframes example3 {
  0%   {opacity: 0}
  100% {opacity: 1}
  }
`