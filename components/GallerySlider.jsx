import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import { EffectCoverflow, Autoplay, Lazy } from "swiper";

const GallerySlider = ({ soon = false, data }) => {
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
			modules={[EffectCoverflow, Autoplay, Lazy]}
			lazy={true}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView="auto"
			// autoplay={{
			// 	delay: 2000,
			// 	pauseOnMouseEnter: true,
			// }}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
		>
			<div className="swiper-wrapper h-full">
				{data?.map((entity, index) => (
					<SwiperSlide
						key={entity.Image}
						className="!w-[40vw] !h-[40vh] "
					>
						<img
							className="h-full w-full object-cover swiper-lazy"
							src={entity.Image}
							alt={`Gallery Image ${index}`}
						/>
						<div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	);
};

export default GallerySlider;
