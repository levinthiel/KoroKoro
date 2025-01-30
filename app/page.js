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
            src={"/spacearcadialogo-pixel.png"}
            width={300}
            height={270}
            alt="space arcadia logo"
          />
          <p>presents</p>
        </SplashScreen>
        <TitleScreen>
        <Image
            src={"/titlescreen-logo-pixel.png"}
            width={350}
            height={350}
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
  background: url("/titlescreen-bg-pixel.png") center center no-repeat;
  background-size: cover;
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
  cursor: pointer;
  background: var(--koro-pink);
  transition: 100ms ease;
  color: var(--koro-black);
  border-radius: 20px;
  border-width: 4px;
  border-color: var(--koro-pink-dark);
  border-image-slice: 4;
  border-image-width: 2;
  border-image-outset: 0;
  border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M2 2h2v2H2zM4 0h2v2H4zM10 4h2v2h-2zM0 4h2v2H0zM6 0h2v2H6zM8 2h2v2H8zM8 8h2v2H8zM6 10h2v2H6zM0 6h2v2H0zM10 6h2v2h-2zM4 10h2v2H4zM2 8h2v2H2z' fill='currentcolor' /%3E%3C/svg%3E");

  &:hover {
    background: var(--koro-pink-dark);
  }
  &:focus {
    background: var(--koro-pink-dark);
    font-size: medium;
  }
`;
const StyledTitleScreenButton2 = styled.button `
  font-family: inherit;
  padding: 14px 22px;
  margin-top: 10px ;
  cursor: pointer;
  background: var(--koro-blue);
  transition: 100ms ease;
  color: var(--koro-black);
  border-radius: 20px;
  border-width: 4px;
  border-color: var(--koro-pink-dark);
  border-image-slice: 4;
  border-image-width: 2;
  border-image-outset: 0;
  border-image-source: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M2 2h2v2H2zM4 0h2v2H4zM10 4h2v2h-2zM0 4h2v2H0zM6 0h2v2H6zM8 2h2v2H8zM8 8h2v2H8zM6 10h2v2H6zM0 6h2v2H0zM10 6h2v2h-2zM4 10h2v2H4zM2 8h2v2H2z' fill='currentcolor' /%3E%3C/svg%3E");

  &:hover {
    background: var(--koro-blue-dark);
  }
  &:focus {
    background: var(--koro-blue-dark);
    font-size: medium;
  }
`;