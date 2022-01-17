import { AdminPendingEntry } from "../../../types/AdminConsole";
import { randomDate } from "../../../common/dateHelpers";

const today = new Date();
const lastYear = new Date(new Date(today).setFullYear(today.getFullYear() - 1));

export const pendingTableData: AdminPendingEntry[] = [
	{
		security: "1&1 AG",
		ticker: "1u1 GR",
		quality: {
			approved: {
				value: 1,
				updatedBy: "guncm",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 2,
				updatedBy: "sellarsj",
				updatedDate: today
			}
		},
		fundamentals: {
			approved: {
				value: 2,
				updatedBy: "hewitta",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 1,
				updatedBy: "guncm",
				updatedDate: today
			}
		},
		fmv: {
			approved: {
				value: 100,
				updatedBy: "hewitta",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 120,
				updatedBy: "guncm",
				updatedDate: today
			}
		}
	},
	{
		security: "10x Genomics Inc Class A",
		ticker: "TXG US",
		quality: {
			approved: {
				value: 2,
				updatedBy: "jonesp",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 1,
				updatedBy: "sellarsj",
				updatedDate: today
			}
		},
	},
	{
		security: "1Life Healthcare Inc",
		ticker: "ONEM US",
		quality: {
			approved: {
				value: 1,
				updatedBy: "sellarsj",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 2,
				updatedBy: "guncm",
				updatedDate: today
			}
		},
		fundamentals: {
			approved: {
				value: 1,
				updatedBy: "sellarsj",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 2,
				updatedBy: "guncm",
				updatedDate: today
			}
		},
	},
	{
		security: "2U Inc",
		ticker: "TWOU US",
		fundamentals: {
			approved: {
				value: 1,
				updatedBy: "jonesp",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 2,
				updatedBy: "jonesp",
				updatedDate: today
			}
		},
		fmv: {
			approved: {
				value: 200,
				updatedBy: "jonesp",
				updatedDate: randomDate(today, lastYear)
			},
			unapproved: {
				value: 220,
				updatedBy: "jonesp",
				updatedDate: today
			}
		},
	}
];