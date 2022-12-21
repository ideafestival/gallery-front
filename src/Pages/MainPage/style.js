import styled, { keyframes } from 'styled-components';
import anchor from "../../img/닫는꺾쇠.png";
import profile from "../../img/사진 가져오기.png";
import axios from 'axios';
// import { css } from '@emotion/react'
import { React, useState, useEffect } from "react";

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

export const User = styled.div`
    padding-right:30px ;
    `;



const animation = keyframes`
0% {
    transform: translateX(0px);
}
100% {
    transform: translateX(625px);
}
`;
const animationReset = keyframes`
0% {
    transform: translateX(625px);
}
100% {
    transform: translateX(0px);
}
`;
const IconAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(180deg);
}
`;
const IconAnimationReset = keyframes`
0% {
    transform: rotate(180deg);
}
100% {
    transform: rotate(0deg);
}
`;
export const Icon = styled.img`
    height: 23px;
    width: 10px;
    animation-fill-mode: forwards;
    animation-name:   ${props => (props.active ? IconAnimation : IconAnimationReset)};
    animation-duration: 1s;
`;
const ButtonActive = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 54px;
    height: 187px;
    left: 0px;
    top: 446px;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    animation-fill-mode: forwards;
    animation-name:  ${props => (props.active ? animation : animationReset)};
    animation-duration: 1s;
    cursor: pointer;
`;
const SideBar = styled.div`
display: flex;
z-index: 10000;
justify-content: center;
width: 625px;
height : 911px;
position: absolute;
background-color: white;
bottom: 0;
left: -625px;
animation-fill-mode: forwards;
animation-duration: 1s;
animation-name:  ${props => (props.active ? animation : animationReset)};
`;
export const Upload = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 486px;
margin-top: 44px;
`;
export const UploadInput = styled.input`

`;
export const UploadButton = styled.button`
background-color: #B52234;
width: inherit;
height: 71px;
color : white;
font-size: 20px;
`;
const FileInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border:none;
`;

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: absolute;
    height: 51px;
width: 51px;
left: 510px;
top: 310px;
border-radius: 100%;
border: 1px solid lightgray;
    background-color: #FFFF;
    cursor: pointer;
`;
const ShowImg = styled.img`
position:relative;
bottom:50px;
width: 486px;
    height: 344px;
`;
const DeleteButton = styled.div`
position:absolute;
top:10px;
font-size: 30px;
position: absolute;
cursor: pointer;
`;
export const UploadImg = styled.div`
`;
const Line = styled.div`
width: 2px;
height: 30px;
background-color: black;
transform:rotate(180deg);
position: absolute;

`;
const Line2 = styled.div`
position: absolute;
width: 30px;
height: 2px;
background-color: black;
transform:rotate(0deg);

`;
const Form = styled.form`
`;
const DiscriptionTitle = styled.input`
width: 466px;
height: 54px;
border: 1px solid lightgray;
outline: none;
font-size: 20px;
padding-left:20px ;
border-radius: 2px;
font-family: "ImcreSoojin";
&::placeholder{
        color:#D8D8D8;
    }
`;
const DiscriptionWords = styled.textarea`
display: flex;
justify-content: center;
align-items: center;
text-justify:center;
border-radius: 2px;
width: 466px;
height: 279px;
border: 1px solid lightgray;
outline: none;
font-size: 20px;
padding-left:20px ;
padding-top:20px ;
resize: none;
font-family: "ImcreSoojin";
&::placeholder{
        color:#D8D8D8;
    }
`;
const SubmitBtn = styled.button`
font-family: "ImcreSoojin";
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size:20px;
height: 71px;
width: 490px;
background-color: #B52234;
border-radius: 2px;
border: none;
outline: none;
color:white;
cursor: pointer;
`;
const DiscriptionBox = styled.div`
display: flex;
flex-direction: column;
height: 500px;
justify-content: space-between;
`;
const Main = styled.div`
width: 100vw;
height: 100%;
display: flex;
`;
const Random = (min, max) => Math.random() * (max - min) + min;
const getRandom = Math.round(Random(10, 70));
console.log(Math.floor(Random(10, 70)));
const Images = styled.img`
position: relative;
top:${getRandom}vh;
width: 20vw;
height: 20vh;
border: 10px solid white ;
border-radius: 10px; 
background-color: white;
object-fit: contain;
object-position: 50% 50%;
margin-left: 60px;
`;
const Div = styled.div`
width: 100vw;
height: 100%;
`;
const Dive = styled.div`
display: flex;
`;

export const Frames = (props) => {
    console.log(props.isImg);
    return (
        <Dive>
            {props.isImg ?
                <Images src={profile}></Images> : null
            }
        </Dive>
    );
}

export const Box = () => {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const [isImg, setIsImg] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const toggle = () => {
        setActive(!active);
    }
    const insertImg = (e) => {
        // console.log(e.target.files[0]);
        let reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = () => {
            const previewImgUrl = reader.result;
            if (previewImgUrl) {
                setPreviewImg(previewImgUrl);
                setIsImg(true);
            }
        }
    }
    const deleteImg = () => {
        setPreviewImg(null);
    }
    const Hidden = () => {
        setShow(!show);
        console.log(show);
    }
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const Typing = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    const Typing2 = (e) => {
        console.log(e.target.value);
        setValue2(e.target.value);
    }
    const Examine = (e) => {
        if (previewImg != null && value != null && value2 != null) {
            alert("성공");
        }
        else {
            e.preventDefault();
            alert("사진을 업로드 해주세요");
        }
    }
    return (
        <Div>
            <ButtonActive active={active} onClick={toggle
            }>
                <Icon src={anchor} active={active} ></Icon>
            </ButtonActive>
            <SideBar active={active} >
                <Upload >
                    <Form encType='multipart/form-data' >
                        <ShowImg src={previewImg ? previewImg : profile}></ShowImg>
                        <DeleteButton onClick={deleteImg}>×</DeleteButton>
                        <Label htmlFor='file' onClick={Hidden} active={show}>
                            <Line ></Line>
                            <Line2 ></Line2>
                        </Label>
                        <DiscriptionBox>
                            <FileInput type='file' id='file' accept='image/*' onChange={(e) => insertImg(e)}></FileInput>
                            <DiscriptionTitle placeholder='제목을 입력해주세요. (20자이내)' maxLength={20} onChange={Typing2}></DiscriptionTitle>
                            <DiscriptionWords onChange={Typing} placeholder='사진에 대한 설명을 입력해주세요. (300자이내)' maxLength={300}></DiscriptionWords>
                            <SubmitBtn type='submit' onClick={Examine}>액자 업로드하기</SubmitBtn>
                        </DiscriptionBox>
                    </Form>
                </Upload>
            </SideBar>
            <Main>
                <Frames imageSrc={previewImg} isImg={isImg ? true : console.log(false)}></Frames>
            </Main>
        </Div>
    );
}

export default Box;
