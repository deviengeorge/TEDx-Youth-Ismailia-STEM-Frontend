import axios from "axios";

// Components
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import GallerySection from "../components/GallerySection";
import SEO from "../components/SEO";

export async function getServerSideProps(ctx) {
	const gallery = await axios.get(
		`https://tedx-youth-ismailia-stem.vercel.app/api/gallery`
	);
	return {
		props: { gallery: gallery.data },
	};
}

export default function Gallery({ gallery }) {
	return (
		<>
			<SEO
				title="Galley"
				description="This is the description of the gallery page in tedx ismalia stem youth"
			/>
			<Navbar />
			<div className="container space-y-48">
				<Heading title="Gallery" padding="pt-48" />
				{Object.keys(gallery).map((key) => {
					return (
						<GallerySection
							key={key}
							title={`${key} Day`}
							data={gallery[key]}
						/>
					);
				})}
			</div>
			<Footer />
		</>
	);
}
