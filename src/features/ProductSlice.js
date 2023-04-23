import {createSlice} from "@reduxjs/toolkit";
import product1 from "../images/product1.jpeg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpeg";
import product4 from '../images/iphone14.png'
import product5 from '../images/parfum.jpeg'
import product6 from '../images/waterbottle.webp'
const productSlice = createSlice({
    name:'productSlice',
    initialState:{
        products: [
            {
                id:1,
                name: "Montre de luxe",
                cost: "50 000",
                rating: 4,
                isInCart:false,
                image: product1,
                beginDate: new Date(2023,4,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 5, 21).toLocaleDateString('fr')
            },
            {
                id:2,
                name: "Appareil photo Nikon",
                cost: "1 000 000",
                rating: 5,
                isInCart:false,
                image: product2,
                beginDate: new Date(2023,4,1).toLocaleDateString('fr'),
                endDate: new Date(2023, 5, 28).toLocaleDateString('fr')
            },
            {
                id:3,
                name: "Casque JBL",
                cost: "55 0000",
                rating: 3,
                isInCart:false,
                image: product3,
                beginDate: new Date(2023,3,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 3   , 2).toLocaleDateString('fr')
            },
        ],
        cart: [],
        bonus: [],
        randomProducts: [
            {
                id:4,
                name: "Iphone 14",
                cost: "1 556 0000",
                rating: 4,
                isInCart:false,
                image: product4,
                beginDate: new Date(2023,1,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 2   , 2).toLocaleDateString('fr')
            },
            {
                id:5,
                name: "Parfum",
                cost: "6 0000",
                rating: 4,
                isInCart:false,
                image: product5,
                beginDate: new Date(2023,2,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 5   , 2).toLocaleDateString('fr')
            },
            {
                id:5,
                name: "Parfum",
                cost: "8 0000",
                rating: 4,
                isInCart:false,
                image: product6,
                beginDate: new Date(2023,2,10).toLocaleDateString('fr'),
                endDate: new Date(2023, 11   , 2).toLocaleDateString('fr')
            },

        ]
    },
    reducers: {
        addCart: (state, action) => {
            let newCart = state.cart;
            let newItem = action.payload;
            newItem = {...newItem, isInCart: true}
            let newProducts = [];
            let products = state.products;
            newProducts = products.filter(product => product.id !== newItem.id);
            newProducts.push(newItem)
            state.products = newProducts.sort((a,b) => (a.id < b.id) ? 1 : -1).reverse();
            newCart.push(newItem);
            state.cart = newCart;
        },
        addProduct: (state) => {
            let index = Math.floor(Math.random() * 3);
            let newProducts = [];
            let products = state.products;
            products.forEach(product => {
                newProducts.push(product)
            });
            newProducts.push(state.randomProducts[index]);
            state.products = newProducts;
        }

    }
});
export const {addCart, addProduct} = productSlice.actions;
export default productSlice.reducer;
