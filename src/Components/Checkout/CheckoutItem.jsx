import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CheckoutItem = () => {

    const { all_product, cartItems } = useContext(ShopContext);

    return (
        <div className='checkout-items'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div className="cartitems-format cartitems-format-main" key={e.id}>
                            <img src={e.image} alt="" className='cartitems-product-icon' />
                            <p>{e.name}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default CheckoutItem