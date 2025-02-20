"use client";

import styled from "styled-components";
import Link from "next/link";

export default function KoroDeckPage() {
  return (
    <Wrapper>
      <KoroDeck>
        
      </KoroDeck>
      <LinkWrapper>
        <Link href=".">back to home</Link>
      </LinkWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  border: 2px solid white;
  min-width: 450px;
  min-height: 667px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const KoroDeck = styled.div`
  background:#C1C3B7;
  border-radius: 5px;
  width: 320px;
  min-width: 320px;
  height: 568px;
`;
const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;
