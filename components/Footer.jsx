const Footer = () => {
	return (
		<footer className="flex flex-col bg-[#A81212] text-white mt-20 p-10 pb-0 space-y-3">
			<h3 className="font-bold">TEDx Youth Ismailia STEM</h3>
			<h6 className="text-gray-200 max-w-7xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				voluptas earum deleniti animi voluptatem quis fugit repellendus.
				Neque, eum impedit eos labore eaque placeat recusandae qui
				quisquam consectetur ut distinctio aliquam suscipit laborum non?
				Quos eaque obcaecati molestiae magni facilis non, similique enim
				itaque quam veniam sunt saepe, quo voluptates!
			</h6>
			<p className="text-center text-gray-300 py-10">
				{new Date().getFullYear()}© TEDx Youth Ismailia STEM. All Right
				Reserved
			</p>
		</footer>
	);
};

export default Footer;
