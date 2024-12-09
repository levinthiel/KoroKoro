// TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component
// this helped fixing it:
'use client'

// TODO: find out what this does exactly
// TODO: assess assumoption: might have been caused by trying to use Global CSS in parallel to styled compoments

// import styles from "./page.module.css";
// TODO: check if this is still needed and delete if possible

import styled from "styled-components";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <h1>KoroKoro</h1> */}
      <Wrapper>
      <IntroScreen1>studio logo</IntroScreen1>
      <IntroScreen2>game logo</IntroScreen2>
      <IntroScreen3>
        <Link href="./KoroDexPage">KoroDexPage</Link>
      </IntroScreen3>
        {/* <KoroDexPage/> */}
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  margin: 0 auto;
  border: 2px solid white;
  /* background-color: aquamarine; */
  min-width: 450px;
  min-height: 667px;
  width: 1000px;
  /* height: 900px; */
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


