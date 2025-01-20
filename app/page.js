"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Wrapper>
        <SplashScreen>
          <Image
            src={"/spacearcadialogo.png"}
            width={300}
            height={300}
            alt="space arcadia logo"
          />
          <p>presents</p>
        </SplashScreen>
        <TitleScreen>
        <Image
            src={"/titlescreen-logo.png"}
            width={300}
            height={300}
            alt="korokoro logo"
          />
          <Link href="./OpeningScenePage">
            <StyledTitleScreenButton type="button">Opening Scene</StyledTitleScreenButton>
          </Link>
          <Link href="./KoroDexPage">
            <StyledTitleScreenButton2 type="button">
              KoroDexPage
            </StyledTitleScreenButton2>
          </Link>
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

const SplashScreen = styled.div`
  opacity: 0;
  position: relative;
  animation-name: example1;
  animation-duration: 4s;
  transition: all ease-in-out 0.3s;
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
const StyledTitleScreenButton = styled.button `
  font-family: inherit;
  padding: 14px 22px;
  border-radius: 8px;
  cursor: pointer;
  background: var(--koro-pink);
  border: 2px solid var(--koro-pink-dark);
  transition: 100ms ease;
  box-shadow: 5px 5px 0 0 var(--koro-pink-dark);
  color: var(--koro-black);

  &:hover {
    box-shadow: 2px 2px 0 0 var(--koro-pink-dark);
  }
`;
const StyledTitleScreenButton2 = styled.button `
  font-family: inherit;
  padding: 14px 22px;
  border-radius: 8px;
  cursor: pointer;
  background: var(--koro-blue);
  border: 2px solid var(--koro-blue-dark);
  transition: 100ms ease;
  box-shadow: 5px 5px 0 0 var(--koro-blue-dark);
  color: var(--koro-black);
  margin-top: 15px;

  &:hover {
    box-shadow: 2px 2px 0 0 var(--koro-blue-dark);
  }
`;