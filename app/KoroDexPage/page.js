'use client'

import styled from "styled-components";
import Link from "next/link";

export default function KoroDexPage() {

    return(
      <Wrapper>
        <Egg>
          <ScreenShadow>
          <Screen/>
          </ScreenShadow>
        </Egg>
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
const Egg = styled.div`
  background: radial-gradient(circle at 33% 15%, #fffdf8 1px, #f9edf3 2%, #d783b1 63%, #000000 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  width: 450px;
  min-width: 450px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -30px -30px 55px rgba(0, 0, 0, 0.5) inset;
  border: 1px solid #000;
`;
const ScreenShadow = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3) ;
  border-radius: 15px;
`;
const Screen = styled.div`
  border: 2px solid #1e1e1e;
  background-color: #A8C64E; // resembles color of LCD screen 
  min-width: 325px;
  min-height: 335px;
  border-radius: 15px;
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
`;

const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`