import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Pagination from "react-js-pagination";
const Sallerreview = () => {
  const [details, setdetails] = useState();
  const [count, setcount] = useState();
  let sellerid = secureLocalStorage.getItem("sellerid");
  const [ReviewListfilter, setReviewListfilter] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;

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
        `${process.env.REACT_APP_API_KEY}admin/api/shopReviews_list`,
        sellerdata
      )
      .then((res) => {
        setcount(res?.data?.data?.length);
        setdetails(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setReviewListfilter(details);
  }, [details]);
  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = details.filter((item) =>
      item.product_name?.toLowerCase().includes(searchTerm)
    );
    setReviewListfilter(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderProductData = (review, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr>
        <td>{adjustedIndex}</td>
        <td>
          <span class="d-block font-size-sm text-body">
            <Link
              class="title-color hover-c1"
              to="/productsdetails"
              onClick={() => {
                secureLocalStorage.setItem("productid", review?.productId);
              }}
            >
              {review?.product_name.length > 20
                ? review?.product_name?.slice(0, 20) + "..."
                : review?.product_name}
            </Link>
          </span>
        </td>
        <td>
          <label class="mb-0 badge badge-soft-info">
            {review?.rating} <i class="fa fa-star" aria-hidden="true"></i>
          </label>
        </td>
        <td>
          <p class="text-wrap mb-1">{review?.raters}</p>

          <a
            href="https://6valley.6amtech.com/storage/app/public/review/2022-04-11-6253b5736eba2.png"
            data-lightbox="mygallery"
          >
            {/* <img class="p-1" width="60" height="60" src="https://6valley.6amtech.com/public/assets/back-end/img/placeholder/placeholder-1-1.png" alt=""/> */}
          </a>
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
            <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
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
                  <Link className="nav-link " to="/sallerproducts">
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
                  <Link className="nav-link active" to="/sallerreview">
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content container-fluid p-0">
            <div className="row gx-2 gx-lg-3">
              <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-md-6 col-lg-8 mb-3 mb-sm-0">
                        <h5 className="mb-0 d-flex gap-1 align-items-center">
                          Review data
                          <span className="badge badge-soft-dark radius-50 fz-12">
                            {count}
                          </span>
                        </h5>
                      </div>
                      <div className="col-sm-8 col-md-6 col-lg-4">
                        <form method="GET">
                          <div className="input-group input-group-merge input-group-custom">
                            <input
                              onChange={handleFilter}
                              id="datatableSearch_"
                              type="search"
                              name="search"
                              className="form-control"
                              placeholder="Search by product name"
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
                    {ReviewListfilter?.length > 0 ? (
                      <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                        <thead className="thead-light thead-50 text-capitalize">
                          <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Rating</th>
                            <th>Raters</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ReviewListfilter.slice(
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
                        <p class="mb-0 order-stats__subtitle">
                          No review found
                        </p>
                      </div>
                      //   <p className="text-center mt-3 mb-3">No data found.</p>
                    )}
                    <div className="d-flex justify-content-center mt-4">
                      {ReviewListfilter?.length > itemsPerPage && (
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={itemsPerPage}
                          totalItemsCount={ReviewListfilter?.length}
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

export default Sallerreview;
