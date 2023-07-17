import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

import { IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CartButton = () => {

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    };
    return (
        <IconButton onClick={toggleCartHandler} size="large">
            <ShoppingBagOutlinedIcon fontSize="inherit" />
            <span className={classes.badge}>5</span>
        </IconButton>
    );
};

export default CartButton;