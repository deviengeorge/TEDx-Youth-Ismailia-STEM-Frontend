import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import { EffectCoverflow, Autoplay } from "swiper";

const GallerySlider = ({ soon = false }) => {
	if (soon) {
		return (
			<div className="py-10 flex justify-center items-center">
				<h3
					data-aos="fade-up"
					className="font-bold text-white text-center border-b-2 border-red-500 inline-block"
				>
					SOON...
				</h3>
			</div>
		);
	}

	return (
		<Swiper
			data-aos="fade-up"
			className="w-full h-full my-20 select-none"
			effect="coverflow"
			modules={[EffectCoverflow, Autoplay]}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView="auto"
			autoplay={{
				delay: 2000,
				pauseOnMouseEnter: true,
			}}
			// onAutoplayStart={() => console.log("Starting AutoPlay")}
			// onAutoplayStop={() => console.log("Stopping AutoPlay")}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
		>
			<div class="swiper-wrapper h-full">
				{[1, 2, 1, 2].map((i, index) => (
					<SwiperSlide key={index} className="!w-[40vw] !h-[40vh]">
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
