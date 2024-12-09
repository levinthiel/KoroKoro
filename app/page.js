// TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component
// this helped fixing it:
'use client'
import KoroDexPage from "./KoroDexPage";
// TODO: find out what this does exactly
// TODO: assess assumoption: might have been caused by trying to use Global CSS in parallel to styled compoments

import styles from "./page.module.css";
// TODO: check if this is still needed and delete if possible

import styled from "styled-components";

export default function Home() {
  return (
    <>
      {/* <h1>KoroKoro</h1> */}
      <Wrapper>
        <KoroDexPage/>
      </Wrapper>
    </>
  );
}

// FIXME: the styling applied here makes the egg responsive only to I Phone SE
// TODO: improve styling to ensure basic mobile reponsiveness
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

