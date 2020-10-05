import React from "react";
import "./Product.css";
import NumberFormat from "react-number-format";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://apollo-singapore.akamaized.net/v1/files/96xmk597cztk1-PK/image;s=300x600;q=60"
        alt=""
      />
      <div className="info__cont">
        <p className="product__price">
          Rs{" "}
          <NumberFormat
            value={756000}
            displayType={"text"}
            thousandSeparator={true}
          ></NumberFormat>
        </p>
        <p className="product__name">Yamaha YBR 125G 2018 </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p className="product__address">Address</p>
          <p className="product__date">Date</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
