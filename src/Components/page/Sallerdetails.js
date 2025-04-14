import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

const Sallerdetails = () => {
  const [details, setdetails] = useState();
  const [walletdetails, setwalletdetails] = useState();
  let sellerid = secureLocalStorage.getItem("sellerid");

  let token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    sellerdetails();
  }, [0]);

  const sellerdetails = () => {
    const sellerdata = {
      sallerId: sellerid,
    };

    // const options = {
    //     headers :{
    //         token:token
    //     }
    // };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/sallerDetails`,
        sellerdata
      )
      .then((res) => {
        setdetails(res.data.data);
      })
      .catch((error) => {});
  };




  useEffect(() => {
    sellerwallet();
  }, [0]);

  const sellerwallet = () => {
    const sellerdata = {
      vendorId: sellerid,
    };

    
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/vendorWallet_details`,
        sellerdata
      )
      .then((res) => {
        setwalletdetails(res.data.data);
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
          <div className="page-header border-0 mb-4">
            <div className="js-nav-scroller hs-nav-scroller-horizontal">
              <ul className="nav nav-tabs flex-wrap page-header-tabs">
                <li className="nav-item">
                  <Link className="nav-link active" to="/sallerdetails">
                    Shop Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sallerorder">
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

          <div className="card mt-3 mb-5">
            <div className="card-body">
              <div className="d-flex flex-wrap gap-3 justify-content-between">
                <div className="media flex-column flex-sm-row gap-3">
                  {details?.shop_logo === null ? (
                    <img
                      className="avatar avatar-170 rounded-0"
                      src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png"
                      alt="image"
                    />
                  ) : (
                    <img
                      className="avatar avatar-170 rounded-0"
                      src={
                        `${process.env.REACT_APP_API_KEY}uploads/` +
                        details?.shop_logo
                      }
                      alt="image"
                    />
                  )}
                  <div className="media-body">
                    <div className="d-block">
                      <h2 className="mb-2 pb-1">{details?.firstName}</h2>
                      <div className="d-flex gap-3 flex-wrap mb-3 lh-1">
                        <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <span>{details?.average_ratings}</span>
                          <div className="review-details-popup">
                            <h6 className="mb-2">Rating</h6>
                            <div className>
                              <ul className="list-unstyled list-unstyled-py-2 mb-0">
                                <li className="d-flex align-items-center font-size-sm">
                                  <span className="mr-3">5 Star</span>
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
                                  <span className="mr-3">4 Star</span>
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
                        <span className="border-left" />
                        <a href="#" className="text-dark">
                          {details?.raters_count} Ratings
                        </a>
                        <span className="border-left" />
                        <a href="#" className="text-dark">
                          {details?.view_count} Reviews
                        </a>
                      </div>
                      {/* <a href="#" className="btn btn-outline--primary px-4">
                        {" "}
                        View live
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-sm-end flex-wrap gap-2 mb-3">
                  <form className="d-inline-block">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="syfKyDoYJ3mCIdT6gR7YRHkRYnQRfWf2KcUadmlv"
                    />{" "}
                    <input type="hidden" name="id" defaultValue={1} />
                    <input
                      type="hidden"
                      name="status"
                      defaultValue="suspended"
                    />
                    <button type="submit" className="btn btn-danger px-5">
                      Suspend this Vendor
                    </button>
                  </form>
                </div>
              </div>

              <hr />
              <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
                <div className="border p-3 w-170">
                  <div className="d-flex flex-column mb-1">
                    <h6 className="font-weight-normal">Total products :</h6>
                    <h3 className="text-primary fs-18">
                      {details?.productCount}
                    </h3>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className="font-weight-normal">Total orders :</h6>
                    <h3 className="text-primary fs-18">
                      {details?.sales_count}
                    </h3>
                  </div>
                </div>
                <div className="row gy-3 flex-grow-1 w-100">
                  <div className="col-sm-6 col-xxl-3">
                    <h4 className="mb-3 text-capitalize">Store information</h4>
                    <div className="pair-list">
                      <div>
                        <span className="key text-nowrap">Store name</span>
                        <span>:</span>
                        <span className="value ">{details?.shop_name}</span>
                      </div>
                      <div>
                        <span className="key">Phone</span>
                        <span>:</span>
                        <span className="value">{details?.mobile_number}</span>
                      </div>

                      <div>
                        <span className="key">Open Time</span>
                        <span>:</span>
                        <span className="value">
                          {details?.workHours?.map((data) => {
                            return (
                              <div>
                                {data?.day_name}{" "}
                                {data?.open_time ? (
                                  <>{data?.open_time}</>
                                ) : (
                                  <> - CLosed</>
                                )}{" "}
                                {data?.close_time}
                              </div>
                            );
                          })}

                          {/* {details?.open_time} to {details?.close_time} */}
                        </span>
                      </div>
                      <div>
                        <span className="key">Type of business</span>
                        <span>:</span>
                        <span className="value">{details?.typeOfbusiness}</span>
                      </div>

                      <div>
                        <span className="key">Address</span>
                        <span>:</span>
                        <span className="value">
                          {details?.city} {details?.country}{" "}
                          {details?.shop_address}
                        </span>
                      </div>
                      <div>
                        <span className="key">Status</span>
                        <span>:</span>
                        <span className="value">
                          {details?.active_status == 0 ? (
                            <span className="badge badge-info">Active</span>
                          ) : (
                            <span className="badge badge-danger">Deactive</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xxl-3">
                    <h4 className="mb-3 text-capitalize">Vendor information</h4>
                    <div className="pair-list">
                      <div>
                        <span className="key">Name</span>
                        <span>:</span>
                        <span className="value">{details?.firstName}</span>
                      </div>
                      <div>
                        <span className="key">Email</span>
                        <span>:</span>
                        <span className="value">{details?.email}</span>
                      </div>
                      <div>
                        <span className="key">Phone</span>
                        <span>:</span>
                        <span className="value">{details?.mobile_number}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <div className="bg-light p-3 border border-primary-light rounded">
                      <h4 className="mb-3 text-capitalize">Bank information</h4>
                      <div className="d-flex gap-5">
                        <div className="pair-list">
                          <div>
                            <span className="key text-nowrap">Bank name</span>
                            <span className="px-2">:</span>
                            <span className="value ">{details?.bank_name}</span>
                          </div>
                          <div>
                            <span className="key text-nowrap">Swift code</span>
                            <span className="px-2"> : </span>
                            <span className="value">{details?.swift_code}</span>
                          </div>
                        </div>
                        <div className="pair-list">
                          <div>
                            <span className="key text-nowrap">Holder name</span>
                            <span className="px-2">:</span>
                            <span className="value">
                              {details?.bankAccount_name}
                            </span>
                          </div>
                          <div>
                            <span className="key text-nowrap">A/C No</span>
                            <span className="px-2">:</span>
                            <span className="value">{details?.acc_number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3 mb-5">
            <div className="card-body">
              {/* <div className="row justify-content-between align-items-center g-2 mb-3">
                <div className="col-sm-6">
                  <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                    <img
                      width={20}
                      className="mb-1"
                      src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png"
                      alt
                    />
                    Vendor Wallet
                  </h4>
                </div>
              </div> */}
              <div className="row g-2" id="order_stats">
                <div className="col-lg-12">
                  <div className="row g-2">
                    {details?.vender_profile === null ? null : (
                      <div className="col-md-2">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize ">
                                Vendor Profile
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.vender_profile
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {details?.shop_logo === null ? null : (
                      <div className="col-md-2">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize mb-3">
                                Store Logo
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.shop_logo
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}{" "}
                    {details?.upload_frontId === null ? null : (
                      <div className="col-md-2 col-sm-12">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize mb-3">
                                Front id
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.upload_frontId
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {details?.shop_licence.endsWith(".pdf") ? (
                      <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize ">
                                Shop Licence
                              </h6>

                              <div>
                                <embed
                                  width={200}
                                  height={130}
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.shop_licence
                                  }
                                  type="application/pdf"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="col-md-2 col-sm-12">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize ">
                                Shop Licence
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.shop_licence
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {details?.upload_backsideId === null ? null : (
                      <div className="col-md-2 col-sm-12">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize mb-3">
                                Back iD
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.upload_backsideId
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {details?.vender_profile === null ? null : (
                      <div className="col-md-2 col-sm-12">
                        <div className="card card-body h-100 justify-content-center">
                          <div className="d-flex gap-2 justify-content-between align-items-center">
                            <div className="d-flex flex-column align-items-start">
                              <h6 className="mb-1 text-capitalize">
                                Vendor Profile
                              </h6>

                              <div>
                                <img style={{borderRadius:'5px'}}
                                  width={200}
                                  height={130}
                                  className="mb-2"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    details?.vender_profile
                                  }
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3 mb-5">
            <div className="card-body">
              <div className="row justify-content-between align-items-center g-2 mb-3">
                <div className="col-sm-6">
                  <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                    <img
                      width={20}
                      className="mb-1"
                      src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png"
                      alt
                    />
                    Vendor Wallet
                  </h4>
                </div>
              </div>
              <div className="row g-2" id="order_stats">
                <div className="col-lg-4">
                  <div className="card h-100 d-flex justify-content-center align-items-center">
                    <div className="card-body d-flex flex-column gap-10 align-items-center justify-content-center">
                      <img
                        width={48}
                        className="mb-2"
                        src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"
                        alt
                      />
                      <h3 className="for-card-count mb-0 fz-24">${walletdetails?.withdrawable_amount}</h3>
                      <div className="font-weight-bold text-capitalize mb-30">
                        Withdrawable balance
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">${walletdetails?.pendingwithdraw}</h3>
                            <div className="text-capitalize mb-0">
                              Pending Withdraw
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              className="mb-2"
                              src="https://6valley.6amtech.com/public/assets/back-end/img/pw.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">${walletdetails?.givenCommission}</h3>
                            <div className="text-capitalize mb-0">
                              Total Commission given
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/tcg.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">${walletdetails?.allreadywithdraw_amount}</h3>
                            <div className="text-capitalize mb-0">
                              Already Withdrawn
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/aw.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">${walletdetails?.earn_delivery_charge}</h3>
                            <div className="text-capitalize mb-0">
                              Total delivery charge earned
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/tdce.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">$000000</h3>
                            <div className="text-capitalize mb-0">
                              Total tax given
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/ttg.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-6">
                      <div className="card card-body h-100 justify-content-center">
                        <div className="d-flex gap-2 justify-content-between align-items-center">
                          <div className="d-flex flex-column align-items-start">
                            <h3 className="mb-1 fz-24">${walletdetails?.collect_cash}</h3>
                            <div className="text-capitalize mb-0">
                              Collected cash
                            </div>
                          </div>
                          <div>
                            <img
                              width={40}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/cc.png"
                              alt
                            />
                          </div>
                        </div>
                      </div>
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

export default Sallerdetails;
