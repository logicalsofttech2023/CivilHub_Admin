import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const Sallerorder = () => {
  const [details, setdetails] = useState();
 const [count, setcount] = useState();
  let sellerid = secureLocalStorage.getItem("sellerid");

  let token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    sellerdetails();
  }, [0]);

  const sellerdetails = () => {
    const sellerdata = {
      shopId: sellerid,
    };

    // const options = {
    //     headers :{
    //         token:token
    //     }
    // };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/shopOrder_list`,
        sellerdata
      )
      .then((res) => {
        setcount(res?.data?.data?.length)
        setdetails(res.data.data);
      })
      .catch((error) => {});
  };
  return (
    <div>
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                alt
              />
              Vendor Details
            </h2>
          </div>
          <div className="flex-between d-sm-flex row align-items-center justify-content-between mb-2 mx-1">
            <div></div>
          </div>
          <div className="page-header">
            <div className="flex-between row mx-1">
              <div>
                <h1 className="page-header-title">Digital House</h1>
              </div>
            </div>
            <div className="js-nav-scroller hs-nav-scroller-horizontal">
              <ul className="nav nav-tabs flex-wrap page-header-tabs">
                <li className="nav-item">
                  <Link className="nav-link " to="/sallerdetails">
                    Shop Owerview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sallerorder">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sallerproducts">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sallersatting">
                    Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sallertransacation">
                    Transaction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sallerreview">
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content mb-3">
            <div
              className="tab-pane fade show active"
              style={{ backgroundColor: "white" }}
              id="order"
            >
              <div className="row pt-2">
                <div className="col-md-12">
                  <div className="card w-100">
                    <div className="card-header">
                      <h5 className="mb-0">Order info <span class="badge badge-soft-dark radius-50 fz-12">{count}</span></h5>
                    </div>
                    {/* <div className="card-body">
                      <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="order-stats order-stats_pending">
                            <div
                              className="order-stats__content"
                              style={{ textAlign: "left" }}
                            >
                              <i className="tio-airdrop" />
                              <h6 className="order-stats__subtitle">Pending</h6>
                            </div>
                            <div className="order-stats__title">1</div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="order-stats order-stats_delivered">
                            <div
                              className="order-stats__content"
                              style={{ textAlign: "left" }}
                            >
                              <i className="tio-checkmark-circle" />
                              <h6 className="order-stats__subtitle">
                                Delivered
                              </h6>
                            </div>
                            <div className="order-stats__title">1</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="order-stats order-stats_all">
                            <div
                              className="order-stats__content"
                              style={{ textAlign: "left" }}
                            >
                              <i className="tio-table" />
                              <h6 className="order-stats__subtitle">All</h6>
                            </div>
                            <div className="order-stats__title">2</div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div
                      className="table-responsive datatable-custom"
                      style={{
                        overflow: "scroll",
                        scrollbarWidth: "none",
                        height: "250px",
                      }}
                    >
                      {details?.length > 0 ? (<table
                        id="datatable"
                        style={{ textAlign: "left" }}
                        className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                      >
                        <thead className="thead-light thead-50 text-capitalize">
                          <tr>
                            <th>SL</th>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Payment status</th>
                            <th>Total</th>
                            <th>Order status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody id="set-rows">
                          {details?.map((listoforder, index) => {
                            return (
                              <tr className="status class-all">
                                <td>{index + 1}</td>
                                <td>
                                  <a href="#" className="title-color hover-c1">
                                    {listoforder?.orderId}
                                  </a>
                                </td>
                                <td>
                                  {listoforder?.userId?.createdAt.slice(0, 10)}
                                </td>
                                <td>
                                  <Link
                                    to="/customerlist"
                                    className="text-body text-capitalize"
                                    href="https://6valley.6amtech.com/admin/customer/view/2"
                                  >
                                    {listoforder?.userId?.first_name}
                                  </Link>
                                </td>
                                <td>
                                  {listoforder?.products[0]?.payment_status ===
                                  "Unpaid" ? (
                                    <span className="badge badge-soft-danger fz-12">
                                      {listoforder?.products[0]?.payment_status}
                                    </span>
                                  ) : (
                                    <span className="badge badge-soft-success fz-12">
                                      {listoforder?.products[0]?.payment_status}
                                    </span>
                                  )}
                                </td>
                                <td>${listoforder?.products[0]?.total}</td>
                                <td className="text-capitalize">
                                  {/* {listoforder?.products[0]?.order_status } */}
                                  {/* <span className="badge badge-soft-info fz-12">Pending</span> */}

                                  {listoforder?.products[0]?.order_status ==
                                    0 && (
                                    <span className="badge badge-soft-info fz-12">
                                      Pending
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ==
                                    1 && (
                                    <span className="badge badge-soft-danger fz-12">
                                      Cancel
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    2 && (
                                    <span className="badge badge-soft-success fz-12">
                                      Confirm
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    3 && (
                                    <span className="badge badge-soft-primary fz-12">
                                      Packing
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    4 && (
                                    <span className="badge badge-soft-success fz-12">
                                      Shipped
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    5 && (
                                    <span className="badge badge-soft-danger fz-12">
                                      Not Delivered
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    6 && (
                                    <span className="badge badge-soft-success fz-12">
                                      Delivered
                                    </span>
                                  )}
                                  {listoforder?.products[0]?.order_status ===
                                    7 && (
                                    <span className="badge badge-soft-success fz-12">
                                      Return
                                    </span>
                                  )}
                                </td>
                                <td>
                                  <div className="d-flex justify-content-center">
                                    <Link
                                      title="View"
                                      className="btn btn-outline-info btn-sm square-btn"
                                      to="/orderdetails"
                                      onClick={() => {
                                        secureLocalStorage.setItem(
                                          "productid",
                                          listoforder?.products[0]?.productId
                                        );
                                        secureLocalStorage.setItem(
                                          "orderdid",
                                          listoforder?._id
                                        );
                                      }}
                                    >
                                      <i
                                        class="fa fa-eye"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>) : (<div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle" >No order found</p>
</div>)}
                      
                    </div>
                    <div className="table-responsive mt-4">
                      <div className="px-4 d-flex justify-content-lg-end"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sallerorder;
