import React, {FC, useEffect, useState} from 'react';

import './App.css';
import Products from "./components/product/Products";
import {IProduct} from "./components/product/IProduct";


const App:FC=() => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() =>{
        fetch('https://dummyjson.com/docs/products/')
            .then(value => value.json())
            .then(value => {setProducts(value);
            });

        return() => {
            console.log('start products');
        }
    }, []);

    return(
        <>
            {
                products.map(({id, title, description, price, discountPercentage,
                                  rating, stock, brand, category, thumbnail, images},
                              index) =>
                <Products
                   key={index}
                   id={id}
                   title={title}
                   description={description}
                   price={price}
                   discountPercentage={discountPercentage}
                   rating={rating}
                   stock={stock}
                   brand={brand}
                   category={category}
                   thumbnail={thumbnail}
                   images={images}
                ></Products>
                )
            }
        </>
    );
};

export {App}
export default App;
