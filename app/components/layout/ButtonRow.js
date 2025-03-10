import styled from "styled-components";
import Button from "../ui/Button.js";

const gameControlButtons = ["feed", "sleep", "enter"];

export default function ButtonRow() {
  return (
    <StyledButtonRow>
      <li>
        {gameControlButtons.map((button) => {
          return <Button label={button} />;
        })}
      </li>
    </StyledButtonRow>
  );
}

const StyledButtonRow = styled.ul`
  margin: 0 auto;
`;
