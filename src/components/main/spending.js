import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import withService from "../hoc";
import TableBodyForm from "../forms/table-form/table-body";
import TableHeadForm from "../forms/table-form/table-head";
import TableForm from "../forms/table-form/table-form";
import Grid from "@material-ui/core/Grid";


const Spending = ({ dataService }) => {
    const term = dataService.getTerm()

    const headTitle = 'Spending'
    const currency = 'Som'
    const icon = <AddCircleOutlineIcon color="primary" />
    const linkToPage = '/new-spending'

    const body = term.map(value => <TableBodyForm title={value} amount={1000} />)
    const head = <TableHeadForm title={headTitle} linkToPage={linkToPage} currency={currency} icon={icon}/>

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

export default withService()(Spending)