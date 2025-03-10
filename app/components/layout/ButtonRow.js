import styled from "styled-components";
import Button from "../ui/Button.js";

const gameControlButtons = ["feed", "sleep", "enter"];

export default function ButtonRow() {
  return (
    <StyledButtonRowWrapper>
      <StyledButtonRow>
        <li>
          {gameControlButtons.map((button) => {
            return <Button label={button} />;
          })}
        </li>
      </StyledButtonRow>
    </StyledButtonRowWrapper>
  );
}

const StyledButtonRowWrapper = styled.div`
  background-color: #7e7f94; // dark case grey
  border: 2px solid #c1c3b7; // game boy grey
`;

const StyledButtonRow = styled.ul`
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 auto;
  background-color: var(--koro-black);
  border-radius: 9;
`;
