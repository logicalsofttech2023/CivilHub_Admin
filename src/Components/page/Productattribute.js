import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Productattribute = () => {
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
                Attribute Setup
               
              </h2>
            </div>
            <div className="row mb-5">
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              <form  className="text-start">
                <input type="hidden" name="_token" defaultValue="HcBw85AVMU3NlW0FxSVZzbDgSe6986bbasNIVSVk" autoComplete="off" />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a className="nav-link form-system-language-tab cursor-pointer active" id="en-link">
                      english(EN)
                    </a>
                  </li>
                  {/* <li className="nav-item text-capitalize">
                    <a className="nav-link form-system-language-tab cursor-pointer " id="sa-link">
                      Arabic(SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a className="nav-link form-system-language-tab cursor-pointer " id="bd-link">
                      Bangla(BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a className="nav-link form-system-language-tab cursor-pointer " id="in-link">
                      Hindi(IN)
                    </a>
                  </li> */}
                </ul>
                <div className="form-group  form-system-language-form" id="en-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name<span className="text-danger">*</span>
                    (EN)</label>
                  <input type="text" name="name[]" className="form-control" id="name" placeholder="Enter Attribute Name" required />
                </div>
                <input type="hidden" name="lang[]" defaultValue="en" id="lang" />
                <div className="form-group d-none form-system-language-form" id="sa-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name<span className="text-danger">*</span>
                    (SA)</label>
                  <input type="text" name="name[]" className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="sa" id="lang" />
                <div className="form-group d-none form-system-language-form" id="bd-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name<span className="text-danger">*</span>
                    (BD)</label>
                  <input type="text" name="name[]" className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="bd" id="lang" />
                <div className="form-group d-none form-system-language-form" id="in-form">
                  <input type="hidden" id="id" />
                  <label className="title-color" htmlFor="name">Attribute Name<span className="text-danger">*</span>
                    (IN)</label>
                  <input type="text" name="name[]" className="form-control" id="name" placeholder="Enter Attribute Name" />
                </div>
                <input type="hidden" name="lang[]" defaultValue="in" id="lang" />
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  <button type="reset" className="btn btn-secondary">Reset</button>
                  <button type="submit" className="btn btn--primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row align-items-center">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                  <h5 className="mb-0 d-flex align-items-center gap-2">Attribute list
                    <span className="badge badge-soft-dark radius-50 fz-12">2</span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form >
                    <div className="input-group input-group-custom input-group-merge">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input id="datatableSearch_" type="search" name="searchValue" className="form-control" placeholder="Search by Attribute Name" aria-label="Search orders" defaultValue required />
                      <button type="submit" className="btn btn--primary">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-start">
              <div className="table-responsive">
                <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th className="text-center">Attribute Name </th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="text-center">Size</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updateattribute' className="btn btn-outline-info btn-sm square-btn" title="Edit" href="https://6valley.6amtech.com/admin/attribute/update/1">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm attribute-delete-button square-btn" title="Delete" id={1}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="text-center">Type</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updateattribute' className="btn btn-outline-info btn-sm square-btn" title="Edit" href="https://6valley.6amtech.com/admin/attribute/update/2">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm attribute-delete-button square-btn" title="Delete" id={2}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table-responsive mt-4">
              <div className="d-flex justify-content-lg-end">
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

export default Productattribute;



