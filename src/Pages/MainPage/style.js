import styled, { keyframes } from 'styled-components';
import anchor from "../../img/닫는꺾쇠.png";
import profile from "../../img/사진 가져오기.png";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { css } from '@emotion/react'
import { React, useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import ModalBasic from '../MainPage/modal';
export const Container = styled.div`
    height: 100%;
    width: 100vw;
`;

export const Nav = styled.div`
    display: flex;
    position: fixed;
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
background: #FFFFFF;
`;

export const Move = styled.div`
    display: flex;
    background: #FFFFFF;
`;
export const Stick = styled.div`
width: 1px;
height: inherit;
background-color: lightgray;
margin: 0px 40px;

`;
export const Add = styled.div`
    background: #FFFFFF;
`;

export const Info = styled.div`
    background: #FFFFFF;
`;

export const User = styled.div`
    padding-right:30px ;
    background: #FFFFFF;
    text-decoration: none;
    color: black;
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
background: #FFFFFF;

    animation-fill-mode: forwards;
    animation-name:   ${props => (props.active ? IconAnimation : IconAnimationReset)};
    animation-duration: 1s;
`;
const ButtonActive = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1000000000;
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
height : 880px;
position: absolute;
background-color: white;
bottom: 0px;
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
background: #FFFFFF;

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
    z-index: 100000000;
`;
const ShowImg = styled.img`
position:relative;
bottom:50px;
width: 486px;
    height: 320px;
`;
// const DeleteButton = styled.div`
// position:absolute;
// top:10px;
// font-size: 30px;
// position: absolute;
// cursor: pointer;
// `;
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
background: #FFFFFF;
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
background: #FFFFFF;

`;
const DiscriptionWords = styled.textarea`
display: flex;
background: #FFFFFF;

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
background: #FFFFFF;

`;

// const Random = (min, max) => Math.random() * (max - min) + min;
// setPositon(Math.round(Random(10, 70)));
const Images = styled.img`
position: relative;
top:45vh;
width: 10vw;
height: 15vh;
border: 10px solid white ;
border-radius: 10px; 
object-fit: contain;
object-position: 50% 50%;
margin-left: 150px;
border: 8px solid #FFFFFF;
background-color: #FFFFFF;
transition: all 0.5s;
box-shadow: 5px 10px 10px 2px rgba(0, 0, 0, 0.1);
&:hover{
    width: 15vw;
    height: 25vh;
}
`;
export const Scroll = styled.div`
background-color:  #F8EFD1;
width: 500vw;
height: 100vh;
`;
const Div = styled.div`
`;
const Dive = styled.div`
display: flex;
`;
const Dives = styled.div`
display: flex;
`;
const Diver = styled.div`
display: flex;
`;
const SelectImg = styled.img``;

// const Frames = (props) => {
// return (
//     <Dive>
//         {props.isImg ? (<Images src={props.imageSrc}></Images>)
//             : null
//         }
//     </Dive>
// );
// }
export const Box = ({ history }) => {
    const handleBackList = useCallback(() => {
        const params = {
            pathname: '/'
        }
        history.push(params)
    }, [history]);
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const [isImg, setIsImg] = useState(false);
    const [previewImg, setPreviewImg] = useState([]);
    const [lastImg, setLastImg] = useState();
    const [img, setImg] = useState([]);
    const toggle = () => {
        setActive(!active);
    }
    // const [date, setDate] = useState([]);

    const [clicked, setCliked] = useState(false);

    const insertImg = (e) => {
        let reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setImg([...img, e.target.files[0]]);
        }
        reader.onload = () => {
            const previewImgUrl = reader.result;
            if (previewImgUrl) {
                setPreviewImg([...previewImg, previewImgUrl]);
                setLastImg(previewImgUrl);
                setIsImg(true);
            }
        }
    }
    const Hidden = () => {
        setShow(!show);
    }
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const Typing = (e) => {
        setValue(e.target.value);
    }
    const Typing2 = (e) => {
        setValue2(e.target.value);
    }

    const Examine = (e) => {
        e.preventDefault();
        if (previewImg != null && value !== "" && value2 !== "") {
            toast.success("업로드 완료되었습니다", {
                autoClose: 3000,
                position: toast.POSITION.TOP_RIGHT
            });
            setCliked(true);
        }
        else {
            e.preventDefault();
            setCliked(false);
            toast.error("비어있는 칸이 있습니다", {
                autoClose: 3000,
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const Showing = () => {
        if (img === null || img.length === 0) {
            return (
                <ShowImg src={profile}></ShowImg>
            );
        }
    }
    const [content, setContent] = useState('');
    const Uploading = () => {
        if (img === null || img.length === 0) {
            return (
                <div>
                </div>
            );
        }
        else {
            return img.map((el, index) => {
                return (
                    <Dives key={index}>
                        <Dive>
                            <Images src={previewImg[index]} id={index} onClick={(e) => Modal(e)}></Images>
                        </Dive>
                    </Dives >
                )
            })
        }
    }
    const Modal = (e) => {
        console.log(e.target.src);
        setContent(e.target.src);
        return (
            <div>
                <img src={e.target.src} alt="안녕"></img>
                {content && <ModalBasic src={content}></ModalBasic>}
            </div>
        );
    }
    return (
        <Div>
            <div onClick={handleBackList}></div>
            <ButtonActive active={active} onClick={toggle
            }>
                <Icon src={anchor} active={active} ></Icon>
            </ButtonActive>
            <SideBar active={active}>
                <Upload >
                    <Form encType='multipart/form-data' >
                        {isImg ?
                            <ShowImg src={lastImg}></ShowImg> :
                            Showing()
                        }
                        <Label htmlFor='file' onClick={Hidden} active={show}>
                            <Line ></Line>
                            <Line2 ></Line2>
                        </Label>
                        <FileInput type='file' id='file' accept='image/*' onChange={(e) => insertImg(e)}></FileInput>
                        <DiscriptionBox>
                            <DiscriptionTitle placeholder='제목을 입력해주세요. (20자이내)' maxLength={20} onChange={Typing2}></DiscriptionTitle>
                            <DiscriptionWords onChange={Typing} placeholder='사진에 대한 설명을 입력해주세요. (100자이내)' maxLength={100}></DiscriptionWords>
                            <SubmitBtn type='submit' onClick={Examine} >액자 업로드하기</SubmitBtn>
                        </DiscriptionBox>
                    </Form>
                </Upload>
            </SideBar>
            <Diver >
                {clicked &&
                    Uploading()}
            </Diver>
            <ToastContainer></ToastContainer>
        </Div >
    );
}

export default Box;
