import { useRouter } from "next/router";
import Link from "next/link";

const FooterLink = ({ title, path }) => {
	const router = useRouter();
	const active = router.pathname === path;
	return (
		<li>
			<Link href={path}>
				<a
					className={`text-white tracking-wider ${
						active
							? "font-bold border-b-2 border-white"
							: "font-normal"
					}`}
				>
					{title}
				</a>
			</Link>
		</li>
	);
};

const Footer = () => {
	return (
		<footer className="flex flex-col bg-red-600 text-white mt-20 p-5 space-y-5">
			<div className="flex flex-col md:flex-row justify-between items-center container">
				<img
					className="h-16"
					src="/images/logo.png"
					alt="TEDx Ismailia Logo"
				/>
				<ul className="flex justify-center items-center py-4 flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-7">
					<FooterLink title="Home" path="/" />
					<FooterLink title="About Us" path="/about" />
					<FooterLink title="Team" path="/team" />
					<FooterLink title="Contact" path="/contact" />
					<FooterLink title="Gallery" path="/gallery" />
				</ul>
				<img
					className="h-16"
					src="/images/theme-logo.png"
					alt="Theme Logo"
				/>
			</div>
			<p className="text-white text-center">
				{new Date().getFullYear()}© All rights reversed @TEDx Youth
				Ismailia STEM
			</p>
		</footer>
	);
};

export default Footer;
