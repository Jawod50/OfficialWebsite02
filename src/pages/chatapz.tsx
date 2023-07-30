import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/chatapz.css";

import Chatapz01 from "../../public/images/chatapz/Chatapz01.png";
import Chatapz02 from "../../public/images/chatapz/Chatapz02.png";
import Chatapz03 from "../../public/images/chatapz/Chatapz03.png";
import Chatapz04 from "../../public/images/chatapz/Chatapz04.png";
import Chatapz05 from "../../public/images/chatapz/Chatapz05.png";

function Chatapz() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="CHATAPZ"
				description="A place where you can come and hangout with your friends without worrying about your privacy. Chat or video-call your friends at your convenience at chatapz.heorkuapp.com."
				slideWidth="1000"
				slideHeight="515"
				bgColor="65"
				slides101={[Chatapz01, Chatapz02, Chatapz03, Chatapz04, Chatapz05]}
			/>

			<Footer />
		</div>
	);
}

export default Chatapz;
