import React from "react";
import styled, { keyframes } from "styled-components";
import back from "../../img/뒤로 가기.png";
const RestartAltIcon = styled.img`
	position: absolute;
	right: 300px;
	bottom: 200px;
`;

export default function MenuBar({ getCtx, getCanvas }) {
	const onReset = () => {
		getCtx.clearRect(0, 0, getCanvas.width, getCanvas.height);
	};

	return (
		<li onClick={onReset}>
			<RestartAltIcon src={back} className="icons" />
		</li>
	);
}
