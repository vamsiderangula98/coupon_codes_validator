import React from "react";
import ProductsCollection from "./productsCollection";
import Checkout from "./checkout";
import CouponList from "../coupon/couponList";

export default function Container() {
    return (
        <div className="main-container container-fluid col-sm-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <ProductsCollection />
                </div>
                <div className="right-container coupons-section col-lg-6 col-md-6 col-sm-12">
                    <Checkout />
                    <CouponList />
                </div>
            </div>
        </div>
    )
}