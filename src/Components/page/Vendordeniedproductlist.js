import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../sidebar.css";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import swal from "sweetalert";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import Pagination from "react-js-pagination";
const Vendordeniedproductlist = () => {
  const [productlist, setproductlist] = useState([]);
  const [ProductListfilter, setProductListfilter] = useState([]);
  const [count, setcount] = useState();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  let token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    getproductlist();
  }, [0]);
  let getproductlist = () => {
    const options = {
      headers: {
        token: token,
      },
    };
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/deniedProductList`,
        options
      )
      .then((res) => {
        setcount(res?.data?.data?.length);
        setproductlist(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = productlist?.filter((item) =>
      item?.product_name?.toLowerCase().includes(searchTerm)
    );
    setProductListfilter(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    setProductListfilter(productlist);
  }, [productlist]);
  const activedeactive = (item) => {
    const Data = {
      productId: item,
    };

    let options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/product_approve`,
        Data,
        options
      )
      .then((res) => {
        toast.success(res.data.message);
        getproductlist();
      })
      .catch((error) => {});
  };

  let deleteproduct = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletebannerimage = () => {
          let bannerdata = {
            productId: item,
          };

          let options = {
            headers: {
              token: token,
            },
          };
          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/delete_product`,
              bannerdata,
              options
            )
            .then((res) => {
              getproductlist();
            })
            .catch((error) => {});
        };
        deletebannerimage();
        swal("Poof! Your product  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Product is safe!");
      }
    });
  };
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };
  const renderProductData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr key={index}>
        <th scope="row">{adjustedIndex}</th>
        <td>
          <Link
            to="/productsdetails"
            onClick={() => {
              secureLocalStorage.setItem("productid", data._id);
            }}
            className="media align-items-center gap-2 w-max-content"
          >
            {data?.image1 ? (
              <img
                src={`${process.env.REACT_APP_API_KEY}uploads/` + data?.image1}
                className="avatar border"
                alt
              />
            ) : (
              <img
                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883db39dcbb.png"
                className="avatar border"
                alt
              />
            )}

            <span className="media-body title-color hover-c1">
            {data?.product_name && data?.product_name.length > 20 ? data?.product_name.slice(0, 20) + "..." : data?.product_name}
            </span>
          </Link>
        </td>
        <td>{data?.productType}</td>
        <td>${data?.unit_price}</td>
        <td>${data?.sale_price}</td>
        <td>
          {data?.status != "2" ? (
            <label className="badge badge-soft-success">Approved</label>
          ) : (
            <label className="badge badge-soft-danger">Denied</label>
          )}
        </td>
        {/* {data?.status != 0 ? (
         
          <td>
            <form className="banner_status_form">
              <input type="hidden" />
              <input type="hidden" name="id" />
              <label className="switcher">
                <input
                  id={`coupon_status${data?._id}`}
                  name="status"
                  value={data?.status}
                  type="checkbox"
                  className="switcher_input"
                  checked={data?.status === 1}
                  onChange={() => activedeactive(data?._id)}
                />
                <span className="switcher_control" />
              </label>
            </form>
          </td>
        ) : (
          <td>
            <form className="banner_status_form">
              <input type="hidden" />
              <input type="hidden" name="id" />
              <label className="switcher">
                <input
                  type="checkbox"
                  className="switcher_input"
                  name="status"
                  onChange={() => activedeactive(data?._id)}
                />
                <span className="switcher_control" />
              </label>
            </form>
          </td>
        )} */}
        <td>
          <div className="d-flex gap-10">
            <Link
              onClick={() => {
                secureLocalStorage.setItem("productid", data._id);
              }}
              className="btn btn-outline-info btn-sm square-btn"
              title="View"
              to="/productsdetails"
            >
              <i class="fa fa-eye" aria-hidden="true"></i>
            </Link>
            {/* <Link
                                  to="/productseditproducts"
                                  className="btn btn-outline-primary btn-sm square-btn"
                                  title="Edit"
                                  href="#"
                                >
                                  <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                                <a
                                  className="btn btn-outline-danger btn-sm square-btn"
                                  href="javascript:"
                                  title="Delete"
                                  onClick={deleteproducts}
                                  
                                >
                                  <i class="fa fa-trash" aria-hidden="true"></i>
                                </a> */}
          </div>
          <form>
            <input
              type="hidden"
              name="_token"
              defaultValue="ogOCpmdAJJ38pWdY4o8txAvCPH58PO03n5rkZpRx"
            />{" "}
            <input type="hidden" name="_method" defaultValue="delete" />{" "}
          </form>
        </td>
      </tr>
    );
  };

  return (
    <div>
      {/* <Header /> */}
      <Toaster />
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-3">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                alt=""
              />
              Vendor Denied Product List
              <span class="badge badge-soft-dark radius-50 fz-14 ml-1">
                {count}
              </span>
            </h2>
          </div>
          {/* <div className="card">
            <div className="card-body">
              <form>
                <input type="hidden" defaultValue={0} name="status" />
                <div className="row gx-2">
                  <div className="col-12">
                    <h4 className="mb-3">Filter Products</h4>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label className="title-color" htmlFor="store">
                        Store
                      </label>
                      <select
                        name="seller_id"
                        className="form-control text-capitalize"
                      >
                        <option value selected>
                          All store
                        </option>
                        <option value={1}>Deluxe Online</option>
                        <option value={2}>Mart Morning</option>
                        <option value={3}>Wellness Fair</option>
                        <option value={4}>Bicycle Shop</option>
                        <option value={5}>KR Fashion</option>
                        <option value={6}>Country Fair</option>
                        <option value={7}>Tech Shop</option>
                        <option value={8}>Royal Crown</option>
                        <option value={9}>Super Store Online</option>
                        <option value={10}>Digital House</option>
                      </select>
                    </div>
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
                            aria-labelledby="select2-brand_id-2q-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-brand_id-2q-container"
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
                        className="js-select2-custom form-control action-get-request-onchange select2-hidden-accessible"
                        name="category_id"
                        data-url-prefix="https://6valley.6amtech.com/admin/products/get-categories?parent_id="
                        data-element-id="sub-category-select"
                        data-element-type="select"
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
                            aria-labelledby="select2-category_id-ej-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-category_id-ej-container"
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
                        className="js-select2-custom form-control action-get-request-onchange select2-hidden-accessible"
                        name="sub_category_id"
                        id="sub-category-select"
                        data-url-prefix="https://6valley.6amtech.com/admin/products/get-categories?parent_id="
                        data-element-id="sub-sub-category-select"
                        data-element-type="select"
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
                        href="https://6valley.6amtech.com/admin/products/list/seller"
                        className="btn btn-secondary px-5"
                      >
                        Reset
                      </a>
                      <button
                        type="submit"
                        className="btn btn--primary px-5 action-get-element-type"
                      >
                        Show data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}

          <div className="row mt-20 mb-5">
            <div className="col-md-12">
              <div className="card">
                <div className="px-3 py-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <form action="#" method="GET">
                        <div className="input-group input-group-merge input-group-custom">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input
                            type="search"
                            name="search"
                            className="form-control"
                            placeholder="Search by product name"
                            onChange={handleFilter}
                          />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  {ProductListfilter?.length > 0 ? (
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>SL</th>
                          <th>Product Name</th>
                          <th>Product Type</th>
                          <th>Purchase price</th>
                          <th>Selling price</th>
                          <th>Verify status</th>
                          {/* <th>Active Status</th> */}
                          <th className="text-center __w-5px">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ProductListfilter.slice(
                          (activePage - 1) * itemsPerPage,
                          activePage * itemsPerPage
                        ).map((productlist, index) =>
                          renderProductData(productlist, index)
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No product found</p>
</div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {ProductListfilter.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={ProductListfilter.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
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

export default Vendordeniedproductlist;




