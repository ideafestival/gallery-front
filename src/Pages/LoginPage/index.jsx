import React from "react";
import * as S from "./style";
import logo from "../../img/로고-파란색.png";
import google from "../../img/구글.png";
import GoogleButton from "./GoogleButton";
const Login = () => {
	return (
		<div>
			<S.Container>
				<S.Box>
					<S.Logo src={logo}></S.Logo>
					<S.ButtonBox>
						<S.Ment>아래 버튼을 눌러 계속하세요!</S.Ment>
						<GoogleButton src={google}></GoogleButton>
					</S.ButtonBox>
					<S.PageBar>
						<S.PageBars
							style={{ backgroundColor: " #406FBC" }}
						></S.PageBars>
						<S.PageBars></S.PageBars>
						<S.PageBars></S.PageBars>
					</S.PageBar>
				</S.Box>
			</S.Container>
		</div>
	);
};

export default Login;
