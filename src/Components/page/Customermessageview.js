import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Customermessageview = () => {
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
         <div className="mt-3 mb-3">
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/earning_statictics.png" alt="" />
            Message View
          </h2>
        </div>
        <div className="row mb-5">
        <div className="col-lg-6">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="mb-0 text-capitalize d-flex text-capitalize">
              <i class="fa fa-user" aria-hidden="true"></i>&nbsp;User details
              </h5>
              <form >
                <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <div className="form-group d--none">
                  <div className="row">
                    <div className="col-md-10">
                      <h4>Feedback</h4>
                      <textarea className="form-control" name="feedback" placeholder="Please send a Feedback" defaultValue={"                                                0\n                                            "} />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-info" disabled>
                  <i class="fa fa-check-circle" aria-hidden="true"></i> Already check
                  </button>
                </div>
              </form>
            </div>
            <div className="card-body">
              <div className="pl-2 d-flex gap-2 align-items-center mb-3">
                <strong className>Some Information</strong>
                <label className="badge badge-soft-info mb-0">Seen</label>
              </div>
              <table className="table table-user-information table-borderless mb-0">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Jack</td>
                  </tr>
                  <tr>
                    <td>Mobile no:</td>
                    <td>08897667856</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>customer@customer.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header justify-content-center">
              <h5 className="mb-0 text-capitalize">
                Message Log
              </h5>
            </div>
            <div className="card-body d-flex flex-column gap-2">
              <div className="mb-3">
                <h5 className="px-2 py-1 badge-soft-info rounded mb-3 d-flex">Jack</h5>
                <div className="flex-start mb-1">
                  <strong className="mr-1">Subject: </strong>
                  <div><strong>Some Information</strong></div>
                </div>
                <div className="flex-start">
                  <strong className="mr-1">Message: </strong>
                  <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                </div>
              </div>
              <div>
                <h5 className="px-2 py-1 badge-soft-warning rounded mb-3 d-flex">Admin</h5>
                <label className="badge badge-danger">No reply.</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body mt-3 mx-lg-4">
              <div className="row " style={{textAlign: 'left'}}>
                <div className="col-12">
                  <center>
                    <h3>Send Mail</h3>
                    <label className="badge-soft-danger px-1">Configure your mail setup first.</label>
                  </center>
                  <form action="https://6valley.6amtech.com/admin/contact/send-mail/7" method="post">
                    <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <div className="form-group mt-2">
                      <div className="row">
                        <div className="col-md-12">
                          <label className="title-color">Subject</label>
                          <input className="form-control" name="subject" required />
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="title-color">Mail Body</label>
                          <textarea className="form-control h-100" name="mail_body" placeholder="Please send a Feedback" required defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end pt-3 mt-5">
                      <button type="submit" className="btn btn--primary px-4">
                        Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
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
        </div>
      </div>
   
  );
};

export default Customermessageview;















