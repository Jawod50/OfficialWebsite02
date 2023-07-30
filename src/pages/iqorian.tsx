import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/e-banana.css";

import iqorian03 from "../../public/images/iqorian/iqorian-03.png";
import iqorian02 from "../../public/images/iqorian/iqorian-02.png";
import iqorian01 from "../../public/images/iqorian/iqorian-01.png";

function MyVetPH() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="IQORIAN"
				description="iQorian is a one-stop-shop application that provides the latest company information and all-important metrics. It provides real-time company news and updates, insights into employee’s productive hours, quality scorecard, coaching opportunities, assigned tasks, and many more to come. (Available on Google Play Store and Apple App Store)"
				slideWidth="745"
				slideHeight="550"
				bgColor="65"
				slides101={[iqorian03, iqorian02, iqorian01]}
			/>

			<Footer />
		</div>
	);
}

export default MyVetPH;
