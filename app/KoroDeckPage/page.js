"use client";

import styled from "styled-components";
import Link from "next/link";
import KoroDeckScreen from "../components/ui/KoroDeckScreen";
import KoroDeckVentandSound from "../components/ui/KoroDeckVentandSound";
import KoroDeckEmblem from "../components/ui/KoroDeckEmblem";
import ButtonRow from "../components/layout/ButtonRow.js";

export default function KoroDeckPage() {
  return (
    <Wrapper>
      <KoroDeck>
        <KoroDeckBranding>
          <p>KoroDeck 2000</p>
        </KoroDeckBranding>
        <KoroDeckScreen />
        <KoroDeckVentandSound />
        <ButtonRow />
        <KoroDeckEmblem />
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
  background: var(--case-grey) url("scifibg.png") center center;
  border-radius: 5px;
  width: 320px;
  min-width: 320px;
  height: 568px;
  display: grid;
  grid-template-rows: [row1-start] 36px [row1-end row2-start] 274px [row2-end row3-start] 70px [row3-end row4-start] 80px [row4-end];
  grid-template-columns: 1;
`;
const KoroDeckBranding = styled.section`
  color: var(--koro-black);
  padding: 10px 23px;
`;
const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
  margin-top: 15px;
`;
