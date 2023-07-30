import React from "react";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import Image from "next/image";
import "../css/robots.css";

function Robots() {
	return (
		<div className="robot-parent">
			<NavBar />

			<br />

			<div className="content00">
				<div className="robot011">
					<h1 className="title011">FIRE FIGHTING ROBOT</h1>
					<Image src={"/images/robots/robot01-Medium.png"} alt="Fire Figthing Robot Image" className="photo011" />
					<p className="description011">
						An autonomous robot that would help firefighters to extinguish fire. This would reduce the dangers
						firefighters may experience especially in places that are not easily accessible due to hazards.
					</p>
				</div>

				<div className="robot022">
					<h1 className="title022">LINE TRACING ROBOT</h1>
					<Image src={"/images/robots/robot02-Medium.png"} alt="Line Tracing Robot Image" className="photos022" />
					<p className="description022">
						This robot acts as an ant. It follows a line wherein the line guides it to its destination. If this robot
						sees something blocking his path it would figure out its way around.
					</p>
				</div>

				<div className="robot033">
					<h1 className="title033">FLYING CAR (PROTOTYPE)</h1>
					<Image src={"/images/robots/robot03-Medium.png"} alt="Flying Car Image" className="photo033" />
					<p className="description033">
						A prototype of a flying car from the future. This remote-controlled robot would help you see the future
						transportation of the advance humanity.
					</p>
				</div>

				<div className="robot044">
					<h1 className="title04">SUMO BOT</h1>
					<Image src={"/images/robots/robot04-Medium.png"} alt="Sumo Bot Image" className="photo044" />
					<p className="description044">
						This warrior has only one goal and that is to eliminate his opponent. It uses its body to push the
						opponent out of the arena.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Robots;
