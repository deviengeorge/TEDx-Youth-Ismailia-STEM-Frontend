import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

export default function About() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Heading title="About Us" />
				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis.">
					<img src="/images/image.png" alt="" />
				</Card>
			</div>
			<Footer />
		</>
	);
}
