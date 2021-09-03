import { motion } from "framer-motion";

const SideNav = () => {
	return (
		<motion.div
			initial={{
				x: -600,
				width: 20,
				opacity: 0,
			}}
			animate={{
				x: 0,
				width: "70%",
				opacity: 1,
			}}
			transition={{
				type: "tween",
				stiffness: 50,
				duration: 1,
			}}
			className="absolute left-0 bottom-0 h-24 bg-brand hidden lg:block"
		>
			<div className="flex h-full w-full justify-between items-center pl-10 gap-10">
				{/* Social Links */}
				<ul className="space-x-4 flex">
					<img className="h-4" src="/images/facebook.png" alt="" />
				</ul>

				<p className="text-white font-thin lg:flex-1">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Culpa, a?
				</p>

				<p className="text-white font-thin lg:flex-1">
					Lorem ipsum dolor sit amet.
				</p>

				<div className="flex h-full items-center space-x-5 flex-1">
					<img className="h-full" src="/images/image.png" alt="" />
					<img
						// onClick={() => console.log("Clicked!")}
						className="h-1/5 cursor-pointer"
						src="/images/arrow.png"
						alt=""
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default SideNav;
