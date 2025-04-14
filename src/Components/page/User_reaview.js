import React from 'react'
import Header from '../Header'
import Sidebarr from '../Sidebar'

const User_reaview = () => {
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
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
          <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/customer_review.png" alt />
          User reviews
        </h2>
      </div>
      <div className="card card-body">
        <div className="row border-bottom pb-3 align-items-center mb-20">
          <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
            <h5 className="text-capitalize d-flex gap-2 align-items-center">
              Review table
              <span className="badge badge-soft-dark radius-50 fz-12">19</span>
            </h5>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <form action="https://6valley.6amtech.com/admin/reviews/list" method="GET">
              <div className="input-group input-group-merge input-group-custom">
               
                <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Product or Customer"  />
                <button type="submit" className="btn btn--primary">Search</button>
              </div>
            </form>
          </div>
        </div>
        <form action="https://6valley.6amtech.com/admin/reviews/list" method="GET">
          <div className="row gy-3 align-items-end">
            <div className="col-md-4">
              <label htmlFor="name" className="title-color">Products</label>
              <div className="dropdown select-product-search w-100">
                <input type="text" className="product_id" name="product_id" defaultValue hidden />
                <button className="form-control text-start dropdown-toggle text-truncate " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Product
                </button>
                <div className="dropdown-menu w-100 px-2">
                  <div className="search-form mb-3">
                    <input type="text" className="js-form-search form-control search-bar-input" onkeyup="search_product()" placeholder="Search menu..." />
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <label className="title-color" htmlFor="customer">Customer</label>
              <input type="hidden" id="customer_id" name="customer_id" defaultValue="all" />
              <select onchange="customer_id_value(this.value)" data-placeholder="                                            All customer
                                      " className="js-data-example-ajax form-control form-ellipsis select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                <option value="all" data-select2-id={3}>All customer</option>
                <option value disabled data-select2-id={4}>Select your option</option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: '278.433px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-whpk-container"><span className="select2-selection__rendered" id="select2-whpk-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">                                            All customer
                      </span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="status" className="title-color d-flex">Choose
                  Status</label>
                <select className="form-control" name="status">
                  <option value selected>
                    --Select status--</option>
                  <option value={1}>
                    Active</option>
                  <option value={0}>
                    Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="from" className="title-color d-flex">From</label>
                <input type="date" name="from" id="from_date" defaultValue className="form-control" title="From date" />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="to" className="title-color d-flex">To</label>
                <input type="date" name="to" id="to_date" defaultValue className="form-control" title="To date" />
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <button id="filter" type="submit" className="btn btn--primary btn-block filter">
                  <i className="tio-filter-list nav-icon" />
                  Filter
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <button type="button" className="btn btn-outline--primary text-nowrap btn-block" data-toggle="dropdown">
                  <i className="tio-download-to" />
                  Export
                  <i className="tio-chevron-down" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a className="dropdown-item" href="https://6valley.6amtech.com/admin/reviews/export">
                      <img width={14} src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt />
                      Excel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="card mt-20">
        <div className="table-responsive datatable-custom">
          <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100" style={{textAlign: 'left'}}>
            <thead className="thead-light thead-50 text-capitalize">
              <tr>
                <th>SL</th>
                <th>Product</th>
                <th>Customer</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Date</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  <a href="#" className="title-color hover-c1">
                    Premium Business presenta...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>product quality was good.</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-6346820aaff2a.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-6346820aaff2a.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>12 Oct 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/19/0" method="get" id="reviews_status19_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status19" defaultChecked onclick="toogleStatusModal(event,'reviews_status19','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  2
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/47" className="title-color hover-c1">
                    Premium Business presenta...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    Devid Jack
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">4 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>It is a long established fact that...</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-63466755725da.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-63466755725da.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-63466755731aa.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-63466755731aa.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-634667557327e.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-10-12-634667557327e.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>12 Oct 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/18/0" method="get" id="reviews_status18_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status18" defaultChecked onclick="toogleStatusModal(event,'reviews_status18','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  3
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/36" className="title-color hover-c1">
                    Quartz wrist watch waterp...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>product quality is not good.</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c955e9a3f.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c955e9a3f.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603bed.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603bed.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603dc5.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603dc5.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603f26.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603f26.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95604195.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95604195.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>24 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/17/0" method="get" id="reviews_status17_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status17" defaultChecked onclick="toogleStatusModal(event,'reviews_status17','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  4
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/1" className="title-color hover-c1">
                    Women's long-sleeve light...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>hwxjdk. kg</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7ede63.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7ede63.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eede3.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eede3.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eee8e.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eee8e.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>23 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/16/0" method="get" id="reviews_status16_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status16" defaultChecked onclick="toogleStatusModal(event,'reviews_status16','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  5
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/3" className="title-color hover-c1">
                    Ladies Winter Long Sleeve...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>asdf</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee542ad0f.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee542ad0f.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee5432db4.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee5432db4.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee5432e3b.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260ee5432e3b.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>21 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/15/0" method="get" id="reviews_status15_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status15" defaultChecked onclick="toogleStatusModal(event,'reviews_status15','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  6
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/3" className="title-color hover-c1">
                    Ladies Winter Long Sleeve...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>Lorem Ipsum is simply dummy text of...</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260e29ad51a1.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260e29ad51a1.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260e29ad6104.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-21-6260e29ad6104.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>21 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/14/0" method="get" id="reviews_status14_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status14" defaultChecked onclick="toogleStatusModal(event,'reviews_status14','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  7
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/3" className="title-color hover-c1">
                    Ladies Winter Long Sleeve...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">5 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>Lorem Ipsum is simply dummy text of...</div>
                    <br />
                    <div className="d-flex flex-wrap">
                    </div>
                  </div>
                </td>
                <td>21 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/13/0" method="get" id="reviews_status13_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status13" defaultChecked onclick="toogleStatusModal(event,'reviews_status13','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  8
                </td>
                <td>
                  <a href="https://6valley.6amtech.com/admin/product/view/29" className="title-color hover-c1">
                    Hot Selling Sneakers, Sne...
                  </a>
                </td>
                <td>
                  <a href="" className="title-color hover-c1">
                    fatema subarna
                  </a>
                </td>
                <td>
                  <label className="badge badge-soft-info mb-0">
                    <span className="fz-12 d-flex align-items-center gap-1">4 <i className="tio-star" />
                    </span>
                  </label>
                </td>
                <td>
                  <div className="gap-1">
                    <div>product quality is good. product qu...</div>
                    <br />
                    <div className="d-flex flex-wrap">
                      <a href="https://6valley.6amtech.com/storage/app/public/review/2022-04-19-625e28ecedf39.png" data-lightbox="mygallery">
                        <img width={60} height={60} src="https://6valley.6amtech.com/storage/app/public/review/2022-04-19-625e28ecedf39.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png'" alt="Image" />
                      </a>
                    </div>
                  </div>
                </td>
                <td>19 Apr 2022</td>
                <td>
                  <form action="https://6valley.6amtech.com/admin/reviews/status/12/0" method="get" id="reviews_status12_form" className="reviews_status_form">
                    <label className="switcher mx-auto">
                      <input type="checkbox" className="switcher_input" id="reviews_status12" defaultChecked onclick="toogleStatusModal(event,'reviews_status12','customer-reviews-on.png','customer-reviews-off.png','Want to Turn ON Customer Reviews','Want to Turn OFF Customer Reviews',`<p>If enabled anyone can see this review on the user website and customer app</p>`,`<p>If disabled this review will be hidden from the user website and customer app</p>`)" />
                      <span className="switcher_control" />
                    </label>
                  </form>
                </td>
              </tr>
           
           
            </tbody>
          </table>
        </div>
        <div className="table-responsive mt-4">
          <div className="px-4 d-flex justify-content-lg-end">
          </div>
        </div>
      </div>
    </div>
      </div>

    </div>




      
   
  )
}

export default User_reaview
