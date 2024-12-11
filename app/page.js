'use client'

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
      <IntroScreen1>
        <Image
          src={"/spacearcadialogo.png"} // /Users/stephanmodel/projects/korokoro/public/spacearcadialogo.png
          width={300}
          height={300}
          alt="space arcadia logo"
        />
      </IntroScreen1>
      <IntroScreen2>
      <Image
          src={"/korokorologo.png"} // /Users/stephanmodel/projects/korokoro/public/korokorologo.png
          width={300}
          height={300}
          alt="korokoro logo"
        />
      </IntroScreen2>
      <IntroScreen3>
        <br/>
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
  background-color: #000;
  margin: 0 auto;
  border: 2px solid white;
  min-width: 450px;
  min-height: 667px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const IntroScreen1 = styled.div`
  opacity: 0;
  position: relative;
  animation-name: example1;
  animation-duration: 4s;
  transition: all ease-in-out 0.3s;
  position: absolute;
  margin: auto;

  @keyframes example1 {
  0%   {opacity: 0;}
  25%  {opacity: 1;}
  75%  {opacity: 1;}
  100% {opacity: 0;}
}
`

const IntroScreen2 = styled.div`
  opacity: 0;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-delay: 4s;
  position: absolute;
  margin: auto;
  animation-fill-mode: forwards;

  @keyframes example2 {
  0%   {opacity: 0}
  25%  {opacity: 1}
  75%  {opacity: 1}
  100% {opacity: 0}
}
`

const IntroScreen3 = styled.div`
  width: 250px;
  height: 250px;
  opacity: 0;
  background-color: blue;
  position: relative;
  animation-name: example3;
  animation-duration: 1s;
  animation-delay: 8s;
  position: absolute;
  margin: auto;
  animation-fill-mode: forwards;

  @keyframes example3 {
  0%   {opacity: 0}
  100% {opacity: 1}
  }
`