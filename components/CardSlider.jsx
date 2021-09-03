import TeamSlider from "./TeamSlider";

const CardSlider = ({
	title = "Ideas Worth Spreading",
	withTheme = false,
	sliderData,
}) => {
	return (
		<div className="space-y-14">
			<div>
				{withTheme ? (
					<h6
						data-aos="fade-up"
						className="text-brand uppercase font-semibold"
					>
						Super Nova
					</h6>
				) : null}
				<h3
					data-aos-delay="100"
					data-aos="fade-up"
					className="font-semibold text-white uppercase tracking-wider inline-block border-b-4 border-brand lg:border-none pb-2"
				>
					{title}
				</h3>
			</div>
			<TeamSlider sliderData={sliderData} />
		</div>
	);
};

export default CardSlider;
