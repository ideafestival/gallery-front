import styled, { keyframes } from 'styled-components';
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color:  #F8EFD1;
`;

export const Nav = styled.div`
    display: flex;
    position: absolute;
    width: 100vw;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 58px;
    top: 0px;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
padding-left: 40px;
`;

export const Move = styled.div`
    display: flex;
`;
export const Stick = styled.div`
width: 1px;
height: inherit;
background-color: lightgray;
margin: 0px 40px;
`;
export const Add = styled.div`

`;

export const Info = styled.div`

`;

export const Icon = styled.img`
    height: 23px;
    width: 10px;
`;
export const User = styled.div`
    padding-right:30px ;
`;

const animation = keyframes`
0% {
transform:translateX(0px);
}
50% {
transform: translateX(100px);
}
100%{
transform:translateX(0px);
}
`;
export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 54px;
height: 187px;
left: 0px;
top: 446px;
background-color: white;
border-radius: 0px 10px 10px 0px;
`;
