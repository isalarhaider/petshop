import classes from './FollowUp.module.css';

import { Button, Grid, TextField, Typography, Box } from "@mui/material";

const FollowUp = () => {
    return (
        <Grid container className={classes.mainWrapper}>
            <Typography variant='h2'>Sign up for our newsletter!</Typography>
            <Typography variant='p'>Get the latest puppy care tips</Typography>
            <Box className={classes.followupEmail}>
                <form>
                    <TextField
                        fullWidth
                        type='email'
                        placeholder='Email'
                        variant='outlined'

                    />
                </form>
                <Button className={classes.subBtn}>Subscribe</Button>
            </Box>
        </Grid>
    )
};

export default FollowUp