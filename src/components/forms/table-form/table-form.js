import React from "react";
import {Paper, Table, TableContainer } from "@material-ui/core";

const TableForm = ({ tableHead, tableBody }) => {
    return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    {tableHead}
                    {tableBody}
                </Table>
            </TableContainer>
    )
}

export default TableForm