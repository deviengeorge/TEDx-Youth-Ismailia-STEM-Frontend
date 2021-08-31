import { useEffect } from "react";
import AOS from "aos";

// Global Styles
import "../public/global.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
