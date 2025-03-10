import styled from "styled-components";

export default function Button({ label }) {
  return <StyledGameControlButton>{label}</StyledGameControlButton>;
}

const StyledGameControlButton = styled.button`
  width: 55px;
  height: 55px;
`;
