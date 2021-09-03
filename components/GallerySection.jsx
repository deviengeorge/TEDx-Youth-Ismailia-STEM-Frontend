import GallerySlider from "./GallerySlider";

const GallerySection = ({ title = "Gallery", data = [] }) => {
	return (
		<div className="space-y-14">
			<div className="text-center">
				<h6
					data-aos="fade-down"
					className="text-brand uppercase font-semibold"
				>
					Super Nova
				</h6>
				<h3
					data-aos="fade-up"
					data-aos-delay="200"
					className="font-semibold text-white uppercase"
				>
					{title}
				</h3>
			</div>
			<GallerySlider soon={data.length == 0 ? true : false} data={data} />
		</div>
	);
};

export default GallerySection;
