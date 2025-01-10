"use client";
import { scenes } from "../lib/data";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function OpeningScenePage() {
  const [sceneId, setSceneId] = useState(0);
  const scenesToMap = [scenes[sceneId]];

  function sceneCounter() {
    if (sceneId < scenes.length - 1) {
      setSceneId(sceneId + 1);
    }
  }

  return (
    <Wrapper>
      {scenesToMap.map((scene) => (
        <section key={scene.id}>
          <SceneDisplay backgroundimage={scene.imagesource} />
          <TextBox>
            <p>{scene.textpart}</p>
            <TextBoxButton onClick={() => sceneCounter()} />
          </TextBox>
        </section>
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
  background: ${({ backgroundimage }) => `url(${backgroundimage})`} center
    no-repeat;
  background-size: cover;
  max-width: 600px;
  min-width: 375px;
  border-radius: 7px;
  border: solid 2px var(--screen-middle-dark);
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
  cursor: pointer;
  border: none;
  background: url(/arrow.png) no-repeat;
  position: absolute;
  width: 28px;
  height: 24px;
  right: 12px;
  top: 130px;
  animation: blink 1s infinite ease-in-out;
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
  }
`;
const LinkWrapper = styled.div`
  color: green;
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;
