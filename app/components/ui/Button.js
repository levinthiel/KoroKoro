import styled from "styled-components";

export default function Button({ label }) {
  return <StyledGameControlButton>{label}</StyledGameControlButton>;
}

const StyledGameControlButton = styled.button`
  background-color: #c1c3b7;
  border: 1px solid #c1c3b7;
  border-radius: 5px;
  width: 55px;
  height: 55px;
`;
