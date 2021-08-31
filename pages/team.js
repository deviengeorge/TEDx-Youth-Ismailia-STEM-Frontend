import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

export default function Team() {
	return (
		<>
			<Navbar />
			<div className="container space-y-24">
				<Heading title="our team" />
				<CardSlider title="High Board" />
				<CardSlider title="Technical Support" />
				<CardSlider title="Human Resource" />
			</div>
			<Footer />
		</>
	);
}
