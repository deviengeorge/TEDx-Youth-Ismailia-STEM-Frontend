// Components
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import SideNav from "../components/SideNav";
import TeamSlider from "../components/TeamSlider";
import Card from "../components/Card";
import CardSlider from "../components/CardSlider";
import GallerySlider from "../components/GallerySlider";
import GallerySection from "../components/GallerySection";

export default function Home() {
	return (
		<>
			<SEO title="Home" />
			<div className="container">
				<Navbar />
				<div className="flex h-screen items-center">
					<Section>
						<img
							className="border-2 border-red-500 border-opacity-40"
							src="/images/image.png"
							alt="Team Members"
						/>
					</Section>
					<SideNav />
				</div>
				{/* Section 2 */}
				<Card
					title="Theme"
					description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis."
				>
					<img src="/images/theme-logo.png" alt="Theme logo" />
				</Card>
				<Card
					title="About us"
					description="Lorem ipsum dolor sit amet, consecteturPellentesque arcu consequat. egestas accumsan. Egestas id aliquet libero."
					readMore="/about"
				>
					<img src="/images/image.png" alt="Crew" />
				</Card>
				<CardSlider title="Our Team" withTheme />
				<GallerySection title="Gallery" />
			</div>
		</>
	);
}
