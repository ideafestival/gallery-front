import { React } from "react";
import * as S from "./style";
import logo from "../../img/logo-beige.png";

const Main = () => {
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
				<S.Box>
					<S.Upload></S.Upload>
				</S.Box>
			</S.Container>
		</div>
	);
};

export default Main;
