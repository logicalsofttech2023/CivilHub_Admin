import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Deliverywithdrawreview = () => {
  const [dataofwithdraw, setdataofwithdraw] = useState([]);
  const [paymentstatus, setpaymentstatus] = useState();
  const [note, setnote] = useState();
  let venderId = secureLocalStorage.getItem("venderIds");
  let withdrawid = secureLocalStorage.getItem("withdrawids");

  useEffect(() => {
    getwithd();
  }, [0]);
  const getwithd = () => {
    const data = {
      withdrawId: withdrawid,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/driverWithdraw_requestDetils`,
        data
      )
      .then((res) => {
        setdataofwithdraw(res.data.data);
      })
      .catch((error) => {});
  };
  const sendrequest = (e) => {
    e.preventDefault();
    const data = {
      driverId: venderId,
      WithdrawId: withdrawid,
      status: paymentstatus,
      notes: note,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}admin/api/settleWithdraw_driver`, data)
      .then((res) => {
      
        getwithd();
        toast.success(res.data.message);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Invalid Data Entered by you.");
        }
      });
  };

  return (
    <div>
      <Toaster />
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
              Withdraw
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-4">
                    <h3 className="text-capitalize">
                      Deliveryman withdraw information
                    </h3>
                    <i class="fa fa-credit-card fz-30" aria-hidden="true"></i>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-2 mb-md-0">
                      <div className="flex-start flex-wrap">
                        <div>
                          <h5 className="text-capitalize">Amount: </h5>
                        </div>
                        <div className="mx-1">
                          <h5>${dataofwithdraw[0]?.amount}</h5>
                        </div>
                      </div>
                      <div className="flex-start flex-wrap">
                        <div>
                          <h5>Request time: </h5>
                        </div>
                        <div className="mx-1">
                          {dataofwithdraw[0]?.createdAt.slice(0, 10)}{" "}
                          {dataofwithdraw[0]?.createdAt.slice(11, 19)}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <div className="flex-start">
                        <div className="title-color">
                          Note: Please Avvept my transication
                        </div>
                        <div className="mx-1" />
                      </div>
                    </div>
                    {dataofwithdraw[0]?.status == "0" ? (
                      <div class="col-md-2">
                        <button
                          type="button"
                          class="btn btn-primary float-end"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Proceed &nbsp;
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    ) : dataofwithdraw[0]?.status == "1" ? (
                      <div class="col-md-2">
                        <button type="button" class="btn btn-success float-end">
                          Confirm
                        </button>
                      </div>
                    ) : (
                      <div className="col-md-2">
                        <div className="text-center float-end">
                          <label className="btn btn-danger  p-2 rounded-bottom">
                            Denied
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>






















                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 mb-3">
              <div className="card h-100">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-3 mb-4">
                    <h3 className="h3 mb-0">Deliveryman info </h3>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Name :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>
                        {dataofwithdraw[0]?.driverId?.fname}{" "}
                        {dataofwithdraw[0]?.venderId?.lname}
                      </h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Email :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.driverId?.email}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Phone :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.driverId?.phone}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
              




























              
            </div>
            {/* <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-3 mb-4">
                    <h3 className="h3 mb-0">My bank info </h3>
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  <div className="mt-2">
                    <div className="flex-start">
                      <div>
                        <h4>Bank name : </h4>
                      </div>
                      <div className="mx-1">
                        <h4>{dataofwithdraw[0]?.driverId?.bank_name}</h4>
                      </div>
                    </div>
                    
                    <div className="flex-start">
                      <div>
                        <h6>Holder name : </h6>
                      </div>
                      <div className="mx-1">
                        <h6>{dataofwithdraw[0]?.venderId?.bankAccount_name}</h6>
                      </div>
                    </div>
                    <div className="flex-start">
                      <div>
                        <h6>Account no : </h6>
                      </div>
                      <div className="mx-1">
                        <h6>{dataofwithdraw[0]?.venderId?.acc_number}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-3 mb-4">
                    <h3 className="h3 mb-0">Shop info </h3>
                    <i class="fa fa-stop-circle" aria-hidden="true"></i>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Vendor : </h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.venderId?.shop_name}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Phone : </h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.venderId?.mobile_number}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Address : </h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.venderId?.shop_address}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Withdraw request process
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <form onSubmit={sendrequest}>
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
                      autoComplete="off"
                    />{" "}
                    <div className="modal-body">
                      <div className="form-group">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Request:
                        </label>
                        <select
                          onChange={(e) => {
                            setpaymentstatus(e.target.value);
                          }}
                          required
                          value={paymentstatus}
                          name="approved"
                          className="custom-select"
                        >
                          <option value="" disabled selected>
                            Select Status
                          </option>
                          <option value={1}>Approve</option>
                          <option value={2}>Deny</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Note about transaction or request:
                        </label>
                        <textarea
                          onChange={(e) => {
                            setnote(e.target.value);
                          }}
                          className="form-control"
                          name="note"
                          id="message-text"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn--primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverywithdrawreview;
