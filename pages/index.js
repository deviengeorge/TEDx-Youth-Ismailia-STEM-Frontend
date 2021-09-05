import axios from "axios";

// Components
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Card from "../components/Card";
import CardSlider from "../components/CardSlider";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
// import SideNav from "../components/SideNav";

export async function getServerSideProps(ctx) {
	const backend_url = process.env.BACKEND_URL;
	const gallery = await axios.get(`${backend_url}/gallery/opening`);
	return {
		props: { gallery: gallery.data },
	};
}

const MGHighBoard = [
	{
		Name: "Youssef Khaled",
		Position: "Chairman",
		Image: "https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630583794/Management-Board/Youssef_Khaled-Chairman_vhcudi.jpg",
	},
	{
		Name: "Nourhan Ahmed",
		Position: "Vice Chairwoman",
		Image: "https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630583793/Management-Board/Nourhan_Ahmed-Vice_Chairwoman_khqika.jpg",
	},
	{
		Name: "Abanoub Maged",
		Position: "CEO",
		Image: "https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630583793/Management-Board/Abanoub_Maged-CEO_fksihg.jpg",
	},
];

export default function Home({ gallery }) {
	return (
		<>
			<SEO title="Home" />
			<Navbar absolute />
			<div className="container space-y-56">
				<div className="flex h-screen items-center">
					<Section
						// readMore="/event"
						description="Our event Is coming soon, we will be as the most powerful, luminous and great supernova. STAY TUNED"
					>
						{/* <img
							className="border-2 border-red-500 border-opacity-40 h-full"
							src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630846206/EVENT-1_1_gljaad.png"
							alt="event"
						/> */}
						<video
							className="border-2 border-red-500 border-opacity-40 h-full"
							src="https://res.cloudinary.com/tedx-youth-ismailia-stem/video/upload/v1630858056/Theme-Video_xqahen.mp4"
							autoPlay
						/>
					</Section>
					{/* <SideNav /> */}
				</div>
				<Card
					title="Theme"
					description="Supernova is the explosion occurs at the end of the life for the stars and it is the most luminous, powerful and great explosion in the universe as the star we will be during our season and at the event our supernova will occur with a special,great and powerful event."
					withTheme
				>
					<img
						src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784518/theme-logo_ndwtbu.png"
						alt="Theme logo"
					/>
				</Card>
				<Card
					title="About us"
					description="TEDxYouthIsmailiaSTEM is a local event hosted for the second season, Ismailia STEM high school is one of nineteenth STEM schools in Egypt..."
					withThem
					readMore="/about"
				>
					<img
						src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784887/image_vbjsjo.png"
						alt="Crew"
					/>
				</Card>
				<CardSlider
					title="Our Team"
					withTheme
					sliderData={MGHighBoard}
				/>
				<GallerySection title="Gallery" data={gallery} />
			</div>
			<Footer />
		</>
	);
}
