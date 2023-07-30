import React from "react";import Image from "next/image";
import "./Footer.css";
import Facebook from "../../../public/images/logos/SM_Facebook.png";

function NavBar() {
	return (
		<div className="footer">
			<a href="https://www.facebook.com/" target="new">
				<Image width={38} height={38} src={Facebook} alt="Facebook" />
			</a>
			<a href="https://www.instagram.com/" target="new">
				<Image width={38} height={38} src={"/images/logos/SM_Instagram.png"} alt="Instagram" />
			</a>
			<a href="https://twitter.com/" target="new">
				<Image width={38} height={38} src={"/images/logos/SM_Twitter.png"} alt="Twitter" />
			</a>
			<a href="https://linkedin.com/" target="new">
				<Image width={38} height={38} src={"/images/logos/SM_Linkedin.png"} alt="Linkedin" />
			</a>
			<p>Copyright © 2020-2021 Jude Russel Jawod</p>
		</div>
	);
}

export default NavBar;
