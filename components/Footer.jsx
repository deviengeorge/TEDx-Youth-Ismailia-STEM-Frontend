const Footer = () => {
	return (
		<footer className="h-56 flex flex-col bg-[#A81212] text-white mt-20 p-10 space-y-3">
			<h3 className="font-bold">TEDx Youth Ismailia STEM</h3>
			<h6>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Perferendis adipisci consectetur, id necessitatibus alias sint
				natus corrupti? Dicta, labore voluptatem.
			</h6>
			<hr />
			<p className="text-center">
				{new Date().getFullYear()}© TEDx Youth Ismailia STEM. All Right
				Reserved
			</p>
		</footer>
	);
};

export default Footer;
