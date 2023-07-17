import { Grid, Box, Typography } from '@mui/material';

import clasess from './Banner2.module.css';

import pet3a from '../../assets/images/pet3.png';


const Banner2 = () => {
    return (
        <Grid container className={clasess.mainWrapper}>

            <Grid item xs={12} sm={12} md={7} className={clasess.contentWrapper}>

                <Box className={clasess.textContent}>
                    <Typography variant='p' sx={{ color: "red" }}>Activities</Typography>
                    <Typography variant='h2'>Putting Animals First</Typography>
                    <Typography variant='p'>With an aim to rehabilitate pets and place them with caring owners, we offer a safe shelter for all kinds of animals and are actively involved in animal rights communities. When you adopt from us, you'll be taking home a well-cared for and well-fed pet.</Typography>
                </Box>
                <Box className={clasess.cards}>

                    <Box className={clasess.cardsContent}>
                        <img src='https://static.zohocdn.com/sites/stock-images/images/zwstock-image-93.svg' alt='1' />
                        <img src='https://static.zohocdn.com/sites/stock-images/images/zwstock-image-94.svg' alt='2' />
                    </Box>
                    <Box className={clasess.cardsContent}>
                        <img src='https://static.zohocdn.com/sites/stock-images/images/zwstock-image-95.svg' alt='3' />
                        <img src='https://static.zohocdn.com/sites/stock-images/images/zwstock-image-96.svg' alt='4' />
                    </Box>
                </Box>

            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <Box className={clasess.catWrapper}>
                    <img src={pet3a} alt="pet3a" />
                </Box>
            </Grid>
        </Grid>);
}

export default Banner2;