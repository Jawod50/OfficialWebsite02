import React from "react";import SlideShowManual from "./_slideShowManula1";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/e-banana.css";

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
					"../images/myVetPH/my-vet-ph-01.png",
					"../images/myVetPH/my-vet-ph-02.png",
					"../images/myVetPH/my-vet-ph-03.png",
					"../images/myVetPH/my-vet-ph-04.png",
					"../images/myVetPH/my-vet-ph-05.png",
					"../images/myVetPH/my-vet-ph-06.png",
					"../images/myVetPH/my-vet-ph-07.png",
					"../images/myVetPH/my-vet-ph-08.png",
					"../images/myVetPH/my-vet-ph-09.png",
					"../images/myVetPH/my-vet-ph-10.png",
				]}
			/>

			<SlideShowManual
				title="MY VET PH (PREVIOUS DESIGN)"
				description=""
				slideWidth="750"
				slideHeight="562"
				bgColor="65"
				slides101={[
					"../images/myVetPH/my-vet-ph-old-01.png",
					"../images/myVetPH/my-vet-ph-old-02.png",
					"../images/myVetPH/my-vet-ph-old-03.png",
					"../images/myVetPH/my-vet-ph-old-04.png",
					"../images/myVetPH/my-vet-ph-old-05.png",
					"../images/myVetPH/my-vet-ph-old-06.png",
					"../images/myVetPH/my-vet-ph-old-07.png",
					"../images/myVetPH/my-vet-ph-old-08.png",
					"../images/myVetPH/my-vet-ph-old-09.png",
					"../images/myVetPH/my-vet-ph-old-10.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default MyVetPH;
