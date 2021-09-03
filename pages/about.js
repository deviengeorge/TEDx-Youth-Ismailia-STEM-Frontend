import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

export default function About() {
	return (
		<>
			<SEO
				title="About Us"
				description="This is the About Page in TEDx Youth Ismailia STEM"
			/>
			<Navbar />
			<div className="container space-y-48">
				<Heading title="About Us" padding="pt-48" />

				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis.">
					<img src="/images/image.png" alt="" />
				</Card>

				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis.">
					<img src="/images/image.png" alt="" />
				</Card>

				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis.">
					<img src="/images/image.png" alt="" />
				</Card>

				<Card description="Lorem ipsum dolor sit amet, consectetur adipiscingPellentesque arcu consequat tristique sit sed. Ut ac aliquam quis cras auctor hendrerit arcu.egestas accumsan. Egestas id aliquet libero lorem turpis.">
					<img src="/images/image.png" alt="" />
				</Card>
			</div>
			<Footer />
		</>
	);
}
