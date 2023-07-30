import React from "react";
import SlideShowManual from "./_slideShowManula1";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/e-banana.css";

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
				slides101={[
					"../images/iqorian/iqorian-03.png",
					"../images/iqorian/iqorian-02.png",
					"../images/iqorian/iqorian-01.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default MyVetPH;
