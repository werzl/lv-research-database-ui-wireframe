import React from "react";
import { Table } from "react-bootstrap";
import RatingDropDown from "../../../../components/rating/RatingDropDown";

const ResearchEntryRating = () => <Table className="companyPage-rating-table">
    <thead>
        <tr>
            <td>Quality</td>
            <td>Fundamentals</td>
            <td>FMV</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <RatingDropDown defaultValue={1} disabled />
            </td>
            <td>
                <RatingDropDown defaultValue={1} disabled />
            </td>
            <td>
                <input type="number" defaultValue={21} disabled />
            </td>
        </tr>
    </tbody>
</Table>

export default ResearchEntryRating;