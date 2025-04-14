import React from 'react'
import Header from '../Header'
import Sidebarr from '../Sidebar'

const Products_edit = () => {
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
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <h2 className="h1 mb-0 d-flex align-items-center gap-2">
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt />
                  Product Edit
              </h2>
          </div>
          <form className='mb-5'>
             
              <div className="card mt-3 rest-part">
                  <div className="card-header">
                      <div className="d-flex gap-2">
                        
                          <h4 className="mb-0">General setup</h4>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label htmlFor="name" className="title-color">Category</label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="category_id" id="category_id" onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-category-select','select')" data-select2-id="category_id" tabIndex={-1} aria-hidden="true">
                                      <option value={0} selected disabled>---Select---</option>
                                      <option value={11}>Home Improvement &amp; Tools</option>
                                      <option value={12}>Toys , Kids &amp; Babies</option>
                                      <option value={13}>Men's fashion</option>
                                      <option value={14}>Outdoor Fun &amp; Sports</option>
                                      <option value={15}>Women's fashion</option>
                                      <option value={16} selected data-select2-id={2}>ebook</option>
                                      <option value={24}>Jewelry &amp; Watches</option>
                                      <option value={25}>Beauty, Health &amp; Hair</option>
                                      <option value={26}>Mobile Accessories</option>
                                      <option value={27}>Computer, Office &amp; Security</option>
                                      <option value={28}>Phones &amp; Telecom</option>
                                      <option value={34}>Home, Pet &amp; Appliances</option>
                                      <option value={39}>Bags &amp; Shoes</option>
                                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={1} style={{ width: '201.333px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-category_id-container"><span className="select2-selection__rendered" id="select2-category_id-container" role="textbox" aria-readonly="true" title="ebook">ebook</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label className="title-color">Sub Category</label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="sub_category_id" id="sub-category-select" data-id onchange="getRequest('https://6valley.6amtech.com/admin/product/get-categories?parent_id='+this.value,'sub-sub-category-select','select')" data-select2-id="sub-category-select" tabIndex={-1} aria-hidden="true"><option value={0} disabled selected data-select2-id={154}>---Select---</option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={3} style={{ width: '201.333px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-sub-category-select-container"><span className="select2-selection__rendered" id="select2-sub-category-select-container" role="textbox" aria-readonly="true" title="---Select---">---Select---</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label className="title-color">Sub Sub Category</label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" data-id name="sub_sub_category_id" id="sub-sub-category-select" data-select2-id="sub-sub-category-select" tabIndex={-1} aria-hidden="true"><option value={0} disabled selected data-select2-id={153}>---Select---</option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={4} style={{ width: '201.333px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-sub-sub-category-select-container"><span className="select2-selection__rendered" id="select2-sub-sub-category-select-container" role="textbox" aria-readonly="true" title="---Select---">---Select---</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label className="title-color">Brand</label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="brand_id" data-select2-id={5} tabIndex={-1} aria-hidden="true">
                                      <option value selected disabled>---Select---</option>
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
                                      <option value={5} selected data-select2-id={7}>Triangle</option>
                                      <option value={8}>Waltro</option>
                                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={6} style={{ width: '201.333px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-brand_id-lk-container"><span className="select2-selection__rendered" id="select2-brand_id-lk-container" role="textbox" aria-readonly="true" title="Triangle">Triangle</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label className="title-color">Product type</label>
                                  <select name="product_type" id="product_type" className="form-control" required>
                                      <option value="physical">Physical</option>
                                      <option value="digital" selected>Digital</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3" id="digital_product_type_show">
                              <div className="form-group">
                                  <label htmlFor="digital_product_type" className="title-color">Delivery type</label>
                                  <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="For “Ready Product” deliveries  customers can pay & instantly download pre-uploaded digital products. For “Ready After Sale” deliveries  customers pay first  then admin uploads the digital products that become available to customers for download">
                                      <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                  </span>
                                  <select name="digital_product_type" id="digital_product_type" className="form-control" required>
                                      <option value disabled>---Select---</option>
                                      <option value="ready_after_sell">Ready After Sell</option>
                                      <option value="ready_product" selected>Ready Product</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3" id="digital_file_ready_show">
                              <div className="form-group">
                                  <div className="d-flex align-items-center gap-2 mb-2">
                                      <label htmlFor="digital_file_ready" className="title-color mb-0">Upload file</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Upload the digital products from here">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <div className="input-group">
                                      <div className="custom-file">
                                          <input type="file" className="custom-file-input" name="digital_file_ready" id="digital_file_ready" aria-describedby="inputGroupFileAddon01" />
                                          <label className="custom-file-label" htmlFor="digital_file_ready">Choose file</label>
                                      </div>
                                  </div>
                                  <div className="mt-2">File type: jpg, jpeg, png, gif, zip, pdf</div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <label className="title-color d-flex justify-content-between gap-2">
                                      <div className="d-flex align-items-center gap-2">
                                          Product SKU
                                          <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Create a unique product code by clicking on the “Generate Code” button">
                                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                          </span>
                                      </div>
                                      <a className="style-one-pro cursor-pointer" onclick="document.getElementById('generate_number').value = getRndInteger()">
                                          Generate code
                                      </a>
                                  </label>
                                  <input type="text" id="generate_number" name="code" className="form-control" defaultValue={176899} required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3 physical_product_show" style={{ display: 'none' }}>
                              <div className="form-group">
                                  <label className="title-color">Unit</label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="unit" data-select2-id={8} tabIndex={-1} aria-hidden="true">
                                      <option value="kg" data-select2-id={10}>kg</option>
                                      <option value="pc">pc</option>
                                      <option value="gms">gms</option>
                                      <option value="ltrs">ltrs</option>
                                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={9} style={{ width: '201.333px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-unit-qw-container"><span className="select2-selection__rendered" id="select2-unit-qw-container" role="textbox" aria-readonly="true" title="kg">kg</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="form-group">
                                  <label className="title-color d-flex align-items-center gap-2">
                                      Search tags
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add the product search tag for this product that customers can use to search quickly">
                                          <img width={16} src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </label>
                                  <div className="bootstrap-tagsinput"><input type="text" style={{ height: 32 }} placeholder /></div><input type="text" className="form-control" name="tags" defaultValue data-role="tagsinput" style={{ display: 'none' }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card mt-3 rest-part">
                  <div className="card-header">
                      <div className="d-flex gap-2">
                          <h4 className="mb-0">Pricing &amp; others</h4>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row align-items-end">
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color">Purchase price ($) </label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add the purchase price for this product.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} step="0.01" placeholder="Purchese price" name="purchase_price" className="form-control" defaultValue={400} required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color">Unit price ($)</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Set the selling price for each unit of this product. This Unit Price section won’t be applied if you set a variation wise price.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" defaultValue={500} required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3" id="minimum_order_qty">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="minimum_order_qty">Minimum order qty</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Set the minimum order quantity that customers must choose. Otherwise  the checkout process won’t start.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={1} defaultValue={1} step={1} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3 physical_product_show" id="quantity" style={{ display: 'none' }}>
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="current_stock">Current stock qty</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add the Stock Quantity of this product that will be visible to customers.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" id="current_stock" className="form-control" required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="discount_Type">Discount Type</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="If “Flat”  discount amount will be set as fixed amount. If “Percentage”  discount amount will be set as percentage.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <select className="form-control" name="discount_type" id="discount_type">
                                      <option value="flat">Flat</option>
                                      <option value="percent" selected>Percent</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="discount">
                                          Discount amount
                                          <span className="discount_amount_symbol">(%)</span>
                                      </label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add the discount amount in percentage or a fixed value here.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} defaultValue={10} step="0.01" placeholder="Ex: 5" name="discount" id="discount" className="form-control" required />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="tax">Tax amount(%)</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Set the Tax Amount in percentage here">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} defaultValue={5} step="0.01" placeholder="Tax" name="tax" id="tax" className="form-control" required />
                                  <input name="tax_type" defaultValue="percent" className="d-none" />
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3">
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color" htmlFor="tax_model">Tax calculation</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Set the tax calculation method from here. Select “Include with product” to combine product price and tax on the checkout. Pick “Exclude from product” to display product price and tax amount separately.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <select name="tax_model" id="tax_model" className="form-control" required>
                                      <option value="include">Include with product</option>
                                      <option value="exclude" selected>Exclude with product</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4 col-xl-3 physical_product_show" id="shipping_cost" style={{ display: 'none' }}>
                              <div className="form-group">
                                  <div className="d-flex gap-2">
                                      <label className="title-color">Shipping cost ($)</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Set the shipping cost for this product here. Shipping cost will only be applicable if product-wise shipping is enabled.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <input type="number" min={0} defaultValue={0} step={1} placeholder="Shipping cost" name="shipping_cost" className="form-control" required />
                              </div>
                          </div>
                          <div className="col-md-6 physical_product_show" id="shipping_cost_multy" style={{ display: 'none' }}>
                              <div className="form-group">
                                  <div className="form-control h-auto min-form-control-height d-flex align-items-center flex-wrap justify-content-between gap-2">
                                      <div className="d-flex gap-2">
                                          <label className="title-color text-capitalize" htmlFor="shipping_cost">Shipping cost multiply with quantity</label>
                                          <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="If enabled  the shipping charge will increase with the product quantity">
                                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                          </span>
                                      </div>
                                      <div>
                                          <label className="switcher">
                                              <input className="switcher_input" type="checkbox" name="multiplyQTY" id />
                                              <span className="switcher_control" />
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card mt-3 rest-part physical_product_show" style={{ display: 'none' }}>
                  <div className="card-header">
                      <div className="d-flex gap-2">
                          <i className="tio-user-big" />
                          <h4 className="mb-0">Product variation setup</h4>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row align-items-end">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <div className="mb-3 d-flex align-items-center gap-2">
                                      <label className="mb-0 title-color">
                                          Select colors :
                                      </label>
                                      <label className="switcher">
                                          <input type="checkbox" className="switcher_input" id="color_switcher" name="colors_active" />
                                          <span className="switcher_control" />
                                      </label>
                                  </div>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control color-var-select select2-hidden-accessible" name="colors[]" multiple id="colors-selector" disabled tabIndex={-1} aria-hidden="true" data-select2-id="colors-selector">
                                      <option value="#F0F8FF">
                                          AliceBlue
                                      </option>
                                      <option value="#9966CC">
                                          Amethyst
                                      </option>
                                      <option value="#FAEBD7">
                                          AntiqueWhite
                                      </option>
                                      <option value="#00FFFF">
                                          Aqua
                                      </option>
                                      <option value="#7FFFD4">
                                          Aquamarine
                                      </option>
                                      <option value="#F0FFFF">
                                          Azure
                                      </option>
                                      <option value="#F5F5DC">
                                          Beige
                                      </option>
                                      <option value="#FFE4C4">
                                          Bisque
                                      </option>
                                      <option value="#000000">
                                          Black
                                      </option>
                                      <option value="#FFEBCD">
                                          BlanchedAlmond
                                      </option>
                                      <option value="#0000FF">
                                          Blue
                                      </option>
                                      <option value="#8A2BE2">
                                          BlueViolet
                                      </option>
                                      <option value="#A52A2A">
                                          Brown
                                      </option>
                                      <option value="#DEB887">
                                          BurlyWood
                                      </option>
                                      <option value="#5F9EA0">
                                          CadetBlue
                                      </option>
                                      <option value="#7FFF00">
                                          Chartreuse
                                      </option>
                                      <option value="#D2691E">
                                          Chocolate
                                      </option>
                                      <option value="#FF7F50">
                                          Coral
                                      </option>
                                      <option value="#6495ED">
                                          CornflowerBlue
                                      </option>
                                      <option value="#FFF8DC">
                                          Cornsilk
                                      </option>
                                      <option value="#DC143C">
                                          Crimson
                                      </option>
                                      <option value="#00008B">
                                          DarkBlue
                                      </option>
                                      <option value="#008B8B">
                                          DarkCyan
                                      </option>
                                      <option value="#B8860B">
                                          DarkGoldenrod
                                      </option>
                                      <option value="#A9A9A9">
                                          DarkGray
                                      </option>
                                      <option value="#006400">
                                          DarkGreen
                                      </option>
                                      <option value="#BDB76B">
                                          DarkKhaki
                                      </option>
                                      <option value="#8B008B">
                                          DarkMagenta
                                      </option>
                                      <option value="#556B2F">
                                          DarkOliveGreen
                                      </option>
                                      <option value="#FF8C00">
                                          DarkOrange
                                      </option>
                                      <option value="#9932CC">
                                          DarkOrchid
                                      </option>
                                      <option value="#8B0000">
                                          DarkRed
                                      </option>
                                      <option value="#E9967A">
                                          DarkSalmon
                                      </option>
                                      <option value="#8FBC8F">
                                          DarkSeaGreen
                                      </option>
                                      <option value="#483D8B">
                                          DarkSlateBlue
                                      </option>
                                      <option value="#2F4F4F">
                                          DarkSlateGray
                                      </option>
                                      <option value="#00CED1">
                                          DarkTurquoise
                                      </option>
                                      <option value="#9400D3">
                                          DarkViolet
                                      </option>
                                      <option value="#FF1493">
                                          DeepPink
                                      </option>
                                      <option value="#00BFFF">
                                          DeepSkyBlue
                                      </option>
                                      <option value="#696969">
                                          DimGray
                                      </option>
                                      <option value="#1E90FF">
                                          DodgerBlue
                                      </option>
                                      <option value="#B22222">
                                          FireBrick
                                      </option>
                                      <option value="#FFFAF0">
                                          FloralWhite
                                      </option>
                                      <option value="#228B22">
                                          ForestGreen
                                      </option>
                                      <option value="#DCDCDC">
                                          Gainsboro
                                      </option>
                                      <option value="#F8F8FF">
                                          GhostWhite
                                      </option>
                                      <option value="#FFD700">
                                          Gold
                                      </option>
                                      <option value="#DAA520">
                                          Goldenrod
                                      </option>
                                      <option value="#808080">
                                          Gray
                                      </option>
                                      <option value="#008000">
                                          Green
                                      </option>
                                      <option value="#ADFF2F">
                                          GreenYellow
                                      </option>
                                      <option value="#F0FFF0">
                                          Honeydew
                                      </option>
                                      <option value="#FF69B4">
                                          HotPink
                                      </option>
                                      <option value="#CD5C5C">
                                          IndianRed
                                      </option>
                                      <option value="#4B0082">
                                          Indigo
                                      </option>
                                      <option value="#FFFFF0">
                                          Ivory
                                      </option>
                                      <option value="#F0E68C">
                                          Khaki
                                      </option>
                                      <option value="#E6E6FA">
                                          Lavender
                                      </option>
                                      <option value="#FFF0F5">
                                          LavenderBlush
                                      </option>
                                      <option value="#7CFC00">
                                          LawnGreen
                                      </option>
                                      <option value="#FFFACD">
                                          LemonChiffon
                                      </option>
                                      <option value="#ADD8E6">
                                          LightBlue
                                      </option>
                                      <option value="#F08080">
                                          LightCoral
                                      </option>
                                      <option value="#E0FFFF">
                                          LightCyan
                                      </option>
                                      <option value="#FAFAD2">
                                          LightGoldenrodYellow
                                      </option>
                                      <option value="#90EE90">
                                          LightGreen
                                      </option>
                                      <option value="#D3D3D3">
                                          LightGrey
                                      </option>
                                      <option value="#FFB6C1">
                                          LightPink
                                      </option>
                                      <option value="#FFA07A">
                                          LightSalmon
                                      </option>
                                      <option value="#20B2AA">
                                          LightSeaGreen
                                      </option>
                                      <option value="#87CEFA">
                                          LightSkyBlue
                                      </option>
                                      <option value="#778899">
                                          LightSlateGray
                                      </option>
                                      <option value="#B0C4DE">
                                          LightSteelBlue
                                      </option>
                                      <option value="#FFFFE0">
                                          LightYellow
                                      </option>
                                      <option value="#00FF00">
                                          Lime
                                      </option>
                                      <option value="#32CD32">
                                          LimeGreen
                                      </option>
                                      <option value="#FAF0E6">
                                          Linen
                                      </option>
                                      <option value="#FF00FF">
                                          Magenta
                                      </option>
                                      <option value="#800000">
                                          Maroon
                                      </option>
                                      <option value="#66CDAA">
                                          MediumAquamarine
                                      </option>
                                      <option value="#0000CD">
                                          MediumBlue
                                      </option>
                                      <option value="#BA55D3">
                                          MediumOrchid
                                      </option>
                                      <option value="#9370DB">
                                          MediumPurple
                                      </option>
                                      <option value="#3CB371">
                                          MediumSeaGreen
                                      </option>
                                      <option value="#7B68EE">
                                          MediumSlateBlue
                                      </option>
                                      <option value="#00FA9A">
                                          MediumSpringGreen
                                      </option>
                                      <option value="#48D1CC">
                                          MediumTurquoise
                                      </option>
                                      <option value="#C71585">
                                          MediumVioletRed
                                      </option>
                                      <option value="#191970">
                                          MidnightBlue
                                      </option>
                                      <option value="#F5FFFA">
                                          MintCream
                                      </option>
                                      <option value="#FFE4E1">
                                          MistyRose
                                      </option>
                                      <option value="#FFE4B5">
                                          Moccasin
                                      </option>
                                      <option value="#FFDEAD">
                                          NavajoWhite
                                      </option>
                                      <option value="#000080">
                                          Navy
                                      </option>
                                      <option value="#FDF5E6">
                                          OldLace
                                      </option>
                                      <option value="#808000">
                                          Olive
                                      </option>
                                      <option value="#6B8E23">
                                          OliveDrab
                                      </option>
                                      <option value="#FFA500">
                                          Orange
                                      </option>
                                      <option value="#FF4500">
                                          OrangeRed
                                      </option>
                                      <option value="#DA70D6">
                                          Orchid
                                      </option>
                                      <option value="#EEE8AA">
                                          PaleGoldenrod
                                      </option>
                                      <option value="#98FB98">
                                          PaleGreen
                                      </option>
                                      <option value="#AFEEEE">
                                          PaleTurquoise
                                      </option>
                                      <option value="#DB7093">
                                          PaleVioletRed
                                      </option>
                                      <option value="#FFEFD5">
                                          PapayaWhip
                                      </option>
                                      <option value="#FFDAB9">
                                          PeachPuff
                                      </option>
                                      <option value="#CD853F">
                                          Peru
                                      </option>
                                      <option value="#FFC0CB">
                                          Pink
                                      </option>
                                      <option value="#DDA0DD">
                                          Plum
                                      </option>
                                      <option value="#B0E0E6">
                                          PowderBlue
                                      </option>
                                      <option value="#800080">
                                          Purple
                                      </option>
                                      <option value="#FF0000">
                                          Red
                                      </option>
                                      <option value="#BC8F8F">
                                          RosyBrown
                                      </option>
                                      <option value="#4169E1">
                                          RoyalBlue
                                      </option>
                                      <option value="#8B4513">
                                          SaddleBrown
                                      </option>
                                      <option value="#FA8072">
                                          Salmon
                                      </option>
                                      <option value="#F4A460">
                                          SandyBrown
                                      </option>
                                      <option value="#2E8B57">
                                          SeaGreen
                                      </option>
                                      <option value="#FFF5EE">
                                          Seashell
                                      </option>
                                      <option value="#A0522D">
                                          Sienna
                                      </option>
                                      <option value="#C0C0C0">
                                          Silver
                                      </option>
                                      <option value="#87CEEB">
                                          SkyBlue
                                      </option>
                                      <option value="#6A5ACD">
                                          SlateBlue
                                      </option>
                                      <option value="#708090">
                                          SlateGray
                                      </option>
                                      <option value="#FFFAFA">
                                          Snow
                                      </option>
                                      <option value="#00FF7F">
                                          SpringGreen
                                      </option>
                                      <option value="#4682B4">
                                          SteelBlue
                                      </option>
                                      <option value="#D2B48C">
                                          Tan
                                      </option>
                                      <option value="#008080">
                                          Teal
                                      </option>
                                      <option value="#D8BFD8">
                                          Thistle
                                      </option>
                                      <option value="#FF6347">
                                          Tomato
                                      </option>
                                      <option value="#40E0D0">
                                          Turquoise
                                      </option>
                                      <option value="#EE82EE">
                                          Violet
                                      </option>
                                      <option value="#F5DEB3">
                                          Wheat
                                      </option>
                                      <option value="#FFFFFF">
                                          White
                                      </option>
                                      <option value="#F5F5F5">
                                          WhiteSmoke
                                      </option>
                                      <option value="#FFFF00">
                                          Yellow
                                      </option>
                                      <option value="#9ACD32">
                                          YellowGreen
                                      </option>
                                  </select><span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id={152} style={{ width: '432.667px' }}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="true"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" placeholder style={{ width: '0.75em' }} disabled /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="choice_attributes" className="pb-1 title-color">
                                      Select attributes :
                                  </label>
                                  <select className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible" name="choice_attributes[]" id="choice_attributes" multiple data-select2-id="choice_attributes" tabIndex={-1} aria-hidden="true">
                                      <option value={1}>
                                          size
                                      </option>
                                      <option value={2}>
                                          type
                                      </option>
                                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={12} style={{ width: '432.667px' }}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" placeholder style={{ width: '0.75em' }} /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                              </div>
                          </div>
                          <div className="col-md-12 mt-2 mb-2">
                              <div className="row customer_choice_options mt-2" id="customer_choice_options">
                              </div>
                              <div className="sku_combination table-responsive form-group mt-2" id="sku_combination">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-3 rest-part">
                  <div className="row g-2">
                      <div className="col-md-3">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                      <div>
                                          <label htmlFor="name" className="title-color text-capitalize font-weight-bold mb-0">Product thumbnail</label>
                                          <span className="badge badge-soft-info">Ratio 1:1 (500 x 500 px)</span>
                                          <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add your products thumbnail in JPG, PNG or JPEG Format within 2MB">
                                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                          </span>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="custom_upload_input">
                                          <input type="file" name="image" className="custom-upload-input-file" id data-imgpreview="pre_img_viewer" accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onchange="uploadColorImage(this)" />

                                          <div className="img_area_with_preview position-absolute z-index-2">
                                              <img id="pre_img_viewer" className="h-auto aspect-1 bg-white" src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883e708db4e.png" onerror="this.classList.add('d-none')" />
                                          </div>
                                          <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                              <div className="d-flex flex-column justify-content-center align-items-center">
                                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg" className="w-50" />
                                                  <h3 className="text-muted">Upload Image</h3>
                                              </div>
                                          </div>
                                      </div>
                                      <p className="text-muted mt-2">Image format : Jpg, png, jpeg, webp <br />
                                          Image size : Max 2 MB</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-9 color_image_column d-none">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex align-items-center gap-2 mb-2">
                                      <label htmlFor="name" className="title-color text-capitalize font-weight-bold mb-0">Colour wise product image</label>
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add color-wise product images here.">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </div>
                                  <p className="text-muted">Must upload colour wise images first. Colour is shown in the image section top right. </p>
                                  <div id="color_wise_image" className="row g-2 mb-4" style={{ display: 'none' }}>
                                      <div className="col-12">
                                          <div className="row g-2" id="color_wise_existing_image" />
                                      </div>
                                      <div className="col-12">
                                          <div className="row g-2" id="color_wise_image_field" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="additional_image_column col-md-9">
                          <div className="card h-100">
                              <div className="card-body">
                                  <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                      <div>
                                          <label htmlFor="name" className="title-color text-capitalize font-weight-bold mb-0">Upload additional image</label>
                                          <span className="badge badge-soft-info">Ratio 1:1 (500 x 500 px)</span>
                                          <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Upload any additional images for this product from here.">
                                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                          </span>
                                      </div>
                                  </div>
                                  <p className="text-muted">Upload additional product images</p>
                                  <div className="coba-area">
                                      <div className="row g-2" id="additional_Image_Section">
                                          <div className="col-sm-12 col-md-4">
                                              <div className="custom_upload_input custom-upload-input-file-area position-relative border-dashed-2">
                                                
                                                  <div className="img_area_with_preview position-absolute z-index-2 border-0">
                                                      <img id="additional_Image_3605" className="h-auto aspect-1 bg-white" src="https://6valley.6amtech.com/storage/app/public/product/2023-06-13-64883e708c0fa.png" onerror="this.classList.add('d-none')" />
                                                  </div>
                                                  <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                                      <div className="d-flex flex-column justify-content-center align-items-center">
                                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg" className="w-50" />
                                                          <h3 className="text-muted">Upload Image</h3>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-sm-12 col-md-4">
                                              <div className="custom_upload_input position-relative border-dashed-2">
                                                  <input type="file" name="images[]" className="custom-upload-input-file" data-index={1} data-imgpreview="additional_Image_1" accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onchange="addMoreImage(this, '#additional_Image_Section')" />
                                               
                                                  <div className="img_area_with_preview position-absolute z-index-2 border-0">
                                                      <img id="additional_Image_1" className="h-auto aspect-1 bg-white d-none" src="img" onerror="this.classList.add('d-none')" />
                                                  </div>
                                                  <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                                      <div className="d-flex flex-column justify-content-center align-items-center">
                                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg" className="w-50" />
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
                  <input type="hidden" id="color_image" defaultValue="[]" />
                  <input type="hidden" id="images" defaultValue="[&quot;2023-06-13-64883e708c0fa.png&quot;]" />
                  <input type="hidden" id="product_id" defaultValue={45} />
                  <input type="hidden" id="remove_url" defaultValue="https://6valley.6amtech.com/admin/product/remove-image" />
              </div>
              <div className="card mt-3 rest-part">
                  <div className="card-header">
                      <div className="d-flex gap-2">
                      <i class="fa fa-user" aria-hidden="true"></i>
                          <h4 className="mb-0">Product video</h4>
                          <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add the YouTube video link here. Only the YouTube-embedded link is supported.">
                              <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                          </span>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="mb-3">
                          <label className="title-color mb-0">Youtube video link</label>
                          <span className="text-info"> ( Optional please provide embed link not direct link. )</span>
                      </div>
                      <input type="text" defaultValue name="video_link" placeholder="Ex : https://www.youtube.com/embed/5R06LRdUCSE" className="form-control" required />
                  </div>
              </div>
              <div className="card mt-3 rest-part">
                  <div className="card-header">
                      <div className="d-flex gap-2">
                      <i class="fa fa-user" aria-hidden="true"></i>
                          <h4 className="mb-0">
                              Seo section
                              <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title data-original-title="Add meta titles descriptions and images for products, This will help more people to find them on search engines and see the right details while sharing on other social platforms">
                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
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
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title data-original-title="Add the products title name taglines etc here This title will be seen on Search Engine Results Pages and while sharing the products link on social platforms [ Character Limit : 100 ]">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </label>
                                  <input type="text" name="meta_title" defaultValue="Premium Business presentation file" placeholder className="form-control" />
                              </div>
                              <div className="form-group">
                                  <label className="title-color">
                                      Meta Description
                                      <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" data-placement="right" title data-original-title="Write a short description of the InHouse shops product This description will be seen on Search Engine Results Pages and while sharing the products link on social platforms [ Character Limit : 100 ]">
                                          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                      </span>
                                  </label>
                                  <textarea rows={4} type="text" name="meta_description" className="form-control" defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"} />
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="d-flex justify-content-center">
                                  <div className="form-group w-100">
                                      <div className="d-flex align-items-center justify-content-between gap-2">
                                          <div>
                                              <label className="title-color" htmlFor="meta_Image">
                                                  Meta Image
                                              </label>
                                              <span className="badge badge-soft-info">(Ratio 2:1)</span>
                                              <span className="input-label-secondary cursor-pointer" data-toggle="tooltip" title data-original-title="Add Meta Image in JPG, PNG or JPEG Format within 2MB, Which will be shown in search engine results.">
                                                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" alt />
                                              </span>
                                          </div>
                                      </div>
                                      <div>
                                          <div className="custom_upload_input">
                                              <input type="file" name="meta_image" className="custom-upload-input-file meta-img" id data-imgpreview="pre_meta_image_viewer" accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onchange="uploadColorImage(this)" />
                                           
                                              <div className="img_area_with_preview position-absolute z-index-2">
                                                  <img id="pre_meta_image_viewer" className="h-auto aspect-1 bg-white" src="https://6valley.6amtech.com/storage/app/public/product/meta/2023-06-13-64883e708dfab.png" onerror="this.classList.add('d-none')" />
                                              </div>
                                              <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                                      <img src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg" className="w-50" />
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
              <div className="d-flex justify-content-end mt-3">
                  <button type="button" onclick="check()" className="btn btn--primary px-5">Update</button>
              </div>
          </form>
      </div>
          </div>
  
        </div>


          

        </div>
    )
}

export default Products_edit
