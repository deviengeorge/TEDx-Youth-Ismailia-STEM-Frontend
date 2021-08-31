const Section = ({
	title = "Ideas Worth Spreading",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis? Dignissimos dolorem at sit atque.",
	children,
	time = "08 ― October, 2021",
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className="space-y-7">
				<h6 className="text-white">{time}</h6>
				<h2 className="font-semibold text-white uppercase">{title}</h2>
				<h6 className="text-[#dddddd] tracking-wider">{description}</h6>
				<button
					className="py-5 font-semibold text-white flex items-center"
					onClick={() => console.log("Clicked")}
				>
					Read More
					<img className="pl-2" src="/images/vector.png" alt="" />
				</button>
			</div>
			<div className="flex justify-center lg:justify-end items-center">
				{children}
			</div>
		</div>
	);
};

export default Section;
