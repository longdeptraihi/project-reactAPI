import { Rate } from 'antd'
import React from 'react'
import CategoryPage from './CategoryPage'

const HomePage = (props) => {
    return (
        <>
            <div className="products row">
                <CategoryPage />
                <div className=" col-md-12 col-lg-9">
                    <div className="product-item row">
                        {
                            props.products.map((product) =>
                            (
                                <div className="item col-12 col-sm-6 col-md-4 col-lg-4 " key={product.id}>
                                    <div className="img">
                                        <img src="./img/Image.png" />
                                    </div>
                                    <div className="title">
                                        <div className="product-name">
                                            <div className="product-name-item">
                                                <h4 className="title-heading">{product.name}</h4>
                                                <h4 className="category">Table &amp; Chairs</h4>
                                            </div>
                                        </div>
                                        <p className="price">$ {product.price}</p>
                                    </div>
                                    <div className="sub-product">
                                        <div className="hehe">
                                            <div className="rating">
                                                <Rate className="text-dark" allowHalf defaultValue={2.5} />
                                            </div>
                                            <div className="cart">
                                                <img src="./img/Add to Cart Button.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                            )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
