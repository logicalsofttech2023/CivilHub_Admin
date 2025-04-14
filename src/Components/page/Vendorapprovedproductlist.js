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
import * as XLSX from "xlsx";

const Vendorapprovedproductlist = () => {
  const [productlist, setproductlist] = useState([]);
  const [ProductListfilter, setProductListfilter] = useState([]);
  const [count, setcount] = useState();

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  let token = secureLocalStorage.getItem("adminidtoken");

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(productlist);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Product List");

    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");


    if (document.body) {
      document.body.appendChild(link);


      link.setAttribute("href", url);
      link.setAttribute("download", "productlist.xlsx");

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } else {
    }
  };

  
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
      .get(`${process.env.REACT_APP_API_KEY}admin/api/productList`, options)
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
              {data?.product_name && data?.product_name.length > 20
                ? data?.product_name.slice(0, 20) + "..."
                : data?.product_name}
            </span>
          </Link>
        </td>
        <td>{data?.productType}</td>
        <td>${data?.unit_price}</td>
        <td>${data?.sale_price}</td>
        <td>
          {data?.status != "0" ? (
            <label className="badge badge-soft-success">Approved</label>
          ) : (
            <label className="badge badge-soft-danger">Pending</label>
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
                                          onChange={() =>
                                            activedeactive(data?._id)
                                          }
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
                                          onChange={() =>
                                            activedeactive(data?._id)
                                          }
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
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3 mt-3 pl-3">
              <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/products.png"
                  alt
                />
                Approved Product List
                <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                  {count}
                </span>
              </h2>
            </div>
            {/* <div className="card">
            <div className="card-body">
              <form action="#" method="GET">
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
                        className="js-select2-custom form-control text-capitalize"
                      >
                        <option value selected>
                          All Brands
                        </option>
                        <option value={1}>i Bird</option>
                        <option value={4}>Agron</option>
                        <option value={5}>Triangle</option>
                        <option value={6}>Estro</option>
                        <option value={7}>Ohoenix</option>
                        <option value={8}>Waltro</option>
                        <option value={9}>JK</option>
                        <option value={12}>Fashion</option>
                        <option value={13}>S.Cube</option>
                        <option value={14}>Estha dot</option>
                        <option value={17}>Digital Product</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Category
                      </label>
                      <select
                        className="js-select2-custom form-control"
                        name="category_id"
                        onchange="getRequest('https://6valley.6amtech.com/seller/product/get-categories?parent_id='+this.value,'sub-category-select','select')"
                      >
                        <option value selected disabled>
                          Select category
                        </option>
                        <option value={11}>Home Improvement &amp; Tools</option>
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
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="form-group">
                      <label htmlFor="name" className="title-color">
                        Sub Category
                      </label>
                      <select
                        className="js-select2-custom form-control"
                        name="sub_category_id"
                        id="sub-category-select"
                        onchange="getRequest('https://6valley.6amtech.com/seller/product/get-categories?parent_id='+this.value,'sub-sub-category-select','select')"
                      >
                        <option value selected disabled>
                          Select Sub Category
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
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
                  <div className="col-12">
                    <div className="d-flex gap-3 justify-content-end">
                      <a href="#" className="btn btn-secondary px-5">
                        Reset
                      </a>
                      <button
                        type="submit"
                        className="btn btn--primary px-5"
                        onclick="formUrlChange(this)"
                        data-action="#"
                      >
                        Show data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
            <div className="row mt-20">
              <div className="col-md-12">
                <div className="card">
                <div class="px-3 py-4">
<div class="d-flex justify-content-between gap-10 flex-wrap align-items-center">
<div class="">
<form method="GET">
<div class="input-group input-group-merge input-group-custom width-500px">
<div class="input-group-prepend">
<div class="input-group-text">
<i class="tio-search"></i>
</div>
</div>
<input placeholder="Search by product name"
                              onChange={handleFilter} type="search" name="searchValue" class="form-control"  aria-label="Search orders" />
<button type="submit" class="btn btn--primary">Search</button>
</div>
</form>
</div>
<div class="d-flex justify-content-end gap-2">
<div class="dropdown text-nowrap">
<button
  type="button"
  class="btn btn-outline--primary"
  data-toggle="dropdown"
  aria-expanded="false"
  onClick={handleExport}
>
  <i class="fa fa-download" aria-hidden="true"></i>{" "}
  Export
</button>
</div>

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
                        <img
                          class="mb-3 w-160"
                          src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
                          alt="Image Description"
                        />
                        <p class="mb-0 order-stats__subtitle">
                          No product found
                        </p>
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
    </div>
  );
};

export default Vendorapprovedproductlist;
