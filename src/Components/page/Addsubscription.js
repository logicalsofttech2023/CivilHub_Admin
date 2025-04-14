import React from "react";
import Header from "../Header";
import Sidebarr from "./../Sidebar";

const Addsubscription = () => {
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
          <div className="card mt-3 rest-part">
            <div className="card-header">
              <div className="d-flex gap-2">
                <h4 className="mb-0">Add Subscription</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="form-group">
                    <label htmlFor="name" className="title-color">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name[]"
                      id="sa_name"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="form-group">
                    <label htmlFor="name" className="title-color">
                      Title
                    </label>
                    <input
                      type="text"
                      name="name[]"
                      id="sa_name"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="form-group">
                    <label htmlFor="name" className="title-color">
                      Date
                    </label>
                    <input
                      type="date"
                      name="name[]"
                      id="sa_name"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="title-color text-capitalize"
                    >
                      Subscription type
                    </label>
                    <select
                      className="js-example-responsive form-control w-100"
                      name="banner_type"
                      required
                      id="banner_type_select"
                    >
                      <option value="Main Banner">Yearly</option>
                      <option value="Popup Banner">Quarterly</option>
                      <option value="Footer Banner">6 months</option>
                      <option value="Main Section Banner" selected>
                        Montly
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Add Subscription</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Addsubscription;
