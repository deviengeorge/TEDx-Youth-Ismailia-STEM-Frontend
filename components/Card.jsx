const Card = ({
	title = "Ideas Worth Spreading",
	readMore = false,
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam doloremque hic?",
	children,
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 my-12">
			<div>
				<h6 className="text-[#A81212] uppercase font-semibold">
					Super Nova
				</h6>
				<h3 className="font-semibold text-white uppercase">{title}</h3>
				<h6 className="font-semibold text-[#DDDDDD] pt-12 leading-7 tracking-wider">
					{description}
				</h6>
				{readMore ? (
					<button
						className="py-5 font-semibold text-white flex items-center"
						onClick={() => console.log("Clicked")}
					>
						Read More
						<img className="pl-2" src="/images/vector.png" alt="" />
					</button>
				) : null}
			</div>
			<div className="flex justify-center lg:justify-end items-center">
				{children}
			</div>
		</div>
	);
};

export default Card;
