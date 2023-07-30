import React from "react";import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/e-banana.css";

import myvetph01 from "../../public/images/myVetPH/my-vet-ph-01.png";
import myvetph02 from "../../public/images/myVetPH/my-vet-ph-02.png";
import myvetph03 from "../../public/images/myVetPH/my-vet-ph-03.png";
import myvetph04 from "../../public/images/myVetPH/my-vet-ph-04.png";
import myvetph05 from "../../public/images/myVetPH/my-vet-ph-05.png";
import myvetph06 from "../../public/images/myVetPH/my-vet-ph-06.png";
import myvetph07 from "../../public/images/myVetPH/my-vet-ph-07.png";
import myvetph08 from "../../public/images/myVetPH/my-vet-ph-08.png";
import myvetph09 from "../../public/images/myVetPH/my-vet-ph-09.png";
import myvetph10 from "../../public/images/myVetPH/my-vet-ph-10.png";
import myvetphold01 from "../../public/images/myVetPH/my-vet-ph-old-01.png";
import myvetphold02 from "../../public/images/myVetPH/my-vet-ph-old-02.png";
import myvetphold03 from "../../public/images/myVetPH/my-vet-ph-old-03.png";
import myvetphold04 from "../../public/images/myVetPH/my-vet-ph-old-04.png";
import myvetphold05 from "../../public/images/myVetPH/my-vet-ph-old-05.png";
import myvetphold06 from "../../public/images/myVetPH/my-vet-ph-old-06.png";
import myvetphold07 from "../../public/images/myVetPH/my-vet-ph-old-07.png";
import myvetphold08 from "../../public/images/myVetPH/my-vet-ph-old-08.png";
import myvetphold09 from "../../public/images/myVetPH/my-vet-ph-old-09.png";
import myvetphold10 from "../../public/images/myVetPH/my-vet-ph-old-10.png";

function MyVetPH() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="MY VET PH"
				description="A mobile application used for finding the nearest veterinary clinic for your pet’s healthcare. It also helps you keep track of your upcoming appointments and notifies you for your pet’s next visit to their veterinarian. (Available on Google Play Store and Apple App Store)"
				slideWidth="750"
				slideHeight="562"
				bgColor="65"
				slides101={[
					myvetph01,
					myvetph02,
					myvetph03,
					myvetph04,
					myvetph05,
					myvetph06,
					myvetph07,
					myvetph08,
					myvetph09,
					myvetph10,
				]}
			/>

			<SlideShowManual
				title="MY VET PH (PREVIOUS DESIGN)"
				description=""
				slideWidth="750"
				slideHeight="562"
				bgColor="65"
				slides101={[
					myvetphold01,
					myvetphold02,
					myvetphold03,
					myvetphold04,
					myvetphold05,
					myvetphold06,
					myvetphold07,
					myvetphold08,
					myvetphold09,
					myvetphold10,
				]}
			/>

			<Footer />
		</div>
	);
}

export default MyVetPH;
