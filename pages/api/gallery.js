// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { base, minifyRecords } from "../../utils/airtable";

const groupDay = (records, day) => {
	const groupedPics = [];
	records.forEach((record) => {
		if (record["Day"] == day) {
			groupedPics.push(record);
		}
	});
	return groupedPics;
};

export default async function (req, res) {
	const table = base("Gallery");

	let pics = await table
		.select({
			view: "Grid view",
		})
		.firstPage();
	pics = minifyRecords(pics);

	const days = {
		Opening: "Opening",
		Event: "Event",
		Closing: "Closing",
	};

	const groupedDays = {};
	for (const day in days) {
		groupedDays[days[day]] = groupDay(pics, day);
	}

	res.status(200).json(groupedDays);
}
