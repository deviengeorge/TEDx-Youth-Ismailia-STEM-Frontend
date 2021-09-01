const Heading = ({ title }) => {
	return (
		<div className="py-24 text-center lg:text-left">
			<h6 className="text-[#A81212] uppercase font-semibold">
				Super Nova
			</h6>
			<h2 className="font-semibold text-white uppercase">{title}</h2>
		</div>
	);
};

export default Heading;
