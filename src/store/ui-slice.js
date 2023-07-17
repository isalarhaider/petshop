import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
            console.log("Cart is visible");
        },
        showNotification(state) {
            console.log("Notification");
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;

