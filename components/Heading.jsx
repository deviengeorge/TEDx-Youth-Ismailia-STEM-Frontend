const Heading = ({ title }) => {
	return (
		<div className="py-24">
			<h6 className="text-[#A81212] uppercase font-semibold">
				Super Nova
			</h6>
			<h3 className="font-semibold text-white uppercase">{title}</h3>
		</div>
	);
};

export default Heading;