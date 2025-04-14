import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

const Earningstatement = () => {
  const [details, setdetails] = useState();
  
  let driverid = secureLocalStorage.getItem("driveridd")
 useEffect(()=>{
  getdetails();
 },[0])
 const getdetails = ()=>{
  const data = {
    driverId:driverid
  }
  axios.post(`${process.env.REACT_APP_API_KEY}admin/api/driverDetails`,data).then((res)=>{
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
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="" />
            Earning statement
          </h2>
        </div>
        <div className="inline-page-menu my-4">
          <ul className="list-unstyled">
            <li className=""><a href="#">Overview</a></li>
            <li className><a href="#">Order History Log</a></li>
            <li className><a href="#">Earning</a></li>
          </ul>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="row justify-content-between align-items-center g-2 mb-3">
              <div className="col-sm-6">
                <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                  <img width={20} className="mb-1" src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png" alt="" />
                  Deliveryman Wallet
                </h4>
              </div>
            </div>
            <div className="row g-2" id="order_stats">
              <div className="col-lg-4">
                <div className="card h-100 d-flex justify-content-center align-items-center">
                  <div className="card-body d-flex flex-column gap-10 align-items-center justify-content-center">
                    <img width={48} src="https://6valley.6amtech.com/public/assets/back-end/img/cc.png" alt="" />
                    <h3 className="for-card-count mb-0 fz-24">$000000</h3>
                    <div className="font-weight-bold text-capitalize mb-30">
                      Cash in hand
                    </div>
                  </div>
                  <Link to='/cashcollected' className="btn btn--primary mb-4">Collect Cash</Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="card card-body h-100 justify-content-center py-5">
                      <div className="d-flex gap-2 justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="mb-1 fz-24">$000000</h3>
                          <div className="text-capitalize mb-0">Current balance</div>
                        </div>
                        <div>
                          <img width={40} src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-body h-100 justify-content-center py-5">
                      <div className="d-flex gap-2 justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="mb-1 fz-24">$000000</h3>
                          <div className="text-capitalize mb-0">Total withdrawn</div>
                        </div>
                        <div>
                          <img width={40} src="https://6valley.6amtech.com/public/assets/back-end/img/aw.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-body h-100 justify-content-center py-5">
                      <div className="d-flex gap-2 justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="mb-1 fz-24">$000000</h3>
                          <div className="text-capitalize mb-0">Pending withdraw</div>
                        </div>
                        <div>
                          <img width={40} className="mb-2" src="https://6valley.6amtech.com/public/assets/back-end/img/pw.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-body h-100 justify-content-center py-5">
                      <div className="d-flex gap-2 justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <h3 className="mb-1 fz-24">
                            $0.00
                          </h3>
                          <div className="text-capitalize mb-0">Withdrawable balance</div>
                        </div>
                        <div>
                          <img width={40} className="mb-2" src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {details?.map((data)=>{
            return(
        <div className="row mb-5">
          
<div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header text-capitalize">
                <h5 className="mb-0">Delivery Man Account</h5>
              </div>
              <div className="card-body">
                <div className="flex-start">
                  <div><h4>Status : </h4></div>
                   <div className="mx-1">
                  {data?.driver_status == 0 ? <h4><label className="badge badge-primary">Pending</label></h4> : 
                  data?.driver_status == 1 ? <h4><label className="badge badge-success"> Active</label></h4> :  <h4><label className="badge badge-danger"> Reject</label></h4>}
                    
                  </div> 
                </div>
                <div className="flex-start">
                  <div><h5 className="text-nowrap">Name : </h5></div>
                  <div className="mx-1"><h5>{data?.fname} {data?.lname}</h5></div>
                </div>
                <div className="flex-start">
                  <div><h5 className="text-nowrap">Email : </h5></div>
                  <div className="mx-1"><h5>{data?.email}</h5></div>
                </div>
                <div className="flex-start">
                  <div><h5 className="text-nowrap">Phone : </h5></div>
                  <div className="mx-1"><h5>{data?.phone}</h5></div>
                </div>
                
                <div className="flex-start">
                  <div><h5 className="text-nowrap">Date of Birth : </h5></div>
                  <div className="mx-1"><h5>{data?.dob}</h5></div>
                </div>
                {/* <div className="flex-start">
                  <div><h5 className="text-nowrap">Residence City : </h5></div>
                  <div className="mx-1"><h5>{data?.city}</h5></div>
                </div> */}
              </div>
            </div>
          </div>
          
           
          {data?.frontId_iamge ?
           <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header justify-content-center">
                <h5 className="mb-0 ">FrontId Iamge</h5>
              </div>
              <div className="card-body">
               <img height={150}  src={data?.frontId_iamge ? `${process.env.REACT_APP_API_KEY}uploads/`+ data?.frontId_iamge : "https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"}/>
              </div>
            </div>
          </div>  : null }
          {data?.backId_iamge ?
          <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header justify-content-center">
                <h5 className="mb-0 ">BackId Iamge</h5>
              </div>
              <div className="card-body">
               <img height={150} src={data?.backId_iamge ? `${process.env.REACT_APP_API_KEY}uploads/`+ data?.backId_iamge : "https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"}/>
              </div>
            </div>
          </div> : null } 
          {data?.vehical_iamge ?
          <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header justify-content-center">
                <h5 className="mb-0 ">Vehicle Iamge</h5>
              </div>
              <div className="card-body">
               <img height={150} src={data?.vehical_iamge ? `${process.env.REACT_APP_API_KEY}uploads/`+ data?.vehical_iamge : "https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"}/>
              </div>
            </div>
          </div> : null }
          {data?.document ? 
          <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header justify-content-center">
                <h5 className="mb-0 ">Vehicle Registration</h5>
              </div>
              <div className="card-body">
               <img height={150} src={data?.document ? `${process.env.REACT_APP_API_KEY}uploads/`+ data?.document : "https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"}/>
              </div>
            </div>
          </div> : null }
        </div>
         )
        })}
      </div>
        </div>
      </div>
    
  );
};

export default Earningstatement;












