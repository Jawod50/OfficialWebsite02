import React from "react";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/sagHouse.css";

function SagHouse() {
	return (
		<div>
			<NavBar />
			<br />

			<div className="content01">
				<div className="slideShow01">
					<h1 className="title01">SAG HOUSE</h1>
					<div className="slider01"></div>
					<p className="description0111">
						Water scarcity is one of the many problems across the globe. This 2D game aims to provide awareness and
						knowledge to the player. The game would let you control the water system efficiently and collect water to
						save the town from drought.
					</p>
				</div>

				<div className="slideShow02">
					<h1 className="title02">CUP DROP</h1>
					<div className="slider02"></div>
					<p className="description0222">
						A game where you collect water droplets in order to save people from drought, thus making the world a
						better place.
					</p>
				</div>

				<div className="slideShow03">
					<h1 className="title03">PIPER</h1>
					<div className="slider03"></div>
					<p className="description0333">
						Teaches people how to conserve water through a game. The game is about controlling water pressure and
						taking action accordingly.
					</p>
				</div>

				<div className="slideShow04">
					<h1 className="title04">WATER BIRD</h1>
					<div className="slider04"></div>
					<p className="description0444">
						Using your pet as a collector of water to break the current problem of water scarcity that we are
						experiencing
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default SagHouse;
