import styled from "styled-components";
import GameControlButton from "../ui/GameControlButton.js";

const gameControlButtons = [
  { id: 1, label: "feed" },
  { id: 2, label: "sleep" },
  { id: 3, label: "enter" },
];

export default function GameControlButtonGroup() {
  return (
    <StyledButtonRowWrapper>
      <StyledButtonRow>
        {gameControlButtons.map((button) => {
          return <GameControlButton key={button.id} label={button.label} />;
        })}
      </StyledButtonRow>
    </StyledButtonRowWrapper>
  );
}

const StyledButtonRowWrapper = styled.div`
  background: linear-gradient(to right, rgb(126, 127, 148), rgb(103, 104, 123));
  border: 2px solid var(--case-grey);
  border-radius: 9px;
  max-width: 199px;
  max-height: 79px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const StyledButtonRow = styled.div`
  background-color: var(--koro-black);
  border-radius: 5px;
  margin: 0 auto;
  width: 173px;
  height: 58.33px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
`;
