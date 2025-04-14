import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "react-js-pagination";
const Addnewcolor = () => {
  const [categorylist, setcategorylist] = useState();
  const [categoryidd, setcategoryidd] = useState();
  const [sizename, setsizename] = useState();
  const [sizeelist, setsizeelist] = useState();
  const [filteredsizeList, setfilteredsizeList] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  const [count, setcount] = useState();
  let token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    setfilteredsizeList(sizeelist);
  }, [sizeelist]);
  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };
  const addsize = (e) => {
    e.preventDefault();

    const formData = {
      catetoryId: categoryidd,
      color: sizename,
    };
    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/createColor`,
        formData,
        options
      )
      .then((res) => {
        toast.success(res.data.message);
        getcategorlist();
        getsizeelist();
      })
      .catch((error) => {});

    setcategoryidd("");
    setsizename("");
  };

  useEffect(() => {
    getcategorlist();
  }, [0]);
  let getcategorlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/getCategory`)
      .then((res) => {
        setcategorylist(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getsizeelist();
  }, [0]);
  let getsizeelist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/colorList`)
      .then((res) => {
        setcount(res?.data?.data?.length);
        setsizeelist(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = sizeelist.filter((item) =>
      item.catetoryId?.category_englishName?.toLowerCase().includes(searchTerm)
    );
    setfilteredsizeList(result);
    setActivePage(1);
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const renderColorData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr key={index}>
        <td>{adjustedIndex}</td>
        {/* <td>
<div className="avatar-60 d-flex align-items-center rounded">
<img className="img-fluid" alt="" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-6488153b45156.png" />
</div>
</td> */}
        <td style={{ whiteSpace: "break-spaces" }}>{data?.color.join(", ")}</td>
        <td className="text-center">
          {data?.catetoryId?.category_englishName}
        </td>
        {/* <td className="text-center">0</td>
    <td>
      <form>
        <input
          type="hidden"
          name="_token"
          defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p"
          autoComplete="off"
        />{" "}
        <input
          type="hidden"
          name="id"
          defaultValue={1}
        />
        <label className="switcher mx-auto">
          <input
            type="checkbox"
            className="switcher_input toggle-switch-message"
            name="status"
            id="brand-status1"
            defaultValue={1}
            defaultChecked
            data-modal-id="toggle-status-modal"
            data-toggle-id="brand-status1"
            data-on-image="brand-status-on.png"
            data-off-image="brand-status-off.png"
            data-on-title="Want to Turn ON i Bird Status"
            data-off-title="Want to Turn OFF i Bird Status"
            data-on-message="<p>If enabled this brand will be available on the website and customer app</p>"
            data-off-message="<p>If disabled this brand will be hidden from the website and customer app</p>"
          />
          <span className="switcher_control" />
        </label>
      </form>
    </td> */}
        <td>
          <div className="d-flex justify-content-center gap-2">
            {/* <Link
          to="/updatebrand"
          className="btn btn-outline-info btn-sm square-btn"
          title="Edit"
        > */}
            {/* <Link
              to="#"
              className="btn btn-outline-info btn-sm square-btn"
              title="Edit"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link> */}

            <a
              onClick={deleteproducts}
              className="btn btn-outline-danger btn-sm brand-delete-button square-btn"
              title="Delete"
              id={1}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
          </div>
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
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                alt=""
              />
              Color Setup
              <span className="badge badge-soft-dark radius-50 fz-12">
                {count}
              </span>
            </h2>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="card-body text-start">
                  <form onSubmit={addsize}>
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="LOivn3m2NU0upgIv2pBhjrFyz9MIByXFPsdKT17p"
                      autoComplete="off"
                    />
                    {/* <ul className="nav nav-tabs w-fit-content mb-4">
                      <li className="nav-item">
                        <span
                          className="nav-link form-system-language-tab cursor-pointer active"
                          id="en-link"
                        >
                          English 
                        </span>
                      </li>
                    </ul> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="form-group  form-system-language-form"
                          id="en-form"
                        >
                          <label htmlFor="name" className="title-color">
                            Category Name
                            <span className="text-danger">*</span>
                            {/* (EN) */}
                          </label>
 
                          <select 
                            required
                            className="js-example-responsive form-control w-100"
                            value={categoryidd}
                            onChange={(e) => {
                              setcategoryidd(e.target.value);
                            }}
                          >
                            <option  value="" selected disabled>
                              Select Category
                            </option>

                            {categorylist?.map((type) => (
                              <option   key={type?._id} value={type?._id}>
                                {type?.category_englishName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-group  form-system-language-form"
                          id="en-form"
                        >
                          <label htmlFor="name" className="title-color">
                            Color Name
                            <span className="text-danger">*</span>
                            {/* (EN) */}
                          </label>
                          <input
                            value={sizename}
                            onChange={(e) => {
                              setsizename(e.target.value);
                            }}
                            type="text"
                            name="name[]"
                            className="form-control"
                            id="name"
                            placeholder="Color Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-end">
                      {/* <button type="reset" id="reset" className="btn btn-secondary px-4">Reset</button> */}
                      <button type="submit" className="btn btn--primary px-4">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-20 mb-5">
                <div className="col-md-12">
                  <div className="card">
                    <div className="px-3 py-4">
                      <div className="row g-2 flex-grow-1">
                        <div className="col-sm-8 col-md-6 col-lg-4">
                          <form>
                            <div className="input-group input-group-custom input-group-merge">
                              <div className="input-group-prepend">
                                <div className="input-group-text">
                                  <i
                                    class="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                              <input
                                onChange={handleFilter}
                                id="datatableSearch_"
                                type="search"
                                name="searchValue"
                                className="form-control"
                                placeholder="Search by category name"
                                aria-label="Search by name"
                                required
                              />
                              <button
                                type="submit"
                                className="btn btn--primary input-group-text"
                              >
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* <div className="col-sm-4 col-md-6 col-lg-8 d-flex justify-content-end">
                  <button type="button" className="btn btn-outline--primary" data-toggle="dropdown">
                  <i class="fa fa-download" aria-hidden="true"></i> Export
                    
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img width={14} src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" />
                        Excel
                      </a>
                    </li>
                  </ul>
                </div> */}
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        {filteredsizeList?.length > 0 ? (
                          <table
                            style={{ textAlign: "left" }}
                            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                          >
                            <thead className="thead-light thead-50 text-capitalize">
                              <tr>
                                <th>SL</th>
                                {/* <th>Brand Logo</th> */}
                                <th>Color</th>
                                <th className="text-center">Category</th>
                                {/* <th className="text-center">Total Order</th>
                              <th className="text-center">Status</th> */}
                                <th className="text-center"> Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredsizeList
                                .slice(
                                  (activePage - 1) * itemsPerPage,
                                  activePage * itemsPerPage
                                )
                                .map((sizeelist, index) =>
                                  renderColorData(sizeelist, index)
                                )}
                            </tbody>
                          </table>
                        ) : (
                          <div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No Category found</p>
</div>
                        )}
                        <div className="d-flex justify-content-center mt-4">
                          {filteredsizeList?.length > itemsPerPage && (
                            <Pagination
                              activePage={activePage}
                              itemsCountPerPage={itemsPerPage}
                              totalItemsCount={filteredsizeList.length}
                              pageRangeDisplayed={5}
                              onChange={handlePageChange}
                              itemClass="page-item"
                              linkClass="page-link"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive mt-4">
                      <div className="d-flex justify-content-lg-end"></div>
                    </div>
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

export default Addnewcolor;
