import {createSlice} from "@reduxjs/toolkit";
import product1 from "../images/product1.jpeg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpeg";

const productSlice = createSlice({
    name:'productSlice',
    initialState:{
        products: [
            {
                id:1,
                name: "Montre de luxe",
                cost: "50 000",
                rating: 5,
                image: product1,
                beginDate: new Date(2023,4,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 5, 21).toLocaleDateString('fr')
            },
            {
                id:2,
                name: "Appareil photo Nikon",
                cost: "1 000 000",
                rating: 5,
                image: product2,
                beginDate: new Date(2023,4,1).toLocaleDateString('fr'),
                endDate: new Date(2023, 5, 28).toLocaleDateString('fr')
            },
            {
                id:3,
                name: "Casque JBL",
                cost: "55 0000",
                rating: 5,
                image: product3,
                beginDate: new Date(2023,3,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 3   , 2).toLocaleDateString('fr')
            },
        ],
        cart: [],
        bonus: []
    },
    reducers: {
        addCart: (state, action) => {
            let newCart = state.cart;
            newCart.push(action.payload);
            state.cart = newCart;
            console.log(newCart)
        },

    }
});
export const {addCart} = productSlice.actions;
export default productSlice.reducer;
