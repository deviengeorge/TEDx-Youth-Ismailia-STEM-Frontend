import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import SEO from "../components/SEO";
import axios from "axios";

export async function getServerSideProps(ctx) {
	const team = await axios.get("http://localhost:3000/api/team/mg");
	return {
		props: { team: team.data },
	};
}

export default function Team({ team }) {
	console.log(team);
	return (
		<>
			<SEO
				title="Team"
				description="This the Team Page in TEDx Youth Ismailia STEM Website"
			/>
			<Navbar />
			<div className="container space-y-24 text-center lg:text-left">
				<Heading title="our team" />
				<CardSlider title="High Board" sliderData={team} />
				<CardSlider title="Technical Support" sliderData={team} />
				<CardSlider title="Human Resource" sliderData={team} />
			</div>
			<Footer />
		</>
	);
}
