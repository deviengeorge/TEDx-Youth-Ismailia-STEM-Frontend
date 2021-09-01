import { useEffect } from "react";
import AOS from "aos";

// Global Styles
import "../public/global.css";

// AOS Styles
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			once: false,
		});
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
