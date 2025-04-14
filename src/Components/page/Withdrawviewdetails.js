import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Withdrawviewdetails = () => {
  const [dataofwithdraw, setdataofwithdraw] = useState([]);


  let withdrawid = secureLocalStorage.getItem("withdrawids");

  useEffect(() => {
    getwithd();
  }, [0]);
  const getwithd = () => {
    const data = {
        transId: withdrawid,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/transjectionDetails`,
        data
      )
      .then((res) => {

        setdataofwithdraw(res.data.data);
      })
      .catch((error) => {});
  };


  return (
    <div>
      <Toaster/>
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
              Transaction
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-4">
                    <h3 className="text-capitalize">
                    Transaction Id {dataofwithdraw[0]?.transjectionId}
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
                          {dataofwithdraw[0]?.userId?.createdAt.slice(0, 10)}{" "}
                          {dataofwithdraw[0]?.userId?.createdAt.slice(11, 19)}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4 mb-2 mb-md-0">
                      <div className="flex-start">
                        <div className="title-color">
                          Note: Please Avvept my transication
                        </div>
                        <div className="mx-1" />
                      </div>
                    </div> */}
                    { dataofwithdraw[0]?.payment_status == "Paid" ? 
                      <div class="col-md-2">
                        <button
                          type="button"
                          class="btn btn-success float-end"
                          
                        >
                          {dataofwithdraw[0]?.payment_status} &nbsp;
                          
                        </button>
                      </div>
                    : 
                      <div class="col-md-2">
                        <button type="button" class="btn btn-danger float-end">
                        {dataofwithdraw[0]?.payment_status}
                        </button>
                      </div>
                    
                    //  : (
                    //   <div className="col-md-2">
                    //     <div className="text-center float-end">
                    //       <label className="btn btn-danger  p-2 rounded-bottom">
                    //         Denied
                    //       </label>
                    //     </div>
                    //   </div>
                    // )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-3 mb-4">
                    <h3 className="h3 mb-0">User info 
                   {dataofwithdraw[0]?.userId?.user_profile  === null ? 
                    <img
            width={50}
            className="avatar rounded-circle"
            src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png"
            alt=""
          /> :
                     <img className="avatar rounded-circle" src={`${process.env.REACT_APP_API_KEY}uploads/`+ dataofwithdraw[0]?.userId?.user_profile}/>}</h3>
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  <div className="mt-2">
                    <div className="flex-start">
                      <div>
                        <h4>User name : </h4>
                      </div>
                      <div className="mx-1">
                        <h4>{dataofwithdraw[0]?.userId?.first_name}</h4>
                      </div>
                    </div>
                    {/* <div className="flex-start">
                      <div>
                        <h6>Branch : </h6>
                      </div>
                      <div className="mx-1">
                        <h6>Mirpur- 12</h6>
                      </div>
                    </div> */}
                    <div className="flex-start">
                      <div>
                        <h6>Email : </h6>
                      </div>
                      <div className="mx-1">
                        <h6>{dataofwithdraw[0]?.userId?.email}</h6>
                      </div>
                    </div>
                    <div className="flex-start">
                      <div>
                        <h6>Phone no : </h6>
                      </div>
                      <div className="mx-1">
                        <h6>{dataofwithdraw[0]?.userId?.mobile_number}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
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
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.shop_name}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div className="mt-3">
                      <h5>Product : </h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.image  === null ?  <img
           
            className="avatar rounded-circle"
            src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png"
            alt=""
          /> :
                     <img className="avatar rounded-circle" src={`${process.env.REACT_APP_API_KEY}uploads/`+ dataofwithdraw[0]?.orderId?.products[0]?.image}/>}
                     </h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Total : </h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.total}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-start">
                  <div className="text-capitalize d-flex align-items-center justify-content-between gap-2 border-bottom pb-3 mb-4">
                    <h3 className="h3 mb-0">Order info </h3>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Product name :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.product_name}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Discount :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.discount}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Qty :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.qty}</h5>
                    </div>
                  </div>

                  <div className="flex-start">
                    <div>
                      <h5>Shipping Charge :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.shipping_charge}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Color :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.color}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Size :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.size}</h5>
                    </div>
                  </div>
                  <div className="flex-start">
                    <div>
                      <h5>Total :</h5>
                    </div>
                    <div className="mx-1">
                      <h5>{dataofwithdraw[0]?.orderId?.products[0]?.total}</h5>
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

export default Withdrawviewdetails;

