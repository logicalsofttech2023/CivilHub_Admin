import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Walletbonussetup = () => {
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
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4 pb-2">
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png" alt="" />
            Wallet bonus setup
          </h2>
          <div className="text-primary d-flex align-items-center gap-3 font-weight-bolder">
            How it works
            <div className="ripple-animation" data-toggle="modal" data-target="#howItWorksModal">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" className="svg replaced-svg">
                <path d="M9.00033 9.83268C9.23644 9.83268 9.43449 9.75268 9.59449 9.59268C9.75449 9.43268 9.83421 9.2349 9.83366 8.99935V5.64518C9.83366 5.40907 9.75366 5.21463 9.59366 5.06185C9.43366 4.90907 9.23588 4.83268 9.00033 4.83268C8.76421 4.83268 8.56616 4.91268 8.40616 5.07268C8.24616 5.23268 8.16644 5.43046 8.16699 5.66602V9.02018C8.16699 9.25629 8.24699 9.45074 8.40699 9.60352C8.56699 9.75629 8.76477 9.83268 9.00033 9.83268ZM9.00033 13.166C9.23644 13.166 9.43449 13.086 9.59449 12.926C9.75449 12.766 9.83421 12.5682 9.83366 12.3327C9.83366 12.0966 9.75366 11.8985 9.59366 11.7385C9.43366 11.5785 9.23588 11.4988 9.00033 11.4993C8.76421 11.4993 8.56616 11.5793 8.40616 11.7393C8.24616 11.8993 8.16644 12.0971 8.16699 12.3327C8.16699 12.5688 8.24699 12.7668 8.40699 12.9268C8.56699 13.0868 8.76477 13.1666 9.00033 13.166ZM9.00033 17.3327C7.84755 17.3327 6.76421 17.1138 5.75033 16.676C4.73644 16.2382 3.85449 15.6446 3.10449 14.8952C2.35449 14.1452 1.76088 13.2632 1.32366 12.2493C0.886437 11.2355 0.667548 10.1521 0.666992 8.99935C0.666992 7.84657 0.885881 6.76324 1.32366 5.74935C1.76144 4.73546 2.35505 3.85352 3.10449 3.10352C3.85449 2.35352 4.73644 1.7599 5.75033 1.32268C6.76421 0.88546 7.84755 0.666571 9.00033 0.666016C10.1531 0.666016 11.2364 0.884905 12.2503 1.32268C13.2642 1.76046 14.1462 2.35407 14.8962 3.10352C15.6462 3.85352 16.24 4.73546 16.6778 5.74935C17.1156 6.76324 17.3342 7.84657 17.3337 8.99935C17.3337 10.1521 17.1148 11.2355 16.677 12.2493C16.2392 13.2632 15.6456 14.1452 14.8962 14.8952C14.1462 15.6452 13.2642 16.2391 12.2503 16.6768C11.2364 17.1146 10.1531 17.3332 9.00033 17.3327ZM9.00033 15.666C10.8475 15.666 12.4206 15.0168 13.7195 13.7185C15.0184 12.4202 15.6675 10.8471 15.667 8.99935C15.667 7.15213 15.0178 5.57907 13.7195 4.28018C12.4212 2.98129 10.8481 2.33213 9.00033 2.33268C7.1531 2.33268 5.58005 2.98185 4.28116 4.28018C2.98227 5.57852 2.3331 7.15157 2.33366 8.99935C2.33366 10.8466 2.98283 12.4196 4.28116 13.7185C5.57949 15.0174 7.15255 15.6666 9.00033 15.666Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="modal fade" id="howItWorksModal" tabIndex={-1} aria-labelledby="howItWorksModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0 d-flex justify-content-end">
                  <button type="button" className="btn-close border-0" data-dismiss="modal" aria-label="Close"><i className="tio-clear" /></button>
                </div>
                <div className="modal-body px-4 px-sm-5 pt-0 text-center">
                  <div className="d-flex flex-column align-items-center gap-2">
                    <img width={80} className="mb-3" src="https://6valley.6amtech.com/public/assets/back-end/img/para.png" loading="lazy" alt="" />
                    <h4 className="lh-md">Wallet bonus is only applicable when a customer add fund to wallet via outside payment gateway!
                    </h4>
                    <p>Customer will get extra amount to his or her wallet additionally with the amount he or she added from other payment gateways. The bonus amount will be deduct from admin wallet &amp; will consider as admin expense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <form >
              <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <div className="row gx-2">
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="bonus_title" className="title-color text-capitalize d-flex">Bonus title</label>
                    <input type="text" name="title" className="form-control" id="bonus_title" placeholder="Ex:EID Dhamaka" required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="short_desc" className="title-color text-capitalize d-flex">Short description</label>
                    <input type="text" name="description" className="form-control" id="short_desc" placeholder="Ex:EID Dhamaka" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="bonus-type" className="title-color text-capitalize d-flex">Bonus type</label>
                    <select name="bonus_type" id="bonus-type" className="form-control" required>
                      <option value="percentage">Percentage(%)</option>
                      <option value="fixed">Fixed amount</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4" id="bonus_amount_area">
                  <div className="form-group">
                    <label htmlFor="bonus_amount" className="title-color text-capitalize d-flex">
                      Bonus amount (<span id="bonus-title-percent">%</span>)
                    </label>
                    <input type="number" name="bonus_amount" min={0} className="form-control" defaultValue={0} id="bonus_amount" placeholder="Ex:5" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="min_add_money_amount" className="title-color text-capitalize d-flex">Minimum add amount
                      ($)</label>
                    <input type="number" name="min_add_money_amount" min={0} className="form-control" id="min_add_money_amount" defaultValue={0} placeholder="Ex:100" required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4" id="max-bonus-amount-area">
                  <div className="form-group">
                    <label htmlFor="max_bonus_amount" className="title-color text-capitalize d-flex">Maximum bonus
                      ($)</label>
                    <input type="number" min={0} name="max_bonus_amount" defaultValue={0} className="form-control" id="max_bonus_amount" placeholder="Ex:5000" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="start-date-time" className="title-color text-capitalize d-flex">Start date</label>
                    <input type="date" name="start_date_time" id="start-date-time" className="form-control" required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="end-date-time" className="title-color text-capitalize d-flex">End date</label>
                    <input type="date" name="end_date_time" id="end-date-time" className="form-control" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex gap-3 justify-content-end">
                    <button type="reset" className="btn btn-secondary px-5">Reset</button>
                    <button type="submit" className="btn btn--primary px-5">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card mt-3">
          <div className="px-3 py-4">
            <div className="row align-items-center">
              <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                <h5 className="mb-0 d-flex align-items-center gap-10">
                  Wallet Bonus Table
                  <span className="badge badge-soft-dark radius-50 fz-12 ml-1">2</span>
                </h5>
              </div>
              <div className="col-sm-8 col-md-6 col-lg-4">
                <form >
                  <div className="input-group input-group-merge input-group-custom">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </div>
                    <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by bonus title" defaultValue aria-label="Search orders" />
                    <button type="submit" className="btn btn--primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
              <thead className="thead-light thead-50 text-capitalize">
                <tr>
                  <th>SL</th>
                  <th>Bonus title</th>
                  <th>Bonus info</th>
                  <th className="text-center">Bonus amount</th>
                  <th className="text-center">Started on</th>
                  <th className="text-center">Expires on</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Add fund Bonus</td>
                  <td>
                    <div className="d-flex flex-column gap-1">
                      <div>Minimum add amount -
                        $1,000.00</div>
                      <div>Maximum bonus -
                        $5,000.00</div>
                    </div>
                  </td>
                  <td className="text-center">35%</td>
                  <td className="text-center">12 Oct, 2023</td>
                  <td className="text-center">26 Nov, 2031</td>
                  <td>
                    <form >
                      <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input name="id" defaultValue={2} hidden />
                      <label className="switcher" htmlFor="bonus-setup-2">
                        <input type="checkbox" className="switcher_input toggle-switch-message" name="status" defaultValue={1} id="bonus-setup-2" defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="bonus-setup-2" data-on-image data-off-image data-on-title="Want to Turn ON the Add fund Bonus option?" data-off-title="Want to Turn OFF the Add fund Bonus option?" data-on-message="<p>If enabled customers can use Add fund Bonus</p>" data-off-message="<p>If disabled the Add fund Bonus will be hidden from customer</p>" />
                        <span className="switcher_control" />
                      </label>
                    </form>
                  </td>
                  <td>
                    <div className="d-flex gap-10 justify-content-center">
                    <Link to='/walletbonusedit' title="Edit" type="button" className="btn btn-outline--primary btn-sm btn-xs edit" href="https://6valley.6amtech.com/admin/customer/wallet/bonus-setup/edit/2">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </Link>
                      <a onClick={deleteproducts} title="Delete" className="btn btn-outline-danger btn-sm btn-xs delete-data" data-id="wallet-bonus-2">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </a>
                      <form >
                        <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Flat Bonus</td>
                  <td>
                    <div className="d-flex flex-column gap-1">
                      <div>Minimum add amount -
                        $500.00</div>
                    </div>
                  </td>
                  <td className="text-center">$150.00</td>
                  <td className="text-center">12 Oct, 2023</td>
                  <td className="text-center">22 Nov, 2030</td>
                  <td>
                    <form >
                      <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input name="id" defaultValue={1} hidden />
                      <label className="switcher" htmlFor="bonus-setup-1">
                        <input type="checkbox" className="switcher_input toggle-switch-message" name="status" defaultValue={1} id="bonus-setup-1" defaultChecked data-modal-id="toggle-status-modal" data-toggle-id="bonus-setup-1" data-on-image data-off-image data-on-title="Want to Turn ON the Flat Bonus option?" data-off-title="Want to Turn OFF the Flat Bonus option?" data-on-message="<p>If enabled customers can use Flat Bonus</p>" data-off-message="<p>If disabled the Flat Bonus will be hidden from customer</p>" />
                        <span className="switcher_control" />
                      </label>
                    </form>
                  </td>
                  <td>
                    <div className="d-flex gap-10 justify-content-center">
                      <Link to='/walletbonusedit' title="Edit" type="button" className="btn btn-outline--primary btn-sm btn-xs edit" href="https://6valley.6amtech.com/admin/customer/wallet/bonus-setup/edit/1">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </Link>
                      <a onClick={deleteproducts} title="Delete" className="btn btn-outline-danger btn-sm btn-xs delete-data" data-id="wallet-bonus-1">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </a>
                      <form >
                        <input type="hidden" name="_token" defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv" autoComplete="off" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end p-4">
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Walletbonussetup;


