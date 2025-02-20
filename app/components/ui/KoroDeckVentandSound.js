"use client";

import styled from "styled-components";

export default function KoroDeckVentandSound() {
    return(
        <VentandSoundContainer>
            <Vents>
                <Vent></Vent>
                <Vent></Vent>
                <Vent></Vent>
                <Vent></Vent>
                <Vent></Vent>
            </Vents>
            <Sound>
                <MuteButton/>
                <Speaker>
                </Speaker>
            </Sound>
        </VentandSoundContainer>
    )
}

const VentandSoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const Vents = styled.ul`
    list-style: none;
`;
const Vent = styled.li`
    width: 145px;
    height: 5px;
    background: var(--koro-black);
    border-radius: 10px;
    border: 2px inset #737373;
    margin: 0 0 5px;
`;
const Sound = styled.div`
`;
const MuteButton = styled.button`
`;
const Speaker = styled.div`
`;
