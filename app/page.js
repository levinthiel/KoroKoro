// TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component
// this helped fixing it:
'use client'
// TODO: find out what this does exactly
// TODO: assess assumoption: might have been caused by trying to use Global CSS in parallel to styled compoments

import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      {/* <h1>KoroKoro</h1> */}
      <Wrapper>
        <Egg>
          <Screen/>
       </Egg>
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

const Egg = styled.div`
  background: url("./egg.png") center center;
  border-radius: 60% 60% 40% 40%;
  width: 450px;
  height: 600px;
  /* max-width: 600px;
  max-height: 750px; */
  display: flex;
  align-items: center;
  justify-content: center;
`

const Screen = styled.div`
  border: 2px solid white;
  background-color: #A8C64E; // closer to color of LCS screen
  /* width: 100%;
  height: 100%; */
  min-width: 325px;
  min-height: 335px;
  border-radius: 15px;
`