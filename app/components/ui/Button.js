import styled from "styled-components";

// TODO:
// - nest Image here to display icons properly
// - add more props
// - change names of the styled compos (Keycap & ..Profile) and the component itself (e.g. GameControlButton) to better reflect its single-purpose nature
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
  border: 1px solid
    linear-gradient(to top, var(--case-grey-dark) 0%, var(--case-grey) 70%);
  border-radius: 5px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    transition: all 0.125s ease-out;
    transform: translate(0px, 1.15px);
  }
`;

const StyledButtonProfile = styled.div`
  background: linear-gradient(
    to right,
    var(--case-grey-dark) 0%,
    var(--case-grey) 85%
  );
  box-shadow: -1px 0px 1px var(--case-grey);
  border-radius: 6px;
  height: 43px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -2px;
`;
