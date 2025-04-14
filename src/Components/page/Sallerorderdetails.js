import React from 'react'
import Header from '../Header'
import Sidebarr from '../Sidebar'

const Sallerorderdetails = () => {
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
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png" alt />
                  Order Details
              </h2>
          </div>
          <div className="row gy-3" id="printableArea">
              <div className="col-lg-8 col-xl-9">
                  <div className="card h-100">
                      <div className="card-body">
                          <div className="d-flex flex-wrap gap-10 justify-content-between mb-4">
                              <div className="d-flex flex-column gap-10">
                                  <h4 className="text-capitalize">Order details #100129</h4>
                                  <div className>
                                      12 Oct, 2022 , 06:38 AM
                                  </div>
                                  <div className="mt-2 mb-5">
                                  </div>
                              </div>
                              <div className="text-sm-right">
                                  <div className="d-flex flex-wrap gap-10">
                                      <div className>
                                          <button className="btn btn-warning px-4">
                                              <i className="tio-map" /> Shipping address has been given below
                                          </button>
                                      </div>
                                      <a className="btn btn--primary px-4"  href="#">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/uil_invoice.svg" alt className="mr-1" />
                                          Print 
                                      </a>
                                  </div>
                                  <div className="d-flex flex-column gap-2 mt-3">
                                      <div className="order-status d-flex justify-content-sm-end gap-10 text-capitalize">
                                          <span className="title-color">Status: </span>
                                          <span className="badge badge-soft-info font-weight-bold radius-50 d-flex align-items-center py-1 px-2">Pending</span>
                                      </div>
                                      <div className="payment-method d-flex justify-content-sm-end gap-10 text-capitalize">
                                          <span className="title-color">Payment Method :</span>
                                          <strong>Cash on delivery</strong>
                                      </div>
                                      <div className="payment-status d-flex justify-content-sm-end gap-10">
                                          <span className="title-color">Payment Status:</span>
                                          <span className="text-danger payment-status-span font-weight-bold">
                                              Unpaid
                                          </span>
                                      </div>
                                      <span className="ml-2 ml-sm-3">
                                          <b>
                                              Order verification code : 961318
                                          </b>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div className="table-responsive datatable-custom">
                              <table className="table fz-12 table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                                  <thead className="thead-light thead-50 text-capitalize">
                                      <tr>
                                          <th>SL</th>
                                          <th>Item Details</th>
                                          <th>Variations</th>
                                          <th>Tax</th>
                                          <th>Discount</th>
                                          <th>Price</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  </tbody>
                              </table>
                          </div>
                          <hr />
                          <div className="row justify-content-md-end mb-3">
                              <div className="col-md-9 col-lg-8">
                                  <dl className="row gy-1 text-sm-right">
                                      <dt className="col-5">Item price</dt>
                                      <dd className="col-6 title-color">
                                          <strong>$0.00</strong>
                                      </dd>
                                      <dt className="col-5">Sub total</dt>
                                      <dd className="col-6 title-color">
                                          <strong>$0.00</strong>
                                      </dd>
                                      <dt className="col-5">Coupon discount</dt>
                                      <dd className="col-6 title-color">
                                          - $0.00
                                      </dd>
                                      <dt className="col-5 text-uppercase">Vat/Tax</dt>
                                      <dd className="col-6 title-color">
                                          <strong>$0.00</strong>
                                      </dd>
                                      <dt className="col-5">Shipping</dt>
                                      <dd className="col-6 title-color">
                                          <strong>$0.00</strong>
                                      </dd>
                                      <dt className="col-5"><strong>Total</strong></dt>
                                      <dd className="col-6 title-color">
                                          <strong>$0.00</strong>
                                      </dd>
                                  </dl>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-xl-3 d-flex flex-column gap-3">
                  <div className="card">
                      <div className="card-body text-capitalize d-flex flex-column gap-4">
                          <div className="d-flex flex-column align-items-center gap-2">
                              <h4 className="mb-0 text-center">Order &amp; Shipping Info</h4>
                          </div>
                          <div className>
                              <label className="font-weight-bold title-color fz-14">Change order status</label>
                              <select name="order_status" onchange="order_status(this.value)" className="status form-control" data-id={100129}>
                                  <option value="pending" selected> Pending</option>
                                  <option value="confirmed"> Confirmed</option>
                                  <option value="processing">Packaging </option>
                                  <option className="text-capitalize" value="out_for_delivery">Out for delivery </option>
                                  <option value="delivered">Delivered </option>
                                  <option value="returned"> Returned</option>
                                  <option value="failed">Failed to Deliver </option>
                                  <option value="canceled">Canceled </option>
                              </select>
                          </div>
                          <div className="d-flex justify-content-between align-items-center gap-10 form-control h-auto flex-wrap">
                              <span className="title-color">
                                  Payment status
                              </span>
                              <div className="d-flex justify-content-end min-w-100 align-items-center gap-2">
                                  <span className="text--primary font-weight-bold">Unpaid</span>
                                  <label className="switcher payment-status-text">
                                      <input className="switcher_input payment_status" type="checkbox" name="status" defaultValue="unpaid" />
                                      <span className="switcher_control switcher_control_add" />
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <div className="d-flex gap-2 align-items-center justify-content-between mb-4">
                              <h4 className="d-flex gap-2">
                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt />
                                  Customer information
                              </h4>
                          </div>
                          <div className="media flex-wrap gap-3">
                              <div className>
                                  <img className="avatar rounded-circle avatar-70" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png" alt="Image" />
                              </div>
                              <div className="media-body d-flex flex-column gap-1">
                                  <span className="title-color"><strong>fatema subarna </strong></span>
                                  <span className="title-color"> <strong>137</strong> Orders</span>
                                  <span className="title-color break-all"><strong>018855</strong></span>
                                  <span className="title-color break-all">fatema@gmail.com</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <div className="d-flex gap-2 align-items-center justify-content-between mb-4">
                              <h4 className="d-flex gap-2">
                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt />
                                  Billing address
                              </h4>
                              <button className="btn btn-outline-primary btn-sm square-btn" title="Edit" data-toggle="modal" data-target="#billingAddressUpdateModal">
                                  <i className="tio-edit" />
                              </button>
                          </div>
                          <div className="d-flex flex-column gap-2">
                              <div>
                                  <span>Name :</span>
                                  <strong>Fatema</strong>
                              </div>
                              <div>
                                  <span>Contact:</span>
                                  <strong>01885576624</strong>
                              </div>
                              <div>
                                  <span>City:</span>
                                  <strong>Dhaka</strong>
                              </div>
                              <div>
                                  <span>Zip code :</span>
                                  <strong>125</strong>
                              </div>
                              <div className="d-flex align-items-start gap-2">
                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/location.png" alt />
                                  20 Rd No. 14A, Dhaka 1209, Bangladesh
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-body">
                          <h4 className="d-flex gap-2 mb-4">
                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/shop-information.png" alt />
                              Shop Information
                          </h4>
                          <div className="media">
                              <div className="mr-3">
                                  <img className="avatar rounded avatar-70" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png" alt />
                              </div>
                              <div className="media-body d-flex flex-column gap-2">
                                  <h5>Digital House</h5>
                                  <span className="title-color"><strong>1</strong> Orders Served</span>
                                  <span className="title-color"> <strong>01111111111</strong></span>
                                  <div className="d-flex align-items-start gap-2">
                                      <img src="https://6valley.6amtech.com/public/assets/back-end/img/location.png" className="mt-1" alt />
                                      Mirpur
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

   

      
    )
}

export default Sallerorderdetails
