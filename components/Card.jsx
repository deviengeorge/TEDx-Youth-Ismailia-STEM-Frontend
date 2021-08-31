import { useRouter } from "next/router";
import ReadMoreButton from "./ReadMoreButton";

const Card = ({
	title = "Ideas Worth Spreading",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam doloremque hic?",
	readMore = "",
	children,
}) => {
	const router = useRouter();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 my-64">
			<div>
				<h6 className="text-[#A81212] uppercase font-semibold">
					Super Nova
				</h6>
				<h3 className="font-semibold text-white uppercase">{title}</h3>
				<h6 className="font-semibold text-[#DDDDDD] pt-12 leading-7 tracking-wider">
					{description}
				</h6>
				{readMore ? (
					<ReadMoreButton onClick={() => router.push(readMore)} />
				) : null}
			</div>
			<div className="flex justify-center lg:justify-end items-center">
				{children}
			</div>
		</div>
	);
};

export default Card;
