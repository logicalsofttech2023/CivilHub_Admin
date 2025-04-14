import React, { useEffect, useState } from "react";

import Header from "../Header";
import "../sidebar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import QRCode from "react-qr-code";
import toast, { Toaster } from "react-hot-toast";

const Orderdetails = () => {
  const [orderdetails, setorderdetails] = useState();
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("vendortoken");
  let orderdid = secureLocalStorage.getItem("orderdid");
  let productid = secureLocalStorage.getItem("productid");

  useEffect(() => {
    getorderdetails();
  }, [0]);
  let getorderdetails = () => {
    const data = {
      order_id: orderdid,
      productId: productid,
      //order_id:"660bb2b67fdd2a1b29722581",
      //productId:"65f170a9aba2a8e214b554d4"
    };

    const options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/orderDetails`,
        data,
        options
      )
      .then((res) => {

        setorderdetails(res?.data?.data);
      })
      .catch((error) => {});
  };

  const lat = orderdetails?.lat;
  const lon = orderdetails?.lon;

  const [paymentstatus, setpaymentstatus] = useState();
  const [statusof, setstatusof] = useState();

  const statuschanged = (e) => {
    e.preventDefault();

    const formData = {
      orderId: orderdid,
      status: paymentstatus,
      productId: productid,
      payment_status: statusof,
    };

    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/updateOrder_status`,
        formData,
        options
      )
      .then((res) => {
        getorderdetails();
        // setTimeout(()=>{
        //   Navigate("/confrimproducts")
        // },4000)
        toast.success("Confirmed");
      })
      .catch((error) => {});
    setstatusof("");
    setpaymentstatus("");
  };
  return (
    <div>
    {/* <Header /> */}
    <div
      className="container row" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      
    >
      <div className="col-lg-3 col-md-4" >
        {/* <Sidebarr /> */}
      </div>

      <div
        className="col-lg-9 col-md-8"
        style={{  marginTop: "60px" }}
      >
         <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
                alt
              />
              Order Details
            </h2>
          </div>
          <div className="row gy-3" id="printableArea">
            <div className="col-lg-8">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-10 justify-content-between mb-4">
                    <div className="d-flex flex-column gap-10">
                      <h4 className="text-capitalize">
                        Order ID #{orderdetails?.orderId}
                      </h4>
                      <div className>
                        {orderdetails?.createdAt.slice(0, 10)} ,{" "}
                        {orderdetails?.createdAt.slice(11, 19)}
                      </div>
                    </div>
                    <div className="text-sm-right">
                      {/* <div className="d-flex flex-wrap gap-10 justify-content-end">
                  <div className>
                    <button className="btn btn--primary px-4" data-toggle="modal" data-target="#locationModal"><i class="fa fa-map-marker" aria-hidden="true"></i> Show locations on map</button>
                  </div>
                  <a className="btn btn--primary px-4" target="_blank" href="">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/uil_invoice.svg" alt className="mr-1" />
                    Print Invoice
                  </a>
                </div> */}
                      <div className="d-flex flex-column gap-2 mt-3">
                        <div className="order-status d-flex justify-content-sm-end gap-10 text-capitalize">
                          <span className="title-color">Status: </span>
                          {orderdetails?.order_status == 0 && (
                            <span className="text-primary payment-status-span font-weight-bold">
                              Pending
                            </span>
                          )}
                          {orderdetails?.order_status == 1 && (
                            <span className="text-danger payment-status-span font-weight-bold">
                              Cancel
                            </span>
                          )}
                          {orderdetails?.order_status === 2 && (
                            <span className="text-success payment-status-span font-weight-bold">
                              Confirm
                            </span>
                          )}
                          {orderdetails?.order_status === 3 && (
                            <span className="text-primary payment-status-span font-weight-bold">
                              Packing
                            </span>
                          )}
                          {orderdetails?.order_status === 4 && (
                            <span className="text-success payment-status-span font-weight-bold">
                              Shipped
                            </span>
                          )}
                          {orderdetails?.order_status === 5 && (
                            <span className="text-danger payment-status-span font-weight-bold">
                              Not Delivered
                            </span>
                          )}
                          {orderdetails?.order_status === 6 && (
                            <span className="text-success payment-status-span font-weight-bold">
                              Delivered
                            </span>
                          )}
                          {orderdetails?.order_status === 7 && (
                            <span className="text-success payment-status-span font-weight-bold">
                              Return
                            </span>
                          )}
                        </div>
                        <div className="payment-method d-flex justify-content-sm-end gap-10 text-capitalize">
                          <span className="title-color">Payment Method :</span>
                          <strong>{orderdetails?.paymentMode}</strong>
                        </div>
                        <div className="payment-status d-flex justify-content-sm-end gap-10">
                          <span className="title-color">Payment Status:</span>

                          {orderdetails?.payment_status == "Unpaid" ? (
                            <span className="text-danger payment-status-span font-weight-bold">
                              {orderdetails?.payment_status}
                            </span>
                          ) : (
                            <span className="text-success payment-status-span font-weight-bold">
                              {orderdetails?.payment_status}
                            </span>
                          )}
                        </div>
                        <span className="ml-2 ml-sm-3">
                          <b>
                            Order verification code :{" "}
                            {orderdetails?.orderVerification_code}
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive datatable-custom">
                    <table className="table fz-12 table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          {/* <th>SL</th> */}
                          <th>Item details</th>
                          <th>Item price</th>
                          <th>Tax</th>
                          <th>Item discount</th>
                          <th>Total price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <td>1</td> */}
                          <td>
                            <div className="media align-items-center gap-10">
                              <img
                                className="avatar avatar-60 rounded"
                                src={
                                  orderdetails?.image
                                    ? `${process.env.REACT_APP_API_KEY}uploads/` +
                                      orderdetails?.image
                                    : "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-13-62566e1a35a9c.png"
                                }
                                alt="Image Description"
                              />
                              <div>
                                <h6 className="title-color">
                                  {orderdetails?.product_name &&
                                  orderdetails?.product_name?.length > 20
                                    ? orderdetails?.product_name?.slice(0, 20) +
                                      "..."
                                    : orderdetails?.product_name}
                                </h6>
                                <div>
                                  <strong>Qty :</strong> {orderdetails?.qty}
                                </div>
                                <div>
                                  <strong>Unit price :</strong>$
                                  {orderdetails?.sale_price}
                                  (Tax:{orderdetails?.tax}%)
                                </div>
                                {/* <div><strong>Variation :</strong> Amethyst-s</div> */}
                              </div>
                            </div>
                          </td>
                          <td>${orderdetails?.sale_price}</td>
                          <td>${orderdetails?.tax}</td>
                          <td>${orderdetails?.discount}</td>
                          <td>${orderdetails?.total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <div className="row justify-content-md-end mb-3">
                    <h5>Order summary - </h5>
                    <div className="col-md-9 col-lg-8">
                      <dl className="row gy-1 text-sm-right">
                        <dt className="col-5">Unit</dt>
                        <dd className="col-6 title-color">
                          <strong>{orderdetails?.size}</strong>
                        </dd>
                        <dt className="col-5 text-capitalize">Quantity</dt>
                        <dd className="col-6 title-color">
                          <strong>{orderdetails?.qty}</strong>
                        </dd>
                        <dt className="col-5 text-capitalize">Sub total</dt>
                        <dd className="col-6 title-color">
                          +<strong>${orderdetails?.subtotal}</strong>
                        </dd>
                        <dt className="col-5">Tax</dt>
                        <dd className="col-6 title-color">
                          -<strong>${orderdetails?.tax}</strong>
                        </dd>
                        <dt className="col-5 text-uppercase">Discount</dt>
                        <dd className="col-6 title-color">
                          +<strong>${orderdetails?.discount}</strong>
                        </dd>
                        <dt className="col-5 text-capitalize">Shipping</dt>
                        <dd className="col-6 title-color">
                          <strong>${orderdetails?.shipping_charge}</strong>
                        </dd>

                        <dt className="col-5">
                          <strong>Total</strong>
                        </dt>
                        <dd className="col-6 title-color">
                          <strong>${orderdetails?.total}</strong>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3">
              <div className="card">
                <div className="card-body text-capitalize d-flex flex-column gap-4">
                  <div className="d-flex flex-column align-items-center gap-2">
                    <h4 className="mb-0 text-center">
                      Order setup &amp; Shipping Info
                    </h4>
                  </div>
                  <form onSubmit={statuschanged}>
                    <div className>
                      <label className="font-weight-bold title-color fz-14">
                        Order status
                      </label>
                      <select
                        value={paymentstatus}
                        onChange={(e) => setpaymentstatus(e.target.value)}
                        required
                        name="order_status"
                        onchange="order_status(this.value)"
                        className="status form-control"
                        data-id={100160}
                      >
                        <option value="" selected disabled>
                          Select
                        </option>
                        <option value="0">Pending</option>
                        <option value="2">Confirmed</option>
                        <option value="3">Packing </option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <label className="font-weight-bold title-color fz-14">
                        Payment status
                      </label>
                      <select
                        value={statusof}
                        onChange={(e) => {
                          setstatusof(e.target.value);
                        }}
                        required
                        name="order_status"
                        onchange="order_status(this.value)"
                        className="status form-control"
                        data-id={100160}
                      >
                        <option value="" selected disabled>
                          Select
                        </option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                      </select>
                    </div>
                    <button
                      class="mt-2 form-control btn btn--primary text-nowrap text-capitalize"
                      type="submit"
                    >
                      Confirm
                    </button>
                  </form>
                  {/* <ul className="list-unstyled list-unstyled-py-4">
              <li>
                <select className="form-control text-capitalize" name="delivery_type" onchange="choose_delivery_type(this.value)">
                  <option value={0}>
                    Choose delivery type
                  </option>
                  <option value="self_delivery" selected>
                    By self delivery man
                  </option>
                  <option value="third_party_delivery">
                    By third party delivery service
                  </option>
                </select>
              </li>
              <li className="choose_delivery_man">
                <label className="font-weight-bold title-color fz-14">
                  Delivery man
                </label>
                <select className="form-control text-capitalize js-select2-custom" name="delivery_man_id" onchange="addDeliveryMan(this.value)">
                  <option value={0}>Select</option>
                  <option value={1}>
                    Demo Deliveryman 1 (0181111111 )
                  </option>
                  <option value={5}>
                    Test test (000000345 )
                  </option>
                  <option value={7}>
                    Demo Deliveryman (1122334455 )
                  </option>
                  <option value={10} selected>
                    Will Smith (1234567890 )
                  </option>
                </select>
                <div className="p-2 bg-light rounded mt-4">
                  <div className="media m-1 gap-3">
                    <img className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/profile/1" alt="Image" />
                    <div className="media-body">
                      <h5 className="mb-1">Will Smith</h5>
                      <a href="tel:1234567890" className="fz-12 title-color">1234567890</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="choose_delivery_man">
                <label className="font-weight-bold title-color fz-14">
                  Deliveryman will get ($)
                </label>
                <input type="number" id="deliveryman_charge" onkeyup="amountDateUpdate(this, event)" defaultValue={40} name="deliveryman_charge" className="form-control" placeholder="Ex: 20" required />
              </li>
              <li className="choose_delivery_man">
                <label className="font-weight-bold title-color fz-14">
                  Expected delivery date
                </label>
                <input type="date" onchange="amountDateUpdate(this, event)" defaultValue="2022-11-22" name="expected_delivery_date" id="expected_delivery_date" className="form-control" required />
              </li>
              <li className="mt-1" id="by_third_party_delivery_service_info">
                <div className="p-2 bg-light rounded">
                  <div className="media m-1 gap-3">
                    <img className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/public/assets/back-end/img/third-party-delivery.png" alt="Image" />
                    <div className="media-body">
                      <h5 className>Not assign yet</h5>
                      <span className="fz-12 title-color">Track ID : </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul> */}
                </div>
              </div>
              {/* <div className="card">
          <div className="card-body">
            <div className="d-flex gap-2 align-items-center justify-content-between mb-4">
              <h4 className="d-flex gap-2">
                <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt />
                Customer information
              </h4>
            </div>
            <div className="media flex-wrap gap-3">
              <div className>
                <img className="avatar rounded-circle avatar-70" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png" alt="Image" />
              </div>
              <div className="media-body d-flex flex-column gap-1">
                <span className="title-color"><strong>fatema subarna </strong></span>
                <span className="title-color"> <strong>0</strong> Orders</span>
                <span className="title-color break-all"><strong>018855</strong></span>
                <span className="title-color break-all"><a href="#" className="__cf_email__" data-cfemail="d5b3b4a1b0b8b495b2b8b4bcb9fbb6bab8">[email&nbsp;protected]</a></span>
              </div>
            </div>
          </div>
        </div> */}
              <div className="card">
                <div className="card-body">
                  <div className="d-flex gap-2 align-items-center justify-content-between mb-4">
                    <h5 className="d-flex gap-2">
                      {/* <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt /> */}
                      Shipping method: {orderdetails?.delivery_place}
                    </h5>
                    {orderdetails?.qrcode ? (
                      <div>
                        <span>
                          <QRCode
                            size={50}
                            bgColor="white"
                            fgColor="black"
                            value={orderdetails?.qrcode}
                          />
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <div>
                      <span>Name :</span>
                      <strong>{orderdetails?.first_name}</strong>
                    </div>
                    <div>
                      <span>Contact :</span>
                      <strong>
                        <a href={`tel:${orderdetails?.mobile_number}`}>
                          {orderdetails?.mobile_number}
                        </a>
                      </strong>
                    </div>

                    {/* <div>
                <span>City :</span>
                <strong>Dhaka</strong>
              </div>
              <div>
                <span>Zip code :</span>
                <strong>125</strong>
              </div> */}
                    <div className="d-flex align-items-start gap-2">
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/location.png"
                        alt
                      />
                      <Link
                        to={`https://www.google.com/maps/dir//${lat},${lon}/@${lat},${lon},16z?entry=ttu`}
                      >
                        {orderdetails?.building_no} {orderdetails?.city_name}{" "}
                        {orderdetails?.landmark} {orderdetails?.village_name}{" "}
                        {orderdetails?.state} {orderdetails?.pin_code}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card">
          <div className="card-body">
            <div className="d-flex gap-2 align-items-center justify-content-between mb-4">
              <h4 className="d-flex gap-2">
                <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt />
                Billing address
              </h4>
              <button className="btn btn-outline-primary btn-sm square-btn" title="Edit" data-toggle="modal" data-target="#billingAddressUpdateModal">
                <i className="tio-edit" />
              </button>
            </div>
            <div className="d-flex flex-column gap-2">
              <div>
                <span>Name :</span>
                <strong>Fatema</strong>
              </div>
              <div>
                <span>Contact :</span>
                <strong>01888888888</strong>
              </div>
              <div>
                <span>City :</span>
                <strong>Dhaka</strong>
              </div>
              <div>
                <span>Zip code :</span>
                <strong>125</strong>
              </div>
              <div className="d-flex align-items-start gap-2">
                <img src="https://6valley.6amtech.com/public/assets/back-end/img/location.png" alt />
                20 Rd No. 14A, Dhaka 1209, Bangladesh
              </div>
            </div>
          </div>
        </div> */}
              {/* <div className="card">
          <div className="card-body">
            <h4 className="d-flex gap-2 mb-4">
              <img src="https://6valley.6amtech.com/public/assets/back-end/img/shop-information.png" alt />
              Shop Information
            </h4>
            <div className="media">
               <div className="mr-3">
                <img className="avatar rounded avatar-70 img-fit-contain" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/company/2023-06-13-648845d83c293.png" alt />
              </div> 
              <div className="media-body d-flex flex-column gap-2">
                <h5>{orderdetails?.shop_name}</h5>
                <span className="title-color"><strong>0</strong> Orders Served</span>
              </div>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
