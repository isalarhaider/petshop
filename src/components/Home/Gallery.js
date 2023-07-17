import { Grid } from "@mui/material";
import img5 from '../../assets/images/img5.png';
import classes from "./Gallery.module.css";

const Gallery = () => {
    return (
        <Grid container className={classes.mainWrapper}>
            <Grid item xs={12} sm={12} md={3} className={classes.imgColumn1}>
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-97.jpg" alt="img1" />
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-100.jpg" alt="img2" />
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-102.jpg" alt="img3" />
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.imgColumn2}>
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-98.jpg" alt="img4" />
                <img src={img5} alt="img5" />
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-103.jpg" alt="img6" />
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.imgColumn3}>
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-99.jpg" alt="img7" />
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-101.jpg" alt="img8" />
                <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-104.jpg" alt="img9" />
            </Grid>
        </Grid>
    );
}

export default Gallery