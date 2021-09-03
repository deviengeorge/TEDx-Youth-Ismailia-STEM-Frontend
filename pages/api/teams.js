// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { base, minifyRecords } from "../../utils/airtable";

const groupCommittee = (records, committee) => {
	const groupedCommittee = [];
	records.forEach((record) => {
		if (record["Committee"] == committee) {
			groupedCommittee.push(record);
		}
	});
	return groupedCommittee;
};

export default async function (req, res) {
	const table = base("Team");

	let team = await table
		.select({
			view: "Grid view",
		})
		.firstPage();
	team = minifyRecords(team);

	const committees = {
		MG: "Management Board",
		PR: "Public Relations",
		TS: "Technical Support",
		OC: "Logistics",
		HR: "Human Resource",
		GD: "Graphic Design",
		"Content Writing": "Content Writing",
		Marketing: "Marketing",
		Coaching: "Coaching",
	};

	const groupedTeam = {};
	for (const committee in committees) {
		groupedTeam[committees[committee]] = groupCommittee(team, committee);
	}

	res.status(200).json(groupedTeam);
}
