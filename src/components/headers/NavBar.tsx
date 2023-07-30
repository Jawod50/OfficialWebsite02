import React from "react";import Link from "next/link";

import "./NavBar.css";
function NavBar() {
	return (
		<div className="nav">
			<div className="nav-container">
				<ul>
					<li>
						<Link href="home#nav-about">ABOUT</Link>
					</li>
					<li>
						<Link href="home#nav-service">SERVICE</Link>
					</li>
					<li>
						<Link href="home#nav-work">WORK</Link>
						<ul>
							<li>
								<Link href="myVetPH">MY VET PH</Link>
							</li>
							<li>
								<Link href="memorya">MEMORYA</Link>
							</li>
							<li>
								<Link href="iqorian">IQORIAN</Link>
							</li>
							<li>
								<Link href="chatapz">CHATAPZ</Link>
							</li>
							<li>
								<Link href="chessLive">CHESS LIVE</Link>
							</li>
							<li>
								<Link href="bananaCafe">BANANA CAFE</Link>
							</li>
							<li>
								<Link href="bananaCube">BANANA CUBE</Link>
							</li>
							<li>
								<Link href="sagHouse">SAG HOUSE</Link>
							</li>
							<li>
								<Link href="robots">ROBOTS</Link>
							</li>
							<li>
								<Link href="e-banana">E-BANANA</Link>
							</li>
							<li>
								<Link href="bananaOnlineStore">BANANA O.S .</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href="home#nav-find">CONTACT</Link>
					</li>
					<li>
						<Link href="more">MORE</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
