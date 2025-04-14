import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../sidebar.css";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
const Refundstatus = () => {
   const [details,setdetails] = useState();
   
  let returnidd = secureLocalStorage.getItem("refundid")
  useEffect(()=>{
    getdetails();
  },[0])
  let getdetails = ()=>{
    const data = {
      returnId:returnidd
    }
    axios.post(`${process.env.REACT_APP_API_KEY}admin/api/returnOrderDetails`,data).then((res)=>{
      setdetails(res.data.data)
    }).catch((error)=>{

    })
  }
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
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3 mt-3 pl-3">
            <h2 className="h1 mb-0 d-flex gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
                alt
              />
              Refund details 
            </h2>
          </div>
          {details?.map((details)=>{
            return (
<div className="row gy-2">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row gy-1 justify-content-between align-items-center flex-grow-1">
                <div className="col-md-4">
                  <h5 className="mb-0">Refund id : {details?.userInfo?.orderId}</h5>
                </div>
                <h5 className="col-md-4 text-capitalize mb-0">
                  Refund status:
                  {details?.userInfo?.return_status == "0" ? <span className="text-primary"> Pending</span> : details?.userInfo?.return_status == "1" ? <span className="text-success"> Approve</span> : details?.userInfo?.return_status == "2" ? <span className="text-success"> Refunded</span> : <span className="text-danger"> Rejected</span> }

                </h5>
                <div className="col-md-4 d-flex justify-content-md-end">
                  <button className="btn btn--primary" data-toggle="modal" data-target="#refund-status">Change refund status</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row gy-2">
                <div className="col-sm-4 col-md-4 col-lg-2">
                  <div>
                    <img src={details?.image ? `${process.env.REACT_APP_API_KEY}uploads/`+ details?.image :  "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488413bebea3.png" } alt="VR Collection" />
                  </div>
                </div>
                <div className="col-sm-8 col-md-4 col-lg-6">
                  <h4>
                    <a href="#">
                      {details?.product_name}
                    </a>
                  </h4>
                  <div className="mb-1">QTY : {details?.qty}</div>
                  <div className="mb-1">Price : ${details?.total}</div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="row justify-content-md-end mb-3">
                    <div className="col-md-10 col-lg-10">
                      <dl className="row text-md-right">
                        <dt className="col-md-7">Total price : </dt>
                        <dd className="col-md-5 ">
                          <strong>${details?.total}</strong>
                        </dd>
                        <dt className="col-md-7">Total discount :</dt>
                        <dd className="col-md-5 ">
                          <strong>${details?.discount}</strong>
                        </dd>
                        <dt className="col-md-7">Total tax :</dt>
                        <dd className="col-md-5">
                          <strong>${details?.tax}</strong>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-wrap flex-column flex-md-row gap-10 justify-content-between">
                <span className="title-color">Subtotal : ${details?.subtotal}</span>
                <span className="title-color">Coupon discount : ${details?.discount}</span>
                <span className="title-color">Total refund amount : ${details?.total}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Additional information</h4>
            </div>
            <div className="card-body">
              <div className="row gy-2">
                <div className="col-sm-6 col-md-4 d-flex flex-column gap-10">
                  <h5>Seller info : </h5>
                  <div>Seller name :
                    <a className="text-dark" href="#">
                      {details?.userInfo?.vendeorfname}
                    </a>
                  </div>
                  <div>Seller email : <a className="text-dark" href="mailto:test.intt@gmail.com">{details?.userInfo?.sellerEmail}</a>
                  </div>
                  <div>Seller phone :
                    <a className="text-dark" href="tel:01633333339">{details?.userInfo?.phone}
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex flex-column gap-10">
                  <h5>Deliveryman info : </h5>
                  <div>Deliveryman name : Delivery Man</div>
                  <div>Deliveryman email : inttdeliveryman@intt.com</div>
                  <div>Deliveryman phone : 0011223344</div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex flex-column gap-10">
                  <div>Payment method : Cash on delivery</div>
                  <div className="d-flex flex-wrap gap-2">Order details : <a className="btn btn--primary btn-sm" href="#">Click here</a></div>
                  <div className="d-flex flex-wrap gap-2">
                    Customer details :
                    <a className="btn btn--primary btn-sm" href="#">
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Refund status changed log</h4>
            </div>
            <div className="table-responsive datatable-custom">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100" style={{textAlign: 'left'}}>
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>
                      SL
                    </th>
                    <th>Changed by </th>
                    <th>Status</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                      Seller
                    </td>
                    <td>
                      Approved
                    </td>
                    <td className="text-break">
                      <div className="word-break max-w-360px">
                        approved
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2
                    </td>
                    <td>
                      Admin
                    </td>
                    <td>
                      Rejected
                    </td>
                    <td className="text-break">
                      <div className="word-break max-w-360px">
                        rejected
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Refund reason</h4>
            </div>
            <div className="card-body">
              <div className="col-12">
                <p>
                {details?.userInfo?.reason}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Attachment</h4>
            </div>
            <div className="row">
              <div className="card-body">
                <div className="gallery grid-gallery">
                  <a href="#" data-lightbox="mygallery">
                    <img src="https://6valley.6amtech.com/storage/app/public/refund/2022-10-12-63467dabdcb4d.png" alt="" />
                  </a>
                  <a href="#" data-lightbox="mygallery">
                    <img src="https://6valley.6amtech.com/storage/app/public/refund/2022-10-12-63467dabdd70d.png" alt="" />
                  </a>
                  <a href="#" data-lightbox="mygallery">
                    <img src="https://6valley.6amtech.com/storage/app/public/refund/2022-10-12-63467dabdd7ca.png" alt="" />
                  </a>
                  <a href="#" data-lightbox="mygallery">
                    <img src="https://6valley.6amtech.com/storage/app/public/refund/2022-10-12-63467dabdd8a7.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            )
          })}
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Refundstatus;
