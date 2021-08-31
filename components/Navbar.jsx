import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBarLink = ({ children, path }) => {
	const router = useRouter();
	const active = router.pathname.startsWith(path);
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
	const active = router.pathname.startsWith(path);
	return (
		<Link href={path}>
			<a
				className={`block text-lg px-2 py-4 text-white font-semibold transition duration-300 ${
					active ? "bg-red-500" : ""
				}`}
			>
				{children}
			</a>
		</Link>
	);
};

const Navbar = () => {
	const [navBar, setNavBar] = useState(false);
	const toggleNavBar = () => {
		setNavBar((prev) => !prev);
	};
	return (
		<nav className="container">
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
						onClick={() => toggleNavBar()}
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
			<div className={`${navBar ? "block" : "hidden"} lg:hidden`}>
				<div className="text-center text-white">
					<NavBarMobileLink path="/">Home</NavBarMobileLink>
					<NavBarMobileLink path="/about">About</NavBarMobileLink>
					<NavBarMobileLink path="/team">Team</NavBarMobileLink>
					<NavBarMobileLink path="/contact">Contact</NavBarMobileLink>
					<NavBarMobileLink path="/gallery">Gallery</NavBarMobileLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
