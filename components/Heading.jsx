const Heading = ({ title, padding = "pt-24" }) => {
	return (
		<div className={`text-center lg:text-left ${padding}`}>
			<h6
				data-aos="fade-right"
				className="text-brand uppercase font-semibold"
			>
				Super Nova
			</h6>
			<h2
				data-aos="fade-right"
				data-aos-delay="200"
				className="font-semibold text-white uppercase"
			>
				{title}
			</h2>
		</div>
	);
};

export default Heading;
