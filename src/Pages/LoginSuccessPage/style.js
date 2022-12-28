import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #406FBC;
`;
export const Box = styled.div`
width: 800px;
height: 900px;
background-color: #FFFFFF;
border: 1px solid #D8D8D8;
box-shadow: 0px 0px 20px 0px #00000033;
display: flex;
flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.img`
background-color: white ;
`;

export const ButtonBox = styled.div`
background-color: white;
`;

export const Ment = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
padding-bottom:30px;
color: grey;
width: 298px;
height: 209px;
text-align: center;
`;
export const Login = styled.img`
background-color: white;
border-radius: 5px;

`;
export const PageBar = styled.div`
display: flex;
justify-content: center;
width: 500px;
background-color: white;
`;

export const PageBars = styled.div`
background-color: lightgrey;
height: 16px;
width: 200px;
border-radius: 5px;
margin:0px 2px;
`;

export const GoogleBtn = styled.div`
`;


export const Span = styled.span`
    padding: 40px 0px;
`;

export const MoveToMain = styled.div`
    background-color: #406FBC;
position: absolute;
height: 100px;
width: 500px;
bottom: 170px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 25px;
`;