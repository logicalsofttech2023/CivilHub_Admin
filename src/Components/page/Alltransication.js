import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Pagination from "react-js-pagination";
const Alltransication = () => {
  const [valueof, setvalueof] = useState();

  const [dataofwithdraw, setdataofwithdraw] = useState();
  const [count, setcount] = useState();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  useEffect(() => {
    getwithdrow();
  }, [valueof]);

  const getwithdrow = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/allTransjection`
      )
      .then((res) => {
        let filteredData = [];

        if (valueof == "0") {
          filteredData = res.data.data.filter((item) => item?.userId?.status == "0");
        } else if (valueof == "1") {
          filteredData = res.data.data.filter((item) => item?.userId?.status == "1");
        } else if (valueof == "2") {
          filteredData = res.data.data.filter((item) => item?.userId?.status == "2");
        } else {
          filteredData = res.data.data;
        }

        setcount(filteredData?.length);
        setdataofwithdraw(filteredData);
      })
      .catch((error) => {});
  };

  const renderProductData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr>
        <td>{adjustedIndex}</td>
        <td>${data?.amount}</td>
        <td>
          {data?.userId?.first_name ? (
            <a href="javascript:">{data?.userId?.first_name}</a>
          ) : (
            <a href="javascript:">Admin</a>
          )}
        </td>
        <td>
           {data?.userId?.createdAt.slice(0, 10)} {data?.userId?.createdAt.slice(11, 19)} 
        </td>
        <td className="text-center">
        
        {/* <label className="badge badge-soft-primary">{data?.payment_status}</label> */}
           {data?.payment_status == "Paid" ? (
            <label className="badge badge-soft-success">{data?.payment_status}</label>
          ) : (
            <label className="badge badge-soft-danger">{data?.payment_status}</label>
          )} 
        </td>
        <td>
          {data?.userId?.user_status == "0" ? (
            <div className="d-flex justify-content-center">
              <a href="javascript:">Active</a>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <a href="javascript:">Deactive</a>
            </div>
          )}
        </td>
        <td>
          <div class="d-flex justify-content-center">
            <Link
              onClick={() => {
                secureLocalStorage.setItem("venderIds", data?.userId?._id);
                secureLocalStorage.setItem("withdrawids", data?._id);
              }}
              class="btn btn-outline-info btn-sm square-btn"
              title="View"
              to="/withdrawviewdetails"
            >
              <i class="fa fa-eye" aria-hidden="true"></i>
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
                src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png"
                alt=""
              />
              All Transaction
            </h2>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="p-3">
                  <div className="row gy-1 align-items-center justify-content-between">
                    <div className="col-auto">
                      <h5 className="text-capitalize">
                      Transaction Data
                        <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                          {count}
                        </span>
                      </h5>
                    </div>
                    <div className="d-flex col-auto gap-3">
                      <select
                        name="withdraw_status_filter"
                        onChange={(e) => {
                          setvalueof(e.target.value);
                        }}
                        className="custom-select min-w-120 withdraw-status-filter"
                      >
                        <option value="all">All</option>
                        <option value="1">Paid</option>
                        <option value="2">Unpaid</option>
                        {/* <option value="0">Pending</option> */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  {dataofwithdraw?.length > 0 ? (
                    <table
                      id="datatable"
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>SL</th>
                          <th>Amount</th>
                          <th>Name</th>
                          <th>Payment time</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Account</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataofwithdraw
                          ?.slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          )
                          .map((dataofwithdraw, index) =>
                            renderProductData(dataofwithdraw, index)
                          )}
                      </tbody>
                    </table>
                  ) : (
                    <div class="text-center p-4">
                      <img
                        class="mb-3 w-160"
                        src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
                        alt="Image Description"
                      />
                      <p class="mb-0 order-stats__subtitle">No product found</p>
                    </div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {dataofwithdraw?.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={dataofwithdraw?.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
                </div>
                <div className="table-responsive mt-4">
                  <div className="px-4 d-flex justify-content-center justify-content-md-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alltransication;





