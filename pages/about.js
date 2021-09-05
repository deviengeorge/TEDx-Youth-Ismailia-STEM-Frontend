import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

export default function About() {
	return (
		<>
			<SEO title="About Us" />
			<Navbar />
			<div className="container space-y-48">
				<Heading title="About Us" padding="pt-48" />

				<Card
					title="About TED"
					description="TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world."
				>
					<img
						className="h-24"
						src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784483/1024px-TED_three_letter_logo.svg_aefrkz.png"
						alt=""
					/>
				</Card>

				<Card
					title="About TEDx"
					description="TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover 'ideas worth spreading'. TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more. They learn from us and from each other. More than 3000 events are now held annually."
				>
					<img
						className="h-24"
						src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784745/tedx-logo_m95ygd.png"
						alt=""
					/>
				</Card>

				<Card
					title="About TEDxYouthIsmailiaSTEM"
					description="TEDxYouthIsmailiaSTEM is a local event hosted for the second season, Ismailia STEM high school is one of nineteenth STEM schools in Egypt, Our main target audience is STEM students, High school students and some universities, our theme for season^21 is 'SUPERNOVA', Supernova is the most luminous, powerful and great explosion occurs at the end of stars life cycle, we will be like stars during the season and at the end we will explode as Supernova."
				>
					<img
						className="h-24"
						src="https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784520/logo_usb855.png"
						alt=""
					/>
				</Card>
			</div>
			<Footer />
		</>
	);
}
