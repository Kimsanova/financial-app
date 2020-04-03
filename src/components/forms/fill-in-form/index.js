import 'date-fns';
import React from 'react';
import { Grid, MenuItem, TextField, InputAdornment } from '@material-ui/core';
import DialpadRoundedIcon from "@material-ui/icons/DialpadRounded";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStylesFillIn as useStyles } from "../../../use-styles";

const FillInForm = ({
                        date,
                        amount,
                        comment,
                        currency,
                        category,
                        handleCommentChange,
                        handleDateChange,
                        handleAmountChange,
                        handleCurrencyChange,
                        handleCategoryChange,

                        currencies,
                        categories}) => {

    const classes = useStyles();

    return (
        <Grid container
              spacing={1}
              justify="center"
              alignItems="center"
        >
            <Grid item xs={1} sm={2} />
            <Grid item xs={10} sm={8}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={date}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    label="Time picker"
                                    value={date}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                        </MuiPickersUtilsProvider>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Category"
                            value={category}
                            onChange={handleCategoryChange}
                            helperText="Please select your currency"
                        >
                            {
                                categories.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            label="Enter Amount"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DialpadRoundedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Currency"
                            value={currency}
                            onChange={handleCurrencyChange}
                            helperText="Please select your currency"
                        >
                            {
                                currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            id="standard-textarea"
                            label="Comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Comment"
                            multiline
                        />
                    </div>
                </form>
            </Grid>
            <Grid item xs={1} sm={2} />
        </Grid>

    )
}

export default  FillInForm