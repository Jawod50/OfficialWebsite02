import React, { useState } from "react";import Image from "next/image";
import "./slideShowManula.css";
const nextIcon = "../images/logos/next.png";
const previousIcon = "../images/logos/previous.png";

interface IProps {
	title: any;
	description: any;
	slideWidth: any;
	slideHeight: any;
	bgColor: any;
	slides101: string[];
}

function App(props: IProps) {
	const [currentSlide, setCurrentSlide] = useState(props.slides101 ? props.slides101 : "");

	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}

export default App;
