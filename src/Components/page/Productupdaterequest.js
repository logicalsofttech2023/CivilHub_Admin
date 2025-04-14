import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Productupdaterequest = () => {
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
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-3">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
                alt=""
              />
              Update Product
              <span class="badge badge-soft-dark radius-50 fz-14 ml-1">0</span>
            </h2>
          </div>
          <div className="row mt-20 mb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="px-3 py-4">
                  <div className="row gy-2 justify-content-between align-items-center">
                    <div className="col-auto">
                      <h5 className="mb-0">
                        Product table
                        <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                          1
                        </span>
                      </h5>
                    </div>
                    <div className="col-auto">
                      <form>
                        <div className="input-group input-group-merge input-group-custom">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input
                            id="datatableSearch_"
                            type="search"
                            name="searchValue"
                            className="form-control"
                            placeholder="Search Product Name"
                            aria-label="Search orders"
                            defaultValue
                            required
                          />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    id="datatable"
                    className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start"
                  >
                    <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Previous shipping cost</th>
                        <th>New shipping cost</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <Link
                            to="/productsdetails"
                            className="title-color hover-c1"
                          >
                            Fashionable Box Bala...
                          </Link>
                        </td>
                        <td>$10.00</td>
                        <td>$70.00</td>
                        <td>
                          <div className="d-flex gap-10 align-items-center justify-content-center">
                            <button
                              className="btn btn--primary btn-sm action-admin-products-updated-shipping"
                              data-product-id={38}
                              data-status={1}
                            >
                              Approved
                            </button>
                            <button
                              className="btn btn-danger btn-sm action-admin-products-updated-shipping"
                              data-product-id={38}
                              data-status={2}
                            >
                              Denied
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mt-4">
                  <div className="px-4 d-flex justify-content-lg-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productupdaterequest;
