import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/bananaOnlineStore.css";

import bananaOnlineStore01 from "../../public/images/bananaOnlineStore/bananaOnlineStore01.png";
import bananaOnlineStore02 from "../../public/images/bananaOnlineStore/bananaOnlineStore02.png";
import bananaOnlineStore03 from "../../public/images/bananaOnlineStore/bananaOnlineStore03.png";
import bananaOnlineStore04 from "../../public/images/bananaOnlineStore/bananaOnlineStore04.png";
import bananaOnlineStore05 from "../../public/images/bananaOnlineStore/bananaOnlineStore05.png";
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
					bananaOnlineStore01,
					bananaOnlineStore02,
					bananaOnlineStore03,
					bananaOnlineStore04,
					bananaOnlineStore05,
				]}
			/>

			<Footer />
		</div>
	);
}

export default BananaOnlineStore;
