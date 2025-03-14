import styled from "styled-components";

export default function Button({ label }) {
  return <StyledGameControlButton>{label}</StyledGameControlButton>;
}

const StyledGameControlButton = styled.button`
  background-color: var(--case-grey);
  border: 1px solid var(--case-grey);
  border-radius: 5px;
  width: 55px;
  height: 55px;
`;
