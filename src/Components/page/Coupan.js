import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Sidebarr from "./../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";

const Coupan = () => {
  let deletebanner = () => {
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this banner?",
        icon: "success",
        dangerMode: true,
    })
}


const [title, settitle] = useState(); 
const [off_percantage, setoff_percantage] = useState();
const [valid_date, setvalid_date] = useState();
const [coupon_code, setcoupon_code] = useState();
const [image, setimage] = useState();
const [coupon_list, setcoupon_list] = useState();
const [Detils , setDetils] = useState();

let token = secureLocalStorage.getItem("adminidtoken");

const addcoupan = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("off_percantage", off_percantage);
  formData.append("valid_date", valid_date);
  formData.append("coupon_code", coupon_code);
  formData.append("image", image);
axios
    .post(`${process.env.REACT_APP_API_KEY}admin/add_coupon`,formData)
    .then((res) => {
      getcoupon_list();
      toast.success(res.data.msg);
     
    })
    .catch((error) => {});
   settitle(""); 
    setoff_percantage("");
    setvalid_date("");
    setcoupon_code("");
    setimage("");
    
};

useEffect(() => {
  getcoupon_list();
}, [0]);

let getcoupon_list = () => {
  let options = {
    headers: {
      token: token,
    },
  };
  axios
    .get(`${process.env.REACT_APP_API_KEY}admin/coupon_list`, options)
    .then((res) => {

      setcoupon_list(res.data.data);
    })
    .catch((error) => {});
};



let deletecoupan = (item) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this coupan!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      let deletebannerimage = () => {
        let bannerdata = {
          couponId: item,
        };

        let options = {
          headers: {
            token: token,
          },
        };
        axios
          .post(
            `${process.env.REACT_APP_API_KEY}admin/delete_coupon`,
            bannerdata,
            options
          )
          .then((res) => {
            getcoupon_list();
          })
          .catch((error) => {});
      };
      deletebannerimage();
      swal("Poof! Your coupan  has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your coupan is safe!");
    }
  });
};




const activecoupan = (item) => {
  const Data = {
    couponId: item,
  };
  
  let options = {
    hraders: {
      token: token,
    },
  };
  axios
    .post(
      `${process.env.REACT_APP_API_KEY}admin/active_coupon`,
      Data,
      options
    )
    .then((res) => {

      toast.success(res.data.msg);
      getcoupon_list();
    })
    .catch((error) => {});
};


