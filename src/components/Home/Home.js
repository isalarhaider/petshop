import Banner from "./Banner";
import AboutUs from "./AboutUs";
import AllProducts from '../Products/AllProducts';
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Gallery from "./Gallery";
import { Box } from "@mui/material";
import FollowUp from "./FollowUp";


const Home = () => {

    return (
        <Box sx={{ backgroundColor: "#f7f7f5" }}>
            <Banner />
            <AboutUs />
            <AllProducts />
            <Banner1 />
            <Banner2 />
            <Gallery />
            <FollowUp />
        </Box>

    );
};

export default Home;