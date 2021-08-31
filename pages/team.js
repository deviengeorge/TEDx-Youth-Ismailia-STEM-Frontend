import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import SEO from "../components/SEO";

export default function Team() {
	return (
		<>
			<SEO
				title="Team"
				description="This the Team Page in TEDx Youth Ismailia STEM Website"
			/>
			<Navbar />
			<div className="container space-y-24 text-center lg:text-left">
				<Heading title="our team" />
				<CardSlider title="High Board" />
				<CardSlider title="Technical Support" />
				<CardSlider title="Human Resource" />
			</div>
			<Footer />
		</>
	);
}
