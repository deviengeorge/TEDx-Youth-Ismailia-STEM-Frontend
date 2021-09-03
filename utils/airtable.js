import Airtable from "airtable";

Airtable.configure({
	apiKey: process.env.AIRTABLE_API_KEY,
});

let base = Airtable.base(process.env.AIRTABLE_BASE_ID);

const getMinifiedRecord = (record) => record.fields;

const minifyRecords = (records) => {
	return records.map((record) => getMinifiedRecord(record));
};

export { base, getMinifiedRecord, minifyRecords };
