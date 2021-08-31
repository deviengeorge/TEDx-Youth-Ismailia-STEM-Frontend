import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import { EffectCoverflow } from "swiper";

const GallerySlider = () => {
	return (
		<Swiper
			className="w-full h-full my-20 select-none"
			effect={"coverflow"}
			modules={[EffectCoverflow]}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView="auto"
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
		>
			<div class="swiper-wrapper h-full">
				{[1, 2, 1, 2, 1, 2, 1, 2].map((i) => (
					<SwiperSlide className="!w-[40vw] !h-[30vh]">
						<img
							key={Math.floor(Math.random() * 10)}
							className="h-full w-full object-cover"
							src={`/images/image${i}.png`}
						/>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	);
};

export default GallerySlider;
