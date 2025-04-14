import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Sidebarr from '../Sidebar'

const Sallertransacations = () => {
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
                            <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
                                <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt />
                                Vendor details
                            </h2>
                        </div>
                        <div className="flex-between d-sm-flex row align-items-center justify-content-between mb-2 mx-1">
                            <div>
                            </div>
                        </div>
                        <div className="page-header">
                            <div className="flex-between row mx-1">
                                <div>
                                    <h1 className="page-header-title">Digital House</h1>
                                </div>
                            </div>
                            <div className="js-nav-scroller hs-nav-scroller-horizontal">
                                <ul className="nav nav-tabs flex-wrap page-header-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerdetails">Shop Overview</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerorder">Order</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerproducts">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sallersatting">Setting</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/sallertransacation">Transaction</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sallerreview">Review</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content container-fluid p-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="px-3 py-4">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 mb-3 mb-lg-0">
                                                    <h5 className="mb-0 text-capitalize d-flex gap-1 align-items-center">Transaction table
                                                        <span className="badge badge-soft-dark fz-12">1</span>
                                                    </h5>
                                                </div>
                                                <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                                                    <form action="" method="GET">
                                                        <div className="input-group input-group-merge input-group-custom">

                                                            <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by orders id or transaction id" />
                                                            <button type="submit" className="btn btn--primary">Search</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-md-6 col-lg-4">
                                                    <form  method="GET">
                                                        <div className="d-flex justify-content-end align-items-center gap-10">
                                                            <select className="form-control" name="status">
                                                                <option value={0} selected disabled>
                                                                    ---Select status---
                                                                </option>
                                                                <option className="text-capitalize" value="all">All </option>
                                                                <option className="text-capitalize" value="disburse">Disburse </option>
                                                                <option className="text-capitalize" value="hold">Hold</option>
                                                            </select>
                                                            <button type="submit" className="btn btn-success">
                                                                Filter
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="datatable" style={{ textAlign: 'left' }} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                                            <thead className="thead-light thead-50 text-capitalize">
                                                <tr>
                                                    <th>SL</th>
                                                    <th>Vendor name</th>
                                                    <th>Customer name</th>
                                                    <th>Order id</th>
                                                    <th>Transaction id</th>
                                                    <th>Order amount</th>
                                                    <th>Vendor amount</th>
                                                    <th>Admin commission</th>
                                                    <th>Received by</th>
                                                    <th>Delivered by</th>
                                                    <th>Delivery charge</th>
                                                    <th>Payment method</th>
                                                    <th>Tax</th>
                                                    <th className="text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        Digital Vendor
                                                    </td>
                                                    <td>
                                                        fatema subarna
                                                    </td>
                                                    <td>100124</td>
                                                    <td>4030-F7M9R-1665555309</td>
                                                    <td>$5,700.00</td>
                                                    <td>$4,845.00</td>
                                                    <td>$855.00</td>
                                                    <td>admin</td>
                                                    <td>admin</td>
                                                    <td>$10.00</td>
                                                    <td>cash on delivery</td>
                                                    <td>$120.00</td>
                                                    <td className="text-center">
                                                        <span className="badge badge-soft-success">
                                                            Disburse
                                                        </span>
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

            </div>



       
    )
}

export default Sallertransacations
