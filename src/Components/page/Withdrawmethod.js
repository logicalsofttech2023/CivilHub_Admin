import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Withdrawmethod = () => {
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
        <div className="mb-3">
          <div className="page-title-wrap d-flex justify-content-between flex-wrap align-items-center gap-3 mb-3">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png" alt="" />
              Withdraw method list
            </h2>
            <Link to='/withdrawmethodadd' className="btn btn--primary">+ Add method</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="p-3">
                <div className="row gy-1 align-items-center justify-content-between">
                  <div className="col-auto">
                    <h5>
                      Methods
                      <span className="badge badge-soft-dark radius-50 fz-12 ml-1"> 3</span>
                    </h5>
                  </div>
                  <div className="col-auto">
                    <form >
                      <div className="input-group input-group-custom input-group-merge">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                          </div>
                        </div>
                        <input id="datatableSearch_" type="search" name="searchValue" className="form-control" placeholder="Search Method Name" aria-label="Search orders" defaultValue required />
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
                      <th>Method name</th>
                      <th>Method fields</th>
                      <th className="text-center">Active status</th>
                      <th className="text-center">Default method</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bank</td>
                      <td>
                        <span className="badge badge-success opacity-75 fz-12 border border-white">
                          <b>Name:</b> Account number |
                          <b>Type:</b> string |
                          <b>Placeholder:</b> 1234 5667 8976 |
                          <b>Is Required:</b> Yes
                        </span><br />
                      </td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={3} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-status3" name="status" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-status3" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be shown in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will not be shown in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={3} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-default3" name="status" defaultValue={1} data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-default3" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be set as Default Withdraw Method in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will be remove as Default Withdraw Method in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/withdrawmethodadd'  className="btn btn-outline--primary btn-sm square-btn">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm square-btn delete-data" href="javascript:" title="Delete" data-id="delete-3">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                          <form action="https://6valley.6amtech.com/admin/sellers/withdraw-method/delete/3" method="post" id="delete-3">
                            <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>bkash</td>
                      <td>
                        <span className="badge badge-success opacity-75 fz-12 border border-white">
                          <b>Name:</b> Mobile number |
                          <b>Type:</b> number |
                          <b>Placeholder:</b> +8801111111111 |
                          <b>Is Required:</b> Yes
                        </span><br />
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/sellers/withdraw-method/status-update" method="post" id="withdrawal-method-status2-form" data-from="withdraw-method-status">
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={2} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-status2" name="status" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-status2" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be shown in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will not be shown in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/sellers/withdraw-method/default-status-update" method="post" id="withdrawal-method-default2-form" data-from="default-withdraw-method-status">
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={2} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-default2" name="status" defaultValue={1} data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-default2" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be set as Default Withdraw Method in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will be remove as Default Withdraw Method in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                        <Link to='/withdrawmethodadd' className="btn btn-outline--primary btn-sm square-btn">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                          <a onClick={deleteproducts} className="btn btn-outline-danger btn-sm square-btn delete-data" href="javascript:" title="Delete" data-id="delete-2">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                          <form action="https://6valley.6amtech.com/admin/sellers/withdraw-method/delete/2" method="post" id="delete-2">
                            <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>VISA Card</td>
                      <td>
                        <span className="badge badge-success opacity-75 fz-12 border border-white">
                          <b>Name:</b> Name |
                          <b>Type:</b> string |
                          <b>Placeholder:</b> Jhon Doe |
                          <b>Is Required:</b> Yes
                        </span><br />
                        <span className="badge badge-success opacity-75 fz-12 border border-white">
                          <b>Name:</b> Card number |
                          <b>Type:</b> string |
                          <b>Placeholder:</b> 1234 5678 9876 |
                          <b>Is Required:</b> Yes
                        </span><br />
                      </td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={1} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-status1" name="status" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-status1" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be shown in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will not be shown in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <form >
                          <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="id" defaultValue={1} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input toggle-switch-message" id="withdrawal-method-default1" name="status" defaultValue={1} defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="withdrawal-method-default1" data-on-image="wallet-on.png" data-off-image="wallet-off.png" data-on-title="Want to Turn ON This Withdraw Method?" data-off-title="Want to Turn OFF This Withdraw Method?" data-on-message="<p>If you enable this Withdraw method will be set as Default Withdraw Method in the vendor app and vendor panel</p>" data-off-message="<p>If you disable this Withdraw method will be remove as Default Withdraw Method in the vendor app and vendor panel</p>" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                        <Link to='/withdrawmethodadd' className="btn btn-outline--primary btn-sm square-btn">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-4">
                <div className="px-4 d-flex justify-content-center justify-content-md-end">
                </div>
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

export default Withdrawmethod;







