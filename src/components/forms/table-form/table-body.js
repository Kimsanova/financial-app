import React from "react";
import {TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const TableBodyForm = ({ title, amount, right, linkToPage }) => {
    return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography variant="subtitle2">
                            <Link style={{textDecoration: 'none'}} to={linkToPage}>
                            {title}
                            </Link>
                        </Typography>
                    </TableCell>
                    <TableCell align="right">{amount}</TableCell>
                    <TableCell align="right">{right}</TableCell>
                </TableRow>
            </TableBody>
    )
}

export default TableBodyForm