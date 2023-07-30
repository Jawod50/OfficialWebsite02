import React from "react";
import SlideShowManual from "./_slideShowManula";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/chessLive.css";

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
				slides101={[
					"../images/chessLive/ChessLive01.png",
					"../images/chessLive/ChessLive02.png",
					"../images/chessLive/ChessLive03.png",
					"../images/chessLive/ChessLive04.png",
					"../images/chessLive/ChessLive05.png",
					"../images/chessLive/ChessLive06.png",
				]}
			/>

			<Footer />
		</div>
	);
}

export default ChessLive;
