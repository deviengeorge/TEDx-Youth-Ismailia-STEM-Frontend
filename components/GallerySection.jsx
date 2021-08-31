import Card from "./Card";
import GallerySlider from "./GallerySlider";

const GallerySection = ({ title = "Gallery" }) => {
	return (
		<div className="space-y-14 my-20">
			<div className="text-center">
				<h6 className="text-[#A81212] uppercase font-semibold">
					Super Nova
				</h6>
				<h3 className="font-semibold text-white uppercase">{title}</h3>
			</div>
			<GallerySlider />
		</div>
	);
};

export default GallerySection;
