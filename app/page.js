// TODO: find out what this does exactly
// ref: https://nextjs.org/docs/messages/context-in-server-component
// TypeError: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component
// this helped fixing it:
'use client'

import styles from "./page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>KoroKoro</h1>
      <StyledH2>lala</StyledH2>
    </div>
  );
}

const StyledH2 = styled.h2`
color: green;
`;
