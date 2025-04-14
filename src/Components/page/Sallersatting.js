import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Sidebarr from '../Sidebar'

const Sallersatting = () => {
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
                                <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt />
                                Vendor details
                            </h2>
                        </div>
                        <div className="flex-between d-sm-flex row align-items-center justify-content-between mb-2 mx-1">
                            <div>
                            </div>
                        </div>
                        <div className="page-header">
                            <div className="flex-between mx-1 row">
                                <div>
                                    <h1 className="page-header-title">Digital House</h1>
                                </div>
                            </div>
                            <div className="js-nav-scroller hs-nav-scroller-horizontal">
                                <ul className="nav nav-tabs flex-wrap page-header-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerdetails">Shop Overview</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerorder">Order</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/sallerproducts">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/sallersatting">Setting</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to="/sallertransacation">Transaction</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/sallerreview">Review</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <form  style={{ textAlign: 'left' }} method="GET">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0"> Sales Commission : </h5>
                                            <label className="switcher" htmlFor="commission_status">
                                                <input type="checkbox" className="switcher_input" defaultValue={1} name="commission_status" id="commission_status" onclick="toogleModal(event,'commission_status','general-icon.png','general-icon.png','Want to Turn ON Sales Commission For This Seller?','Want to Turn OFF Sales Commission For This Seller?',`<p>If sales commission is enabled here the this commission will be applied</p>`,`<p>If sales commission is disabled here the system default commission will be applied</p>`)" />
                                                <span className="switcher_control" />
                                            </label>
                                        </div>
                                        <div className="card-body">
                                            <small className="badge badge-soft-info text-wrap mb-3">
                                                If sales commission is disabled here the system default commission will be applied.
                                            </small>
                                            <div className="form-group">
                                                <label>Commission ( % )</label>
                                                <input type="number" defaultValue className="form-control" name="commission" />
                                            </div>
                                            <button type="submit" className="btn btn--primary">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="col-md-6">
                                <form  style={{ textAlign: 'left' }} method="GET">
                                    <input type="hidden" name="_token" defaultValue="syfKyDoYJ3mCIdT6gR7YRHkRYnQRfWf2KcUadmlv" /> <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0"> GST Number : </h5>
                                            <label className="switcher" htmlFor="gst_status">
                                                <input type="checkbox" className="switcher_input" defaultValue={1} name="gst_status" id="gst_status" onclick="toogleModal(event,'gst_status','general-icon.png','general-icon.png','Want to Turn ON GST Number For This Seller?','Want to Turn OFF GST Number For This Seller?',`<p>If GST number is enabled here it will be show in invoice</p>`,`<p>If GST number is disabled here it will not show in invoice</p>`)" />
                                                <span className="switcher_control" />
                                            </label>
                                        </div>
                                        <div className="card-body">
                                            <small className="badge text-wrap badge-soft-info mb-3">
                                                If GST number is disabled here it will not show in invoice.
                                            </small>
                                            <div className="form-group">
                                                <label> Number </label>
                                                <input type="text" defaultValue className="form-control" name="gst" />
                                            </div>
                                            <button type="submit" className="btn btn--primary">Update </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">Vendor POS</h5>
                                    </div>
                                    <div className="card-body">
                                        <form method="GET">
                                            <input type="hidden" name="seller_pos_update" defaultValue={1} />
                                            <div className="form-group">
                                                <div className="d-flex justify-content-between align-items-center gap-10 form-control">
                                                    <span className="title-color">
                                                        Vendor POS Permission
                                                        <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title data-original-title="If enabled this seller can access POS from the website and seller app">
                                                            <img width={16} src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                                        </span>
                                                    </span>
                                                    <label className="switcher" htmlFor="seller_pos">
                                                        <input type="checkbox" className="switcher_input" defaultValue={1} name="seller_pos" id="seller_pos" defaultChecked onclick="toogleModal(event,'seller_pos','pos-seller-on.png','pos-seller-off.png','Want to Turn ON POS For This Seller?','Want to Turn OFF POS For This Seller?',`<p>If enabled this seller can access POS from the website and seller app</p>`,`<p>If disabled this seller cannot access POS from the website and seller app</p>`)" />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn--primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>





       
    )
}

export default Sallersatting
