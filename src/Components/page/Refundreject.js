import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";

import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import Pagination from "react-js-pagination";
import QRCode from "react-qr-code";
const Refundreject = () => {
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
      status: "3",
    };
    const options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/returnOrderList`,
        data,
        options
      )
      .then((res) => {
        setcount(res?.data?.data?.length);
        setproductlist(res?.data?.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    setProductListfilter(productlist);
  }, [productlist]);
  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = productlist.filter((item) =>
      item?.product_name?.toLowerCase().includes(searchTerm)
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
         <a
           href="#"
           className="title-color hover-c1"
         >
           {data?.userInfo?.orderId}
         </a>
       </td>
       <td>
         <div className="d-flex flex-wrap gap-2">
         <Link to="/productsdetails"
            onClick={() => {
              secureLocalStorage.setItem("productid", data?.productId);
            }}>
             <img
               
               src={data?.image ? `${process.env.REACT_APP_API_KEY}uploads/${data?.image}` :  "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488413bebea3.png" }
               className="avatar border"
               alt=""
             />
           </Link>
           <div className="d-flex flex-column gap-1">
           <Link to="/productsdetails"
            onClick={() => {
              secureLocalStorage.setItem("productid", data?.productId);
            }}
               className="title-color font-weight-bold hover-c1"
             >
             
               {data?.product_name.length > 20
                ? data?.product_name.slice(0, 20) + "..."
                : data?.product_name}
             </Link>
             <span className="fz-12">QTY : {data?.qty}</span>
           </div>
         </div>
       </td>
       <td>
         <div className="d-flex flex-column gap-1">
           <a
             href="#"
             className="title-color font-weight-bold hover-c1"
           >
             {data?.userInfo?.userf}
           </a>
           <a
             href="#"
             className="title-color hover-c1 fz-12"
           >
             {data?.userInfo?.phone}
           </a>
         </div>
       </td>
       <td>
         <div className="d-flex flex-column gap-1 text-end">
           <div>${data?.total}</div>
         </div>
       </td>
       <td>
         <div className="d-inline-flex flex-column gap-1">
         <span className="badge badge-soft-- btn btn-danger">
                              Rejected
                            </span>
         </div>
       </td>
       <td>
         <div className="d-flex justify-content-center">
           <Link onClick={() => {
                  secureLocalStorage.setItem("refundid", data?.userInfo?.returnId);
                 }}
             className="btn btn-outline--primary btn-sm"
             title="View"
             to="/refundstatus"
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
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3 mt-3 pl-2">
              <h2 className="h1 mb-0">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
                  className="mb-1 mr-1"
                  alt
                />
                <span className="page-header-title">Rejected Refund Requests</span> 
              </h2>
              <span className="badge badge-soft-dark radius-50 fz-14">
                {count}
              </span>
            </div>
          
            <div className="row mt-20 mb-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="px-3 py-4 light-bg">
                    <div className="row g-2 align-items-center flex-grow-1">
                      <div className="col-md-4">
                        <h5 className="text-capitalize d-flex gap-1">
                        Reject
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
                        <th>SL</th>
                        <th>Order id </th>
                        <th>Product info</th>
                        <th>Customer info</th>
                        <th className="text-end">Total amount</th>
                        <th>Refund status</th>
                        <th className="text-center">Action</th>
                      </tr>
                        </thead>
                        <tbody>
                          {ProductListfilter.slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          ).map((data, index) =>
                            renderProductData(data, index)
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
                        <p class="mb-0 order-stats__subtitle">No details found</p>
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
    </div>
  );
};

export default Refundreject;











