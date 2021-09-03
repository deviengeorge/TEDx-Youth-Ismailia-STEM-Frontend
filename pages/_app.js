import { useEffect } from "react";
import AOS from "aos";
import NextNProgress from "nextjs-progressbar";

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
	return (
		<>
			<NextNProgress
				color="#f34423"
				height={6}
				startPosition={0.3}
				stopDelayMs={200}
				options={{ showSpinner: true }}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
