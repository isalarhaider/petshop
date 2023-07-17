import { Grid, Box, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import pet1 from '../../assets/images/pet1.png';
import classes from './Home.module.css';

const Banner = () => {
    return (
        <Fragment>
            <Grid container className={classes.bannerWrapper} rowSpacing={1}>
                <Grid item xs={12} sm={12} md={6} className={classes.contentWrapper}>
                    <Box className={classes.box1}>
                        <Typography variant="h2">Save Animals, <br /> Change Lives.</Typography>
                        <p>We care for every pet till they find their forever home. Adopt healthy
                            pets from our store, and bring positive change around you.</p>
                        <Button className={classes.box1btn}>
                            Browse Pets
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Box className={classes.box2}>
                        <img src={pet1} alt="pet1" />
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Banner;