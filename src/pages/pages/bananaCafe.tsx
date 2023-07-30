import React from "react";
import SlideShowManual from "./_slideShowManula1";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/bananaCafe.css";

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
				slides101={[
					"../images/bananaCafe/BananaCafe01-Medium.png",
					"../images/bananaCafe/BananaCafe02-Medium.png",
					"../images/bananaCafe/BananaCafe03-Medium.png",
					"../images/bananaCafe/BananaCafe04-Medium.png",
					"../images/bananaCafe/BananaCafe05-Medium.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default BananaCafe;
