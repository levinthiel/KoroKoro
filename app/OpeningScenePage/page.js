"use client";
import { scenes as initialScenes } from "../lib/data";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function OpeningScenePage() {

  const [scenes,setScenes] = useState(initialScenes)
  
  let sceneId = 0

  function setSceneId() {
    if (sceneId<7){
      sceneId++
      console.log(sceneId)
    }else {
    }
    
  }


  return (
    <Wrapper>
      <SceneDisplay /><TextBoxButton onClick={setSceneId}/>
      {[scenes[sceneId]].map((scene) => ( 
        <TextBox  key={scene.id}>
        
            <Textpart1>
              {scene.textpart1}  {/* {scene.textpart2} */}
            </Textpart1>
{/*         <Textpart2>
              {scene.textpart2}
            </Textpart2> */}
      </TextBox>
      ))}
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

const SceneDisplay = styled.div`
  width: 100vw;
  height: 370px;
  background: url(/space1-600.png) center no-repeat;
  background-size: cover;
  max-width: 600px;
  min-width: 375px;
  border-radius: 7px;
`;

const TextBox = styled.div`
  background: url(/ui-600.png) center no-repeat;
  width: 100vw;
  height: 170px;
  min-width: 375px;
  max-width: 600px;
  padding: 27px 27px;
  overflow: hidden;
  line-height: 20px;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 400px) {
    background: url(/ui-375.png) center no-repeat;
    background-size: cover;
  }
`;
const TextBoxButton = styled.button`
  border: none;
  background: url(/arrow.png) no-repeat;
  position: absolute;
  width: 28px;
  height: 24px;
  right: 12px;
  top: 130px;
  /* animation: blink 1s infinite ease-in-out;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  } */
`;
const Textpart1 = styled.p`
`;
const Textpart2 = styled.p`
  display: none;
`;
const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;
