import { React, useState } from "react";
import * as S from "./style";
import styled, { keyframes } from "styled-components";
import anchor from "../../img/닫는꺾쇠.png";
import logo from "../../img/logo-beige.png";
const Main = () => {
	const [onclick, setOnclick] = useState(false);
	const ShowUpload = (e) => {
		setOnclick(true);
		const Show = {};
		console.log(e);
	};

	return (
		<div>
			<S.Container>
				<S.Nav>
					<S.Logo src={logo}></S.Logo>
					<S.Move>
						<S.Add>액자 추가하기</S.Add>
						<S.Stick></S.Stick>
						<S.Info>프로젝트 정보</S.Info>
					</S.Move>
					<S.User>땡떙님의 정보</S.User>
				</S.Nav>
				<S.Button onClick={ShowUpload}>
					<S.Icon src={anchor}></S.Icon>
				</S.Button>
			</S.Container>
		</div>
	);
};

export default Main;
