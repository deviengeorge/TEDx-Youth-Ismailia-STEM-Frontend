import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TeamSlider = ({ sliderData }) => {
	return (
		<Swiper
			className="select-none"
			data-aos="zoom-in-up"
			modules={[Navigation]}
			grabCursor={true}
			navigation={true}
			breakpoints={{
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
			}}
		>
			{sliderData?.map((data) => (
				<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
					<img
						className="object-cover bg-center rounded-2xl h-80 w-80"
						src={data.Image}
						alt={`${data.Name} ${data.Position}`}
					/>
					<div className="flex flex-col space-y-2 text-white text-center uppercase">
						<h6>{data.Name}</h6>
						<p>{data.Position}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TeamSlider;
