const ReadMoreButton = ({ onClick }) => {
	return (
		<div className="inline-flex space-x-2 items-center transform duration-300">
			<button className="py-5 font-semibold text-white" onClick={onClick}>
				Read More
			</button>
			<img
				className="animate-readMoreButton"
				src="/images/vector.png"
				alt=""
			/>
		</div>
	);
};

export default ReadMoreButton;
