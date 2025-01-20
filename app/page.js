"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
        <SplashScreen1>
          <Image
            src={"/spacearcadialogo.png"}
            width={300}
            height={300}
            alt="space arcadia logo"
          />
          <p>presents</p>
        </SplashScreen1>
{/*         <SplashScreen2>
          <Image
            src={"/korokorologo.png"}
            width={300}
            height={300}
            alt="korokoro logo"
          />
        </SplashScreen2> */}
        <TitleScreen>
        <Image
            src={"/titlescreen-logo.png"}
            width={300}
            height={300}
            alt="korokoro logo"
          />
           <Link href="./OpeningScenePage">Opening Scene</Link>
          <br />
          <Link href="./KoroDexPage">KoroDexPage</Link>
          <br />
          <br />
         
        </TitleScreen>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: var(--koro-black);
  border: 2px solid white;
  min-width: 450px;
  min-height: 667px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SplashScreen1 = styled.div`
  opacity: 0;
  position: relative;
  animation-name: example1;
  animation-duration: 4s;
  transition: all ease-in-out 0.3s;
  background-color:  black;
  position: absolute;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @keyframes example1 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
/* 
const SplashScreen2 = styled.div`
  opacity: 0;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-delay: 4s;
  position: absolute;
  margin: auto;
  animation-fill-mode: forwards;

  @keyframes example2 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
 */
const TitleScreen = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background: url("/titlescreen-bg.png") center center;
  position: relative;
  animation-name: example3;
  animation-duration: 1s;
  animation-delay: 4s;
  position: absolute;
  margin: auto;
  animation-fill-mode: forwards;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--koro-black);
  flex-direction: column;

  @keyframes example3 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
