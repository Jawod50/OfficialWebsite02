import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/e-banana.css";

import memorya01 from "../../public/images/memorya/memorya-01.png";
import memorya02 from "../../public/images/memorya/memorya-02.png";
import memorya03 from "../../public/images/memorya/memorya-03.png";
import memorya04 from "../../public/images/memorya/memorya-04.png";
import memorya05 from "../../public/images/memorya/memorya-05.png";
import memorya06 from "../../public/images/memorya/memorya-06.png";
import memorya07 from "../../public/images/memorya/memorya-07.png";
import memorya08 from "../../public/images/memorya/memorya-08.png";
import memorya09 from "../../public/images/memorya/memorya-09.png";
import memorya10 from "../../public/images/memorya/memorya-10.png";
import memorya11 from "../../public/images/memorya/memorya-11.png";
import memorya12 from "../../public/images/memorya/memorya-12.png";
import memorya13 from "../../public/images/memorya/memorya-13.png";
import memorya14 from "../../public/images/memorya/memorya-14.png";
import memorya15 from "../../public/images/memorya/memorya-15.png";

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
					memorya01,
					memorya02,
					memorya03,
					memorya04,
					memorya05,
					memorya06,
					memorya07,
					memorya08,
					memorya09,
					memorya10,
					memorya11,
					memorya12,
					memorya13,
					memorya14,
					memorya15,
				]}
			/>

			<Footer />
		</div>
	);
}

export default Memorya;
