const ReadMoreButton = ({ onClick }) => {
	return (
		<button
			className="py-5 font-semibold text-white flex items-center"
			onClick={onClick}
		>
			Read More
			<img className="pl-2" src="/images/vector.png" alt="" />
		</button>
	);
};

export default ReadMoreButton;
