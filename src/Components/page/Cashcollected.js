import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Cashcollected = () => {
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
         <div className="mt-3 mb-5">
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/earning_statictics.png" alt="" />
            Collect Cash
          </h2>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="card">
              <form >
                <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <div className="card-body">
                  <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                  <i class="fa fa-money" aria-hidden="true"></i> Collect Cash
                  </h5>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="d-flex flex-wrap gap-2 mt-3 title-color" id="chosen_price_div">
                        <div className="product-description-label">Total Cash In Hand:
                        </div>
                        <div className="product-price">
                          <strong>$9,524.01</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="number" name="amount" className="form-control" placeholder="Enter withdraw amount" required />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 justify-content-end">
                    <button type="submit" className="btn btn--primary px-4">Receive</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="card">
              <div className="px-3 py-4">
                <div className="d-flex justify-content-between gap-10 flex-wrap align-items-center">
                  <div className>
                    <form >
                    </form>
                  </div>
                </div>
              </div>
              <div className="table-responsive datatable-custom">
                <table className="table table-hover table-borderless table-thead-bordered table-align-middle card-table text-left">
                  <thead className="thead-light thead-50 text-capitalize table-nowrap">
                    <tr>
                      <th>SL</th>
                      <th>Delivery man name</th>
                      <th>Amount</th>
                      <th>Transaction date</th>
                    </tr>
                  </thead>
                  <tbody id="set-rows">
                    <tr>
                      <td>1</td>
                      <td>
                        Will Smith
                      </td>
                      <td>
                        $60.00
                      </td>
                      <td>
                        10-Jan-2023, 02:42:53 AM
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Will Smith
                      </td>
                      <td>
                        $400.00
                      </td>
                      <td>
                        20-Nov-2022, 01:38:14 AM
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

export default Cashcollected;













