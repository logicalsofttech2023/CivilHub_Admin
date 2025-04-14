import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Updatebrand = () => {
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
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                  alt=""
                />
                Brand Update
                <span className="badge badge-soft-dark radius-50 fz-12">
                  10
                </span>
              </h2>
            </div>
            <div className="row mt-4 ">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body text-start">
              <form >
                <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item">
                    <span className="nav-link form-system-language-tab cursor-pointer active" id="en-link">
                      English(EN)
                    </span>
                  </li>
                  {/* <li className="nav-item">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="sa-link">
                      Arabic(SA)
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="bd-link">
                      Bangla(BD)
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="in-link">
                      Hindi(IN)
                    </span>
                  </li> */}
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group  form-system-language-form" id="en-form">
                      <label htmlFor="name" className="title-color">
                        Brand Name
                        <span className="text-danger">*</span>
                        (EN)
                      </label>
                      <input type="text" name="name[]" className="form-control" id="name" defaultValue placeholder="Ex : LUX" required />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="en" />
                    <div className="form-group d-none form-system-language-form" id="sa-form">
                      <label htmlFor="name" className="title-color">
                        Brand Name
                        <span className="text-danger">*</span>
                        (SA)
                      </label>
                      <input type="text" name="name[]" className="form-control" id="name" defaultValue placeholder="Ex : LUX" />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="sa" />
                    <div className="form-group d-none form-system-language-form" id="bd-form">
                      <label htmlFor="name" className="title-color">
                        Brand Name
                        <span className="text-danger">*</span>
                        (BD)
                      </label>
                      <input type="text" name="name[]" className="form-control" id="name" defaultValue placeholder="Ex : LUX" />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="bd" />
                    <div className="form-group d-none form-system-language-form" id="in-form">
                      <label htmlFor="name" className="title-color">
                        Brand Name
                        <span className="text-danger">*</span>
                        (IN)
                      </label>
                      <input type="text" name="name[]" className="form-control" id="name" defaultValue placeholder="Ex : LUX" />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="in" />
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Brand Logo<span className="text-danger">*</span>
                      </label>
                      <span className="ml-1 text-info">
                        Ratio 1:1 (500 x 500 px)
                      </span>
                      <div className="custom-file text-left">
                        <input type="file" name="image" id="brand-image" className="custom-file-input image-preview-before-upload" data-preview="#viewer" required accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                        <label className="custom-file-label" htmlFor="brand-image">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="text-center">
                      <img className="upload-img-view" id="viewer" src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-end">
                  <button type="reset" id="reset" className="btn btn-secondary px-4">Reset</button>
                  <button type="submit" className="btn btn--primary px-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
   
  );
};

export default Updatebrand;




