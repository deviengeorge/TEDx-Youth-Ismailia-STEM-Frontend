import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const NavBarLink = ({ children, path }) => {
	const router = useRouter();
	const active = router.pathname === path;
	return (
		<Link href={path}>
			<a
				className={`py-4 px-2 ${
					active
						? "text-red-500 font-bold"
						: "font-semibold text-gray-500 hover:text-red-500"
				}`}
			>
				{children}
			</a>
		</Link>
	);
};

const NavBarMobileLink = ({ children, path }) => {
	const router = useRouter();
	const active = router.pathname === path;
	return (
		<Link href={path}>
			<a
				className={`block text-3xl px-2 py-6  font-semibold ${
					active
						? "bg-red-600 text-white px-20 rounded-full"
						: "text-black"
				}`}
			>
				{children}
			</a>
		</Link>
	);
};

const Navbar = ({ absolute = false }) => {
	const [active, setActive] = useState(false);
	const toggleActive = () => {
		setActive((prev) => !prev);
	};
	return (
		<div className="container relative">
			<nav
				className={`w-full z-50 ${
					absolute ? "absolute inset-x-0 px-2" : ""
				}`}
			>
				<div className="flex justify-between">
					<div className="flex">
						<Link href="/">
							<a className="flex items-center py-4 px-2">
								<img
									src="/images/logo.png"
									alt="Logo"
									className="h-12"
								/>
							</a>
						</Link>
					</div>

					{/* <!-- Primary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-7">
						<NavBarLink path="/">Home</NavBarLink>
						<NavBarLink path="/about">About</NavBarLink>
						<NavBarLink path="/team">Team</NavBarLink>
						<NavBarLink path="/contact">Contact</NavBarLink>
						<NavBarLink path="/gallery">Gallery</NavBarLink>
					</div>

					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button
							className="outline-none mobile-menu-button"
							onClick={() => toggleActive()}
						>
							<svg
								className="w-6 h-6 text-gray-500 hover:text-red-500"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{active && (
						<motion.aside
							initial={{ opacity: 0, x: -200 }}
							transition={{
								type: "tween",
							}}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -200 }}
							className={`fixed bg-gray-200 inset-0 z-30 h-full flex flex-col justify-evenly py-2 overflow-hidden lg:hidden`}
						>
							<div className="flex justify-center items-center bg-black py-6">
								<img
									className="h-20"
									src="/images/logo.png"
									alt=""
								/>
							</div>
							<div className="text-center flex flex-col items-center space-y-6">
								<NavBarMobileLink path="/">
									Home
								</NavBarMobileLink>
								<NavBarMobileLink path="/about">
									About
								</NavBarMobileLink>
								<NavBarMobileLink path="/team">
									Team
								</NavBarMobileLink>
								<NavBarMobileLink path="/contact">
									Contact
								</NavBarMobileLink>
								<NavBarMobileLink path="/gallery">
									Gallery
								</NavBarMobileLink>
							</div>
							<div className="flex justify-center items-center">
								<button
									onClick={() => setActive(false)}
									className="bg-black rounded-lg text-white text-lg px-10 py-3 font-semibold tracking-wider"
								>
									Back
								</button>
							</div>
						</motion.aside>
					)}
				</AnimatePresence>
			</nav>
		</div>
	);
};

export default Navbar;
