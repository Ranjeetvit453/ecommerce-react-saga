import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productList } from "../../redux/action/productAcion";
import { addToCartAction, removeCart } from "../../redux/action/cartAction"
import { LoderSpinner } from "../../utils/Utils"
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

import ProductDetails from './ProductDetails';

const ProductList = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.data)
    const loader = useSelector((state) => state.product.loader)

    useEffect(() => {
        dispatch(productList())
    }, [])
    const [show, setShow] = useState(false);
    const [modelData, setModelData] = useState();

    const handleAddToCart = (id) => {
        const cartData = product && product.filter(data => data._id == id);
        dispatch(addToCartAction(cartData))
    }



    const handleRemovCart = (id) => {
        dispatch(removeCart(id))
    }
    const handleModel = () => {
        setShow(true);
    }

    const hideModal = () => {

        setShow(false);
    }

    let notFound;
    if (!product.length > 0) {
        notFound = "Product data not found"
    }

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {loader ? LoderSpinner : product && product.map((el) =>
                            <div >

                                <div onClick={handleModel} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={el.image}

                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        style={{ width: 400, height: 250 }}
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{el.productName}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{el.price}</p>
                                <p> <details>
                                    <p>{el.productDescription}</p>
                                </details></p>


                                <Button variant="success" onClick={() => handleAddToCart(el._id)}  >Add To Cart</Button>
                                &nbsp;
                                <Button variant="danger" onClick={() => handleRemovCart(el._id)}  >Remove Cart</Button>
                                <ProductDetails show={show}
                                    pic={el.image}
                                    description={el.productDescription}
                                    name={el.productName}
                                    price={el.price}
                                    handleClose={hideModal} />
                            </div>)}
                    </div>

                </div>
            </div>



        </div >
    )
}

export default ProductList;