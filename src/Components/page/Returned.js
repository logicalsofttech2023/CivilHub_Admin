import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../sidebar.css";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import Pagination from "react-js-pagination";
import QRCode from "react-qr-code";
const Returned = () => {
  const [productlist, setproductlist] = useState([]);
  const [count, setcount] = useState();
  const [ProductListfilter, setProductListfilter] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  let token = secureLocalStorage.getItem("vendortoken");
  let shopid = secureLocalStorage.getItem("shopidofvendor");

  useEffect(() => {
    getproductlist();
  }, [0]);
  let getproductlist = () => {
    const data = {
      //shopId: shopid,
      status:"7"
    };
    const options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/orderList`,
        data,
        options
      )
      .then((res) => {

        setcount(res?.data?.data?.length);
        setproductlist(res?.data?.data);
      })
      .catch((error) => {
    
      });
  };
  useEffect(() => {
    setProductListfilter(productlist);
  }, [productlist]);
  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = productlist.filter((item) =>
      item.products[0]?.product_name?.toLowerCase().includes(searchTerm)
    );
    setProductListfilter(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const [CategoryList, setCategoryList] = useState();
  const [serviceName, setServiceName] = useState("");
  let serviceTypeId = secureLocalStorage.getItem("serviceTypeeee");

  useEffect(() => {
    if (CategoryList) {
      const matchedCategory = CategoryList?.find(
        (category) => category?._id === serviceTypeId
      );
      if (matchedCategory) {
        setServiceName(matchedCategory?.maincategory_englishName);
      }
    }
  }, [CategoryList, serviceTypeId]);

  const renderProductData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr>
        <td>{adjustedIndex}</td>
        <td>
          {data?.products?.map((prodcutss) => {
            return (
              <Link
                onClick={() => {
                  secureLocalStorage.setItem("productid", prodcutss?.productId);
                  secureLocalStorage.setItem("orderdid", data?._id);
                }}
                to="/orderdetails"
                className="media align-items-center gap-2 w-max-content"
              >
                <img
                  src={
                    prodcutss?.image
                      ? `${process.env.REACT_APP_API_KEY}uploads/${prodcutss?.image}`
                      : "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883db39dcbb.png"
                  }
                  className="avatar border"
                  alt
                />
              </Link>
            );
          })}
        </td>
        <td>
          <Link className="title-color hover-c1" to="#">
            {data?.orderId}{" "}
          </Link>
        </td>
        <td>
          <div>{data?.order_date?.slice(0, 10)}</div>
          <div>{data?.order_date?.slice(11, 19)}</div>
        </td>

        <td>
          <div>${data?.products[0]?.total}</div>
          {data?.products[0]?.payment_status == "Paid" ? <span className="badge badge-soft-success">{data?.products[0]?.payment_status}</span> : <span className="badge badge-soft-primary">{data?.products[0]?.payment_status}</span>}
        </td>
        <td className="text-capitalize ">
          <label className="badge badge-soft-danger">Returned</label>
        </td>
        {/* <td>{data?.paymentMode}</td>
        <td>
          <div className="d-flex justify-content-center gap-2">
            <Link
              className="btn btn-outline--primary btn-sm square-btn"
              title="View"
              to="/orderdetails"
            >
              <i className="fa fa-eye" aria-hidden="true" />
            </Link>
          </div>
        </td> */}
      </tr>
    );
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
                width={20}
                src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
                alt
              />
              Returned Orders
              <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                {count}
              </span>
            </h2>
          </div>
          {/* <div className="card">
            <div className="card-body">
              <form
                action="https://6valley.6amtech.com/seller/product/list"
                method="GET"
              >
                <input type="hidden" defaultValue name="status" />
                <div className="row gx-2">
                  <div className="col-12">
                    <h4 className="mb-3 text-capitalize">Filter order</h4>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color" htmlFor="filter">
                        Order Type
                      </label>
                      <select
                        name="filter"
                        id="filter"
                        className="form-control select2-selection__arrow"
                      >
                        <option value="all">All</option>
                        <option value="inhouse">Website Order</option>
                        <option value="POS">POS Order</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color" htmlFor="customer">
                        Customer
                      </label>
                      <input
                        type="hidden"
                        id="customer_id"
                        name="customer_id"
                        defaultValue="all"
                      />
                      <select
                        data-placeholder="                                                    All customer
 "
                        className="js-data-example-ajax form-control form-ellipsis"
                      >
                        <option value="all">All customer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <label className="title-color" htmlFor="date_type">
                      Date type
                    </label>
                    <div className="form-group">
                      <select
                        className="form-control __form-control"
                        name="date_type"
                        id="date_type"
                      >
                        <option value="this_year">This Year</option>
                        <option value="this_month">This Month</option>
                        <option value="this_week">This Week</option>
                        <option value="custom_date">Custom Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3" id="from_div">
                    <label className="title-color" htmlFor="customer">
                      Start date
                    </label>
                    <div className="form-group">
                      <input
                        type="date"
                        name="from"
                        id="from_date"
                        className="form-control"
                        defaultValue="true"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3" id="to_div">
                    <label className="title-color" htmlFor="customer">
                      End date
                    </label>
                    <div className="form-group">
                      <input
                        type="date"
                        name="to"
                        id="to_date"
                        className="form-control"
                        defaultValue="true"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-3 justify-content-end">
                      <a
                        href="https://6valley.6amtech.com/seller/orders/list/all"
                        className="btn btn-secondary px-5"
                      >
                        Reset
                      </a>
                      <button
                        type="submit"
                        className="btn btn--primary px-5"
                        data-action="https://6valley.6amtech.com/seller/orders/list/all"
                      >
                        Show data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
          <div className="row mt-20 mb-3">
            <div className="col-md-12">
              <div className="card">
                <div className="px-3 py-4 light-bg">
                  <div className="row g-2 align-items-center flex-grow-1">
                    <div className="col-md-4">
                      <h5 className="text-capitalize d-flex gap-1">
                        Order list
                        <span className="badge badge-soft-dark radius-50 fz-12">
                          {count}
                        </span>
                      </h5>
                    </div>
                    <div className="col-md-8 d-flex gap-3 flex-wrap flex-sm-nowrap justify-content-md-end">
                      <form>
                        <div className="input-group input-group-merge input-group-custom">
                          <input
                            id="datatableSearch_"
                            onChange={handleFilter}
                            type="search"
                            name="search"
                            className="form-control"
                            placeholder="Search by product name"
                            aria-label="Search orders"
                            required
                          />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form>
                      <div className="dropdown">
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a
                              className="dropdown-item"
                              href="https://6valley.6amtech.com/seller/orders/export-order-data/all?date_type=this_year"
                            >
                              <img
                                width={14}
                                src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                                alt
                              />
                              Excel
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  {ProductListfilter?.length > 0 ? (
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th className="text-capitalize">SL</th>
                          <th className="text-capitalize">Image</th>
                          <th className="text-capitalize">Order ID</th>
                          <th className="text-capitalize">Order Date</th>

                          <th className="text-capitalize">Total amount</th>
                          <th className="text-capitalize">Order Status </th>
                          {/* <th className="text-capitalize">Payment method </th>
                          <th className="text-center">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {ProductListfilter.slice(
                          (activePage - 1) * itemsPerPage,
                          activePage * itemsPerPage
                        ).map((data, index) => renderProductData(data, index))}
                      </tbody>
                    </table>
                  ) : (
<div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No order found</p>
</div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {ProductListfilter.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={ProductListfilter.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
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
  );
};

export default Returned;








