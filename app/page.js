// TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component
// this helped fixing it:
'use client'
// TODO: find out what this does exactly
// TODO: assess assumoption: might have been caused by trying to use Global CSS in parallel to styled compoments

import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>KoroKoro</h1>
      <Wrapper>
        <Egg>
          <Screen>
            
          </Screen>
       </Egg>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  border: 2px solid white;
  width: 750px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Egg = styled.div`
  border: 2px solid white;
  border-radius: 60% 60% 40% 40%;
  width: 600px;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Screen = styled.div`
  border: 2px solid white;
  width: 450px;
  height: 400px;
`
