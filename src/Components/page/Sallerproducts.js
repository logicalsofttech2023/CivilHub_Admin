import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import swal from "sweetalert";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const Sallerproducts = () => {
  let navigate = useNavigate();
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };
  let sellarproductsedit = () => {
    navigate("/salleproductsedit");
  };

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
        `${process.env.REACT_APP_API_KEY}admin/api/shopProduct_list`,
        sellerdata
      )
      .then((res) => {
        setcount(res?.data?.data?.length);
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
              Vendor details
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
                    Shop Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sallerorder">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sallerproducts">
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
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              style={{ backgroundColor: "white" }}
              id="product"
            >
              <div className="row pt-2">
                <div className="col-md-12">
                  <div className="card h-100">
                    <div className="px-3 py-4">
                      <h5 className="mb-0 d-flex align-items-center gap-2">
                        Products
                        <span className="badge badge-soft-dark radius-50 fz-12">
                          {count}
                        </span>
                      </h5>
                    </div>
                    {details?.length > 0 ? (
                      <div
                        className="table-responsive datatable-custom"
                        style={{
                          overflow: "scroll",
                          scrollbarWidth: "none",
                          height: "250px",
                        }}
                      >
                        <table
                          id="columnSearchDatatable"
                          style={{ textAlign: "left" }}
                          className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                        >
                          <thead className="thead-light thead-50 text-capitalize">
                            <tr>
                              <th>SL</th>
                              <th>Product Name</th>
                              <th>Purchase price</th>
                              <th>Selling price</th>
                              {/* <th className="text-center">Featured</th>
                                                            <th className="text-center">Active status</th> */}
                              <th className="text-center">View</th>
                            </tr>
                          </thead>
                          <tbody id="set-rows">
                            {details?.map((data, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>
                                    <Link
                                      to="/productsdetails"
                                      onClick={() => {
                                        secureLocalStorage.setItem(
                                          "productid",
                                          data?._id
                                        );
                                      }}
                                      className="title-color hover-c1"
                                    >
                                      {data?.product_name &&
                                      data?.product_name.length > 20
                                        ? data?.product_name.slice(0, 20) +
                                          "..."
                                        : data?.product_name}
                                    </Link>
                                  </td>
                                  <td>$399.00</td>
                                  <td>$544.00</td>

                                  <td>
                                    <div className="d-flex gap-10 justify-content-center">
                                      <Link
                                        onClick={() => {
                                          secureLocalStorage.setItem(
                                            "productid",
                                            data?._id
                                          );
                                        }}
                                        className="btn btn-outline-info btn-sm square-btn"
                                        title="View"
                                        to="/productsdetails"
                                      >
                                        <i
                                          class="fa fa-eye"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>
                                    </div>
                                    <form
                                      action="https://6valley.6amtech.com/admin/product/delete/59"
                                      method="post"
                                      id="product-59"
                                    >
                                      <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="syfKyDoYJ3mCIdT6gR7YRHkRYnQRfWf2KcUadmlv"
                                      />{" "}
                                      <input
                                        type="hidden"
                                        name="_method"
                                        defaultValue="delete"
                                      />{" "}
                                    </form>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div class="text-center p-4">
                        <img
                          class="mb-3 w-160"
                          src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
                          alt="Image Description"
                        />
                        <p class="mb-0 order-stats__subtitle">
                          No product found
                        </p>
                      </div>
                    )}

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

export default Sallerproducts;
