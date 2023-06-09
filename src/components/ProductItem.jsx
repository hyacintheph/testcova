import React from "react";
import {useDispatch} from "react-redux";
import {addCart} from "../features/ProductSlice";

export const ProductItem = ({product}) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCart(product))
    }
    const findExpireDate = () => {
        let currentDate = Date.now();
        return Date.parse(product.endDate) < currentDate;
    }
    return<div  className={`w-full max-w-sm 
                ${findExpireDate() ? 'opacity-20' : 'bg-white'} border border-gray-200 rounded-lg 
                shadow dark:bg-gray-800 dark:border-gray-700`}>
        <a href="#">
            <img className="rounded-t-lg" src={product.image} alt="product image"/>
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl py-4 font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
                {[...Array(product.rating)].map((rate, index) => {
                    return <svg key={index} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"><title>index</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                })}
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}.0</span>
            </div>
            <div className={'grid md:grid-cols-2 gap-2'}>
                <span className={'text-sm'}>Date debut : {product.beginDate}</span>
                <span className={'text-sm'}>{findExpireDate() ? 'Expiré' : `Date fin : ${product.endDate}`}</span>
            </div>
            <div className="flex mt-4 items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">FCFA {product.cost}</span>
                {product.isInCart ? <span className={'text-green-500 font-bold'}>Mise bonus ajoutée</span>:
                    findExpireDate() ? '' : <button onClick={handleAddCart}
                                                     className="text-white bg-blue-700 hover:bg-blue-800
                            focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center
                            dark:bg-blue-600 dark:hover:bg-blue-700
                            dark:focus:ring-blue-800">Ajouter la mise bonus</button>
                }
            </div>
        </div>
    </div>

}
