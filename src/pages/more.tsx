import React from "react";
import Image from "next/image";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import "../css/more.css";

import PL_CL from "../../public/images/logos/PL_CL.png";
import PL_CP from "../../public/images/logos/PL_CP.png";
import PL_CS from "../../public/images/logos/PL_CS.png";
import PL_JV from "../../public/images/logos/PL_JV.png";
import PL_JS from "../../public/images/logos/PL_JS.png";
import PL_TS from "../../public/images/logos/PL_TS.png";
import SW_JS_React from "../../public/images/logos/SW_JS_React.png";
import SW_JS_Azure from "../../public/images/logos/SW_JS_Azure.png";
import SW_JS_AzureDevOps from "../../public/images/logos/SW_JS_AzureDevOps.png";
import SW_JS_WebRTC from "../../public/images/logos/SW_JS_WebRTC.png";
import SW_JS_SocketIO from "../../public/images/logos/SW_JS_SocketIO.png";
import SW_JS_Passport from "../../public/images/logos/SW_JS_Passport.png";
import SW_JS_Bootstrap from "../../public/images/logos/SW_JS_Bootstrap.png";
import SW_CS_Unity from "../../public/images/logos/SW_CS_Unity.png";
import SW_CS_Probuilder from "../../public/images/logos/SW_CS_Probuilder.png";
import SW_JV_LibGDX from "../../public/images/logos/SW_JV_LibGDX.png";
import SW_JV_AndroidStudio from "../../public/images/logos/SW_JV_AndroidStudio.png";
import SW_JS_MERNStack from "../../public/images/logos/SW_JS_MERNStack.png";
import SW_CS_MicrosoftSQLServer from "../../public/images/logos/SW_CS_MicrosoftSQLServer.png";
import SW_CS_WFANetFramework from "../../public/images/logos/SW_CS_WFANetFramework.png";
import SW_CS_MicrosoftVisualStudio from "../../public/images/logos/SW_CS_MicrosoftVisualStudio.png";
import SW_JS_MongoDB from "../../public/images/logos/SW_JS_MongoDB.png";
import SW_JS_Express from "../../public/images/logos/SW_JS_Express.png";
import SW_JS_ReactNative from "../../public/images/logos/SW_JS_ReactNative.png";
import SW_JS_Node from "../../public/images/logos/SW_JS_Node.png";
import SW_JS_Redux from "../../public/images/logos/SW_JS_Redux.png";
import SW_JS_Axios from "../../public/images/logos/SW_JS_Axios.png";
import SW_JS_JSONWebToken from "../../public/images/logos/SW_JS_JSONWebToken.png";
import SW_JS_Bcrypt from "../../public/images/logos/SW_JS_Bcrypt.png";
import SW_JS_Heroku from "../../public/images/logos/SW_JS_Heroku.png";
import SW_JS_FirebaseCloudStorage from "../../public/images/logos/SW_JS_FirebaseCloudStorage.png";
import SW_JS_FirebaseCloudMessaging from "../../public/images/logos/SW_JS_FirebaseCloudMessaging.png";
import SW_JS_FacebookAuth from "../../public/images/logos/SW_JS_FacebookAuth.png";
import SW_JS_GoogleAuth from "../../public/images/logos/SW_JS_GoogleAuth.png";
import SW_JS_GoogleMaps from "../../public/images/logos/SW_JS_GoogleMaps.png";
import SW_JS_GooglePlayStore from "../../public/images/logos/SW_JS_GooglePlayStore.png";
import SW_JS_ApplePushNotification from "../../public/images/logos/SW_JS_ApplePushNotification.png";
import SW_JS_AppleAppStore from "../../public/images/logos/SW_JS_AppleAppStore.png";
import SW_JS_AppleStoreConnect from "../../public/images/logos/SW_JS_AppleStoreConnect.png";
import SW_JS_XCode from "../../public/images/logos/SW_JS_XCode.png";
import SW_JS_AndroidStudio from "../../public/images/logos/SW_JS_AndroidStudio.png";
import SW_JS_GIT from "../../public/images/logos/SW_JS_GIT.png";
import SW_JS_Github from "../../public/images/logos/SW_JS_Github.png";
import SW_JS_VisualStudioCode from "../../public/images/logos/SW_JS_VisualStudioCode.png";
import SW_CL_Arduino from "../../public/images/logos/SW_CL_Arduino.png";
import SW_CL_ArduinoIDE from "../../public/images/logos/SW_CL_ArduinoIDE.png";
import SW_CL_BasicElectronics from "../../public/images/logos/SW_CL_BasicElectronics.png";
import SW_E_Photoshop from "../../public/images/logos/SW_E_Photoshop.png";
import SW_E_Premiere from "../../public/images/logos/SW_E_Premiere.png";
import SW_E_Audition from "../../public/images/logos/SW_E_Audition.png";
import SW_E_Animate from "../../public/images/logos/SW_E_Animate.png";
import SW_E_Blender from "../../public/images/logos/SW_E_Blender.png";
import PF_Employment01ee from "../../public/images/logos/PF_Employment01ee.png";
import PF_Employment02ee from "../../public/images/logos/PF_Employment02ee.png";
import PF_Employment03 from "../../public/images/logos/PF_Employment03.png";
import PF_Cloud01 from "../../public/images/logos/PF_Cloud01.png";
import PF_Cloud02 from "../../public/images/logos/PF_Cloud02.png";
import PF_Cloud03 from "../../public/images/logos/PF_Cloud03.png";
import PF_Qualification01ee from "../../public/images/logos/PF_Qualification01ee.png";
import PF_Qualification02 from "../../public/images/logos/PF_Qualification02.png";
import PF_Qualification03 from "../../public/images/logos/PF_Qualification03.png";
import PF_Qualification04 from "../../public/images/logos/PF_Qualification04.png";
import PF_Qualification05 from "../../public/images/logos/PF_Qualification05.png";
import PF_Award01ee from "../../public/images/logos/PF_Award01ee.png";
import PF_Award02 from "../../public/images/logos/PF_Award02.png";
import PF_Award03 from "../../public/images/logos/PF_Award03.png";
import PF_Award04 from "../../public/images/logos/PF_Award04.png";
import PF_Award05 from "../../public/images/logos/PF_Award05.png";
import PF_Award06 from "../../public/images/logos/PF_Award06.png";
import PF_Award07 from "../../public/images/logos/PF_Award07.png";
import PF_Award08 from "../../public/images/logos/PF_Award08.png";
import PF_Award09 from "../../public/images/logos/PF_Award09.png";
import PF_Award10 from "../../public/images/logos/PF_Award10.png";
import PF_Award11 from "../../public/images/logos/PF_Award11.png";
import PF_Award12 from "../../public/images/logos/PF_Award12.png";
import PF_Award13 from "../../public/images/logos/PF_Award13.png";
import PF_Award14 from "../../public/images/logos/PF_Award14.png";
import PF_Award15 from "../../public/images/logos/PF_Award15.png";
import PF_Award16 from "../../public/images/logos/PF_Award16.png";

