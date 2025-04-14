import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Withdrawmethodadd = () => {
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
          <div className="page-title-wrap d-flex justify-content-between flex-wrap align-items-center gap-3 mb-3">
            <h2 className="page-title text-capitalize">
              <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png" alt="" />
              Withdrawal methods
            </h2>
            <button className="btn btn--primary" id="add-more-field">
              + Add Fields
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form >
              <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <div className="card card-body">
                <div className="form-floating">
                  <input type="text" className="form-control" name="method_name" id="method_name" placeholder="Select method name" defaultValue required />
                  <label>Method name *</label>
                </div>
              </div>
              <div className="mt-3">
                <div id="custom-field-section">
                  <div className="card card-body">
                    <div className="row gy-4 align-items-center">
                      <div className="col-md-6 col-12">
                        <select className="form-control js-select" name="field_type[]" required>
                          <option value selected disabled>Input Field Type *</option>
                          <option value="string">String</option>
                          <option value="number">Number</option>
                          <option value="date">Date</option>
                          <option value="password">Password</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" name="field_name[]" placeholder="Select field name" defaultValue required />
                          <label>Field name *</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" name="placeholder_text[]" placeholder="Select placeholder text" defaultValue required />
                          <label>Placeholder text *</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue={1} name="is_required[0]" id="flex-check-default--0" defaultChecked />
                          <label className="form-check-label" htmlFor="flex-check-default--0">
                            This field required
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue={1} name="is_default" id="flex-check-default-method" />
                    <label className="form-check-label" htmlFor="flex-check-default-method">
                      Default method
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="reset" className="btn btn--secondary mx-2">Reset</button>
                  <button type="submit" className="btn btn--primary demo_check">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
      </div>
    
  );
};

export default Withdrawmethodadd;









