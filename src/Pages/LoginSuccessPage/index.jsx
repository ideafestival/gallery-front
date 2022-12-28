import React from "react";
import * as S from "./style";
import logo from "../../img/로고-파란색.png";
const SuccessLogin = () => {
	return (
		<div>
			<S.Container>
				<S.Box>
					<S.Logo src={logo}></S.Logo>
					<S.ButtonBox>
						<S.Ment>
							<span>수고하셨습니다!</span>
							<S.Span>
								받은 회원 정보를 바탕으로<br></br>저희가 멋진
								미술관을 마련했어요.
							</S.Span>
							<span>
								준비됐다면, 확인 버튼을 눌러서<br></br> 당신의
								미술관을 멋지게 꾸며주세요!
							</span>
						</S.Ment>
					</S.ButtonBox>
					<S.PageBar>
						<S.PageBars
							style={{ backgroundColor: " #406FBC" }}
						></S.PageBars>
						<S.PageBars
							style={{ backgroundColor: " #406FBC" }}
						></S.PageBars>
					</S.PageBar>
				</S.Box>
			</S.Container>
		</div>
	);
};

export default SuccessLogin;