function More() {
	return (
		<div>
			<NavBar />

			<br />
			<br />
			<br />

			<div className="pl-section">
				<Image width={150} height={150} src={PL_CL} alt="C Language Logo" />
				<Image width={150} height={150} src={PL_CP} alt="C++ Logo" />
				<Image width={150} height={150} src={PL_CS} alt="C# Logo" />
				<Image width={150} height={150} src={PL_JV} alt="Java Logo" />
				<Image width={150} height={150} src={PL_JS} alt="Javascript Logo" />
				<Image width={150} height={150} src={PL_TS} alt="Typescript Logo" />
			</div>

			<div className="WD-section">
				<h1 className="WD-title">WEB DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_JS_MongoDB} alt="JS_MongoDB" />
					<Image width={250} height={100} src={SW_JS_Express} alt="JS_Express" />
					<Image width={250} height={100} src={SW_JS_React} alt="JS_React" />
					<Image width={250} height={100} src={SW_JS_Node} alt="JS_Node" />
					<Image width={250} height={100} src={SW_JS_Redux} alt="JS_Redux" />
					<Image width={250} height={100} src={SW_JS_Azure} alt="JS_Azure" />
					<Image width={250} height={100} src={SW_JS_AzureDevOps} alt="JS_AzureDevOps" />
					<Image width={250} height={100} src={SW_JS_WebRTC} alt="JS_WebRTC" />
					<Image width={250} height={100} src={SW_JS_SocketIO} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_Axios} alt="JS_Axios" />
					<Image width={250} height={100} src={SW_JS_GoogleMaps} alt="JS_GoogleMaps" />
					<Image width={250} height={100} src={SW_JS_GoogleAuth} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_FacebookAuth} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_JSONWebToken} alt="JS_JSONWebToken" />
					<Image width={250} height={100} src={SW_JS_Bcrypt} alt="JS_Bcrypt" />
					<Image width={250} height={100} src={SW_JS_Passport} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_FirebaseCloudStorage} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_Heroku} alt="JS_Heroku" />
					<Image width={250} height={100} src={SW_JS_Bootstrap} alt="JS_Bootstrap" />
					<Image width={250} height={100} src={SW_JS_GIT} alt="JS_GIT" />
					<Image width={250} height={100} src={SW_JS_Github} alt="JS_Github" />
					<Image width={250} height={100} src={SW_JS_VisualStudioCode} alt="JS_VisualStudioCode" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">GAME DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_CS_Unity} alt="CSHP_Unity" />
					<Image width={250} height={100} src={SW_CS_Probuilder} alt="CSHP_Probuilder" />
					<Image width={250} height={100} src={SW_CS_WFANetFramework} alt="CSHP_WFANetFramework" />
					<Image width={250} height={100} src={SW_CS_MicrosoftVisualStudio} alt="MicrosoftVisualStudio" />
					<Image width={250} height={100} src={SW_JV_LibGDX} alt="JAVA_LibGDX" />
					<Image width={250} height={100} src={SW_JV_AndroidStudio} alt="JAVA_AndroidStudio" />
					<Image width={250} height={100} src={SW_JS_MERNStack} alt="MERNStack" />
					<Image width={250} height={100} src={SW_JS_VisualStudioCode} alt="JS_VisualStudioCode" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">DESKTOP APPLICATION</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_CS_MicrosoftSQLServer} alt="CSHP_MicrosoftSQLServer" />
					<Image width={250} height={100} src={SW_CS_WFANetFramework} alt="CSHP_WFANetFramework" />
					<Image width={250} height={100} src={SW_CS_MicrosoftVisualStudio} alt="CSHP_MicrosoftVisualStudio" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">MOBILE DEVELOPMENT</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_JS_MongoDB} alt="JS_MongoDB" />
					<Image width={250} height={100} src={SW_JS_Express} alt="JS_Express" />
					<Image width={250} height={100} src={SW_JS_ReactNative} alt="JS_React" />
					<Image width={250} height={100} src={SW_JS_Node} alt="JS_Node" />
					<Image width={250} height={100} src={SW_JS_Redux} alt="JS_Redux" />
					<Image width={250} height={100} src={SW_JS_Axios} alt="JS_Axios" />
					<Image width={250} height={100} src={SW_JS_JSONWebToken} alt="JS_JSONWebToken" />
					<Image width={250} height={100} src={SW_JS_Bcrypt} alt="JS_Bcrypt" />
					<Image width={250} height={100} src={SW_JS_Heroku} alt="JS_Heroku" />
					<Image width={250} height={100} src={SW_JS_FirebaseCloudStorage} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_FirebaseCloudMessaging} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_FacebookAuth} alt="JS_SocketIO" />
					<Image width={250} height={100} src={SW_JS_GoogleAuth} alt="JS_GoogleAuth" />
					<Image width={250} height={100} src={SW_JS_GoogleMaps} alt="JS_GoogleMaps" />
					<Image width={250} height={100} src={SW_JS_GooglePlayStore} alt="JS_GooglePlayStore" />
					<Image width={250} height={100} src={SW_JS_ApplePushNotification} alt="JS_ApplePushNotification" />
					<Image width={250} height={100} src={SW_JS_AppleAppStore} alt="JS_AppleAppStore" />
					<Image width={250} height={100} src={SW_JS_AppleStoreConnect} alt="JS_AppleStoreConnect" />
					<Image width={250} height={100} src={SW_JS_XCode} alt="JS_XCode" />
					<Image width={250} height={100} src={SW_JS_AndroidStudio} alt="JS_AndroidStudio" />
					<Image width={250} height={100} src={SW_JS_GIT} alt="JS_GIT" />
					<Image width={250} height={100} src={SW_JS_Github} alt="JS_Github" />
					<Image width={250} height={100} src={SW_JS_VisualStudioCode} alt="JS_VisualStudioCode" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">AUTOMATION</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_CL_Arduino} alt="Arduino" />
					<Image width={250} height={100} src={SW_CL_ArduinoIDE} alt="ArduinoIDE" />
					<Image width={250} height={100} src={SW_CL_BasicElectronics} alt="BasicElectronics" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">DESIGN TOOLS</h1>
				<div className="WD-body">
					<Image width={250} height={100} src={SW_E_Photoshop} alt="Photoshop" />
					<Image width={250} height={100} src={SW_E_Premiere} alt="Premiere" />
					<Image width={250} height={100} src={SW_E_Audition} alt="Audition" />
					<Image width={250} height={100} src={SW_E_Animate} alt="Animate" />
					<Image width={250} height={100} src={SW_E_Blender} alt="Blender" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">EMPLOYMENT HISTORY</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={PF_Employment01ee} alt="Employment01" />
					<Image width={400} height={180} src={PF_Employment02ee} alt="Employment02" />
					<Image width={400} height={180} src={PF_Employment03} alt="Employment03" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">CLOUD SERVICE</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={PF_Cloud01} alt="Cloud01" />
					<Image width={400} height={180} src={PF_Cloud02} alt="Cloud02" />
					<Image width={400} height={180} src={PF_Cloud03} alt="Cloud03" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">PROFESSIONAL QUALIFICATION</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={PF_Qualification01ee} alt="Qualification01" />
					<Image width={400} height={180} src={PF_Qualification02} alt="Qualification02" />
					<Image width={400} height={180} src={PF_Qualification03} alt="Qualification03" />
					<Image width={400} height={180} src={PF_Qualification04} alt="Qualification04" />
					<Image width={400} height={180} src={PF_Qualification05} alt="Qualification05" />
				</div>
			</div>

			<div className="WD-section">
				<h1 className="WD-title">AWARDS</h1>
				<div className="WD-body">
					<Image width={400} height={180} src={PF_Award01ee} alt="Award01" />
					<Image width={400} height={180} src={PF_Award02} alt="Award02" />
					<Image width={400} height={180} src={PF_Award03} alt="Award03" />
					<Image width={400} height={180} src={PF_Award04} alt="Award04" />
					<Image width={400} height={180} src={PF_Award05} alt="Award06" />
					<Image width={400} height={180} src={PF_Award06} alt="Award05" />
					<Image width={400} height={180} src={PF_Award07} alt="Award07" />
					<Image width={400} height={180} src={PF_Award08} alt="Award08" />
					<Image width={400} height={180} src={PF_Award09} alt="Award09" />
					<Image width={400} height={180} src={PF_Award10} alt="Award10" />
					<Image width={400} height={180} src={PF_Award11} alt="Award11" />
					<Image width={400} height={180} src={PF_Award12} alt="Award12" />
					<Image width={400} height={180} src={PF_Award13} alt="Award13" />
					<Image width={400} height={180} src={PF_Award14} alt="Award14" />
					<Image width={400} height={180} src={PF_Award15} alt="Award15" />
					<Image width={400} height={180} src={PF_Award16} alt="Award16" />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default More;
