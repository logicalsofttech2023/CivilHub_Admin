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
const Addadvertisment = () => {
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
        `${process.env.REACT_APP_API_KEY}admin/api/ProductList`,
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
        `${process.env.REACT_APP_API_KEY}admin/api/Add_advertisementProduct`,
        Data,
        options
      )
      .then((res) => {

        toast.success(res.data.message);
        getproductlist();
      })
      .catch((error) => {

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
        
        {data?.adds
 === 1 ? (
    
    <td>
    <form 
     
       className="banner_status_form">
      <input type="hidden"  />
      <input type="hidden" name="id" />
      <label className="switcher">
        <input  id="coupon_status9" name="status" defaultValue={1} defaultChecked
          type="checkbox"
          className="switcher_input"
  
           onChange={() => activedeactive(data?._id)}
        />
        <span className="switcher_control" />
      </label>
    </form>
  </td>

  ):(
  
    <td>
    <form 
    
     className="banner_status_form">
      <input type="hidden"  />
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
  </td>   )}
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
              <img width="20" 
                src="https://6valley.6amtech.com/public/assets/back-end/img/deal_of_the_day.png"
                alt=""
              />
              Advertisements Products
              <span class="badge badge-soft-dark radius-50 fz-14 ml-1">
                {count}
              </span>
            </h2>
          </div>
         

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
                        
                          <th>Add Status</th>
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

export default Addadvertisment;





