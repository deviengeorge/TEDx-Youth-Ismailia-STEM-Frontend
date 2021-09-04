import { NextSeo } from "next-seo";

const SEO = ({
	title,
	description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quaerat.",
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
						height: 600,
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
