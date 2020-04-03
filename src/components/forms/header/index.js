import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { useStylesHeader as useStyles } from "../../../use-styles"
import {Link} from "react-router-dom";
import './header.css'


const Header = ({ left, center, right, linkToPage }) => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to={linkToPage}>
                            {left}
                        </Link>
                    </IconButton>
                    <Typography align="center" variant="h6" className={classes.title}>
                        {center}
                    </Typography>
                    <Button color="inherit">{right}</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header