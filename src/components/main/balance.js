import React from "react";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';


import TableForm from "../forms/table-form/table-form";
import TableHeadForm from "../forms/table-form/table-head";
import TableBodyForm from "../forms/table-form/table-body";
import Grid from "@material-ui/core/Grid";


const Balance = () => {

    const headTitle = 'Balance'
    const currency = 'Som'
    const icon = <MoreHorizRoundedIcon/>
    const title = 'Total'
    const amount = 1000
    const head = <TableHeadForm
                    title={headTitle}
                    currency={currency}
                    icon={icon}
                />
    const body = <TableBodyForm title={title} amount={amount}/>


    return (
        <Grid container
              spacing={1}
              justify="center"
              alignItems="center"
              direction="column">
            <Grid item container direction="row">
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <TableForm tableHead={head} tableBody={body}/>
                </Grid>
                <Grid item xs={0} sm={2}/>
            </Grid>
        </Grid>

    )
}

export default Balance