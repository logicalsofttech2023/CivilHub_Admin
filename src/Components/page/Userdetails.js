import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Sidebarr from './../Sidebar';

const Userdetails = () => {
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
                        <div className="d-print-none pb-2">
                            <div className="row align-items-center">
                                <div className="col-sm mb-2 mb-sm-0">
                                    <div className="mb-3">
                                        <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
                                            <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png" alt />
                                            Customer details
                                        </h2>
                                    </div>
                                    <div className="d-sm-flex align-items-sm-center">
                                        <h3 className="page-header-title">Customer ID #9</h3>
                                        <span className="ml-2 ml-sm-3">
                                            Joined At : 12 Oct 2022 05:11:12
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="printableArea">
                            <div className="col-lg-8 mb-3 mb-lg-0">
                                <div className="card">
                                    <div className="p-3">
                                        <div className="row justify-content-end">
                                            <div className="col-auto">
                                                <form action="https://6valley.6amtech.com/admin/customer/view/9" method="GET">
                                                    <div className="input-group input-group-merge input-group-custom">
                                                        
                                                        <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search orders" />
                                                        <button type="submit" className="btn btn--primary">Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive datatable-custom">
                                        <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                                            <thead className="thead-light thead-50 text-capitalize">
                                                <tr>
                                                    <th>Sl</th>
                                                    <th>Order ID</th>
                                                    <th>Total</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100167</a>
                                                    </td>
                                                    <td> $2,133.80</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100163</a>
                                                    </td>
                                                    <td> $575.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100153</a>
                                                    </td>
                                                    <td> $575.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100149</a>
                                                    </td>
                                                    <td> $485.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100144</a>
                                                    </td>
                                                    <td> $5,400.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100142</a>
                                                    </td>
                                                    <td> $583.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100140</a>
                                                    </td>
                                                    <td> $583.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100138</a>
                                                    </td>
                                                    <td> $23,040.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100136</a>
                                                    </td>
                                                    <td> $451.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100134</a>
                                                    </td>
                                                    <td> $6,490.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>
                                                        <a href="#" className="title-color hover-c1">100133</a>
                                                    </td>
                                                    <td> $5,400.00</td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-10">
                                                            <Link className="btn btn-outline--primary btn-sm edit square-btn" title="View" to="/orderdetails"><i className="fa fa-eye" aria-hidden="true"/> </Link>
                                                            <a className="btn btn-outline-info btn-sm square-btn" title="Invoice"  href="#"><i className="fa fa-download" aria-hidden="true" /> </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="card-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-4 d-flex align-items-center gap-2">
                                            <img src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png" alt />
                                            Customer
                                        </h4>
                                        <div className="media">
                                            <div className="mr-3">
                                                <img className="avatar rounded-circle avatar-70" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png" alt="Image" />
                                            </div>
                                            <div className="media-body d-flex flex-column gap-1">
                                                <span className="title-color hover-c1"><strong>Devid Jack</strong></span>
                                                <span className="title-color">
                                                    <strong>11 </strong>Orders
                                                </span>
                                                <span className="title-color"><strong>8801623456678</strong></span>
                                                <span className="title-color">customer@customer.com</span>
                                            </div>
                                            <div className="media-body text-right">
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

export default Userdetails
