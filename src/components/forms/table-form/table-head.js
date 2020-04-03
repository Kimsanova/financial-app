import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import {Link} from "react-router-dom";

const TableHeadForm = ({ title, currency, icon, linkToPage }) => {
    return (
            <TableHead>
                <TableRow>
                    <TableCell>{title}</TableCell>
                    <TableCell align="right">{currency}</TableCell>
                    <TableCell align="right">
                        <Link to={linkToPage}>
                            {icon}
                        </Link></TableCell>
                </TableRow>
            </TableHead>
    )
}

export default TableHeadForm