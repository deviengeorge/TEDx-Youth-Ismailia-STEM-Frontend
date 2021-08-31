import TeamSlider from "./TeamSlider";

const CardSlider = ({ title = "Ideas Worth Spreading", withTheme = false }) => {
	return (
		<div className="space-y-14">
			<div>
				{withTheme ? (
					<h6 className="text-[#A81212] uppercase font-semibold">
						Super Nova
					</h6>
				) : null}
				<h3 className="font-semibold text-white uppercase tracking-wider">
					{title}
				</h3>
			</div>
			<TeamSlider />
		</div>
	);
};

export default CardSlider;
