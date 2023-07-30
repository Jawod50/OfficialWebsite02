import React from "react";
import SlideShowManual from "../scripts/slideShowManula";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/chessLive.css";

import ChessLive01 from "../../public/images/chessLive/ChessLive01.png";
import ChessLive02 from "../../public/images/chessLive/ChessLive02.png";
import ChessLive03 from "../../public/images/chessLive/ChessLive03.png";
import ChessLive04 from "../../public/images/chessLive/ChessLive04.png";
import ChessLive05 from "../../public/images/chessLive/ChessLive05.png";
import ChessLive06 from "../../public/images/chessLive/ChessLive06.png";

function ChessLive() {
	return (
		<div>
			<NavBar />

			<SlideShowManual
				title="CHESS LIVE"
				description="Recreation of the famous chess game in your browser where you can play with your family and friends with added feature of live video and chat. (Link: chesslive.herokuapp.com)"
				slideWidth="1000"
				slideHeight="515"
				bgColor="65"
				slides101={[ChessLive01, ChessLive02, ChessLive03, ChessLive04, ChessLive05, ChessLive06]}
			/>

			<Footer />
		</div>
	);
}

export default ChessLive;
