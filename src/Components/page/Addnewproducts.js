import React, { useState } from "react";
import Header from "../Header";
import "../sidebar.css";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
const Addnewproducts = () => {
  const [hi , sethi] = useState(true);

  return (
    <div>
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3 mt-3 pl-3">
              <h2 className="h1 mb-0 d-flex gap-2">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
                  alt
                />
                Add New Product
              </h2>
            </div>
            <form
              className="product-form text-start mb-8"
              method="POST"
              encType="multipart/form-data"
              id="product_form"
            >
              <div className="card">
                <div className="card-body">
                  <div className=" lang_form" id="en-form">
                  <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <a className="nav-link lang_link active" href="#" id="en-link">English (EN)</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link lang_link " href="#" id="hi-link">Hindi - हिन्दी (HI)</a>
            </li>
           
          </ul>
          <div className='row'>


            {hi ==true ? (<div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label className="title-color" htmlFor="en_name">
                        Product name (EN)
                      </label>
                      <input
                        type="text"
                        required
                        name="name[]"
                        id="en_name"
                        className="form-control"
                        placeholder="New Product"
                      />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="en" />
                    <div className="form-group pt-4">
                      <label className="title-color" htmlFor="en_description">
                        Description (EN)
                      </label>
                     

                       <textarea
                        type="text"
                        required
                        name="name[]"
                        id="en_name"
                        className="form-control"
                        placeholder="New Product"
                      />
                    </div>
                  </div>) : (<div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label className="title-color" htmlFor="en_name">
                        Product name (HI)
                      </label>
                      <input
                        type="text"
                        required
                        name="name[]"
                        id="en_name"
                        className="form-control"
                        placeholder="New Product"
                      />
                    </div>
                    <input type="hidden" name="lang[]" defaultValue="en" />
                    <div className="form-group pt-4">
                      <label className="title-color" htmlFor="en_description">
                        Description (HI)
                      </label>
                     

                       <textarea
                        type="text"
                        required
                        name="name[]"
                        id="en_name"
                        className="form-control"
                        placeholder="New Product"
                      />
                    </div>
                  </div>) }
            



                     
                 </div>



              
                  </div>
                </div>
              </div>
              <div className="card mt-3 rest-part">
                <div className="card-header">
                  <div className="d-flex gap-2">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 className="mb-0">General setup</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label htmlFor="name" className="title-color">
                          Category
                        </label>
                        <select
                          className="js-select2-custom form-control"
                          name="category_id"
                          onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-category-select','select')"
                          required
                        >
                          <option value selected disabled>
                            Select category
                          </option>
                          <option value={11}>
                            Home Improvement &amp; Tools
                          </option>
                          <option value={12}>Toys , Kids &amp; Babies</option>
                          <option value={13}>Men's fashion</option>
                          <option value={14}>Outdoor Fun &amp; Sports</option>
                          <option value={15}>Women's fashion</option>
                          <option value={16}>ebook</option>
                          <option value={24}>Jewelry &amp; Watches</option>
                          <option value={25}>Beauty, Health &amp; Hair</option>
                          <option value={26}>Mobile Accessories</option>
                          <option value={27}>
                            Computer, Office &amp; Security
                          </option>
                          <option value={28}>Phones &amp; Telecom</option>
                          <option value={34}>Home, Pet &amp; Appliances</option>
                          <option value={39}>Bags &amp; Shoes</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label htmlFor="name" className="title-color">
                          Sub Category
                        </label>
                        <select
                          className="js-select2-custom form-control"
                          name="sub_category_id"
                          id="sub-category-select"
                          onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-sub-category-select','select')"
                        >
                          <option value selected disabled>
                            Select Sub Category
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label htmlFor="name" className="title-color">
                          Sub Sub Category
                        </label>
                        <select
                          className="js-select2-custom form-control"
                          name="sub_sub_category_id"
                          id="sub-sub-category-select"
                        >
                          <option value selected disabled>
                            Select Sub Sub Category
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label className="title-color">Brand</label>
                        <select
                          className="js-select2-custom form-control"
                          name="brand_id"
                          required
                        >
                          <option value selected disabled>
                            Select Brand
                          </option>
                          <option value={4}>Agron</option>
                          <option value={10}>Crave</option>
                          <option value={17}>Digital Product</option>
                          <option value={14}>Estha dot</option>
                          <option value={6}>Estro</option>
                          <option value={12}>Fashion</option>
                          <option value={11}>Framerce</option>
                          <option value={1}>i Bird</option>
                          <option value={9}>JK</option>
                          <option value={7}>Ohoenix</option>
                          <option value={13}>S.Cube</option>
                          <option value={5}>Triangle</option>
                          <option value={8}>Waltro</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label className="title-color">Product type</label>
                        <select
                          name="product_type"
                          id="product_type"
                          className="form-control"
                          required
                        >
                          <option value="physical" selected>
                            Physical
                          </option>
                          <option value="digital">Digital</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 col-xl-3"
                      id="digital_product_type_show"
                    >
                      <div className="form-group">
                        <label
                          htmlFor="digital_product_type"
                          className="title-color"
                        >
                          Delivery type
                        </label>
                        <span
                          className="input-label-secondary cursor-pointer"
                          data-toggle="tooltip"
                          title="For “Ready Product” deliveries  customers can pay & instantly download pre-uploaded digital products. For “Ready After Sale” deliveries  customers pay first  then admin uploads the digital products that become available to customers for download"
                        >
                          <img
                            src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                            alt
                          />
                        </span>
                        <select
                          name="digital_product_type"
                          id="digital_product_type"
                          className="form-control"
                          required
                        >
                          <option value selected disabled>
                            ---Select---
                          </option>
                          <option value="ready_after_sell">
                            Ready After Sell
                          </option>
                          <option value="ready_product">Ready Product</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 col-xl-3"
                      id="digital_file_ready_show"
                    >
                      <div className="form-group">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <label
                            htmlFor="digital_file_ready"
                            className="title-color mb-0"
                          >
                            Upload file
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Upload the digital products from here"
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="digital_file_ready"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                        <div className="mt-2">
                          File type: jpg, jpeg, png, gif, zip, pdf
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <label className="title-color d-flex justify-content-between gap-2">
                          <div className="d-flex align-items-center gap-2">
                            Product SKU
                            <span
                              className="input-label-secondary cursor-pointer"
                              data-toggle="tooltip"
                              title="Create a unique product code by clicking on the “Generate Code” button"
                            >
                              <img
                                src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                alt
                              />
                            </span>
                          </div>
                          <a
                            className="style-one-pro cursor-pointer"
                            onclick="document.getElementById('generate_number').value = getRndInteger()"
                          >
                            Generate code
                          </a>
                        </label>
                        <input
                          type="text"
                          minLength={6}
                          id="generate_number"
                          name="code"
                          className="form-control"
                          defaultValue
                          placeholder="Code"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 physical_product_show">
                      <div className="form-group">
                        <label className="title-color">Unit</label>
                        <select
                          className="js-example-basic-multiple form-control"
                          name="unit"
                        >
                          <option value="kg">kg</option>
                          <option value="pc">pc</option>
                          <option value="gms">gms</option>
                          <option value="ltrs">ltrs</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="form-group">
                        <label className="title-color d-flex align-items-center gap-2">
                          Search tags
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Add the product search tag for this product that customers can use to search quickly"
                          >
                            <img
                              width={16}
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter tag"
                          name="tags"
                          data-role="tagsinput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 rest-part">
                <div className="card-header">
                  <div className="d-flex gap-2">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 className="mb-0">Pricing &amp; others</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-end">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2 mb-2">
                          <label className="title-color mb-0">
                            Purchase price ($)
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Add the purchase price for this product."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          placeholder="Purchase price"
                          defaultValue
                          name="purchase_price"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2 mb-2">
                          <label className="title-color mb-0">
                            Unit price ($)
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Set the selling price for each unit of this product. This Unit Price section won’t be applied if you set a variation wise price."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          step="0.01"
                          placeholder="Unit price"
                          name="unit_price"
                          defaultValue
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 col-xl-3"
                      id="minimum_order_qty"
                    >
                      <div className="form-group">
                        <div className="d-flex gap-2 mb-2">
                          <label
                            className="title-color mb-0"
                            htmlFor="minimum_order_qty"
                          >
                            Minimum order qty
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Set the minimum order quantity that customers must choose. Otherwise  the checkout process won’t start."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={1}
                          defaultValue={1}
                          step={1}
                          placeholder="Minimum order quantity"
                          name="minimum_order_qty"
                          id="minimum_order_qty"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 col-xl-3 physical_product_show"
                      id="quantity"
                    >
                      <div className="form-group">
                        <div className="d-flex gap-2 mb-2">
                          <label
                            className="title-color mb-0"
                            htmlFor="current_stock"
                          >
                            Current stock qty
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Add the Stock Quantity of this product that will be visible to customers."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          defaultValue={0}
                          step={1}
                          placeholder="Quantity"
                          name="current_stock"
                          id="current_stock"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2 mb-2">
                          <label
                            className="title-color mb-0"
                            htmlFor="discount_Type"
                          >
                            Discount Type
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="If “Flat”  discount amount will be set as fixed amount. If “Percentage”  discount amount will be set as percentage."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <select
                          className="form-control"
                          name="discount_type"
                          id="discount_type"
                        >
                          <option value="flat">Flat</option>
                          <option value="percent">Percent</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2">
                          <label className="title-color" htmlFor="discount">
                            Discount amount{" "}
                            <span className="discount_amount_symbol">($)</span>
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Add the discount amount in percentage or a fixed value here."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          defaultValue={0}
                          step="0.01"
                          placeholder="Ex: 5"
                          name="discount"
                          id="discount"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2">
                          <label className="title-color" htmlFor="tax">
                            Tax amount(%)
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Set the Tax Amount in percentage here"
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          defaultValue={0}
                          step="0.01"
                          placeholder="Ex: 5"
                          name="tax"
                          id="tax"
                          className="form-control"
                        />
                        <input
                          name="tax_type"
                          defaultValue="percent"
                          className="d-none"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="form-group">
                        <div className="d-flex gap-2">
                          <label className="title-color" htmlFor="tax_model">
                            Tax calculation
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Set the tax calculation method from here. Select “Include with product” to combine product price and tax on the checkout. Pick “Exclude from product” to display product price and tax amount separately."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <select
                          name="tax_model"
                          id="tax_model"
                          className="form-control"
                          required
                        >
                          <option value="include">Include with product</option>
                          <option value="exclude">Exclude with product</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 col-xl-3 physical_product_show"
                      id="shipping_cost"
                    >
                      <div className="form-group">
                        <div className="d-flex gap-2">
                          <label className="title-color">
                            Shipping cost ($)
                          </label>
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            title="Set the shipping cost for this product here. Shipping cost will only be applicable if product-wise shipping is enabled."
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </div>
                        <input
                          type="number"
                          min={0}
                          defaultValue={0}
                          step={1}
                          placeholder="Shipping cost"
                          name="shipping_cost"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-6 physical_product_show"
                      id="shipping_cost_multy"
                    >
                      <div className="form-group">
                        <div className="form-control h-auto min-form-control-height d-flex align-items-center flex-wrap justify-content-between gap-2">
                          <div className="d-flex gap-2">
                            <label
                              className="title-color text-capitalize"
                              htmlFor="shipping_cost"
                            >
                              Shipping cost multiply with quantity
                            </label>
                            <span
                              className="input-label-secondary cursor-pointer"
                              data-toggle="tooltip"
                              title="If enabled  the shipping charge will increase with the product quantity"
                            >
                              <img
                                src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                alt
                              />
                            </span>
                          </div>
                          <div>
                            <label className="switcher">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                name="multiplyQTY"
                              />
                              <span className="switcher_control" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 rest-part physical_product_show">
                <div className="card-header">
                  <div className="d-flex gap-2">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 className="mb-0">Product variation setup</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="mb-3 d-flex align-items-center gap-2">
                        <label htmlFor="colors" className="title-color mb-0">
                          Select colors :
                        </label>
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            id="color_switcher"
                            defaultValue
                            name="colors_active"
                          />
                          <span className="switcher_control" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="choice_attributes"
                        className="title-color"
                      >
                        Select attributes :
                      </label>
                      <select
                        className="js-example-basic-multiple js-states js-example-responsive form-control"
                        name="choice_attributes[]"
                        id="choice_attributes"
                        multiple="multiple"
                      >
                        <option value={1}>size</option>
                        <option value={2}>type</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-2 mb-2">
                      <div
                        className="row customer_choice_options mt-2"
                        id="customer_choice_options"
                      />
                      <div
                        className="form-group sku_combination"
                        id="sku_combination"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 rest-part">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="form-group">
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                            <div>
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize font-weight-bold mb-0"
                              >
                                Product thumbnail
                              </label>
                              <span className="badge badge-soft-info">
                                Ratio 1:1 (500 x 500 px)
                              </span>
                              <span
                                className="input-label-secondary cursor-pointer"
                                data-toggle="tooltip"
                                title="Add your product’s thumbnail in JPG, PNG or JPEG Format within 2MB"
                              >
                                <img
                                  src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                  alt
                                />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="custom_upload_input">
                              <input
                                type="file"
                                name="image"
                                className="custom-upload-input-file"
                                id
                                data-imgpreview="pre_img_viewer"
                                accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                onchange="uploadColorImage(this)"
                              />
                              <span
                                className="delete_file_input btn btn-outline-danger btn-sm square-btn"
                                style={{ display: "none" }}
                              >
                                <i className="tio-delete" />
                              </span>
                              <div className="img_area_with_preview position-absolute z-index-2">
                                <img
                                  id="pre_img_viewer"
                                  className="h-auto aspect-1 bg-white"
                                  src="img"
                                  onerror="this.classList.add('d-none')"
                                />
                              </div>
                              <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                  <img
                                    src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                                    className="w-50"
                                  />
                                  <h3 className="text-muted">Upload Image</h3>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted mt-2">
                              Image format : Jpg, png, jpeg, webp, <br />
                              Image size : Max 2 MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="color_image_column col-md-9 d-none">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="form-group">
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                            <div>
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize font-weight-bold mb-0"
                              >
                                Colour wise product image
                              </label>
                              <span className="badge badge-soft-info">
                                Ratio 1:1 (500 x 500 px)
                              </span>
                              <span
                                className="input-label-secondary cursor-pointer"
                                data-toggle="tooltip"
                                title="Add color-wise product images here."
                              >
                                <img
                                  src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                  alt
                                />
                              </span>
                            </div>
                          </div>
                          <p className="text-muted">
                            Must upload colour wise images first. Colour is
                            shown in the image section top right.{" "}
                          </p>
                          <div id="color_wise_image" className="row g-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="additional_image_column col-md-9">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="title-color text-capitalize font-weight-bold mb-0"
                            >
                              Upload additional image
                            </label>
                            <span className="badge badge-soft-info">
                              Ratio 1:1 (500 x 500 px)
                            </span>
                            <span
                              className="input-label-secondary cursor-pointer"
                              data-toggle="tooltip"
                              title="Upload any additional images for this product from here."
                            >
                              <img
                                src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                alt
                              />
                            </span>
                          </div>
                        </div>
                        <p className="text-muted">
                          Upload additional product images
                        </p>
                        <div className="row g-2" id="additional_Image_Section">
                          <div className="col-sm-12 col-md-4">
                            <div className="custom_upload_input position-relative border-dashed-2">
                              <input
                                type="file"
                                name="images[]"
                                className="custom-upload-input-file"
                                data-index={1}
                                data-imgpreview="additional_Image_1"
                                accept=".jpg, .png, .webp, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                onchange="addMoreImage(this, '#additional_Image_Section')"
                              />
                              <span
                                className="delete_file_input delete_file_input_section btn btn-outline-danger btn-sm square-btn"
                                style={{ display: "none" }}
                              >
                                <i className="tio-delete" />
                              </span>
                              <div className="img_area_with_preview position-absolute z-index-2 border-0">
                                <img
                                  id="additional_Image_1"
                                  className="h-auto aspect-1 bg-white"
                                  src="img"
                                  onerror="this.classList.add('d-none')"
                                />
                              </div>
                              <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                  <img
                                    src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                                    className="w-50"
                                  />
                                  <h3 className="text-muted">Upload Image</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 rest-part">
                <div className="card-header">
                  <div className="d-flex gap-2">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 className="mb-0">Product video</h4>
                    <span
                      className="input-label-secondary cursor-pointer"
                      data-toggle="tooltip"
                      title="Add the YouTube video link here. Only the YouTube-embedded link is supported."
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                        alt
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="title-color mb-0">
                      Youtube video link
                    </label>
                    <span className="text-info">
                      {" "}
                      (Optional please provide embed link not direct link.)
                    </span>
                  </div>
                  <input
                    type="text"
                    name="video_link"
                    placeholder="Ex : https://www.youtube.com/embed/5R06LRdUCSE"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="card mt-3 rest-part">
                <div className="card-header">
                  <div className="d-flex gap-2">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4 className="mb-0">
                      Seo section
                      <span
                        className="input-label-secondary cursor-pointer"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Add meta titles descriptions and images for products, This will help more people to find them on search engines and see the right details while sharing on other social platforms"
                      >
                        <img
                          src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                          alt
                        />
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label className="title-color">
                          Meta Title
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Add the products title name taglines etc here This title will be seen on Search Engine Results Pages and while sharing the products link on social platforms [ Character Limit : 100 ]"
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </label>
                        <input
                          type="text"
                          name="meta_title"
                          placeholder="Meta Title"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="title-color">
                          Meta Description
                          <span
                            className="input-label-secondary cursor-pointer"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Write a short description of the InHouse shops product This description will be seen on Search Engine Results Pages and while sharing the products link on social platforms [ Character Limit : 100 ]"
                          >
                            <img
                              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                              alt
                            />
                          </span>
                        </label>
                        <textarea
                          rows={4}
                          type="text"
                          name="meta_description"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex justify-content-center">
                        <div className="form-group w-100">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <div>
                              <label
                                className="title-color"
                                htmlFor="meta_Image"
                              >
                                Meta Image
                              </label>
                              <span className="badge badge-soft-info">
                                (Ratio 2:1)
                              </span>
                              <span
                                className="input-label-secondary cursor-pointer"
                                data-toggle="tooltip"
                                title="Add Meta Image in JPG, PNG or JPEG Format within 2MB, Which will be shown in search engine results."
                              >
                                <img
                                  src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                                  alt
                                />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="custom_upload_input">
                              <input
                                type="file"
                                name="meta_image"
                                className="custom-upload-input-file meta-img"
                                id
                                data-imgpreview="pre_meta_image_viewer"
                                accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                onchange="uploadColorImage(this)"
                              />
                              <span
                                className="delete_file_input btn btn-outline-danger btn-sm square-btn"
                                style={{ display: "none" }}
                              >
                                <i className="tio-delete" />
                              </span>
                              <div className="img_area_with_preview position-absolute z-index-2">
                                <img
                                  id="pre_meta_image_viewer"
                                  className="h-auto bg-white"
                                  src="img"
                                  onerror="this.classList.add('d-none')"
                                />
                              </div>
                              <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                  <img
                                    src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                                    className="w-50"
                                  />
                                  <h3 className="text-muted">Upload Image</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end gap-3 mt-3 mx-1">
                <button type="reset" className="btn btn-secondary px-5">
                  Reset
                </button>
                <button
                  type="button"
                  onclick="check()"
                  className="btn btn--primary px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnewproducts;
