import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/bananaCafe.css";

import BananaCafe01Medium from "../../public/images/bananaCafe/BananaCafe01-Medium.png";
import BananaCafe02Medium from "../../public/images/bananaCafe/BananaCafe02-Medium.png";
import BananaCafe03Medium from "../../public/images/bananaCafe/BananaCafe03-Medium.png";
import BananaCafe04Medium from "../../public/images/bananaCafe/BananaCafe04-Medium.png";
import BananaCafe05Medium from "../../public/images/bananaCafe/BananaCafe05-Medium.png";

function BananaCafe() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="BANANA CAFÈ"
				description="A program that helps businesses to record its sales, monitors transactions, and make a visual representation of the sales. This program is connected to a database where the data will be stored."
				slideWidth="1000"
				slideHeight="562"
				bgColor="50"
				slides101={[BananaCafe01Medium, BananaCafe02Medium, BananaCafe03Medium, BananaCafe04Medium, BananaCafe05Medium]}
			/>

			<Footer />
		</div>
	);
}

export default BananaCafe;
