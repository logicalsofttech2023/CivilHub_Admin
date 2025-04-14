import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Pagination from "react-js-pagination";
const Customerdetails = () => {
  const [customerdata, setcustomerdata] = useState();
  const [count, setcount] = useState();
  const [customerorderdata, setcustomerorderdata] = useState();
  const [ProductListfilter, setProductListfilter] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };

  let customeridd = secureLocalStorage.getItem("customerid");
  let token = secureLocalStorage.getItem("adminidtoken");
  useEffect(() => {
    getcustomerdata();
  }, [0]);
  let getcustomerdata = () => {
    const customerdata = {
      userId: customeridd,
    };
    const options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/customerDetails`,
        customerdata,
        options
      )
      .then((res) => {
       
        setcustomerdata(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getcustomerorderdata();
  }, [0]);
  let getcustomerorderdata = () => {
    const customerdata = {
      userId: customeridd,
    };

    const options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/customerOrderList`,
        customerdata,
        options
      )
      .then((res) => {
        setcount(res?.data?.data?.length);
        setcustomerorderdata(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setProductListfilter(customerorderdata);
  }, [customerorderdata]);
  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = customerorderdata.filter((item) =>
      item.products[0]?.product_name?.toLowerCase().includes(searchTerm)
    );
    setProductListfilter(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderProductData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr>
        <td>{adjustedIndex}</td>
        <td>
          <a href="#" className="title-color hover-c1">
            {data?.orderId}
          </a>
        </td>
        <td>
          <a href="#" className="title-color hover-c1">
            {data?.products[0]?.product_name.slice(0, 5)}
          </a>
        </td>
        <td> ${data?.products[0]?.total}</td>
        <td>
          <div className="d-flex justify-content-center gap-10">
            <Link
              to="/orderdetails"
              onClick={() => {
                secureLocalStorage.setItem(
                  "productid",
                  data?.products[0]?.productId
                );
                secureLocalStorage.setItem("orderdid", data?._id);
              }}
              className="btn btn-outline--primary btn-sm edit square-btn"
              title="View"
            >
              <i class="fa fa-eye" aria-hidden="true"></i>{" "}
            </Link>
          </div>
        </td>
      </tr>
    );
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
                width={20}
                src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
                alt=""
              />
              Customer Details
              <span className="badge badge-soft-dark radius-50">{count}</span>
            </h2>
          </div>
          <div className="row" id="printableArea">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <div className="card">
                <div className="p-3">
                  <div className="row justify-content-end">
                    <div className="col-auto">
                      <form>
                        <div className="input-group input-group-merge input-group-custom">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input
                            onChange={handleFilter}
                            id="datatableSearch_"
                            type="search"
                            name="searchValue"
                            className="form-control"
                            placeholder="Search orders"
                            aria-label="Search orders"
                            required
                          />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="table-responsive datatable-custom">
                  {ProductListfilter?.length > 0 ? (
                    <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>Sl</th>
                          <th>Order ID</th>
                          <th>Product</th>
                          <th>Total</th>
                          <th className="text-center">Action</th>
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
                      <img
                        class="mb-3 w-160"
                        src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
                        alt="Image Description"
                      />
                      <p class="mb-0 order-stats__subtitle">No order found</p>
                    </div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {ProductListfilter?.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={ProductListfilter?.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4 d-flex align-items-center gap-2">
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png"
                      alt=""
                    />
                    Customer
                  </h4>
                  <div className="media">
                    <div className="mr-3">
                      {customerdata?.user_profile === " " ? (
                        <img
                          className="avatar rounded-circle avatar-70"
                          src="https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"
                          alt="Image"
                        />
                      ) : (
                        <img
                          className="avatar rounded-circle avatar-70"
                          src={
                            `${process.env.REACT_APP_API_KEY}uploads/` +
                            customerdata?.user_profile
                          }
                          alt="Image"
                        />
                      )}
                    </div>
                    <div className="media-body d-flex flex-column gap-1">
                      <span className="title-color hover-c1">
                        <strong>
                          {customerdata?.first_name.slice(0,10)} 
                          {/* {customerdata?.last_name} */}
                        </strong>
                      </span>
                      <span className="title-color">
                        <strong>{count} </strong>Orders
                      </span>
                      <span className="title-color">
                        <strong>{customerdata?.mobile_number}</strong>
                      </span>
                      <span className="title-color">{customerdata?.email}</span>
                    </div>
                    <div className="media-body text-right"></div>
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

export default Customerdetails;
