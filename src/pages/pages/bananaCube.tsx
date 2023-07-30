import React from "react";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/bananaCube.css";

function BananaCube() {
	return (
		<div>
			<NavBar />

			<br />
			<div className="content01">
				<div className="slideShow01">
					<h1 className="title01">BANANA CUBE</h1>
					<div className="slider01"></div>
					<p className="description01">
						Make them play with a purpose. This 3D game aims to teach the youth about proper diet and dangers of
						process foods. It is intended to simulate real-world effects of junk and processed foods using graphs and
						live games where you need to avoid unhealthy treats and foods. (Link: shorturl.at/irv09)
					</p>
				</div>

				<div className="slideShow02">
					<h1 className="title02">BANANA HUNT</h1>
					<div className="slider02"></div>
					<p className="description02">
						Solving puzzles and problems on another level! Make them think logically and improve their decision making
						skills. Finish the game using clues around it; the game has a sci-fi inspired theme to increase its
						popularity.
					</p>
				</div>

				<div className="slideShow03">
					<h1 className="title03">BANANA HUNT PRO</h1>
					<div className="slider03"></div>
					<p className="description03">
						Always late? This game will improve your sense of time and memory. A game that will teach you to value
						every second of your life with challenging puzzles to gain youth’s interest.
					</p>
				</div>

				<div className="slideShow04">
					<h1 className="title04">BANANA RUN</h1>
					<div className="slider04"></div>
					<p className="description04">
						Make them play with a purpose. This game aims to teach the youth about proper diet and dangers of process
						foods. Specifically designed to educate young people in an entertaining way. This game is an object
						avoidance game that is intended to simulate real world effects of junk and processed foods.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default BananaCube;
