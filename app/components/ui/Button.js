import styled from "styled-components";

export default function Button({ label }) {
  return (
    <StyledGameControlButton>
      <StyledButtonProfile>{label}</StyledButtonProfile>
    </StyledGameControlButton>
  );
}

const StyledGameControlButton = styled.button`
  background: linear-gradient(
    to top,
    var(--case-grey-dark) 0%,
    var(--case-grey) 70%
  );
  border: 1px solid var(--case-grey);
  border-radius: 5px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    transition: all 0.125s ease-out;
    transform: translate(0px, 2.5px);
  }
`;

const StyledButtonProfile = styled.div`
  background: linear-gradient(
    to right,
    var(--case-grey-dark) 0%,
    var(--case-grey) 85%
  );
  box-shadow: -1px 0px 1px #c1c3b7;
  border-radius: 6px;
  height: 43px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -2px;
`;
