// react
import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuBar from "./menubar";
// style
// import { CanvasStyle } from "./styles/cavas";

const View = styled.div`
	position: absolute;
	width: 70vw;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10vh;
`;
const CanvasWrap = styled.div`
	position: absolute;
	margin-right: 5vw;
`;

export default function Canvas() {
	// useRef
	const canvasRef = useRef(null);
	// getCtx
	const [getCtx, setGetCtx] = useState(null);
	// painting state
	const [painting, setPainting] = useState(false);
	const [getCanvas, setGetCanvas] = useState(null);
	useEffect(() => {
		// canvas useRef
		const canvas = canvasRef.current;
		canvas.width = 505;
		canvas.height = 580;
		setGetCanvas(canvas);
		const ctx = canvas.getContext("2d");
		ctx.lineJoin = "round";
		ctx.lineWidth = 2.5;
		ctx.strokeStyle = "#000000";
		setGetCtx(ctx);
	}, []);

	const drawFn = (e) => {
		// mouse position
		const mouseX = e.nativeEvent.offsetX;
		const mouseY = e.nativeEvent.offsetY;
		// drawing
		if (!painting) {
			getCtx.beginPath();
			getCtx.moveTo(mouseX, mouseY);
		} else {
			getCtx.lineTo(mouseX, mouseY);
			getCtx.stroke();
		}
	};

	return (
		<div>
			<View>
				<CanvasWrap>
					<canvas
						className="canvas"
						ref={canvasRef}
						onMouseDown={() => setPainting(true)}
						onMouseUp={() => setPainting(false)}
						onMouseMove={(e) => drawFn(e)}
						onMouseLeave={() => setPainting(false)}
					></canvas>
				</CanvasWrap>
			</View>
			<MenuBar getCtx={getCtx} getCanvas={getCanvas} />
		</div>
	);
}
