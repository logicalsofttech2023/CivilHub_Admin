import React from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";

const Productsmange = () => {
  let navigate = useNavigate();

  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };

  let productsdetails = () => {
    navigate("/productsdetails");
  };

  let productsedit = () => {
    navigate("/productseditproducts");
  };
  return (
    <div>
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
                alt
              />
              In House Product List
              <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                16
              </span>
            </h2>
          </div>
          <div className="card">
            <div className="card-body">
              <form
                action="https://6valley.6amtech.com/admin/product/list/in_house"
                method="GET"
              >
                <input type="hidden" defaultValue name="status" />
                <div className="row gx-2">
                  <div className="col-12">
                    <h4 className="mb-3">Filter Products</h4>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color" htmlFor="store">
                        Brand
                      </label>
                      <select
                        name="brand_id"
                        className="js-select2-custom form-control text-capitalize select2-hidden-accessible"
                        data-select2-id={1}
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value selected data-select2-id={3}>
                          All Brands
                        </option>
                        <option value={1} data-select2-id={4}>
                          i Bird
                        </option>
                        <option value={4} data-select2-id={5}>
                          Agron
                        </option>
                        <option value={5} data-select2-id={6}>
                          Triangle
                        </option>
                        <option value={6} data-select2-id={7}>
                          Estro
                        </option>
                        <option value={7} data-select2-id={8}>
                          Ohoenix
                        </option>
                        <option value={8} data-select2-id={9}>
                          Waltro
                        </option>
                        <option value={9} data-select2-id={10}>
                          JK
                        </option>
                        <option value={12} data-select2-id={11}>
                          Fashion
                        </option>
                        <option value={13} data-select2-id={12}>
                          S.Cube
                        </option>
                        <option value={14} data-select2-id={13}>
                          Estha dot
                        </option>
                        <option value={17} data-select2-id={14}>
                          Digital Product
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={2}
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection custom-select"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-brand_id-oe-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-brand_id-oe-container"
                              role="textbox"
                              aria-readonly="true"
                              title="All Brands"
                            >
                              <span>All Brands</span>
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Category
                      </label>
                      <select
                        className="js-select2-custom form-control select2-hidden-accessible"
                        name="category_id"
                        onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-category-select','select')"
                        data-select2-id={15}
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value selected disabled data-select2-id={17}>
                          Select category
                        </option>
                        <option value={11} data-select2-id={18}>
                          Home Improvement &amp; Tools
                        </option>
                        <option value={12} data-select2-id={19}>
                          Toys , Kids &amp; Babies
                        </option>
                        <option value={13} data-select2-id={20}>
                          Men's fashion
                        </option>
                        <option value={14} data-select2-id={21}>
                          Outdoor Fun &amp; Sports
                        </option>
                        <option value={15} data-select2-id={22}>
                          Women's fashion
                        </option>
                        <option value={16} data-select2-id={23}>
                          ebook
                        </option>
                        <option value={24} data-select2-id={24}>
                          Jewelry &amp; Watches
                        </option>
                        <option value={25} data-select2-id={25}>
                          Beauty, Health &amp; Hair
                        </option>
                        <option value={26} data-select2-id={26}>
                          Mobile Accessories
                        </option>
                        <option value={27} data-select2-id={27}>
                          Computer, Office &amp; Security
                        </option>
                        <option value={28} data-select2-id={28}>
                          Phones &amp; Telecom
                        </option>
                        <option value={34} data-select2-id={29}>
                          Home, Pet &amp; Appliances
                        </option>
                        <option value={39} data-select2-id={30}>
                          Bags &amp; Shoes
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={16}
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection custom-select"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-category_id-2r-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-category_id-2r-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select category"
                            >
                              <span>Select category</span>
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Sub Category
                      </label>
                      <select
                        className="js-select2-custom form-control select2-hidden-accessible"
                        name="sub_category_id"
                        id="sub-category-select"
                        onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-sub-category-select','select')"
                        data-select2-id="sub-category-select"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value selected disabled data-select2-id={32}>
                          Select Sub Category
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={31}
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection custom-select"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-sub-category-select-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-sub-category-select-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select Sub Category"
                            >
                              <span>Select Sub Category</span>
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Sub Sub Category
                      </label>
                      <select
                        className="js-select2-custom form-control select2-hidden-accessible"
                        name="sub_sub_category_id"
                        id="sub-sub-category-select"
                        data-select2-id="sub-sub-category-select"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value selected disabled data-select2-id={34}>
                          Select Sub Sub Category
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={33}
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection custom-select"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-sub-sub-category-select-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-sub-sub-category-select-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select Sub Sub Category"
                            >
                              <span>Select Sub Sub Category</span>
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-3 justify-content-end">
                      <a
                        href="https://6valley.6amtech.com/admin/product/list/in_house"
                        className="btn btn-secondary px-5"
                      >
                        Reset
                      </a>
                      <button
                        type="submit"
                        className="btn btn--primary px-5"
                        onclick="formUrlChange(this)"
                        data-action="https://6valley.6amtech.com/admin/product/list/in_house"
                      >
                        Show data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-md-12">
              <div className="card">
                <div className="px-3 py-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <form>
                        <div className="input-group input-group-custom input-group-merge">
                          <input
                            id="datatableSearch_"
                            type="search"
                            name="search"
                            className="form-control"
                            placeholder="Search Product Name"
                          />
                          <input type="hidden" defaultValue name="status" />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-wrap gap-3 justify-content-lg-end">
                      <a href="" className="btn btn--primary">
                        <i className="tio-add" />
                        <span className="text">Add new product</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    id="datatable"
                    style={{ textAlign: "left" }}
                    className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                  >
                    <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th className="text-right">Product Type</th>
                        <th className="text-right">Purchase price</th>
                        <th className="text-right">Selling price</th>
                        <th className="text-center">Show as featured</th>
                        <th className="text-center">Active status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>s{" "}
                        <td>
                          <a
                            href="/45"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883e708db4e.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Create Your Own Busi...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Digital</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured45_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={45} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured45"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured45',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Create Your Own Business pdf version-2 To the featured section',
                                          'Want to Remove Create Your Own Business pdf version-2 To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status45_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={45} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status45"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status45',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Create Your Own Business pdf version-2 Status',
                                          'Want to Turn OFF Create Your Own Business pdf version-2 Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/45"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/45"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-45','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/45"
                            method="post"
                            id="product-45"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>s{" "}
                        <td>
                          <a
                            href="/44"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883fd247d83.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Life of the Candle c...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Digital</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-right">$600.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured44_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={44} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured44"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured44',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Life of the Candle comic book To the featured section',
                                          'Want to Remove Life of the Candle comic book To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status44_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={44} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status44"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status44',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Life of the Candle comic book Status',
                                          'Want to Turn OFF Life of the Candle comic book Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/44"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/44"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-44','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/44"
                            method="post"
                            id="product-44"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>s{" "}
                        <td>
                          <a
                            href="/43"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488403614918.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Win - win Strategy (...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Digital</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured43_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={43} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured43"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured43',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Win - win Strategy (English) -eBook To the featured section',
                                          'Want to Remove Win - win Strategy (English) -eBook To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status43_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={43} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status43"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status43',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Win - win Strategy (English) -eBook Status',
                                          'Want to Turn OFF Win - win Strategy (English) -eBook Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/43"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/43"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-43','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/43"
                            method="post"
                            id="product-43"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>s{" "}
                        <td>
                          <a
                            href="/39"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Win - win Strategy (...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Digital</td>
                        <td className="text-right">$390.00</td>
                        <td className="text-right">$600.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured39_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={39} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured39"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured39',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Win - win Strategy (English) -eBook To the featured section',
                                          'Want to Remove Win - win Strategy (English) -eBook To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status39_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={39} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status39"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status39',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Win - win Strategy (English) -eBook Status',
                                          'Want to Turn OFF Win - win Strategy (English) -eBook Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/39"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/39"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-39','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/39"
                            method="post"
                            id="product-39"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>s{" "}
                        <td>
                          <a
                            href="/36"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-21-6260fd9161efe.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Quartz wrist watch w...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured36_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={36} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured36"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured36',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Quartz wrist watch waterproof watch for Men and Women To the featured section',
                                          'Want to Remove Quartz wrist watch waterproof watch for Men and Women To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status36_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={36} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status36"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status36',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Quartz wrist watch waterproof watch for Men and Women Status',
                                          'Want to Turn OFF Quartz wrist watch waterproof watch for Men and Women Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/36"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/36"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-36','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/36"
                            method="post"
                            id="product-36"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>s{" "}
                        <td>
                          <a
                            href="/32"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625f9fa1dbcfe.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              New Design Trendy Ca...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured32_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={32} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured32"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured32',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add New Design Trendy Casual Sneakers for Men Lightweight & Comfortable For Party We To the featured section',
                                          'Want to Remove New Design Trendy Casual Sneakers for Men Lightweight & Comfortable For Party We To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status32_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={32} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status32"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status32',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON New Design Trendy Casual Sneakers for Men Lightweight & Comfortable For Party We Status',
                                          'Want to Turn OFF New Design Trendy Casual Sneakers for Men Lightweight & Comfortable For Party We Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/32"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/32"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-32','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/32"
                            method="post"
                            id="product-32"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>s{" "}
                        <td>
                          <a
                            href="/29"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe4bc22bd3.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Hot Selling Sneakers...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$4,000.00</td>
                        <td className="text-right">$5,000.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured29_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={29} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured29"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured29',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Hot Selling Sneakers, Sneakers Men Casual Shoes Men Fashion Sneakers Fly knit Li To the featured section',
                                          'Want to Remove Hot Selling Sneakers, Sneakers Men Casual Shoes Men Fashion Sneakers Fly knit Li To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status29_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={29} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status29"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status29',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Hot Selling Sneakers, Sneakers Men Casual Shoes Men Fashion Sneakers Fly knit Li Status',
                                          'Want to Turn OFF Hot Selling Sneakers, Sneakers Men Casual Shoes Men Fashion Sneakers Fly knit Li Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/29"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/29"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-29','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/29"
                            method="post"
                            id="product-29"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>s{" "}
                        <td>
                          <a
                            href="/27"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe5a872824.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              New Fashionable Box...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured27_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={27} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured27"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured27',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add New Fashionable Box Balance Heel shoes for Women To the featured section',
                                          'Want to Remove New Fashionable Box Balance Heel shoes for Women To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status27_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={27} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status27"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status27',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON New Fashionable Box Balance Heel shoes for Women Status',
                                          'Want to Turn OFF New Fashionable Box Balance Heel shoes for Women Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/27"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/27"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-27','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/27"
                            method="post"
                            id="product-27"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>s{" "}
                        <td>
                          <a
                            href="/23"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-19-625e6fdf2fbb9.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Fashionable bag for...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$45.00</td>
                        <td className="text-right">$50.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured23_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={23} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured23"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured23',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Fashionable bag for women To the featured section',
                                          'Want to Remove Fashionable bag for women To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status23_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={23} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status23"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status23',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Fashionable bag for women Status',
                                          'Want to Turn OFF Fashionable bag for women Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/23"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/23"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-23','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/23"
                            method="post"
                            id="product-23"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>s{" "}
                        <td>
                          <a
                            href="/22"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884b314557d.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Enos 658 Hair Dryer...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$59.00</td>
                        <td className="text-right">$550.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured22_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={22} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured22"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured22',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Enos 658 Hair Dryer for Women-Multicolor To the featured section',
                                          'Want to Remove Enos 658 Hair Dryer for Women-Multicolor To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status22_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={22} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status22"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status22',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Enos 658 Hair Dryer for Women-Multicolor Status',
                                          'Want to Turn OFF Enos 658 Hair Dryer for Women-Multicolor Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/22"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/22"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-22','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/22"
                            method="post"
                            id="product-22"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>s{" "}
                        <td>
                          <a
                            href="/21"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884610598d4.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Fastest Electric Spi...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$100.00</td>
                        <td className="text-right">$200.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured21_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={21} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured21"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured21',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Fastest Electric Spice Grinder and Blender To the featured section',
                                          'Want to Remove Fastest Electric Spice Grinder and Blender To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status21_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={21} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status21"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status21',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Fastest Electric Spice Grinder and Blender Status',
                                          'Want to Turn OFF Fastest Electric Spice Grinder and Blender Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/21"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/21"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-21','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/21"
                            method="post"
                            id="product-21"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>s{" "}
                        <td>
                          <a
                            href="/18"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe611c0c72.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Timex marlin stainle...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$5,000.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured18_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={18} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured18"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured18',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Timex marlin stainless steel hand-wound movement To the featured section',
                                          'Want to Remove Timex marlin stainless steel hand-wound movement To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status18_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={18} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status18"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status18',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Timex marlin stainless steel hand-wound movement Status',
                                          'Want to Turn OFF Timex marlin stainless steel hand-wound movement Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/18"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/18"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-18','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/18"
                            method="post"
                            id="product-18"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>s{" "}
                        <td>
                          <a
                            href="/17"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe97736a17.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Simple Mobile Carrie...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured17_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={17} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured17"
                                name="status"
                                defaultValue={1}
                                onclick="toogleStatusModal(event,'product_featured17',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac To the featured section',
                                          'Want to Remove Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status17_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={17} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status17"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status17',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac Status',
                                          'Want to Turn OFF Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/17"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/17"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-17','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/17"
                            method="post"
                            id="product-17"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>s{" "}
                        <td>
                          <a
                            href="/7"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-13-62566e1a35a9c.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Progress lighting P4...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured7_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={7} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured7"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured7',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Progress lighting P4009-10 5-light chandelier, polished brass To the featured section',
                                          'Want to Remove Progress lighting P4009-10 5-light chandelier, polished brass To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status7_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={7} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status7"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status7',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Progress lighting P4009-10 5-light chandelier, polished brass Status',
                                          'Want to Turn OFF Progress lighting P4009-10 5-light chandelier, polished brass Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/7"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/7"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-7','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/7"
                            method="post"
                            id="product-7"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">15</th>s{" "}
                        <td>
                          <a
                            href="/4"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64882d3231ad8.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Crossbody Shoulder B...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured4_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={4} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured4"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured4',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Crossbody Shoulder Bag Soft Leather Bag Female Fashion To the featured section',
                                          'Want to Remove Crossbody Shoulder Bag Soft Leather Bag Female Fashion To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status4_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={4} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status4"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status4',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Crossbody Shoulder Bag Soft Leather Bag Female Fashion Status',
                                          'Want to Turn OFF Crossbody Shoulder Bag Soft Leather Bag Female Fashion Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/4"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/4"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-4','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/4"
                            method="post"
                            id="product-4"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">16</th>s{" "}
                        <td>
                          <a
                            href="/1"
                            className="media align-items-center gap-2"
                          >
                            <img
                              src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/brand-logo.png'"
                              className="avatar border"
                              alt
                            />
                            <span className="media-body title-color hover-c1">
                              Women's long-sleeve...
                            </span>
                          </a>
                        </td>
                        <td className="text-right">Physical</td>
                        <td className="text-right">$400.00</td>
                        <td className="text-right">$500.00</td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/featured-status"
                            method="post"
                            id="product_featured1_form"
                            className="product_featured_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={1} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_featured1"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_featured1',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Add Women`s long-sleeve lightweight french terry fleece quarter-zip top To the featured section',
                                          'Want to Remove Women`s long-sleeve lightweight french terry fleece quarter-zip top To the featured section',
                                          `<p>If enabled this product will be shown in the featured product on the website and customer app</p>`,
                                          `<p>If disabled this product will be removed from the featured product section of the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td className="text-center">
                          <form
                            action="https://6valley.6amtech.com/admin/product/status-update"
                            method="post"
                            id="product_status1_form"
                            className="product_status_form"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input type="hidden" name="id" defaultValue={1} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                id="product_status1"
                                name="status"
                                defaultValue={1}
                                defaultChecked
                                onclick="toogleStatusModal(event,'product_status1',
                                          'product-status-on.png','product-status-off.png',
                                          'Want to Turn ON Women`s long-sleeve lightweight french terry fleece quarter-zip top Status',
                                          'Want to Turn OFF Women`s long-sleeve lightweight french terry fleece quarter-zip top Status',
                                          `<p>If enabled this product will be available on the website and customer app</p>`,
                                          `<p>If disabled this product will be hidden from the website and customer app</p>`)"
                              />
                              <span className="switcher_control" />
                            </label>
                          </form>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <s
                              onClick={productsdetails}
                              className="btn btn-outline-info btn-sm square-btn"
                              title="View"
                              href="/1"
                            >
                              <i className="fa fa-eye" aria-hidden="true" />
                            </s>
                            <s
                              onClick={productsedit}
                              className="btn btn-outline--primary btn-sm square-btn"
                              title="Edit"
                              href="edit/1"
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              />
                            </s>
                            <a
                              className="btn btn-outline-danger btn-sm square-btn"
                              href="javascript:"
                              title="Delete"
                              onclick="form_alert('product-1','Want to delete this item ')"
                            >
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a>
                          </div>
                          <form
                            action="https://6valley.6amtech.com/admin/product/delete/1"
                            method="post"
                            id="product-1"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="sqYu9mSVBZiKQT4sRyj1D9zKP4CgAOc24FZdyhPk"
                            />{" "}
                            <input
                              type="hidden"
                              name="_method"
                              defaultValue="delete"
                            />{" "}
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mt-4">
                  <div className="px-4 d-flex justify-content-lg-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsmange;
