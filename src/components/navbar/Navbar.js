import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const navItems = ['home', 'browse-pet', 'terms-and-conditions', 'contact'];

function Navbar(props) {

    // const class =  styles();

    return (
        <Box className={classes.navbar}>
            {
                navItems.map((item) => {
                    return (
                        <Button className={classes.navbutton}>
                            <NavLink to={item} activeClassName={classes.navLink} className={classes.navbutton} >
                                {item}
                            </NavLink>
                        </Button>
                    )
                })
            }

        </Box >
    );
}


export default Navbar;