useEffect(()=>{
  coupanDetails();
},[0])
const coupanDetails = (item) => {
  const Data = {
    couponId: item,
  };
  
  let options = {
    hraders: {
      token: token,
    },
  };
  axios
    .post(
      `${process.env.REACT_APP_API_KEY}admin/coupon_details`,
      Data,
      options
    )
    .then((res) => {

     setDetils(res.data.data)
    })
    .catch((error) => {});
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
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/coupon_setup.png" alt="" />
            Promotion setup
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
            <div className="card">
              <div className="card-body">
                <form action="https://6valley.6amtech.com/seller/coupon/store-coupon" method="post">
                  <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" />
                  <div className="row">
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Coupon type</label>
                      <select className="form-control" id="coupon_type" name="coupon_type" required>
                        <option disabled selected>Select coupon type</option>
                        <option value="discount_on_purchase">Discount on Purchase</option>
                        <option value="free_delivery">Free Delivery</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Coupon title</label>
                      <input type="text" name="title" className="form-control" defaultValue id="title" placeholder="Title" required />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="name" className="title-color font-weight-medium text-capitalize">Coupon code</label>
                        <a href="javascript:void(0)" className="float-right c1 fz-12" onclick="generateCode()">Generate code</a>
                      </div>
                      <input type="text" name="code" defaultValue className="form-control" id="code" placeholder="Ex: EID100" required />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group coupon_type">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Customer</label>
                      <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="customer_id" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                        <option disabled selected data-select2-id={3}>Select customer</option>
                        <option value={0}>All customer</option>
                        <option value={2}>fatema subarna</option>
                        <option value={4}>Md.Safayet Hossain</option>
                        <option value={5}>Jocky Lop</option>
                        <option value={6}>Demo user</option>
                        <option value={7}>Bsgsh Nsbdv</option>
                        <option value={8}>Joy Joy</option>
                        <option value={9}>Devid Jack</option>
                      </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: '322.328px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-customer_id-ct-container"><span className="select2-selection__rendered" id="select2-customer_id-ct-container" role="textbox" aria-readonly="true" title="Select customer">Select customer</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="exampleFormControlInput1" className="title-color font-weight-medium d-flex">Limit for same user</label>
                      <input type="number" name="limit" defaultValue min={0} id="coupon_limit" className="form-control" placeholder="Ex: 10" />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group free_delivery">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Discount type</label>
                      <select id="discount_type" className="form-control w-100" name="discount_type" onchange="checkDiscountType(this.value)">
                        <option value="amount">Amount</option>
                        <option value="percentage">Percentage (%)</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-lg-4 form-group free_delivery">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Discount Amount
                        <span id="discount_percent" style={{display: 'none'}}> (%)</span></label>
                      <input type="number" min={1} max={1000000} name="discount" defaultValue className="form-control" id="discount" placeholder="Ex: 500" />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Minimum purchase ($)</label>
                      <input type="number" min={1} max={1000000} name="min_purchase" defaultValue className="form-control" id="minimum purchase" placeholder="Ex: 100" />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group free_delivery" id="max-discount" style={{display: 'none'}}>
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Maximum discount ($)</label>
                      <input type="number" min={1} max={1000000} name="max_discount" defaultValue className="form-control" id="maximum discount" placeholder="Ex: 5000" />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Start date</label>
                      <input id="start_date" type="date" name="start_date" defaultValue className="form-control" placeholder="Start date" required min="2023-12-23" />
                    </div>
                    <div className="col-md-6 col-lg-4 form-group">
                      <label htmlFor="name" className="title-color font-weight-medium d-flex">Expire date</label>
                      <input id="expire_date" type="date" name="expire_date" defaultValue className="form-control" placeholder="Expire date" required min="2023-12-23" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end flex-wrap gap-10">
                    <button type="reset" className="btn btn-secondary px-4">Reset</button>
                    <button type="submit" className="btn btn--primary px-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-20 mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="px-3 py-4">
                <div className="row justify-content-between align-items-center flex-grow-1">
                  <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                    <h5 className="mb-0 text-capitalize d-flex gap-2">
                      Coupon list
                      <span className="badge badge-soft-dark radius-50 fz-12 ml-1">5</span>
                    </h5>
                  </div>
                  <div className="col-sm-8 col-md-6 col-lg-4">
                    <form >
                      <div className="input-group input-group-merge input-group-custom">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                          </div>
                        </div>
                        <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Title or Code or Discount Type" defaultValue aria-label="Search orders" required />
                        <button type="submit" className="btn btn--primary">Search</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Coupon</th>
                      <th>Coupon type</th>
                      <th>Duration</th>
                      <th>User limit</th>
                      <th>Discount bearer</th>
                      <th>
                        Status <i class="fa fa-certificate" aria-hidden="true"></i>
                       
                      </th>
                      <th className="text-center">
                        Action <i class="fa fa-bug" aria-hidden="true"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div>75% discount on Purc</div>
                        <strong>Code: rFhfx7XiCm</strong>
                      </td>
                      <td className="text-capitalize">Discount on purchase</td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          <span>10 Jan, 23 - </span>
                          <span>31 Jan, 29</span>
                        </div>
                      </td>
                      <td>
                        <span>Limit: <strong>20,</strong></span>
                        <span className="ml-1">Used: <strong>0</strong></span>
                      </td>
                      <td>seller</td>
                      <td>
                        <form action="https://6valley.6amtech.com/seller/coupon/status/9/0" method="GET" id="coupon_status9_form" className="coupon_status_form">
                          <label className="switcher">
                            <input type="checkbox" className="switcher_input" id="coupon_status9" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'coupon_status9','coupon-status-on.png','coupon-status-off.png','Want to Turn ON Coupon Status','Want to Turn OFF Coupon Status',`<p>If enabled this coupon will be available on the website and customer app</p>`,`<p>If disabled this coupon will be hidden from the website and customer app</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex gap-10 justify-content-center">
                          <button className="btn btn-outline-info btn-sm square-btn"  data-toggle="modal" data-target="#quick-view">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </button>
                          <Link className="btn btn-outline--primary btn-sm edit" to="/coupanupdate">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deletebanner} className="btn btn-outline-danger btn-sm delete" href="javascript:" onclick="form_alert('coupon-9','Want to delete this coupon ?')" title="Delete">
                             <i className="fa fa-trash-o"  aria-hidden="true" />
                            
                             
                          </a>
                          <form action="https://6valley.6amtech.com/seller/coupon/delete/9" method="post" id="coupon-9">
                            <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div>Free Delivery</div>
                        <strong>Code: l2oDTjKF3z</strong>
                      </td>
                      <td className="text-capitalize">Free delivery</td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          <span>10 Jan, 23 - </span>
                          <span>31 Jan, 29</span>
                        </div>
                      </td>
                      <td>
                        <span>Limit: <strong>2,</strong></span>
                        <span className="ml-1">Used: <strong>0</strong></span>
                      </td>
                      <td>seller</td>
                      <td>
                        <form action="https://6valley.6amtech.com/seller/coupon/status/8/0" method="GET" id="coupon_status8_form" className="coupon_status_form">
                          <label className="switcher">
                            <input type="checkbox" className="switcher_input" id="coupon_status8" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'coupon_status8','coupon-status-on.png','coupon-status-off.png','Want to Turn ON Coupon Status','Want to Turn OFF Coupon Status',`<p>If enabled this coupon will be available on the website and customer app</p>`,`<p>If disabled this coupon will be hidden from the website and customer app</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex gap-10 justify-content-center">
                          <button className="btn btn-outline-info btn-sm square-btn"  data-toggle="modal" data-target="#quick-view">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </button>
                          <Link to="/coupanupdate" className="btn btn-outline--primary btn-sm edit"  title="Edit">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deletebanner} className="btn btn-outline-danger btn-sm delete" href="javascript:" onclick="form_alert('coupon-8','Want to delete this coupon ?')" title="Delete">
                             <i className="fa fa-trash-o"  aria-hidden="true" /> 
                          </a>
                          <form action="https://6valley.6amtech.com/seller/coupon/delete/8" method="post" id="coupon-8">
                            <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div>Discount on purchase</div>
                        <strong>Code: 856gmef66p</strong>
                      </td>
                      <td className="text-capitalize">Discount on purchase</td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          <span>10 Jan, 23 - </span>
                          <span>10 Jun, 26</span>
                        </div>
                      </td>
                      <td>
                        <span>Limit: <strong>10,</strong></span>
                        <span className="ml-1">Used: <strong>2</strong></span>
                      </td>
                      <td>seller</td>
                      <td>
                        <label className="switcher">
                          <input type="checkbox" className="switcher_input toggle-switch-input" defaultChecked disabled />
                          <span className="switcher_control opacity--40" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex gap-10 justify-content-center">
                          <button className="btn btn-outline-info btn-sm square-btn"   data-toggle="modal" data-target="#quick-view">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </button>
                          <Link to="/coupanupdate" className="btn btn-outline--primary btn-sm edit"  title="Edit">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>

                          <a onClick={deletebanner} className="btn btn-outline-danger btn-sm delete" href="javascript:" onclick="form_alert('coupon-6','Want to delete this coupon ?')" title="Delete">
                             <i className="fa fa-trash-o"  aria-hidden="true" /> 
                          </a>
                          
                          <span />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div>$50 discount on Purc</div>
                        <strong>Code: 2ul59rwkw2</strong>
                      </td>
                      <td className="text-capitalize">Discount on purchase</td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          <span>10 Jan, 23 - </span>
                          <span>31 Dec, 26</span>
                        </div>
                      </td>
                      <td>
                        <span>Limit: <strong>122,</strong></span>
                        <span className="ml-1">Used: <strong>0</strong></span>
                      </td>
                      <td>seller</td>
                      <td>
                        <form action="https://6valley.6amtech.com/seller/coupon/status/6/0" method="GET" id="coupon_status6_form" className="coupon_status_form">
                          <label className="switcher">
                            <input type="checkbox" className="switcher_input" id="coupon_status6" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'coupon_status6','coupon-status-on.png','coupon-status-off.png','Want to Turn ON Coupon Status','Want to Turn OFF Coupon Status',`<p>If enabled this coupon will be available on the website and customer app</p>`,`<p>If disabled this coupon will be hidden from the website and customer app</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex gap-10 justify-content-center">
                          <button className="btn btn-outline-info btn-sm square-btn"   data-toggle="modal" data-target="#quick-view" >
                            <i className="fa fa-eye" aria-hidden="true" />
                          </button>
                          <Link to="/coupanupdate" className="btn btn-outline--primary btn-sm edit"  title="Edit">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deletebanner} className="btn btn-outline-danger btn-sm delete" href="javascript:" onclick="form_alert('coupon-6','Want to delete this coupon ?')" title="Delete">
                             <i className="fa fa-trash-o"  aria-hidden="true" /> 
                          </a>
                          <form action="https://6valley.6amtech.com/seller/coupon/delete/6" method="post" id="coupon-6">
                            <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <div>free delivery</div>
                        <strong>Code: pcuw655ytg</strong>
                      </td>
                      <td className="text-capitalize">Free delivery</td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          <span>10 Jan, 23 - </span>
                          <span>30 Jun, 23</span>
                        </div>
                      </td>
                      <td>
                        <span>Limit: <strong>1111111111,</strong></span>
                        <span className="ml-1">Used: <strong>1</strong></span>
                      </td>
                      <td>seller</td>
                      <td>
                        <form action="https://6valley.6amtech.com/seller/coupon/status/4/0" method="GET" id="coupon_status4_form" className="coupon_status_form">
                          <label className="switcher">
                            <input type="checkbox" className="switcher_input" id="coupon_status4" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'coupon_status4','coupon-status-on.png','coupon-status-off.png','Want to Turn ON Coupon Status','Want to Turn OFF Coupon Status',`<p>If enabled this coupon will be available on the website and customer app</p>`,`<p>If disabled this coupon will be hidden from the website and customer app</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex gap-10 justify-content-center">
                          <button className="btn btn-outline-info btn-sm square-btn"  data-toggle="modal" data-target="#quick-view">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </button>
                          <Link to="/coupanupdate" className="btn btn-outline--primary btn-sm edit" href="https://6valley.6amtech.com/seller/coupon/update/4" title="Edit">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deletebanner} className="btn btn-outline-danger btn-sm delete" href="javascript:" onclick="form_alert('coupon-4','Want to delete this coupon ?')" title="Delete">
                             <i className="fa fa-trash-o"  aria-hidden="true" /> 
                          </a>
                          <form action="https://6valley.6amtech.com/seller/coupon/delete/4" method="post" id="coupon-4">
                            <input type="hidden" name="_token" defaultValue="YFPrIbFYlUsgcs6Ht4EEyCysWGBq8lmpLaBUW0q6" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
             
              </div>
              <div className="table-responsive mt-4">
                <div className="px-4 d-flex justify-content-lg-end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="modal fade" id="quick-view" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog modal-dialog-centered coupon-details" role="document">
              <div className="modal-content" id="quick-view-modal"><button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="coupon__details">
                  <div className="coupon__details-left">
                    <div className="text-center">
                      <h6 className="title" id="title">free delivery</h6>
                      <h6 className="subtitle">Code : <span id="coupon_code">pcuw655ytg</span></h6>
                      <div className="text-capitalize">
                        <span>Free delivery</span>
                      </div>
                    </div>
                    <div className="coupon-info">
                      <div className="coupon-info-item">
                        <span>Minimum purchase :</span>
                        <strong id="min_purchase">$10.00</strong>
                      </div>
                      <div className="coupon-info-item">
                        <span>Start date : </span>
                        <span id="start_date">10th Jan 2024</span>
                      </div>
                      <div className="coupon-info-item">
                        <span>Expire date : </span>
                        <span id="expire_date">31st Dec 2027</span>
                      </div>
                      <div className="coupon-info-item">
                        <span>Discount bearer : </span>
                        <span id="expire_date">
                          Vendor
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="coupon__details-right">
                    <div className="coupon">
                      <img src="https://6valley.6amtech.com/public/assets/back-end/img/free-delivery.png" alt="Free delivery" width={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
   
  );
};

export default Coupan;
