import React from "react";import Image from "next/image";
import "./Footer.css";
import SM_Facebook from "../../../public/images/logos/SM_Facebook.png";
import SM_Instagram from "../../../public/images/logos/SM_Instagram.png";
import SM_Twitter from "../../../public/images/logos/SM_Twitter.png";
import SM_Linkedin from "../../../public/images/logos/SM_Linkedin.png";

function NavBar() {
	return (
		<div className="footer">
			<a href="https://www.facebook.com/" target="new">
				<Image width={38} height={38} src={SM_Facebook} alt="Facebook" />
			</a>
			<a href="https://www.instagram.com/" target="new">
				<Image width={38} height={38} src={SM_Instagram} alt="Instagram" />
			</a>
			<a href="https://twitter.com/" target="new">
				<Image width={38} height={38} src={SM_Twitter} alt="Twitter" />
			</a>
			<a href="https://linkedin.com/" target="new">
				<Image width={38} height={38} src={SM_Linkedin} alt="Linkedin" />
			</a>
			<p>Copyright © 2020-2021 Jude Russel Jawod</p>
		</div>
	);
}

export default NavBar;
