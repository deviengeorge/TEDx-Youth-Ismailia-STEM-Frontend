import { useRouter } from "next/router";

// Components
import ReadMoreButton from "./ReadMoreButton";

const Section = ({
	title = "Ideas Worth Spreading",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis? Dignissimos dolorem at sit atque.",
	children,
	readMore = "",
	time = "Coming Soon",
}) => {
	const router = useRouter();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className="space-y-7">
				<h6 data-aos="fade-right" className="text-white">
					{time}
				</h6>
				<h2
					data-aos="fade-right"
					data-aos-delay="200"
					className="font-semibold text-white uppercase"
				>
					{title}
				</h2>
				<h6
					data-aos="fade-right"
					data-aos-delay="400"
					className="text-[#dddddd] tracking-wider"
				>
					{description}
				</h6>
				{readMore ? (
					<ReadMoreButton onClick={() => router.push(readMore)} />
				) : null}
			</div>
			<div
				data-aos="fade-left"
				data-aos-delay="600"
				className="flex justify-center lg:justify-end items-center"
			>
				{children}
			</div>
		</div>
	);
};

export default Section;
