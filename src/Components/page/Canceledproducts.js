import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Sidebarr from '../Sidebar'
let deleteproducts = () => {
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this banner?",
        icon: "success",
        dangerMode: true,
    })
}

const Canceledproducts = () => {
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
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h2 className="h1 mb-0">
              <img src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png" className="mb-1 mr-1" alt />
              <span className="page-header-title">
                Out for delivery
              </span>
              Orders
            </h2>
            <span className="badge badge-soft-dark radius-50 fz-14">8</span>
          </div>
          <div className="card">
            <div className="card-body">
              <form  id="form-data" method="GET">
                <div className="row gx-2">
                  <div className="col-12">
                    <h4 className="mb-3 text-capitalize">Filter order</h4>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color text-capitalize" htmlFor="filter">Order type</label>
                      <select name="filter" id="filter" className="form-control">
                        <option value="all">All</option>
                        <option value="admin">In House Order</option>
                        <option value="seller">Seller Order</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3" id="seller_id_area" style={{}}>
                    <div className="form-group">
                      <label className="title-color" htmlFor="store">Store</label>
                      <select name="seller_id" id="seller_id" className="form-control">
                        <option value="all">All shop</option>
                        <option value={0} id="seller_id_inhouse">Inhouse</option>
                        <option value={1}>
                          Deluxe Online
                        </option>
                        <option value={2}>
                          Mart Morning
                        </option>
                        <option value={3}>
                          Wellness Fair
                        </option>
                        <option value={4}>
                          Bicycle Shop
                        </option>
                        <option value={5}>
                          KR Fashion
                        </option>
                        <option value={6}>
                          Country Fair
                        </option>
                        <option value={7}>
                          Tech Shop
                        </option>
                        <option value={8}>
                          Royal Crown
                        </option>
                        <option value={9}>
                          Super Store Online
                        </option>
                        <option value={10}>
                          Digital House
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color" htmlFor="customer">Customer</label>
                      <input type="hidden" id="customer_id" name="customer_id" defaultValue="all" />
                      <select onchange="customer_id_value(this.value)" data-placeholder="                                                        All customer
                                                        " className="js-data-example-ajax form-control form-ellipsis select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                        <option value="all" data-select2-id={3}>All customer</option>
                        <option value disabled data-select2-id={4}>Select your option</option></select><span className="select2 select2-container select2-container--default form-control p-0" dir="ltr" data-select2-id={2} style={{width: '211.5px'}}><span className="selection"><span className="select2-selection select2-selection--single border-0" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-b30v-container"><span className="select2-selection__rendered" id="select2-b30v-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">                                                        All customer
                              </span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <label className="title-color" htmlFor="date_type">Date type</label>
                    <div className="form-group">
                      <select className="form-control __form-control" name="date_type" id="date_type">
                        <option value selected disabled>Select Date Type</option>
                        <option value="this_year">This Year</option>
                        <option value="this_month">This Month</option>
                        <option value="this_week">This Week</option>
                        <option value="custom_date">Custom Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3" id="from_div" style={{display: 'none'}}>
                    <label className="title-color" htmlFor="customer">Start date</label>
                    <div className="form-group">
                      <input type="date" name="from" defaultValue id="from_date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3" id="to_div" style={{display: 'none'}}>
                    <label className="title-color" htmlFor="customer">End date</label>
                    <div className="form-group">
                      <input type="date" defaultValue name="to" id="to_date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-3 justify-content-end">
                      <a href="#" className="btn btn-secondary px-5">
                        Reset
                      </a>
                      <button type="submit" className="btn btn--primary px-5" >
                        Show data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="px-3 py-4 light-bg">
                <div className="row g-2 align-items-center flex-grow-1">
                  <div className="col-md-4">
                    <h5 className="text-capitalize d-flex gap-1">
                      Order list
                      <span className="badge badge-soft-dark radius-50 fz-12">8</span>
                    </h5>
                  </div>
                  <div className="col-md-8 d-flex gap-3 flex-wrap flex-sm-nowrap justify-content-md-end">
                    <form action method="GET">
                      <div className="input-group input-group-custom input-group-merge">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tio-search" />
                          </div>
                        </div>
                        <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Order ID" aria-label="Search by Order ID" defaultValue />
                        <button type="submit" className="btn btn--primary input-group-text">Search</button>
                      </div>
                    </form>
                    <div className="dropdown">
                     
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a type="submit" className="dropdown-item d-flex align-items-center gap-2" href="https://6valley.6amtech.com/admin/orders/export-order-data/out_for_delivery">
                            <img width={14} src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt />
                            Excel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive datatable-custom">
                <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100" style={{textAlign: 'left'}}>
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Order ID</th>
                      <th>Order Date</th>
                      <th>Customer Info</th>
                      <th>Store</th>
                      <th className="text-right">Total Amount</th>
                      <th className="text-center">Order Status </th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        1
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100170">100170 </a>
                      </td>
                      <td>
                        <div>10 Jan 2023,</div>
                        <div>02:45 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100170">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          In House
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $575.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        2
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100161">100161 </a>
                      </td>
                      <td>
                        <div>20 Nov 2022,</div>
                        <div>01:33 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100161">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          In House
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $485.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        3
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100155">100155 </a>
                      </td>
                      <td>
                        <div>20 Nov 2022,</div>
                        <div>12:03 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100155">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Mart Morning
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $4,850.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        4
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100154">100154 </a>
                      </td>
                      <td>
                        <div>20 Nov 2022,</div>
                        <div>12:02 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100154">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Deluxe Online
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $5,100.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        5
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100137">100137 </a>
                      </td>
                      <td>
                        <div>12 Oct 2022,</div>
                        <div>07:10 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100137">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Mart Morning
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $5,400.00
                        </div>
                        <span className="badge text-success fz-12 px-0">
                          Paid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        6
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100050">100050 </a>
                      </td>
                      <td>
                        <div>18 Apr 2022,</div>
                        <div>03:34 AM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100050">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Deluxe Online
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $575.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        7
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100005">100005 </a>
                      </td>
                      <td>
                        <div>16 Mar 2022,</div>
                        <div>06:21 PM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100005">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Deluxe Online
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $2,950.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                    <tr className="status-out_for_delivery class-all">
                      <td className>
                        8
                      </td>
                      <td>
                        <a className="title-color" href="https://6valley.6amtech.com/admin/orders/details/100002">100002 </a>
                      </td>
                      <td>
                        <div>16 Mar 2022,</div>
                        <div>06:09 PM</div>
                      </td>
                      <td>
                        <a className="text-body text-capitalize" href="https://6valley.6amtech.com/admin/orders/details/100002">
                          <strong className="title-name">fatema subarna</strong>
                        </a>
                        <a className="d-block title-color" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <span className="store-name font-weight-medium">
                          Wellness Fair
                        </span>
                      </td>
                      <td className="text-right">
                        <div>
                          $475.00
                        </div>
                        <span className="badge text-danger fz-12 px-0">
                          Unpaid
                        </span>
                      </td>
                      <td className="text-center text-capitalize">
                        <span className="badge badge-soft-warning fz-12">
                          Canceled
                        </span>
                      </td>
                      <td>
                      <div className="d-flex justify-content-center gap-2">
                      <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/orderdetails">
                          <i className="fa fa-eye" aria-hidden="true"/>
                      </Link>
                      <span className="btn btn-outline-info btn-sm square-btn" target="_blank" title="Invoice" onClick={deleteproducts}>
                          <i className="fa fa-trash-o" aria-hidden="true" />
                      </span>
                  </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-4">
                <div className="d-flex justify-content-lg-end">
                </div>
              </div>
            </div>
          </div>
          <div className="js-nav-scroller hs-nav-scroller-horizontal d-none">
            <span className="hs-nav-scroller-arrow-prev d-none">
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-left" />
              </a>
            </span>
            <span className="hs-nav-scroller-arrow-next d-none">
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-right" />
              </a>
            </span>
            <ul className="nav nav-tabs page-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">Order list</a>
              </li>
            </ul>
          </div>
        </div>
          </div>
    
        </div>
        
    
    
    
        </div>
      )
}

export default Canceledproducts
