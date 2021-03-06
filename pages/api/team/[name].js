// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { base, minifyRecords } from "../../../utils/airtable";

export default async function (req, res) {
	const { name } = req.query;
	const committees = {
		mg: "Management Board",
		pr: "Public Relations",
		ts: "Technical Support",
		oc: "Logistics",
		hr: "Human Resource",
		gd: "Graphic Design",
		cw: "Content Writing",
		marketing: "Marketing",
		coaching: "Coaching",
	};

	const table = base(committees[name]);

	let team = await table
		.select({
			view: "Grid view",
		})
		.firstPage();
	team = minifyRecords(team);
	res.status(200).json(team);
}
