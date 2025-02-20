import styled from "styled-components"

export default function KoroDeckEmblem(){
    return (
        <EmblemContainer>
            <EmblemBorder>
                <Emblem>
                    /SA<br/>25
                </Emblem>
            </EmblemBorder>
        </EmblemContainer>
    )
}
const EmblemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 26px 0;
`;
const EmblemBorder = styled.div`
    width: 75px;
    background-color: var(--koro-black);
    border-radius: 100px 0 0 100px;
    border: 2px inset #737373;
    padding: 2px 0px 2px 2px;
    border-right-width: 0px;
`;
const Emblem = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    color: var(--koro-black);
    background: linear-gradient(to bottom, #B5DCA1, #82a96e);
    width: 100%;
    height: 100%;
    border-radius: 100px 0 0 100px;
    padding-right: 7px;
    border: 3px solid rgb(143, 175, 127);
    border-right-width: 0;
`;