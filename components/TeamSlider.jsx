import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TeamSlider = () => {
	return (
		<Swiper
			className="select-none"
			modules={[Navigation]}
			grabCursor={true}
			navigation={true}
			breakpoints={{
				500: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
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
			<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
				<img
					className="object-cover rounded-2xl"
					src="/images/user1.png"
					alt="user1 team member"
				/>
				<div className="flex flex-col space-y-2 text-white text-center uppercase">
					<h6>Morgan Freemanusa</h6>
					<p>Actor</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
				<img
					className="object-cover rounded-2xl"
					src="/images/user1.png"
					alt="user1 team member"
				/>
				<div className="flex flex-col space-y-2 text-white text-center uppercase">
					<h6>Morgan Freemanusa</h6>
					<p>Actor</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
				<img
					className="object-cover rounded-2xl"
					src="/images/user1.png"
					alt="user1 team member"
				/>
				<div className="flex flex-col space-y-2 text-white text-center uppercase">
					<h6>Morgan Freemanusa</h6>
					<p>Actor</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
				<img
					className="object-cover rounded-2xl"
					src="/images/user1.png"
					alt="user1 team member"
				/>
				<div className="flex flex-col space-y-2 text-white text-center uppercase">
					<h6>Morgan Freemanusa</h6>
					<p>Actor</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="flex flex-col items-center justify-center space-y-5">
				<img
					className="object-cover rounded-2xl"
					src="/images/user1.png"
					alt="user1 team member"
				/>
				<div className="flex flex-col space-y-2 text-white text-center uppercase">
					<h6>Morgan Freemanusa</h6>
					<p>Actor</p>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default TeamSlider;
