import React from "react";
import "../Descriptionbox/Descriptionbox.css";

const Descriptionbox = () => {
  return (
    <div className="descbox">
      <div className="descbox-nav">
        <div className="descbox-navbox">Description</div>
        <div className="descbox-navbox-fade">Reviews(122)</div>
      </div>
      <div className="descbox-desc">
        <p>
          An ecommerce website is an online platform that facilitates the buying
          and selling of goods or services over the internet. It allows
          businesses to showcase their products or services to potential
          customers, who can then browse, select, and purchase items directly
          from the website.
        </p>
        <p>
          Ecommerce websites typically include features such as product
          listings, shopping carts, payment processing, and order management
          systems. They provide a convenient and efficient way for businesses to
          reach a global audience and for consumers to shop from the comfort of
          their homes.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
