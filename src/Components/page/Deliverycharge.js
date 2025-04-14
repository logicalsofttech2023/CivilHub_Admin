import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Deliverycharge = () => {
  const [deliverycharge, setdeliverycharge] =useState();
  const [commission, setcommission] =useState();
 const [charges, setcharges] = useState();
  useEffect(()=>{
    getcharges();
  },[0])

  const getcharges=(e)=>{
    
    axios.get(`${process.env.REACT_APP_API_KEY}admin/api/Commission_delivery_list`).then((res)=>{
      
      setcharges(res.data.data)
    }).catch((error)=>{
    
    })
   
      }

  const handlesubmit=(e)=>{
e.preventDefault();
let chargesdata = {
  delivery_charge:deliverycharge ? deliverycharge : charges?.delivery_charge,
  commission:commission ? commission : charges?.commission
}
axios.post(`${process.env.REACT_APP_API_KEY}admin/api/createCommission_delivery`,chargesdata).then((res)=>{
  
  toast.success(res.data.message)
  getcharges();
}).catch((error)=>{

})
setdeliverycharge("");
setcommission("");
  }


  return (
    <div>
    {/* <Header /> */}
    <Toaster/>
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
              <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                    alt
                  />
                  Commission & Fare Charge
                </h2>
              </div>
              <div
                className="row pb-4 d--none"
                id="main-banner"
                style={{ textAlign: "left" }}
              >
                
              </div>
              <form onSubmit={handlesubmit} encType='multipart/form-data'>
              <div className="row g-3 mb-3">
        
        <div className="col-md-6">
        
            <input type="hidden" name="_token" defaultValue="UUv9Mglm04V3CqIyFGCPNvVg28RwTzVCaKRLpfdW" autoComplete="off" /> <div className="card">
              <div className="card-header">
                <h5 className="mb-0 text-capitalize"> Delivery charge : </h5>
                
              </div>
              <div className="card-body">
                <small className="badge badge-soft-danger text-wrap mb-3">
                  Set your delivery charge here !
                </small>
                <div className="form-group">
                  <label>Delivery Charge( Per KM )</label>
                  <input placeholder={charges?.delivery_charge} type="number" onChange={((e)=>{setdeliverycharge(e.target.value)})} value={deliverycharge} className="form-control" name="commission" />
                </div>
                <button style={{visibility:'hidden'}} type="submit" className="btn btn--primary ">Update</button> 
              </div>
            </div>
          
        </div>
        <div className="col-md-6">
          
            <input type="hidden" name="_token" defaultValue="UUv9Mglm04V3CqIyFGCPNvVg28RwTzVCaKRLpfdW" autoComplete="off" /> <div className="card">
              <div className="card-header">
                <h5 className="mb-0"> Commission:</h5>
                
              </div>
              <div className="card-body">
                <small className="badge text-wrap badge-soft-danger mb-3">
                Commission .
                  {/* If Tax number is disabled here it will not show in invoice. */}
                </small>
                <div className="form-group">
                  <label> Commission charge </label>
                  <input placeholder={charges?.commission} type="text" onChange={((e)=>{setcommission(e.target.value)})} value={commission} className="form-control" name="gst" />
                </div>
                <button type="submit" className="btn btn--primary">Update </button>
              </div>
            </div>
         
        </div>
       
      </div>
      </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Deliverycharge;

