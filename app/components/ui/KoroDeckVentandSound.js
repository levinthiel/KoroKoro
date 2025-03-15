"use client";

import styled from "styled-components";
import Image from "next/image";

// TODO: add some css props to unify behavior of this btn and other btn
export default function KoroDeckVentandSound() {
  return (
    <VentandSoundContainer>
      <Vents>
        {[1, 2, 3, 4, 5].map((e, index) => (
          <Vent key={index} />
        ))}
      </Vents>
      <Sound>
        <MuteButton>
          <IconContainer>
            <Image src={"mute.svg"} alt="mute" height={15} width={15} />
          </IconContainer>
        </MuteButton>
        <Speaker>
          {Array(49)
            .fill()
            .map((_, i) => (
              <div key={i} />
            ))}
        </Speaker>
      </Sound>
    </VentandSoundContainer>
  );
}

const VentandSoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Vents = styled.ul``;
const Vent = styled.li`
  width: 145px;
  height: 5px;
  background: var(--koro-black);
  border-radius: 10px;
  border: 2px inset var(--case-grey-dark);
  margin: 0 0 5px;
`;
const Sound = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const MuteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  border: 2px solid var(--koro-black);
  border-radius: 6px;
  background: linear-gradient(to bottom, var(--case-grey), #67687b);
  cursor: pointer;
  &:active {
    transition: all 0.125s ease-out;
    transform: translate(0px, 0.5px);
  }
`;
const IconContainer = styled.div`
  background-color: var(--case-grey);
  padding: 4px 7px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
const Speaker = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);

  & > div {
    background-color: black;
    min-width: 0;
    min-height: 0;
    border-radius: 50%;
  }

  /* Corner cells - transparent */
  & > div:nth-child(1),
  & > div:nth-child(7),
  & > div:nth-child(43),
  & > div:nth-child(49) {
    background-color: transparent;
  }

  /* Cells adjacent to corners - gray */
  & > div:nth-child(2),
  & > div:nth-child(8),
  & > div:nth-child(6),
  & > div:nth-child(14),
  & > div:nth-child(36),
  & > div:nth-child(42),
  & > div:nth-child(44),
  & > div:nth-child(48) {
    background-color: #666762;
  }
`;
