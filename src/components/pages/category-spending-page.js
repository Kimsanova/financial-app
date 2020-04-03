import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import CategoryTableForm from "../forms/category-table-form";
import Grid from "@material-ui/core/Grid";

const CategorySpendingPage = ({ id, dataService }) => {

    const left = <ArrowBackIosIcon/>
    const linkToPage = "/total-spending"
    const data = dataService.getSpendingCategoryId(id)
    const spending = data.category
    const center = data.name
    const  total = dataService.getSpendingCategoryIdAmount(id)

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
                        <CategoryTableForm data={spending}/>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default withService()(CategorySpendingPage)