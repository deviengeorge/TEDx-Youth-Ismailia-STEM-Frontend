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
						url: "https://siasky.net/EACF3HUObzQx5z37RhXZqR-x3hHWlg8ndCynnn62giZMpw",
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
