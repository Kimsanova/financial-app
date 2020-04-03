import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import CategoryTableForm from "../forms/category-table-form";
import Grid from "@material-ui/core/Grid";

const CategoryIncomePage = ({ id, dataService }) => {

    const left = <ArrowBackIosIcon/>
    const linkToPage = "/total-income"
    const data = dataService.getIncomeCategoryId(id)
    const income = data.category
    const center = data.name
    const total = dataService.getIncomeCategoryIdAmount(id)

    console.log('INCOME: ', income)
    console.log("TOTAL: ", total)

    return (
        <div>
            <Header linkToPage={linkToPage} center={center} left={left} right={total} />

            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  direction="column">
                <Grid item container direction="row">
                    <Grid item xs={0} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <CategoryTableForm data={income}/>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default withService()(CategoryIncomePage)