import React, {Fragment} from "react";
import {ProductItem} from "./ProductItem";
import product1 from '../images/product1.jpeg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpeg';
export const Products = () => {
    const products = [
        {
            name: "Montre de luxe",
            cost: "50 000",
            rating: 5,
            image: product1,
            beginDate: new Date(2023,4,10).toLocaleDateString('fr'),
            endDate: new Date(2023, 5, 21).toLocaleDateString('fr')
        },
        {
            name: "Appareil photo Nikon",
            cost: "1 000 000",
            rating: 5,
            image: product2,
            beginDate: new Date(2023,4,1).toLocaleDateString('fr'),
            endDate: new Date(2023, 5, 28).toLocaleDateString('fr')
        },
        {
            name: "Casque JBL",
            cost: "55 0000",
            rating: 5,
            image: product3,
            beginDate: new Date(2023,3,10).toLocaleDateString('fr'),
            endDate: new Date(2023, 3   , 2).toLocaleDateString('fr')
        },
    ]
    return <Fragment>
            <div className={'grid md:grid-cols-2 xl:grid-cols-4 gap-2'}>
                {products.map((product, index) => {
                    return <ProductItem product={product} key={index}/>
                })}
            </div>
    </Fragment>
}
