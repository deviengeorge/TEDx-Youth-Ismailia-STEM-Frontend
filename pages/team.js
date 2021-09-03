import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import SEO from "../components/SEO";
import axios from "axios";

export async function getServerSideProps(ctx) {
	const committees = [
		"mg",
		"pr",
		"oc",
		"hr",
		"gd",
		"cw",
		"marketing",
		"coaching",
	];
	const teams = {};
	await committees.forEach(async (name) => {
		console.log(name);
		teams[name] = await axios.get(`http://localhost:3000/api/team/${name}`);
	});
	return {
		props: { teams: teams },
	};
}

export default function Team({ team, teams }) {
	console.log(teams);
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
