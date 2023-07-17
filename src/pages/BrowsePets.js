import classes from './BrowsePets.module.css';
import AllProduct from '../components/Products/AllProducts';

import { Grid, Typography, Box, Autocomplete, TextField } from "@mui/material";


const categories = ['Dog', 'Cat', 'Puppy', 'Others'];

const sortOptions = ['Most Popular', 'Most Recent', 'Price: High to Low', 'Price: Low to High', 'A to Z', 'Z to A'];

const BrowsePets = () => {


    return (
        <Grid container>
            <Grid item sm={10} className={classes.heading}>
                <Typography variant="h4" >Browse Pet</Typography>
            </Grid>
            <Grid item sm={10} className={classes.category}>
                <Box>
                    <Autocomplete
                        disablePortal
                        id="category"
                        options={categories}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                </Box>
                <Box>
                    <Typography variant='h1'>Sort by :</Typography>
                    <Autocomplete
                        disablePortal
                        id="category"
                        options={sortOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Most Popular" />}
                    />

                </Box>
            </Grid>
            <Grid item sm={12} className={classes.AllProduct}>
                <AllProduct />
            </Grid>
        </Grid >
    );
};

export default BrowsePets;