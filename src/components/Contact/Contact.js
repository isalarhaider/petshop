import classes from './Contact.module.css';

import { Grid, Typography } from "@mui/material";


const Contact = () => {
    return (
        <Grid container className={classes.mainWrapper}>
            <Grid item xs={12} className={classes.getInTouch}>
                <Typography variant='h3'>Get In Touch With Us -</Typography>
                <Typography variant='p'>Feel free to contact us with any queries.</Typography>
            </Grid>
            <Grid item sm={4} className={classes.contactdetails}>
                <Typography variant='p'>1673 Golf Course Drive <br />Virginia, USA 22370</Typography>
            </Grid>
            <Grid item sm={4} className={classes.contactdetails}>
                <Typography variant='p'>Phone: 703-612-8229</Typography>
            </Grid>
            <Grid item sm={4} className={classes.contactdetails}>
                <Typography variant='p'>Email: info@carepetstore.com <br /> carepetstore.com</Typography>
            </Grid>
        </Grid>
    );
};

export default Contact;