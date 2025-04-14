import React from "react";
import "../sidebar.css";
import Header from "../Header";


import Sidebarr from "./../Sidebar";
const Coupanupdate = () => {
   
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
         <h2 className="h1 mb-0 text-capitalize">
           <img src="https://6valley.6amtech.com/public/assets/back-end/img/coupon_setup.png" className="mb-1 mr-1" alt="" />
           Coupon update
         </h2>
       </div>
       <div className="row">
         <div className="col-md-12">
           <div className="card">
             <div className="card-body">
               <form action="https://6valley.6amtech.com/seller/coupon/update/9" method="post">
                 <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" /> <div className="row">
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Coupon type</label>
                     <select className="form-control" id="coupon_type" name="coupon_type" required>
                       <option disabled selected>Select Coupon Type</option>
                       <option value="discount_on_purchase" selected>Discount on purchase</option>
                       <option value="free_delivery">Free Delivery</option>
                     </select>
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Coupon title</label>
                     <input type="text" name="title" className="form-control" id="title" defaultValue="75% discount on Purchase" placeholder="Title" required />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Coupon code</label>
                     <a href="javascript:void(0)" className="float-right" onclick="generateCode()">Generate code</a>
                     <input type="text" name="code" defaultValue="rFhfx7XiCm" className="form-control" id="code" placeholder="Ex: EID100" required />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group coupon_type">
                     <label htmlFor="name" className="title-color font-weight-medium d-flex">Customer</label>
                     <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="customer_id" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                       <option disabled selected>Select customer</option>
                       <option value={0} selected data-select2-id={3}>All customer</option>
                       <option value={2}>fatema subarna</option>
                       <option value={4}>Md.Safayet Hossain</option>
                       <option value={5}>Jocky Lop</option>
                       <option value={6}>Demo user</option>
                       <option value={7}>Bsgsh Nsbdv</option>
                       <option value={8}>Joy Joy</option>
                       <option value={9}>Devid Jack</option>
                     </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: '327.984px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-customer_id-ex-container"><span className="select2-selection__rendered" id="select2-customer_id-ex-container" role="textbox" aria-readonly="true" title="All customer">All customer</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="exampleFormControlInput1" className="title-color text-capitalize">Limit for same user</label>
                     <input type="number" name="limit" min={0} defaultValue={20} id="coupon_limit" className="form-control" placeholder="Ex: 10" />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group free_delivery">
                     <label htmlFor="name" className="title-color text-capitalize">Discount type</label>
                     <select id="discount_type" className="form-control" name="discount_type" onchange="checkDiscountType(this.value)">
                       <option value="amount">Amount</option>
                       <option value="percentage" selected>Percentage</option>
                     </select>
                   </div>
                   <div className="col-md-6 col-lg-4 form-group free_delivery">
                     <label htmlFor="name" className="title-color text-capitalize">Discount Amount <span id="discount_percent"> (%)</span></label>
                     <input type="number" min={0} max={1000000} step=".01" name="discount" className="form-control" id="discount" defaultValue={75} placeholder="Ex: 500" required />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Minimum purchase</label>
                     <input type="number" min={0} max={1000000} step=".01" name="min_purchase" className="form-control" id="minimum purchase" defaultValue={7000} placeholder="Minimum purchase" required />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group free_delivery" id="max-discount">
                     <label htmlFor="name" className="title-color text-capitalize">Maximum discount</label>
                     <input type="number" min={0} max={1000000} step=".01" name="max_discount" className="form-control" id="maximum discount" defaultValue={75} placeholder="Maximum discount" />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Start date</label>
                     <input type="date" name="start_date" className="form-control" id="start_date" defaultValue="2023-01-10" placeholder="Start date" required min="2023-12-23" />
                   </div>
                   <div className="col-md-6 col-lg-4 form-group">
                     <label htmlFor="name" className="title-color text-capitalize">Expire date</label>
                     <input type="date" name="expire_date" className="form-control" id="expire_date" defaultValue="2029-01-31" placeholder="Expire date" required min="2023-12-23" />
                   </div>
                 </div>
                 <div className="d-flex align-items-center justify-content-end flex-wrap gap-10">
                   <button type="reset" className="btn btn-secondary px-4">Reset</button>
                   <button type="submit" className="btn btn--primary px-4">Update</button>
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

export default Coupanupdate;

