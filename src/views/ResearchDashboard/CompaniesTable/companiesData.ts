export const companiesData = {
	columns: [
		{
			field: "ticker",
			headerName: "Ticker",
			width: 180,
			editable: false
		},
		{
			field: "security",
			headerName: "Security",
			width: 120,
			editable: false
		},
		{
			field: "dateAdded",
			headerName: "Date Added",
			width: 150,
			editable: false
		}
	],
	rows: [
		{
			id: "1U1 GR",
			ticker: "1U1 GR",
			security: "1&1 AG",
			dateAdded: new Date().toLocaleString("en-GB")
		}

	]
}