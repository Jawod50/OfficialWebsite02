import React from "react";
import SlideShowManual from "../../scripts/slideShowManula";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/chatapz.css";

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
				slides101={[
					"../images/chatapz/Chatapz01.png",
					"../images/chatapz/Chatapz02.png",
					"../images/chatapz/Chatapz03.png",
					"../images/chatapz/Chatapz04.png",
					"../images/chatapz/Chatapz05.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default Chatapz;
