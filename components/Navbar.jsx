import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
				className={`block text-lg px-2 py-4 text-white font-semibold transition duration-300 ${
					active ? "border-b-4 border-white" : ""
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
						<Link href="#">
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
				<aside
					className={`fixed bg-[#A81212] inset-0 z-30 h-full flex flex-col justify-around ${
						active ? "block overflow-scroll" : "hidden"
					} lg:hidden`}
				>
					<div className="flex justify-center items-center">
						<img className="h-20" src="/images/logo.png" alt="" />
					</div>
					<div className="text-center text-white flex flex-col items-center space-y-6">
						<NavBarMobileLink path="/">Home</NavBarMobileLink>
						<NavBarMobileLink path="/about">About</NavBarMobileLink>
						<NavBarMobileLink path="/team">Team</NavBarMobileLink>
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
							className="bg-white rounded-lg text-lg px-10 py-3 font-semibold tracking-wider"
						>
							Back
						</button>
					</div>
				</aside>
			</nav>
		</div>
	);
};

export default Navbar;
