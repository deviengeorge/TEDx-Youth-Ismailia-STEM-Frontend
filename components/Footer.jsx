import { useRouter } from "next/router";
import Link from "next/link";

const FooterLink = ({ title, path }) => {
	const router = useRouter();
	const active = router.pathname === path;
	return (
		<li>
			<Link href="/">
				<a
					className={`text-white ${
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
		<footer className="flex flex-col bg-red-600 text-white mt-20 py-4 space-y-3">
			<ul className="flex justify-center items-center py-4 space-x-7">
				<FooterLink title="Home" path="/" />
				<FooterLink title="About Us" path="/about" />
				<FooterLink title="Team" path="/team" />
				<FooterLink title="Contact" path="/contact" />
				<FooterLink title="Gallery" path="/gallery" />
			</ul>
		</footer>
	);
};

export default Footer;
