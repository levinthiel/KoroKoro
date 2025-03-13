import styled from "styled-components";
import Button from "../ui/Button.js";

const gameControlButtons = [
  { id: 1, label: "feed" },
  { id: 2, label: "sleep" },
  { id: 3, label: "enter" },
];

export default function ButtonRow() {
  return (
    <StyledButtonRowWrapper>
      <StyledButtonRow>
        {gameControlButtons.map((button) => {
          return <Button key={button.id} label={button.label} />;
        })}
      </StyledButtonRow>
    </StyledButtonRowWrapper>
  );
}

const StyledButtonRowWrapper = styled.div`
  // background-color: #7e7f94; // dark case grey

  background-color: #c1c3b7;
  border: 2px solid #c1c3b7; // game boy grey
  border-radius: 9px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 25%);
  max-width: 199px;
  max-height: 79px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 18px;
`;

const StyledButtonRow = styled.div`
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 auto;
  background-color: var(--koro-black);
  border-radius: 9;
`;
