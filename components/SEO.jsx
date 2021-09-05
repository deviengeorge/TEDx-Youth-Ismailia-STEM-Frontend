import { NextSeo } from "next-seo";

const SEO = ({
	title,
	description = "TEDxYouthIsmailiaSTEM is a local event hosted for the second season, Ismailia STEM high school is one of nineteenth STEM schools in Egypt, Our main target audience is STEM students, High school students and some universities, our theme for season^21 is 'SUPERNOVA', Supernova is the most luminous, powerful and great explosion occurs at the end of stars life cycle, we will be like stars during the season and at the end we will explode as Supernova.",
}) => {
	const newTitle = `${title} | TEDx Youth Ismailia STEM`;
	return (
		<NextSeo
			title={newTitle}
			description={description}
			openGraph={{
				title: newTitle,
				description: description,
				images: [
					{
						url: "https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784673/TEDxYouthIsmailiaSTEM_majjcj.png",
						width: 800,
						height: 800,
						alt: "Logo",
					},
				],
				site_name: "TEDx Youth Ismailia STEM",
			}}
			twitter={{
				handle: "@handle",
				site: "@TEDxYouthIsmailiaSTEM",
				cardType: "summary_large_image",
			}}
		/>
	);
};

export default SEO;
