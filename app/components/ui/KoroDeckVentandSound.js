"use client";

import styled from "styled-components";
import Image from "next/image";

export default function KoroDeckVentandSound() {
    return(
        <VentandSoundContainer>
            <Vents>
                <Vent/>
                <Vent/>
                <Vent/>
                <Vent/>
                <Vent/>
            </Vents>
            <Sound>
                <MuteButton>
                    <IconContainer>
                        <Image src={'mute.svg'} alt="mute" height={15} width={15} />
                    </IconContainer>
                    
                </MuteButton>
                <Speaker>
                    {Array(49).fill().map((_, i) => (
                        <div key={i} />
                    ))}
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
    display: flex;
    align-items: center;
    gap: 15px;
`;
const MuteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 32px;
    border: 2px solid var(--koro-black);
    border-radius: 6px;
    background: linear-gradient(to bottom, #C1C3B7,  #67687B );
`;
const IconContainer = styled.div`
    background-color: #C1C3B7;
    padding: 4px 7px;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;
const Speaker = styled.div`
    width: 40px;
    height: 40px;
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);

    & > div {
    background-color: black;
    min-width: 0;
    min-height: 0;
    border-radius: 50%; 
    }

    /* Corner cells - transparent */
    & > div:nth-child(1),
    & > div:nth-child(7),
    & > div:nth-child(43),
    & > div:nth-child(49) {
        background-color: transparent;
    }

    /* Cells adjacent to corners - gray */
    & > div:nth-child(2),
    & > div:nth-child(8),
    & > div:nth-child(6),
    & > div:nth-child(14),
    & > div:nth-child(36),
    & > div:nth-child(42),
    & > div:nth-child(44),
    & > div:nth-child(48) {
        background-color: #666762;
    }
`;
