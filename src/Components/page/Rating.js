import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Rating = () => {
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
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
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
              <div className>
                <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/deliveryman.png"
                    width={20}
                    alt=""
                  />
                  Will Smith
                </h2>
              </div>
              <div className="d-flex justify-content-end flex-wrap gap-10">
                <Link to="/deliverymanlist" className="btn btn--primary">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body my-3">
                <div className="row align-items-md-center gx-md-5">
                  <div className="col-md-auto mb-3 mb-md-0">
                    <div className="d-flex align-items-center">
                      <img
                        className="avatar avatar-xxl avatar-4by3 mr-4"
                        src="https://6valley.6amtech.com/storage/app/public/delivery-man/2022-11-20-6379f432228b8.png"
                        alt="Image description"
                      />
                      <div className="d-block">
                        <h4 className="display-2 text-dark mb-0">4.50</h4>
                        <p>
                          {" "}
                          Of 2 Reviews
                          <span className="badge badge-soft-dark badge-pill ml-1" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <ul className="list-unstyled list-unstyled-py-2 mb-0">
                      <li className="d-flex align-items-center font-size-sm">
                        <span className="mr-3">5 Star</span>
                        <div className="progress flex-grow-1">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ml-3">1</span>
                      </li>
                      <li className="d-flex align-items-center font-size-sm">
                        <span className="mr-3">4 Star</span>
                        <div className="progress flex-grow-1">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ml-3">1</span>
                      </li>
                      <li className="d-flex align-items-center font-size-sm">
                        <span className="mr-3">3 Star</span>
                        <div className="progress flex-grow-1">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ml-3">0</span>
                      </li>
                      <li className="d-flex align-items-center font-size-sm">
                        <span className="mr-3">2 Star</span>
                        <div className="progress flex-grow-1">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ml-3">0</span>
                      </li>
                      <li className="d-flex align-items-center font-size-sm">
                        <span className="mr-3">1 Star</span>
                        <div className="progress flex-grow-1">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ml-3">0</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-body mt-3">
              <div className="row border-bottom pb-3 align-items-center mb-20">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0" />
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form>
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
                        placeholder="Search by Order ID"
                        aria-label="Search orders"
                        defaultValue
                        required
                      />
                      <button type="submit" className="btn btn--primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <form>
                <div className="row gy-3 align-items-end">
                  <div className="col-md-3">
                    <div>
                      <label htmlFor="from" className="title-color d-flex">
                        From
                      </label>
                      <input
                        type="date"
                        name="from_date"
                        id="from_date"
                        defaultValue
                        className="form-control"
                        title="From date"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <label htmlFor="to_date" className="title-color d-flex">
                        To
                      </label>
                      <input
                        type="date"
                        name="to_date"
                        id="to_date"
                        defaultValue
                        className="form-control"
                        title="To date"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <select className="form-control" name="rating">
                        <option value selected>
                          --Select Rating--
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <button
                        id="filter"
                        type="submit"
                        className="btn btn--primary btn-block filter"
                      >
                        <i class="fa fa-bars" aria-hidden="true"></i> Filter
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="card mt-3">
              <div className="table-responsive datatable-custom">
                <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Order ID</th>
                      <th>Reviewer</th>
                      <th>Review</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/orderdetails" className="title-color">
                          100163
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/customerlist"
                          className="d-flex align-items-center"
                        >
                          <div className="avatar avatar-circle">
                            <img
                              className="avatar-img"
                              src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                              alt="image_description"
                            />
                          </div>
                          <div className="ml-3">
                            <span className="d-block h5 text-hover-primary mb-0">
                              Devid Jack{" "}
                            </span>
                            <span className="d-block font-size-sm text-body" />
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="text-wrap">
                          <div className="d-flex mb-2">
                            <label className="badge badge-soft-info">
                              <span>
                                4 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                              </span>
                            </label>
                          </div>
                          <div className="content p-0">Nice human .</div>
                        </div>
                      </td>
                      <td>20 Nov 2022 01:47:08</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/orderdetails" className="title-color">
                          100162
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/customerlist"
                          className="d-flex align-items-center"
                        >
                          <div className="avatar avatar-circle">
                            <img
                              className="avatar-img"
                              src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png"
                              alt="image_description"
                            />
                          </div>
                          <div className="ml-3">
                            <span className="d-block h5 text-hover-primary mb-0">
                              fatema subarna{" "}
                            </span>
                            <span className="d-block font-size-sm text-body" />
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="text-wrap">
                          <div className="d-flex mb-2">
                            <label className="badge badge-soft-info">
                              <span>
                                5 <i class="fa fa-star" aria-hidden="true"></i>{" "}
                              </span>
                            </label>
                          </div>
                          <div className="content p-0">
                            delivery service was good.
                          </div>
                        </div>
                      </td>
                      <td>20 Nov 2022 01:44:46</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-4">
                <div className="px-4 d-flex justify-content-lg-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
