import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Customermessage = () => {
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
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
         <div className="mt-3 ">
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/earning_statictics.png" alt="" />
            Customer Message
          </h2>
        </div>
        <div className="row mt-20 mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                  <h5 className="d-flex gap-2 align-items-center">
                    Customer message table
                    <span className="badge badge-soft-dark radius-50 fz-12">3
                    </span>
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
                      <input id="datatableSearch_" type="search" name="searchValue" className="form-control" placeholder="Search by Name or Mobile No or Email" aria-label="Search orders" defaultValue />
                      <button type="submit" className="btn btn--primary">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table id="datatable" style={{textAlign: 'left'}} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Customer Name</th>
                    <th>Contact Info</th>
                    <th>Subject</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{background: 'white'}}>
                    <td>1</td>
                    <td>Jack</td>
                    <td>
                      <div>
                        <div>08897667856</div>
                        <div>customer@customer.com</div>
                      </div>
                    </td>
                    <td className="text-wrap">Some Information</td>
                    <td>
                      <div className="d-flex gap-10 justify-content-center">
                        <Link to='/customermessageview' title="View" className="btn btn-outline-info btn-sm square-btn" href="https://6valley.6amtech.com/admin/contact/view/7">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete delete-data-without-form" data-id={7} data-action="https://6valley.6amtech.com/admin/contact/delete" title="Delete">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr style={{background: 'white'}}>
                    <td>2</td>
                    <td>Jhon Doe</td>
                    <td>
                      <div>
                        <div>0181111111</div>
                        <div>joshef.doe1025822@gmail.com</div>
                      </div>
                    </td>
                    <td className="text-wrap">payment system info</td>
                    <td>
                      <div className="d-flex gap-10 justify-content-center">
                        <Link to='/customermessageview' title="View" className="btn btn-outline-info btn-sm square-btn" href="https://6valley.6amtech.com/admin/contact/view/6">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete delete-data-without-form" data-id={6} data-action="https://6valley.6amtech.com/admin/contact/delete" title="Delete">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr style={{background: 'white'}}>
                    <td>3</td>
                    <td>Lisa</td>
                    <td>
                      <div>
                        <div>01111111111</div>
                        <div>lisa@gmail.com</div>
                      </div>
                    </td>
                    <td className="text-wrap">information for order the digital product.</td>
                    <td>
                      <div className="d-flex gap-10 justify-content-center">
                        <Link to='/customermessageview' title="View" className="btn btn-outline-info btn-sm square-btn" href="https://6valley.6amtech.com/admin/contact/view/5">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete delete-data-without-form" data-id={5} data-action="https://6valley.6amtech.com/admin/contact/delete" title="Delete">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
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
      </div>
   
  );
};

export default Customermessage;














