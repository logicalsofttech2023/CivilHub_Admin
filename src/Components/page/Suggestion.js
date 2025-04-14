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

const Suggestion = () => {
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
      link.setAttribute("download", "suggestion.xlsx");

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
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/improvementSuggestionList`,
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
      item?.userId?.first_name?.toLowerCase().includes(searchTerm) || 
      item?.userId?.last_name?.toLowerCase().includes(searchTerm) 
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

  const renderProductData = (data, index) => {

    return (
        <div className="border-bottom mb-3 pb-3">
        <div className="card">
          <div className="card-body align-items-center d-flex flex-wrap justify-content-between gap-3 border-bottom">
            <div className="media gap-3">
              <img className="avatar avatar-lg" src={data?.userId?.user_profile ? `${process.env.REACT_APP_API_KEY}uploads/`+ data?.userId?.user_profile : "https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png" } alt="" />
              <div className="media-body">
                <h6 className="mb-0 text-left">{data?.userId?.first_name} {data?.userId?.last_name}</h6>
                <div className="mb-2 fz-12 text-left" />
                <div className="d-flex flex-wrap gap-2 align-items-center">
                    {data?.userId?.user_status == "0" ? 
                  
                  <span className="badge-soft-info fz-12 font-weight-bold px-2 radius-50">Active</span>
                 : <span className="badge-soft-danger fz-12 font-weight-bold px-2 radius-50">Deactive</span> }
                </div>
                <div className="text-nowrap mt-2">
                {data?.userId?.createdAt.slice(0,10)} {data?.userId?.createdAt.slice(11,19)}
                </div>
              </div>
            </div>
           
          </div>
          <div className="card-body align-items-center d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
            <div>
             {data?.text}
            </div>
           
          </div>
        </div>
      </div>
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
                Suggestion
                <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                  {count}
                </span>
              </h2>
            </div>

            <div className="row mt-20">
              <div className="col-md-12">
                <div className="card">
                  <div class="px-3 py-4">
                    <div class="d-flex justify-content-between gap-10 flex-wrap align-items-center">
                      <div class="">
                        <form
                          
                        >
                          <div class="input-group input-group-merge input-group-custom width-500px">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <i class="tio-search"></i>
                              </div>
                            </div>
                            <input
                              placeholder="Search by First & Last Name"
                              onChange={handleFilter}
                              type="search"
                              name="searchValue"
                              class="form-control"
                              aria-label="Search orders"
                            />
                            <button type="submit" class="btn btn--primary">
                              Search
                            </button>
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

export default Suggestion;
