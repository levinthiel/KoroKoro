import styled from "styled-components";
import Image from "next/image";

export default function Button({ label }) {
  const buttonLabelDictionary = {
    buttonLabelCollection: [
      {
        buttonIdentifier: "feed",
        buttonLabelIcon: "game-control-food-button-icon.svg",
        buttonAltText: "feed button",
      },
      {
        buttonIdentifier: "sleep",
        buttonLabelIcon: "game-control-sleep-button-icon.svg",
        buttonAltText: "sleep button",
      },
      {
        buttonIdentifier: "enter",
        buttonLabelIcon: "game-control-enter-button-icon.svg",
        buttonAltText: "enter button",
      },
    ],
    returnLabelIcon() {
      const buttonLabelFinder = this.buttonLabelCollection.find(
        (collectionItem) => collectionItem.buttonIdentifier === label
      );
      return buttonLabelFinder ? buttonLabelFinder.buttonLabelIcon : "";
    },
    returnAltText() {
      const altTextFinder = this.buttonLabelCollection.find(
        (collectionItem) => collectionItem.buttonIdentifier === label
      );
      return altTextFinder ? altTextFinder.buttonAltText : "";
    },
  };
  return (
    <StyledGameControlButton>
      <StyledButtonProfile>
        <Image
          src={buttonLabelDictionary.returnLabelIcon()}
          width={22}
          height={22}
          alt={buttonLabelDictionary.returnAltText()}
        />
      </StyledButtonProfile>
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
