import React from "react";import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/e-banana.css";

function Memorya() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="MEMORYA - PASIG CITY CULTURAL MAPPING WITH UNITED NATION DEVELOPMENT PROGRAMME"
				description="This website helps local citizens of Pasig connect with each other and bond together through their shared memories and stories, and in turn, foster a stronger identity through a multi-layered local history, collectively owned by Pasigueños."
				slideWidth="1000"
				slideHeight="507"
				bgColor="65"
				slides101={[
					"/images/memorya/memorya-01.png",
					"/images/memorya/memorya-02.png",
					"/images/memorya/memorya-03.png",
					"/images/memorya/memorya-04.png",
					"/images/memorya/memorya-05.png",
					"/images/memorya/memorya-06.png",
					"/images/memorya/memorya-07.png",
					"/images/memorya/memorya-08.png",
					"/images/memorya/memorya-09.png",
					"/images/memorya/memorya-10.png",
					"/images/memorya/memorya-11.png",
					"/images/memorya/memorya-12.png",
					"/images/memorya/memorya-13.png",
					"/images/memorya/memorya-14.png",
					"/images/memorya/memorya-15.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default Memorya;
