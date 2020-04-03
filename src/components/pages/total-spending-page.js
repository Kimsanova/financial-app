import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from "@material-ui/core/Grid";
import withService from "../hoc";
import TableBodyForm from "../forms/table-form/table-body";
import Header from "../forms/header";
import TableForm from "../forms/table-form/table-form";

const TotalSpendingPage = ({ dataService }) => {

    const left = <ArrowBackIosIcon/>
    const center = "Total Spending"
    const linkToPage = "/"
    const spendingCategory = dataService.getSpendingCategory()
    const totalAmount = dataService.getSpendingTotalAmount()
    const body = spendingCategory.map(value=> (
        <TableBodyForm title={value.value}
                       right={value.amount}
                       linkToPage={`/total-spending/${value.id}`}
        />))
    return (
        <div>
            <Header linkToPage={linkToPage} left={left} center={center} right={totalAmount}/>

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  direction="column">
                <Grid item container direction="row">
                    <Grid item xs={0} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <TableForm  tableBody={body}/>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default withService()(TotalSpendingPage)