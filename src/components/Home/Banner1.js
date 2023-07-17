import { Grid, Box, Button } from "@mui/material";

import classes from './Banner1.module.css';

const Banner1 = () => {
    return (
        <Grid container className={classes.mainWrapper}>

            <Box className={classes.contentWrapper}>
                <h2>We love to pamper your pets</h2>
                <p>Bring your pets in for some personalized care. We treat them to goodies, <br /> take them on nice walks, or let them swim in our pool. We also provide <br /> special brushing and grooming services.</p>
                <Button className={classes.learnBtn}> Learn More</Button>
            </Box>

        </Grid>
    );
};

export default Banner1;