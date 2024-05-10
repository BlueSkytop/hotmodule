import React, {FC} from 'react';

export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}


export type IProductTypeProps = IProductProps & {children?: React.ReactNode};

const Product: FC<IProductTypeProps> = ({id, title, description, price, discountPercentage,
                                     rating, stock, brand, category, thumbnail, images}) => {
    return (
            <div id={'infobox'}>
                <h1>{id} {title}</h1> <img  src={thumbnail} alt="лого товару"/>
                <p>{description}</p> <p>price: {price}</p><p>discountPercentag: {discountPercentage}</p><p>rating: {rating}</p>
                <p>stock: {stock}</p> <p>brand: {brand}</p>  <p>category: {category}</p>

                    {
                        images.map((images, index) =>  <img key={index} id={'arrFoto'} src={images} alt="лого товару"/>)
                    }


            </div>
    );
};
export default Product;