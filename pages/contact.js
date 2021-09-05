import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SEO from "../components/SEO";

const Input = ({ title, type = "text", delay = 0 }) => {
	return (
		<div className="flex flex-col">
			<label
				data-aos="fade-right"
				data-aos-delay={delay}
				className="text-white text-base"
				htmlFor={title}
			>
				{title}
			</label>
			{type == "textArea" ? (
				<textarea
					data-aos="fade-right"
					data-aos-delay={delay + 200}
					placeholder={title}
					rows="4"
					name={title}
					className="py-2 px-3 bg-transparent border-2 border-red-500 text-white text-lg rounded-lg"
				/>
			) : (
				<input
					data-aos="fade-right"
					data-aos-delay={delay + 200}
					className="py-2 px-3 bg-transparent border-2 border-red-500 text-white text-lg rounded-lg"
					type={type}
					name={title}
				/>
			)}
		</div>
	);
};

export default function contact() {
	return (
		<>
			<SEO title="Contact" />
			<NavBar absolute />
			<div className="flex flex-col h-screen items-center justify-center space-y-5">
				<Heading title="Contact Us" />
				<div className="flex flex-col w-2/3 md:w-1/3 space-y-5">
					<Input title="Name" type="text" />
					<Input delay={200} title="Email" type="emai" />
					<Input delay={400} title="Subject" type="text" />
					<Input delay={600} title="Content" type="textArea" />
					<button
						data-aos="fade-right"
						data-aos-delay="800"
						className="py-4 bg-red-500 text-white text-lg rounded-lg transform ease-in-out duration-100 hover:scale-105"
						type="submit"
					>
						Submit
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
