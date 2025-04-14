import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";

const Brandlist = () => {
const [brandlist, setbrandlist] = useState();

  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };


  useEffect(() => {
    getbranddlist();
  }, [0]);
  let getbranddlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/brand_list`)
      .then((res) => {
        setbrandlist(res.data.data);
      })
      .catch((error) => {
        
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
                Brand List
                <span className="badge badge-soft-dark radius-50 fz-12">
                  10
                </span>
              </h2>
            </div>
            <div className="row mt-20 mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row g-2 flex-grow-1">
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form >
                    <div className="input-group input-group-custom input-group-merge">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input id="datatableSearch_" type="search" name="searchValue" className="form-control" placeholder="Search by name" aria-label="Search by name" defaultValue required />
                      <button type="submit" className="btn btn--primary input-group-text">Search</button>
                    </div>
                  </form>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-8 d-flex justify-content-end">
                  <button type="button" className="btn btn-outline--primary" data-toggle="dropdown">
                  <i class="fa fa-download" aria-hidden="true"></i> Export
                    
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img width={14} src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" />
                        Excel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Brand Logo</th>
                      <th>Name</th>
                      <th className="text-center">Total Product</th>
                      <th className="text-center">Total Order</th>
                      <th className="text-center">Status</th>
                      <th className="text-center"> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488153b45156.png" />
                        </div>
                      </td>
                      <td>i Bird</td>
                      <td className="text-center">10</td>
                      <td className="text-center">76</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={1} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status1" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status1" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON i Bird Status" data-off-title="Want to Turn OFF i Bird Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                        
                        
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={1}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488157db5915.png" />
                        </div>
                      </td>
                      <td>Agron</td>
                      <td className="text-center">1</td>
                      <td className="text-center">1</td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/brand/status-update" method="post" id="brand-status4-form">
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={4} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status4" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status4" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Agron Status" data-off-title="Want to Turn OFF Agron Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={4}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-648816175f1ce.png" />
                        </div>
                      </td>
                      <td>Triangle</td>
                      <td className="text-center">17</td>
                      <td className="text-center">47</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={5} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status5" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status5" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Triangle Status" data-off-title="Want to Turn OFF Triangle Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={5}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488168607589.png" />
                        </div>
                      </td>
                      <td>Estro</td>
                      <td className="text-center">3</td>
                      <td className="text-center">2</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={6} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status6" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status6" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Estro Status" data-off-title="Want to Turn OFF Estro Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={6}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488170a50252.png" />
                        </div>
                      </td>
                      <td>Ohoenix</td>
                      <td className="text-center">6</td>
                      <td className="text-center">4</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={7} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status7" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status7" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Ohoenix Status" data-off-title="Want to Turn OFF Ohoenix Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={7}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-648817bc90d1b.png" />
                        </div>
                      </td>
                      <td>Waltro</td>
                      <td className="text-center">3</td>
                      <td className="text-center">4</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={8} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status8" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status8" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Waltro Status" data-off-title="Want to Turn OFF Waltro Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={8}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-64881805bdb1c.png" />
                        </div>
                      </td>
                      <td>JK</td>
                      <td className="text-center">7</td>
                      <td className="text-center">46</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={9} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status9" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status9" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON JK Status" data-off-title="Want to Turn OFF JK Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={9}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2022-04-13-62566ac36e4cd.png" />
                        </div>
                      </td>
                      <td>Crave</td>
                      <td className="text-center">2</td>
                      <td className="text-center">0</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={10} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status10" defaultValue={1} data-modal-id="toggle-status-modal" data-toggle-id="brand-status10" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Crave Status" data-off-title="Want to Turn OFF Crave Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={10}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2022-04-13-62566aaad1d50.png" />
                        </div>
                      </td>
                      <td>Framerce</td>
                      <td className="text-center">1</td>
                      <td className="text-center">1</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={11} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status11" defaultValue={1} data-modal-id="toggle-status-modal" data-toggle-id="brand-status11" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Framerce Status" data-off-title="Want to Turn OFF Framerce Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link
                          >
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={11}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488185184120.png" />
                        </div>
                      </td>
                      <td>Fashion</td>
                      <td className="text-center">3</td>
                      <td className="text-center">10</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={12} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status12" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status12" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Fashion Status" data-off-title="Want to Turn OFF Fashion Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={12}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-64881884d9d3e.png" />
                        </div>
                      </td>
                      <td>S.Cube</td>
                      <td className="text-center">6</td>
                      <td className="text-center">16</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={13} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status13" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status13" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON S.Cube Status" data-off-title="Want to Turn OFF S.Cube Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={13}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-648818d67d892.png" />
                        </div>
                      </td>
                      <td>Estha dot</td>
                      <td className="text-center">4</td>
                      <td className="text-center">7</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={14} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status14" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status14" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Estha dot Status" data-off-title="Want to Turn OFF Estha dot Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={14}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>
                        <div className="avatar-60 d-flex align-items-center rounded">
                          <img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-64882e182ba2c.png" />
                        </div>
                      </td>
                      <td>Digital Product</td>
                      <td className="text-center">3</td>
                      <td className="text-center">6</td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p" autoComplete="off" /> <input type="hidden" name="id" defaultValue={17} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" name="status" id="brand-status17" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="brand-status17" data-on-image="brand-status-on.png" data-off-image="brand-status-off.png" data-on-title="Want to Turn ON Digital Product Status" data-off-title="Want to Turn OFF Digital Product Status" data-on-message="<p>If enabled this brand will be available on the website and customer app</p>" data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/updatebrand' className="btn btn-outline-info btn-sm square-btn" title="Edit" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm brand-delete-button square-btn" title="Delete" id={17}>
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

export default Brandlist;


