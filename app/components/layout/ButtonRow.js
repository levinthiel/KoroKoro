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
  background-color: var(--case-grey);
  // border: 2px solid var(--case-grey); // TODO: DISCUSS: we could also have no bcg and transparent border like rgba(193, 195, 183, 10%)
  border-radius: 9px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 25%);
  max-width: 199px;
  max-height: 79px;
  margin-left: 18px;
  display: flex;
  align-items: center;
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
