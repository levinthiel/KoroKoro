'use client'

import styled from "styled-components";
import Link from "next/link";

export default function KoroDexPage() {


    return(
      <>
        <Egg>
          <Screen/>
       </Egg>
       <LinkWrapper>
       <Link href=".">back to home</Link>
       </LinkWrapper>
       </>
    );
}

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
  background-color: #A8C64E; // closer to color of LCD screen 
  /* width: 100%;
  height: 100%; */
  min-width: 325px;
  min-height: 335px;
  border-radius: 15px;
`

const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
  position: absolute;
  top: 600px
`
