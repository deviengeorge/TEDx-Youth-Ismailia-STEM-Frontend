import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import GallerySection from "../components/GallerySection";
import SEO from "../components/SEO";

export default function Gallery() {
	return (
		<>
			<SEO
				title="Galley"
				description="This is the description of the gallery page in tedx ismalia stem youth"
			/>
			<Navbar />
			<div className="container space-y-24">
				<Heading title="Gallery" />
				<GallerySection title="Opening Day" />
				<GallerySection title="Closing Day" soon />
				<GallerySection title="Event Day" soon />
			</div>
			<Footer />
		</>
	);
}
