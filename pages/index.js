// Components
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import SideNav from "../components/SideNav";

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
				<Section>
					<img src="/images/theme-logo.png" alt="Theme logo" />
				</Section>
			</div>
		</>
	);
}
