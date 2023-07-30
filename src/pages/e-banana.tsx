import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";

import "../css/e-banana.css";
import EBanana01Medium from "../../public/images/e-banana/EBanana01-Medium.png";
import EBanana02Medium from "../../public/images/e-banana/EBanana02-Medium.png";
import EBanana03Medium from "../../public/images/e-banana/EBanana03-Medium.png";
import EBanana04Medium from "../../public/images/e-banana/EBanana04-Medium.png";
import EBanana05Medium from "../../public/images/e-banana/EBanana05-Medium.png";
import EBanana06Medium from "../../public/images/e-banana/EBanana06-Medium.png";

function EBanana() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="E-BANANA"
				description="This device is specifically created for emergency situation. It has a GPS for tracking location and a GSM for contacting the authorities. It would ease the process of seeking help and sending rescue by just 2 clicks."
				slideWidth="800"
				slideHeight="600"
				bgColor="65"
				slides101={[EBanana01Medium, EBanana02Medium, EBanana03Medium, EBanana04Medium, EBanana05Medium, EBanana06Medium]}
			/>

			<Footer />
		</div>
	);
}

export default EBanana;
