import React, { useState } from "react";
import Image from "next/image";
import "./slideShowManula.css";

import nextIcon from "../../public//images/logos/next.png";
import previousIcon from "../../public//images/logos/previous.png";

interface IProps {
	title: any;
	description: any;
	slideWidth: any;
	slideHeight: any;
	bgColor: any;
	slides101: any;
}

function App(props: IProps) {
	const [currentSlide, setCurrentSlide] = useState(1);

	return (
		<div
			className="content-container"
			style={{
				width: `${props.slideWidth}px`,
				border: `10px solid rgb(${props.bgColor}, ${props.bgColor}, ${props.bgColor})`,
				backgroundColor: `rgb(${props.bgColor}, ${props.bgColor}, ${props.bgColor})`,
			}}
		>
			<div className="slideshow" style={{ width: `${props.slideWidth}px` }}>
				<div
					className="next-container"
					onClick={() => {
						if (props.slides101.length > currentSlide) setCurrentSlide(currentSlide + 1);
					}}
				>
					<Image className="next-icon disable-select" alt="next" src={nextIcon} />
				</div>
				<div
					className="previous-container"
					onClick={() => {
						if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
					}}
				>
					<Image className="previous-icon disable-select" alt="previous" src={previousIcon} />
				</div>
				<div className="slides" style={{ width: `${100 * props.slides101.length}%` }}>
					<div
						className="slide"
						style={
							currentSlide == 1
								? { width: `${100 / props.slides101.length}%` }
								: { marginLeft: `${-(currentSlide - 1) * (100 / props.slides101.length)}%` }
						}
					>
						<Image alt="slide" src={props.slides101[0]} />
					</div>
					{props.slides101.map((item: any, index: number) => {
						if (index == 0) return;
						return (
							<div className="slide" style={{ width: `${100 / props.slides101.length}%` }} key={index}>
								<Image alt="slide" src={item} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="slider-option">
				{props.slides101.map((item: any, index: number) => (
					<label
						className="slider-bar"
						style={currentSlide - 1 == index ? { backgroundColor: "#ffffff" } : { backgroundColor: "transparent" }}
						key={index}
						onClick={() => setCurrentSlide(index + 1)}
					></label>
				))}
			</div>

			<div className="detail-container">
				<h1 className="title">{props.title}</h1>
				<p className="description">{props.description}</p>
			</div>
		</div>
	);
}

export default App;
