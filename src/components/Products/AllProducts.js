import { Box, Grid } from "@mui/material";
import classes from './AllProducts.module.css';
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';

import { Button } from '@mui/material';

export const ALL_PRODUCTS = [
    {
        key: "p1",
        id: "p1",
        title: "Adorable Little Shih Tzu",
        price: 600,
        img: p1

    },
    {
        key: "p2",
        id: "p2",
        title: "Cute Brown Poodle",
        price: 240,
        img: p2

    },
    {
        key: "p3",
        id: "p2",
        title: "Energetic French Bulldog",
        price: 450,
        img: p3

    },
    {
        key: "p4",
        id: "p1",
        title: "Adorable Little Shih Tzu",
        price: 600,
        img: p1

    },
    {
        key: "p5",
        id: "p2",
        title: "Cute Brown Poodle",
        price: 240,
        img: p2

    },
    {
        key: "p6",
        id: "p2",
        title: "Energetic French Bulldog",
        price: 450,
        img: p3

    },
    {
        key: "p7",
        id: "p1",
        title: "Adorable Little Shih Tzu",
        price: 600,
        img: p1

    },
    {
        key: "p8",
        id: "p2",
        title: "Cute Brown Poodle",
        price: 240,
        img: p2

    },
    {
        key: "p9",
        id: "p2",
        title: "Energetic French Bulldog",
        price: 450,
        img: p3

    }

];

const AllProducts = () => {
    return (
        <Grid container className={classes.mainWrapper} >
            <h2>All Products</h2>
            <Box className={classes.productsWrapper}>
                {
                    ALL_PRODUCTS.map((product) => {
                        return (
                            <Box className={classes.itemWrapper}>
                                <img src={product.img} alt={product.img} />
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <Button className={classes.cartBtn}>Add to cart</Button>
                            </Box>
                        )
                    })
                }
            </Box>
        </Grid>
    );
};



export default AllProducts;