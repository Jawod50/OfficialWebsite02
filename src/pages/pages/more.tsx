import React from "react";import Image from "next/image";
import NavBar from "../../components/headers/NavBar";
import Footer from "./_footer";
import "../../css/more.css";

function More() {
	return (
		<div>
			<NavBar />

			<br />
			<br />
			<br />

			<div className="pl-section">
				<Image width={150} height={150} src={"../images/logos/PL_CL.png"} alt="C Language Logo" />
				<Image width={150} height={150} src={"../images/logos/PL_CP.png"} alt="C++ Logo" />
				<Image width={150} height={150} src={"../images/logos/PL_CS.png"} alt="C# Logo" />
				<Image width={150} height={150} src={"../images/logos/PL_JV.png"} alt="Java Logo" />
				<Image width={150} height={150} src={"../images/logos/PL_JS.png"} alt="Javascript Logo" />
				<Image width={150} height={150} src={"../images/logos/PL_TS.png"} alt="Typescript Logo" />
			</div>

			<div className="WD-section">
				<h1 className="WD-title">WEB DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={"../images/logos/SW_JS_MongoDB.png"} alt="JS_MongoDB" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Express.png"} alt="JS_Express" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_React.png"} alt="JS_React" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Node.png"} alt="JS_Node" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Redux.png"} alt="JS_Redux" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Azure.png"} alt="JS_Azure" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_AzureDevOps.png"} alt="JS_AzureDevOps" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_WebRTC.png"} alt="JS_WebRTC" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_SocketIO.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Axios.png"} alt="JS_Axios" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GoogleMaps.png"} alt="JS_GoogleMaps" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GoogleAuth.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_FacebookAuth.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_JSONWebToken.png"} alt="JS_JSONWebToken" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Bcrypt.png"} alt="JS_Bcrypt" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Passport.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_FirebaseCloudStorage.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Heroku.png"} alt="JS_Heroku" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Bootstrap.png"} alt="JS_Bootstrap" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GIT.png"} alt="JS_GIT" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Github.png"} alt="JS_Github" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_JS_VisualStudioCode.png"}
						alt="JS_VisualStudioCode"
					/>
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">GAME DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={"../images/logos/SW_CS_Unity.png"} alt="CSHP_Unity" />
					<Image width={250} height={100} src={"../images/logos/SW_CS_Probuilder.png"} alt="CSHP_Probuilder" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_CS_WFANetFramework.png"}
						alt="CSHP_WFANetFramework"
					/>
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_CS_MicrosoftVisualStudio.png"}
						alt="MicrosoftVisualStudio"
					/>
					<Image width={250} height={100} src={"../images/logos/SW_JV_LibGDX.png"} alt="JAVA_LibGDX" />
					<Image width={250} height={100} src={"../images/logos/SW_JV_AndroidStudio.png"} alt="JAVA_AndroidStudio" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_MERNStack.png"} alt="MERNStack" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_JS_VisualStudioCode.png"}
						alt="JS_VisualStudioCode"
					/>
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">DESKTOP APPLICATION</h1>
				<div className="WD-body">
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_CS_MicrosoftSQLServer.png"}
						alt="CSHP_MicrosoftSQLServer"
					/>
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_CS_WFANetFramework.png"}
						alt="CSHP_WFANetFramework"
					/>
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_CS_MicrosoftVisualStudio.png"}
						alt="CSHP_MicrosoftVisualStudio"
					/>
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">MOBILE DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={"../images/logos/SW_JS_MongoDB.png"} alt="JS_MongoDB" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Express.png"} alt="JS_Express" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_ReactNative.png"} alt="JS_React" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Node.png"} alt="JS_Node" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Redux.png"} alt="JS_Redux" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Axios.png"} alt="JS_Axios" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_JSONWebToken.png"} alt="JS_JSONWebToken" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Bcrypt.png"} alt="JS_Bcrypt" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Heroku.png"} alt="JS_Heroku" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_FirebaseCloudStorage.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_FirebaseCloudMessaging.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_FacebookAuth.png"} alt="JS_SocketIO" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GoogleAuth.png"} alt="JS_GoogleAuth" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GoogleMaps.png"} alt="JS_GoogleMaps" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GooglePlayStore.png"} alt="JS_GooglePlayStore" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_JS_ApplePushNotification.png"}
						alt="JS_ApplePushNotification"
					/>
					<Image width={250} height={100} src={"../images/logos/SW_JS_AppleAppStore.png"} alt="JS_AppleAppStore" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_JS_AppleStoreConnect.png"}
						alt="JS_AppleStoreConnect"
					/>
					<Image width={250} height={100} src={"../images/logos/SW_JS_XCode.png"} alt="JS_XCode" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_AndroidStudio.png"} alt="JS_AndroidStudio" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_GIT.png"} alt="JS_GIT" />
					<Image width={250} height={100} src={"../images/logos/SW_JS_Github.png"} alt="JS_Github" />
					<Image
						width={250}
						height={100}
						src={"../images/logos/SW_JS_VisualStudioCode.png"}
						alt="JS_VisualStudioCode"
					/>
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">AUTOMATION</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={"../images/logos/SW_CL_Arduino.png"} alt="Arduino" />
					<Image width={250} height={100} src={"../images/logos/SW_CL_ArduinoIDE.png"} alt="ArduinoIDE" />
					<Image width={250} height={100} src={"../images/logos/SW_CL_BasicElectronics.png"} alt="BasicElectronics" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">DESIGN TOOLS</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={"../images/logos/SW_E_Photoshop.png"} alt="Photoshop" />
					<Image width={250} height={100} src={"../images/logos/SW_E_Premiere.png"} alt="Premiere" />
					<Image width={250} height={100} src={"../images/logos/SW_E_Audition.png"} alt="Audition" />
					<Image width={250} height={100} src={"../images/logos/SW_E_Animate.png"} alt="Animate" />
					<Image width={250} height={100} src={"../images/logos/SW_E_Blender.png"} alt="Blender" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">EMPLOYMENT HISTORY</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={"../images/logos/PF_Employment01ee.png"} alt="Employment01" />
					<Image width={400} height={180} src={"../images/logos/PF_Employment02ee.png"} alt="Employment02" />
					<Image width={400} height={180} src={"../images/logos/PF_Employment03.png"} alt="Employment03" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">CLOUD SERVICE</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={"../images/logos/PF_Cloud01.png"} alt="Cloud01" />
					<Image width={400} height={180} src={"../images/logos/PF_Cloud02.png"} alt="Cloud02" />
					<Image width={400} height={180} src={"../images/logos/PF_Cloud03.png"} alt="Cloud03" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">PROFESSIONAL QUALIFICATION</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={"../images/logos/PF_Qualification01ee.png"} alt="Qualification01" />
					<Image width={400} height={180} src={"../images/logos/PF_Qualification02.png"} alt="Qualification02" />
					<Image width={400} height={180} src={"../images/logos/PF_Qualification03.png"} alt="Qualification03" />
					<Image width={400} height={180} src={"../images/logos/PF_Qualification04.png"} alt="Qualification04" />
					<Image width={400} height={180} src={"../images/logos/PF_Qualification05.png"} alt="Qualification05" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">AWARDS</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={"../images/logos/PF_Award01ee.png"} alt="Award01" />
					<Image width={400} height={180} src={"../images/logos/PF_Award02.png"} alt="Award02" />
					<Image width={400} height={180} src={"../images/logos/PF_Award03.png"} alt="Award03" />
					<Image width={400} height={180} src={"../images/logos/PF_Award04.png"} alt="Award04" />
					<Image width={400} height={180} src={"../images/logos/PF_Award05.png"} alt="Award06" />
					<Image width={400} height={180} src={"../images/logos/PF_Award06.png"} alt="Award05" />
					<Image width={400} height={180} src={"../images/logos/PF_Award07.png"} alt="Award07" />
					<Image width={400} height={180} src={"../images/logos/PF_Award08.png"} alt="Award08" />
					<Image width={400} height={180} src={"../images/logos/PF_Award09.png"} alt="Award09" />
					<Image width={400} height={180} src={"../images/logos/PF_Award10.png"} alt="Award10" />
					<Image width={400} height={180} src={"../images/logos/PF_Award11.png"} alt="Award11" />
					<Image width={400} height={180} src={"../images/logos/PF_Award12.png"} alt="Award12" />
					<Image width={400} height={180} src={"../images/logos/PF_Award13.png"} alt="Award13" />
					<Image width={400} height={180} src={"../images/logos/PF_Award14.png"} alt="Award14" />
					<Image width={400} height={180} src={"../images/logos/PF_Award15.png"} alt="Award15" />
					<Image width={400} height={180} src={"../images/logos/PF_Award16.png"} alt="Award16" />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default More;
