import styled from "styled-components"

export default function KoroDeckScreen() {
 return (
    <>
        <ScreenBezel>
            <ScreenBorder>
                <Screen>
                    <ScreenLightEffect/>
                </Screen>
            </ScreenBorder>
        </ScreenBezel>
    </>
 )
}

const ScreenBezel = styled.div `
    background-color: #d9d9d9;
    box-shadow: inset -1px -1px 14px #656565;
    border-radius: 10px;
    margin: 0px 20px;
`;
const ScreenBorder = styled.div `
    background: linear-gradient(to right, #7E7F94,  #67687B );
    margin: 3px;
    width: 98%;
    height:98%;
    border-radius: 10px;
    padding: 25px 25px 48px 25px;
`;
const Screen = styled.div `
    background: linear-gradient(to bottom, #B5DCA1,  #A0C38E );
    box-shadow: inset 0px 12px 32px #5A5A5A;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    padding: 16px 15px 15px 15px;
`;
const ScreenLightEffect = styled.div`
    background: #fff;
    opacity: 0.15;
    width: 100%;
    height: 20px;
    filter: blur(12px)
`;