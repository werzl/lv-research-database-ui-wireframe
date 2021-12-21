import { TResearchEntry } from "../../../../types/ResearchEntry";

import { randomDate } from "../../../../common/dateHelpers";

const today = new Date();
const lastYear = new Date(new Date(today).setFullYear(today.getFullYear() - 1));

export const researchEntriesData: TResearchEntry[] = [
    {
        sourceId: "sourceId1",
        date: today,
        attachments: {
            count: 1,
            list: [
                {
                    filename: "new_model.docx",
                    type: "NonStandard Model",
                    description: ""
                }
            ]
        },
        comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, risus non finibus commodo, erat purus finibus risus, sed blandit dolor magna quis dui. Pellentesque eget rutrum urna. Praesent rutrum, sem non sagittis bibendum, tellus nisi aliquet augue, eu blandit ex metus id nisl. Nulla et lobortis mauris. Nam molestie arcu id tellus lobortis euismod. Nunc eget commodo neque. Integer sollicitudin dignissim ante, sed venenatis lectus semper non. Sed at luctus ligula."
    },
    {
        sourceId: "sourceId2",
        date: randomDate(today, lastYear),
        attachments: {
            count: 2,
            list: [
                {
                    filename: "model.xls",
                    type: "NonStandard Model",
                    description: ""
                },
                {
                    filename: "Abbey National Note.docx",
                    type: "Note",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, risus non finibus commodo, erat purus finibus risus."
                },
                {
                    filename: "Abbey National ESG.docx",
                    type: "ESG",
                    description: ""
                }
            ]
        },
        comments: "Vivamus orci tortor, elementum vitae orci dignissim, congue facilisis turpis."
    },
    {
        sourceId: "sourceId3",
        date: randomDate(today, lastYear),
        attachments: {
            count: 1,
            list: [
                {
                    filename: "test.docx",
                    type: "Other",
                    description: ""
                }
            ]
        },
        comments: "Pellentesque vitae ipsum ligula. Nam imperdiet, urna ut consequat varius, tellus ante dignissim ex, porttitor luctus nibh erat id lectus. Nullam ac lectus et dui ultricies maximus ut ac nibh. Suspendisse potenti. Sed tempor venenatis cursus. Phasellus urna lorem, vulputate id bibendum dictum, tristique vel nisi. Aliquam diam ex, euismod at placerat sit amet, vehicula sed diam. Proin in risus diam. Duis id ex ex. Nullam finibus, leo at pulvinar varius, nibh nulla sollicitudin nisi, id ullamcorper augue massa sit amet felis. Sed interdum, tortor ac ornare imperdiet, augue sem laoreet lacus, et dictum mi turpis non metus. Duis volutpat dolor at felis vulputate, at eleifend nisl lacinia. Sed eget fringilla mauris, id maximus enim. Nam dignissim, arcu vel tincidunt ultrices, justo nisi accumsan ipsum, quis accumsan libero ante vitae dui. Duis a consequat lorem."
    },
    {
        sourceId: "sourceId4",
        date: randomDate(today, lastYear),
        attachments: {
            count: 1,
            list: [
                {
                    filename: "research-abbey-national-top-10-p.docx",
                    type: "Top 10 Percentile",
                    description: ""
                }
            ]
        },
        comments: "Duis eu eleifend erat. Nunc vitae efficitur velit, aliquet tristique nunc. Sed et finibus dolor. Nullam gravida cursus efficitur. Integer aliquet rhoncus dolor nec congue. Phasellus placerat urna at est gravida sagittis in id velit. Morbi malesuada finibus mauris sed ullamcorper. Aliquam sapien arcu, dignissim eget condimentum ut, varius vel dui. Aenean scelerisque urna in rutrum sollicitudin. Nullam dictum leo diam, a vulputate odio consequat eget. Sed a pulvinar ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue ante, vestibulum ut volutpat ut, iaculis a erat. Donec gravida semper justo non congue. Maecenas bibendum nulla orci, et suscipit turpis tempus in. Nunc dolor mi, pulvinar eu nisi eget, pretium auctor massa."
    },
    {
        sourceId: "sourceId5",
        date: randomDate(today, lastYear),
        attachments: {
            count: 1,
            list: [
                {
                    filename: "Abbey National ESG.docx",
                    type: "ESG",
                    description: ""
                }
            ]
        },
        comments: "Nulla eget accumsan nisl, eget maximus nulla."
    },
    {
        sourceId: "sourceId6",
        date: randomDate(today, lastYear),
        attachments: {
            count: 1,
            list: [
                {
                    filename: "research-abbey-national-bottom-10-p.docx",
                    type: "Bottom 10 Percentile",
                    description: ""
                }
            ]
        },
    }
];