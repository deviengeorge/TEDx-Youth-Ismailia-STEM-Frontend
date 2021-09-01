import { useRouter } from "next/router";
import ReadMoreButton from "./ReadMoreButton";

const Card = ({
	title = "Ideas Worth Spreading",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam doloremque hic?",
	readMore = "",
	withTheme = false,
	children,
}) => {
	const router = useRouter();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
			<div>
				{withTheme ? (
					<p
						className="text-[#A81212] uppercase font-semibold"
						data-aos="fade-right"
					>
						Super Nova
					</p>
				) : null}
				<h3
					className="font-semibold text-white uppercase"
					data-aos="fade-right"
					data-aos-delay="100"
				>
					{title}
				</h3>
				<h6
					data-aos="fade-right"
					data-aos-delay="200"
					className="font-semibold text-[#DDDDDD] pt-12 leading-7 tracking-wider"
				>
					{description}
				</h6>
				{readMore ? (
					<ReadMoreButton onClick={() => router.push(readMore)} />
				) : null}
			</div>
			<div
				className="flex justify-center lg:justify-end items-center"
				data-aos="fade-left"
			>
				{children}
			</div>
		</div>
	);
};

export default Card;
