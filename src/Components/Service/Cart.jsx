import React from "react";
import { Button } from "react-bootstrap";


function Cart({ cartItems, removeFromCart, handleBuyNow }) {
  return (
    <div>
    <section className="py-1 bg-light">
      <div className="container px-4 px-lg-5 mt-1">
        <h2 className="fw-bolder mb-1">Cart</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-evenly">
          {cartItems && cartItems.map((product, index) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src={product.image} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    ${product.price} 
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Button className="btn btn-outline-dark mx-2"  onClick={() => removeFromCart(index)}>Remove </Button>
                    <Button className="btn btn-outline-dark mt-2" onClick={() => handleBuyNow(product)}>Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  
  );
}

export default Cart;
