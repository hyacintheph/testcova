import React, {Fragment} from "react";
import {ProductItem} from "./ProductItem";
import {useSelector} from "react-redux";
export const Products = () => {
    const products = useSelector(state => state.productSlice.products)
    return <Fragment>

        <div className={'grid md:grid-cols-2 xl:grid-cols-4 gap-2'}>
                {products.map((product, index) => {
                    return <ProductItem product={product} key={index}/>
                })}
            </div>
    </Fragment>
}
