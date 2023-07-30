import React from "react";import SlideShowManual from "./_slideShowManula1";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/bananaOnlineStore.css";

function BananaOnlineStore() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="BANANA ONLINE STORE"
				description="Boost your sale by making your product available online. BOS is an online website where you can buy and sell products. (Link: bananastore.herokuapp.com)"
				slideWidth="1000"
				slideHeight="520"
				bgColor="65"
				slides101={[
					"../images/bananaOnlineStore/bananaOnlineStore01.png",
					"../images/bananaOnlineStore/bananaOnlineStore02.png",
					"../images/bananaOnlineStore/bananaOnlineStore03.png",
					"../images/bananaOnlineStore/bananaOnlineStore04.png",
					"../images/bananaOnlineStore/bananaOnlineStore05.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default BananaOnlineStore;
