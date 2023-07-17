import classes from './Footer.module.css';

import { Box, Grid } from "@mui/material";

const quickLinks = ['Home', 'Browse Pet', 'Terms and Conditions', 'Contact'];

const Footer = () => {
    return (
        <Grid container className={classes.outerGrid} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box>
                    <h2>Pet Shelter</h2>
                    <p>The affordable option to adopt your new best friend. Our pets are cared for, ethically treated and will bring joy to your life.</p>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2}>
                <Box>
                    <h4>Quick Links</h4>
                    <Box className={classes.quickLinks}>
                        {quickLinks.map((link) => {
                            return (
                                <a className={classes.qlButton} href="/">
                                    {link}
                                </a>
                            )
                        })}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2}>
                <Box>
                    <h4>Quick Links</h4>
                    <Box className={classes.quickLinks}>
                        {quickLinks.map((link) => {
                            return (
                                <a className={classes.qlButton} href="/">
                                    {link}
                                </a>
                            )
                        })}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2}>
                <Box>
                    <h4>Contact</h4>
                    <p>703-612-8229</p>
                    <p>1673 Golf Course Drive
                        Virginia, USA 22370</p>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.rights}>
                    <p>All Rights Reserved</p>
                </Box>
            </Grid>
        </Grid>
    );

};

export default Footer;