import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import SEO from "../components/SEO";
import axios from "axios";

export async function getServerSideProps(ctx) {
	const backend_url = process.env.BACKEND_URL;
	const team = await axios.get(`${backend_url}/teams`);
	return {
		props: { team: team.data },
	};
}

export default function Team({ team }) {
	return (
		<>
			<SEO
				title="Team"
				description="This the Team Page in TEDx Youth Ismailia STEM Website"
			/>
			<Navbar />
			<div className="container space-y-24 text-center lg:text-left">
				<Heading title="our team" />
				{Object.keys(team).map((key) => {
					if (team[key].length == 0) {
						return null;
					}
					return (
						<CardSlider
							key={key}
							title={key}
							sliderData={team[key]}
						/>
					);
				})}
			</div>
			<Footer />
		</>
	);
}
