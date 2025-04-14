import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const NotificationsEdit = () => {
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
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/push_notification.png"
                  alt
                />
                Push notification update
              </h2>
            </div>
            <div className="card">
              <div className="card-body">
                <form>
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                  />{" "}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="input-label"
                          htmlFor="exampleFormControlInput1"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          defaultValue="Coupon"
                          name="title"
                          className="form-control"
                          placeholder="New notification"
                          required
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label
                          className="input-label"
                          htmlFor="exampleFormControlInput1"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          required
                          defaultValue={
                            'From October, Use Code "pcuw655ytg" to get 65% discount.'
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <center>
                        <img
                          className="upload-img-view mt-4"
                          id="viewer"
                          onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img2.jpg'"
                          src="https://6valley.6amtech.com/storage/app/public/notification/2022-04-20-625f9cc7e2f84.png"
                          alt="image"
                        />
                      </center>
                      <label className="title-color">Image</label>
                      <span className="text-info"> ( Ratio 1:1 )</span>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="image"
                          id="customFileEg1"
                          className="custom-file-input"
                          accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFileEg1"
                        >
                          Choose File
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-end gap-3">
                        <button type="reset" className="btn btn-secondary">
                          Reset
                        </button>
                        <button type="submit" className="btn btn--primary">
                          Update
                        </button>
                      </div>
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

export default NotificationsEdit;
