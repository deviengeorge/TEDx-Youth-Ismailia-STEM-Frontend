import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function error404() {
	const router = useRouter();
	return (
		<>
			<Navbar absolute />
			<div className="flex flex-col h-screen items-center justify-center space-y-5">
				<h1 data-aos="fade-up" className="text-red-500 font-bold">
					404
				</h1>
				<h4
					data-aos="fade-up"
					data-aos-delay="200"
					className="text-white"
				>
					Please don't play with the website.
				</h4>
				<button
					data-aos="fade-up"
					data-aos-delay="400"
					onClick={() => router.push("/")}
					className="py-5 px-10 bg-red-500 text-white rounded-lg text-lg transform duration-200 ease-in-out hover:scale-105"
				>
					Go To Home
				</button>
			</div>
			<Footer />
		</>
	);
}
