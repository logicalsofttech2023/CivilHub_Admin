import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Pagination from "react-js-pagination";
const Customerreview = () => {


  const [ratinglist, setratinglist] = useState([]);
  const [RatingListfilter, setRatingListfilter] = useState([]);
  const [count, setcount] = useState();

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 2;
  let token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    getratingglist();
  }, [0]);
  let getratingglist = () => {
    const options = {
      headers: {
        token: token,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/userInnt_ratingList`, options)
      .then((res) => {
        setcount(res?.data?.data?.length);
        setratinglist(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = ratinglist?.filter((item) =>
      item?.userId?.first_name?.toLowerCase().includes(searchTerm)
    );
    setRatingListfilter(result);
    setActivePage(1);
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    setRatingListfilter(ratinglist);
  }, [ratinglist]);



  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };


  const renderProductData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr key={index}>
      <td>{adjustedIndex}</td>
      
      <td>
        <Link
            to="/Customerdetails"
            onClick={() => {
              secureLocalStorage.setItem("customerid", data?.userId?._id);
            }}
          
          className="title-color hover-c1"
        >
          {data?.userId?.first_name}
        </Link>
      </td>
      <td>
        <label className="badge badge-soft-info mb-0">
          <span className="fz-12 d-flex align-items-center gap-1">
            {data?.rating}
            <i class="fa fa-star" aria-hidden="true"></i>
          </span>
        </label>
      </td>
      <td>
        <div className="gap-1">

        <div style={{ whiteSpace: 'pre-wrap' }}>
        {data?.comment?.length > 20 ? 
    data?.comment?.slice(0, 30) + "\n" + data?.comment?.slice(20) : 
    data?.comment}


  
</div>
          
          <br />
        </div>
      </td>
      <td>{data?.createdAt?.slice(0,10)}</td>
     
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
              <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/customer_review.png"
                  alt=""
                />
                Customer reviews
              </h2> 
            </div>
            <div className="card card-body">
              <div className="row border-bottom pb-3 align-items-center mb-20">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                  <h5 className="text-capitalize d-flex gap-2 align-items-center">
                    Review Data
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      {count}
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form
                    
                  >
                    <div className="input-group input-group-merge input-group-custom">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input
                        id="datatableSearch_"
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by Customer Name"
                        aria-label="Search orders"
                        onChange={handleFilter}
                        required
                      />
                      <button type="submit" className="btn btn--primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <form
                
              >
                <div className="row gy-3 align-items-end">
                  <div className="col-md-4">
                    <label htmlFor="name" className="title-color">
                      Products
                    </label>
                    <div className="dropdown select-product-search w-100">
                      <input
                        type="text"
                        className="product_id"
                        name="product_id"
                        defaultValue
                        hidden
                      />
                      <button
                        className="form-control text-start dropdown-toggle text-truncate select-product-button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select Product
                      </button>
                      <div className="dropdown-menu w-100 px-2">
                        <div className="search-form mb-3">
                          <button type="button" className="btn">
                            <i className="tio-search" />
                          </button>
                          <input
                            type="text"
                            className="js-form-search form-control search-bar-input search-product"
                            placeholder="Search menu..."
                          />
                        </div>
                        <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={1}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                1
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Women's long-sleeve lightweight french terry
                                fleece quarter-zip top
                              </h6>
                              <div className="fz-10">
                                Category : Women's fashion
                              </div>
                              <div className="fz-10">Brand : i Bird</div>
                              <div className="fz-10">Shop : 6valley CMS</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={3}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                3
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Ladies Winter Long Sleeve Sweater
                              </h6>
                              <div className="fz-10">
                                Category : Women's fashion
                              </div>
                              <div className="fz-10">Brand : i Bird</div>
                              <div className="fz-10">Shop : Deluxe Online</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={4}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64882d3231ad8.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                4
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Crossbody Shoulder Bag Soft Leather Bag Female
                                Fashion
                              </h6>
                              <div className="fz-10">
                                Category : Women's fashion
                              </div>
                              <div className="fz-10">Brand : i Bird</div>
                              <div className="fz-10">Shop : 6valley CMS</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={5}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-6263633d3b0a6.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                5
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Exclusive &amp; Fashionable Suit For Men
                              </h6>
                              <div className="fz-10">
                                Category : Men's fashion
                              </div>
                              <div className="fz-10">Brand : JK</div>
                              <div className="fz-10">Shop : Deluxe Online</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={6}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648853f76043c.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                6
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Real Diamond Ring Multi Stone Solid 18K Gold
                                Certified WR2133
                              </h6>
                              <div className="fz-10">
                                Category : Jewelry &amp; Watches
                              </div>
                              <div className="fz-10">Brand : Fashion</div>
                              <div className="fz-10">Shop : Deluxe Online</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={7}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-13-62566e1a35a9c.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                7
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Progress lighting P4009-10 5-light chandelier,
                                polished brass
                              </h6>
                              <div className="fz-10">
                                Category : Computer, Office &amp; Security
                              </div>
                              <div className="fz-10">Brand : JK</div>
                              <div className="fz-10">Shop : 6valley CMS</div>
                            </div>
                          </div>
                          <div
                            className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
                            data-id={8}
                          >
                            <img
                              className="avatar avatar-xl border"
                              width={75}
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648830d2af5b5.png"
                              alt=""
                            />
                            <div className="media-body d-flex flex-column gap-1">
                              <h6 className="product-id" hidden>
                                8
                              </h6>
                              <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
                                Girls Beautiful White &amp; Purple Sneakers
                              </h6>
                              <div className="fz-10">
                                Category : Computer, Office &amp; Security
                              </div>
                              <div className="fz-10">Brand : i Bird</div>
                              <div className="fz-10">Shop : Wellness Fair</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                      data-placeholder="
                                                                                    All customer
                                        "
                      className="get-customer-list-by-ajax-request form-control form-ellipsis set-customer-value select2-hidden-accessible"
                      data-select2-id={1}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="all" data-select2-id={3}>
                        All customer
                      </option>
                      <option value disabled data-select2-id={4}>
                        Select your option
                      </option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={2}
                      style={{ width: "277.622px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-438e-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-438e-container"
                            role="textbox"
                            aria-readonly="true"
                          >
                            <span className="select2-selection__placeholder">
                              All customer
                            </span>
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <label htmlFor="status" className="title-color d-flex">
                        Choose Status
                      </label>
                      <select className="form-control" name="status">
                        <option value selected>
                          {" "}
                          ---Select status---{" "}
                        </option>
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <label htmlFor="from" className="title-color d-flex">
                        From
                      </label>
                      <input
                        type="date"
                        name="from"
                        id="start-date-time"
                        defaultValue
                        className="form-control"
                        title="From date"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <label htmlFor="to" className="title-color d-flex">
                        To
                      </label>
                      <input
                        type="date"
                        name="to"
                        id="end-date-time"
                        defaultValue
                        className="form-control"
                        title="To date"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <button
                        
                        type="submit"
                        className="btn btn--primary btn-block filter"
                      >
                        <i class="fa fa-bars" aria-hidden="true"></i> Filter
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline--primary text-nowrap btn-block"
                        data-toggle="dropdown"
                      >
                        <i class="fa fa-download" aria-hidden="true"></i> Export
                        
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://6valley.6amtech.com/admin/reviews/export"
                          >
                            <img
                              width={14}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                              alt=""
                            />
                            Excel
                          </a>
                        </li> 
                      </ul>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
            <div className="card mt-20">
            <div className="table-responsive">
                    {RatingListfilter?.length > 0 ? (
                      <table
                        style={{ textAlign: "left" }}
                        className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                      >
                        <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                      <th>SL</th>
                     
                      <th>Customer</th>
                      <th>Rating</th>
                      <th>Review</th>
                      <th>Date</th>

                    </tr>
                        </thead>
                        <tbody>
                          {RatingListfilter.slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          ).map((productlist, index) =>
                            renderProductData(productlist, index)
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No review found</p>
</div>
                    )}
                    <div className="d-flex justify-content-center mt-4">
                      {RatingListfilter.length > itemsPerPage && (
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={itemsPerPage}
                          totalItemsCount={RatingListfilter.length}
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
    
  );
};

export default Customerreview;
