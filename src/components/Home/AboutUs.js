import { Grid, Box, Typography, Button } from '@mui/material';

import classes from './AboutUs.module.css';

import pet2 from '../../assets/images/pet2.png';
import pet3 from '../../assets/images/pet3.jpg';
import pet4 from '../../assets/images/pet4.jpg';
import pet5 from '../../assets/images/pet5.jpg';

const AboutUs = () => {
    return (
        <Grid container className={classes.contentWrapper}>
            <Grid item xs={12} sm={12} md={6}>
                <Box className={classes.mainImg}>
                    <img src={pet2} alt="pet2" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box className={classes.aboutWrapper}>
                    <Box className={classes.introText}>
                        <Typography variant="h2">Who are we?</Typography>
                        <Typography variant="p">We are an organisation that puts pets at the heart of what we do. We are passionate about animal welfare, and provide rehabilitation, support and shelter to them till they find their forever homes.</Typography>
                    </Box>
                    <Box className={classes.imgIcons}>
                        <img src={pet3} alt="pet2" />
                        <img src={pet4} alt="pet2" />
                        <img src={pet5} alt="pet2" />
                    </Box>
                    <Button className={classes.learnBtn}>Learn More</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AboutUs;