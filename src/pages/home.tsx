import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/home.css";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />

			<div className="header">
				<video id="vid01" src={"./videos/video01.mp4"} autoPlay loop muted></video>
				<div className="header-content">
					<Image width={200} height={200} src={"./images/logos/Logo.png"} alt="Logo Photo" />
					<h1>JUDE RUSSEL JAWOD</h1>
					<h2>SOFTWARE ENGINEER</h2>
				</div>
			</div>

			<div className="gap01"></div>

			<div id="nav-service"></div>
			<div id="service">
				<h2>SERVICES</h2>
				<Image id="boarder" width={100} height={4} src={"./images/logos/boarder.png"} alt="Boarder Photo" />
				<div id="service-container">
					<div id="service-item01">
						<Image
							width={200}
							height={200}
							src={"./images/logos/Automation-Medium.png"}
							alt="Automation Badge Photo"
						/>
					</div>
					<div id="service-item02">
						<Image
							width={200}
							height={200}
							src={"./images/logos/BusinessApp-Medium.png"}
							alt="Business Application Badge Photo"
						/>
					</div>
					<div id="service-item03">
						<Image
							width={200}
							height={200}
							src={"./images/logos/GameDev-Medium.png"}
							alt="Game Development Badge Photo"
						/>
					</div>
					<div id="service-item04">
						<h1>AUTOMATION</h1>
					</div>
					<div id="service-item05">
						<h1>BUSINESS APPLICATION</h1>
					</div>
					<div id="service-item06">
						<h1>GAME DEVELOPMENT</h1>
					</div>
					<div id="service-item07">
						<div className="wrap-p">
							<p>Creating a technology by which a procedure is performed with minimal human assistance.</p>
						</div>
					</div>
					<div id="service-item08">
						<p>Developing and implementing various sets of programs to ease the company in handling data.</p>
					</div>
					<div id="service-item09">
						<div className="wrap-p">
							<p>Art of making video games in both 3-Dimensional and 2-Dimensional platform.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="gap-background"></div>

			<div id="nav-work"></div>
			<div className="works">
				<h1>MY WORKS</h1>
				<Image width={100} height={4} src={"./images/logos/boarder.png"} alt="Boarder Photo" id="work-boarder" />
				<p>A collection of project I&apos;ve created over the years</p>
				<div id="gallery">
					<div className="photo-01">
						<Link href="robots">
							<Image
								width={500}
								height={375}
								src={"./images/robots/robot01-Small.png"}
								alt="Fire Fighting Robot Photo"
							/>
						</Link>
					</div>
					<div className="photo-02">
						<Link href="robots">
							<Image width={500} height={375} src={"./images/robots/robot02-Small.png"} alt="Sumo Bot Photo" />
						</Link>
					</div>
					<div className="photo-03">
						<Link href="robots">
							<Image
								width={500}
								height={375}
								src={"./images/robots/robot03-Small.png"}
								alt="Flying Car (Prototype) Photo"
							/>
						</Link>
					</div>

					<div className="photo-04">
						<Link href="bananaCube">
							<Image
								width={500}
								height={375}
								src={"./images/bananaCube/bananaHunt/BananaHunt05-Small.png"}
								alt="Banana Hunt Photo"
							/>
						</Link>
					</div>
					<div className="photo-05">
						<Link href="bananaCube">
							<Image
								width={500}
								height={375}
								src={"./images/bananaCube/bananaRun/BananaRun01-Small.png"}
								alt="Banana Run Photo"
							/>
						</Link>
					</div>
					<div className="photo-06">
						<Link href="bananaCube">
							<Image
								width={500}
								height={375}
								src={"./images/bananaCube/bananaHuntPro/BananaHuntPro02-Small.png"}
								alt="Banana Hunt Pro Photo"
							/>
						</Link>
					</div>

					<div className="photo-07">
						<Link href="sagHouse">
							<Image width={500} height={375} src={"./images/sagHouse/piper/Piper04-Small.png"} alt="Piper Photo" />
						</Link>
					</div>
					<div className="photo-08">
						<Link href="sagHouse">
							<Image
								width={500}
								height={375}
								src={"./images/sagHouse/cupDrop/CupDrop02-Small.png"}
								alt="Cup Drop Photo"
							/>
						</Link>
					</div>
					<div className="photo-09">
						<Link href="sagHouse">
							<Image
								width={500}
								height={375}
								src={"./images/sagHouse/waterBird/WaterBird04-Small.png"}
								alt="Water Bird Photo"
							/>
						</Link>
					</div>

					<div className="photo-10">
						<Link href="bananaOnlineStore">
							<Image
								width={500}
								height={375}
								src={"./images/bananaOnlineStore/bananaOnlineStore02-Small.png"}
								alt="SagHouse Photo"
							/>
						</Link>
					</div>
					<div className="photo-11">
						<Link href="sagHouse">
							<Image
								width={500}
								height={375}
								src={"./images/sagHouse/sagHouse/SagHouse01-Small.png"}
								alt="E-BANANA Photo"
							/>
						</Link>
					</div>
					<div className="photo-12">
						<Link href="e-banana">
							<Image
								width={500}
								height={375}
								src={"./images/e-banana/EBanana01-Small.png"}
								alt="Water Bird Photo"
							/>
						</Link>
					</div>

					<div className="photo-13">
						<Link href="chatapz">
							<Image width={500} height={375} src={"./images/chatapz/Chatapz02-Small.png"} alt="Chatapz Photo" />
						</Link>
					</div>

					<div className="photo-14">
						<Link href="bananaCafe">
							<Image
								width={500}
								height={375}
								src={"./images/bananaCafe/BananaCafe02-Small.png"}
								alt="Banana Cafe Photo"
							/>
						</Link>
					</div>
					<div className="photo-15">
						<Link href="chessLive">
							<Image
								width={500}
								height={375}
								src={"./images/chessLive/ChessLive01-Small.png"}
								alt="ChessLive Photo"
							/>
						</Link>
					</div>

					<div className="photo-16">
						<Link href="myVetPH">
							<Image width={500} height={375} src={"./images/myVetPH/my-vet-ph-01-small.png"} alt="Piper Photo" />
						</Link>
					</div>
					<div className="photo-17">
						<Link href="memorya">
							<Image width={500} height={375} src={"./images/memorya/memorya-01-small.png"} alt="Cup Drop Photo" />
						</Link>
					</div>
					<div className="photo-18">
						<Link href="iqorian">
							<Image
								width={500}
								height={375}
								src={"./images/iqorian/iqorian-01-small.png"}
								alt="Banana Online Store Photo"
							/>
						</Link>
					</div>

					<div className="empty00">
						<Image width={500} height={385} src={"./images/logos/empty.png"} alt="Empty" />
					</div>
					<div className="empty01">
						<Image width={500} height={385} src={"./images/logos/empty.png"} alt="Empty" />
					</div>
				</div>
			</div>

			<div className="gap-background"></div>

			<div id="nav-about"></div>
			<div className="about">
				<div className="about-container">
					<h1>ABOUT ME</h1>
					<Image width={100} height={4} src={"./images/logos/boarderblack.png"} alt="Boarder Photo" />
					<p>
						Aspiring to be in the field of technological innovation that would enhance and develop technical skill for
						the benefit of the institution and the community, striving to bring out the best to have a remarkable
						contribution not only in the industry but also for the society.
					</p>
				</div>
			</div>

			<div id="nav-find"></div>

			<div className="find">
				<video src={"./videos/video02.mp4"} autoPlay loop muted></video>
				<div className="find-content">
					<h1>FIND</h1>
					<Image width={100} height={4} src={"./images/logos/boarder.png"} alt="Boarder Photo" />
					<div className="find-grid-container">
						<div></div>
						<div className="information">
							<p>Location: Taguig City, Philippines</p>
							<p>Email: Jawod50@gmail.com</p>
							<p>Contact: 09123456789</p>
						</div>
						<div className="sign-up">
							<form>
								<input className="textbox" type="text" name="user-name" placeholder="Name *" />
								<br />
								<input className="textbox" type="email" name="user-email" placeholder="Email *" />
								<br />
								<input className="textbox" type="text" name="user-subject" placeholder="Subject" /> <br />
								<textarea name="user-subject" placeholder="Message"></textarea> <br />
								<input className="button" type="submit" name="user-Send" placeholder="Send" value="Send" />
							</form>
						</div>
						<div></div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
