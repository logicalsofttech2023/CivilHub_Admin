import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Walletbonusedit = () => {
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
            Wallet bonus edit
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
                    <h4 className="lh-md">
                      Wallet bonus is only applicable when a customer add fund to wallet via outside payment gateway!
                    </h4>
                    <p>Customer will get extra amount to his or her wallet additionally with the amount he or she added from other payment gateways The bonus amount will be deduct from admin wallet &amp; will consider as admin expense</p>
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
                <input type="hidden" name="id" defaultValue={2} />
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="bonus_title" className="title-color text-capitalize d-flex">Bonus title</label>
                    <input type="text" name="title" className="form-control" id="bonus_title" placeholder="Ex:EID Dhamaka" defaultValue="Add fund Bonus" required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="short_desc" className="title-color text-capitalize d-flex">Short description</label>
                    <input type="text" name="description" className="form-control" id="short_desc" placeholder="Ex:EID Dhamaka" defaultValue="Add more than 1000 and get 35% extra" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="bonus-type" className="title-color text-capitalize d-flex">Bonus type</label>
                    <select name="bonus_type" id="bonus-type" className="form-control">
                      <option value="percentage" selected>Percentage (%)</option>
                      <option value="fixed">Fixed amount</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="bonus_amount" className="title-color text-capitalize d-flex">
                      Bonus amount(<span id="bonus-title-percent">%</span>)
                    </label>
                    <input type="number" name="bonus_amount" min={0} className="form-control" id="bonus-title-percent" placeholder="Ex:5" defaultValue={35} required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="min_add_money_amount" className="title-color text-capitalize d-flex">Minimum add amount
                      ($)</label>
                    <input type="number" name="min_add_money_amount" min={0} className="form-control" id="min_add_money_amount" placeholder="Ex:100" defaultValue={1000} required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4" id="max-bonus-amount-area">
                  <div className="form-group">
                    <label htmlFor="max_bonus_amount" className="title-color text-capitalize d-flex">Maximum bonus
                      ($)</label>
                    <input type="number" min={0} name="max_bonus_amount" className="form-control" id="max_bonus_amount" placeholder="Ex:5000" defaultValue={5000} />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="start-date-time" className="title-color text-capitalize d-flex">Start date</label>
                    <input type="date" name="start_date_time" id="start-date-time" className="form-control" defaultValue="2023-10-12" required />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="end-date-time" className="title-color text-capitalize d-flex">End date</label>
                    <input type="date" name="end_date_time" id="end-date-time" className="form-control" defaultValue="2031-11-26" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex gap-3 justify-content-end">
                    <Link to='/walletbonussetup' className="btn btn-secondary px-5">Back</Link>
                    <button type="submit" className="btn btn--primary px-5">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Walletbonusedit;



