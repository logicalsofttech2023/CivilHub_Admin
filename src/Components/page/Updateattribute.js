import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Updateattribute = () => {
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
                Update attribute
               
              </h2>
            </div>
            <div className="row mb-5">
        <div className="col-md-12 mb-10">
          <div className="card">
            <div className="card-body text-start">
              <form>
                <input type="hidden" name="_token" defaultValue="HcBw85AVMU3NlW0FxSVZzbDgSe6986bbasNIVSVk" autoComplete="off" />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <span className="nav-link form-system-language-tab cursor-pointer active" id="en-link">
                      english (EN)
                    </span>
                  </li>
                  {/* <li className="nav-item text-capitalize">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="sa-link">
                      Arabic (SA)
                    </span>
                  </li>
                  <li className="nav-item text-capitalize">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="bd-link">
                      Bangla (BD)
                    </span>
                  </li>
                  <li className="nav-item text-capitalize">
                    <span className="nav-link form-system-language-tab cursor-pointer " id="in-link">
                      Hindi (IN)
                    </span>
                  </li> */}
                </ul>
                <div className="form-group  form-system-language-form" id="en-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name
                    (EN)</label>
                  <input type="text" name="name[]" defaultValue="size" className="form-control" id="name" placeholder="Enter Attribute Name" required />
                </div>
                <input type="hidden" name="lang[]" defaultValue="en" id="lang" />
                <div className="form-group d-none form-system-language-form" id="sa-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name
                    (SA)</label>
                  <input type="text" name="name[]" defaultValue className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="sa" id="lang" />
                <div className="form-group d-none form-system-language-form" id="bd-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name
                    (BD)</label>
                  <input type="text" name="name[]" defaultValue className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="bd" id="lang" />
                <div className="form-group d-none form-system-language-form" id="in-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name
                    (IN)</label>
                  <input type="text" name="name[]" defaultValue className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="in" id="lang" />
                <div className="d-flex justify-content-end gap-3">
                  <button type="reset" className="btn px-4 btn-secondary">Reset</button>
                  <button type="submit" className="btn px-4 btn--primary">Update</button>
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

export default Updateattribute;




