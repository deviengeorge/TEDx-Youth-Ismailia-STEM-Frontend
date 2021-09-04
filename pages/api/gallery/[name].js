import { base, minifyRecords } from "../../../utils/airtable";

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
	const { name } = req.query;
	const table = base("Gallery");

	let pics = await table
		.select({
			view: "Grid view",
		})
		.firstPage();
	pics = minifyRecords(pics);

	const days = {
		opening: "Opening",
		event: "Event",
		closing: "Closing",
	};

	pics = groupDay(pics, days[name]);
	res.status(200).json(pics);
}
