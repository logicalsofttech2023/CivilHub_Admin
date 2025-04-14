import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Pagination from "react-js-pagination";
import toast, { Toaster } from "react-hot-toast";
import * as XLSX from "xlsx";
const Deliverymanlist = () => {
  const [status, setstatus] = useState();
  const [count, setcount] = useState();
  const [sellerlist, setSellerlist] = useState([]);
  const [filteredSellerList, setFilteredSellerList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  let token = secureLocalStorage.getItem("adminidtoken");


  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(sellerlist);

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
      link.setAttribute("download", "sellerlist.xlsx");

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } else {
    }
  };

  let unblockseller = () => {
    swal({
      title: "Seller Status Changed",
      icon: "success",
    });
  };

  let unblock = (item) => {
    let unblockdata = {
      sallerId: item,
    };

    let options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/sallerBlock_unblock_api`,
        unblockdata,
        options
      )
      .then((res) => {
        unblockseller();
        getsellerlist();
      })
      .catch((error) => {});
  };

  let vendoractive = (item, status) => {
    let sellerdata = {
      driverId: item,
      status: status,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/approveDriver`,
        sellerdata
      )
      .then((res) => {
        getsellerlist();
        toast.success(res.data.message);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getsellerlist();
  }, [0]);

  let getsellerlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/driverList`)
      .then((res) => {
        setcount(res?.data?.data?.length);
        setSellerlist(res.data.data);
        setFilteredSellerList(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = sellerlist.filter((item) =>
      item.fname?.toLowerCase().includes(searchTerm)
    );
    setFilteredSellerList(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderSellerData = (seller, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr>
        <td>{adjustedIndex}</td>
        <td>
          <div className="media align-items-center gap-10">
            <img
              className="rounded-circle avatar avatar-lg"
              alt=""
              src={
                seller?.frontId_iamge
                  ? `${process.env.REACT_APP_API_KEY}uploads/` +
                    seller?.frontId_iamge
                  : "https://6valley.6amtech.com/storage/app/public/delivery-man/2022-11-20-6379f432228b8.png"
              }
            />
            <div className="media-body">
              <Link
                to="/earningstatement"
                onClick={((e)=>{
                  secureLocalStorage.setItem("driveridd",seller?._id)
                })}
                title="Earning Statement"
                className="title-color hover-c1"
              >{seller?.fname.length > 10 ? seller?.fname.slice(0,10) +`...` : seller?.fname}
                {/* {seller?.fname} {seller?.lname} */}
              </Link>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-column gap-1">
            <div>
              <a
                className="title-color hover-c1"
                href={`mailto:${seller?.email}`}
              >
                <strong>{seller?.email}</strong>
              </a>
            </div>
            <a className="title-color hover-c1" href={`tel:${seller?.phone}`}>
              {seller?.phone}
            </a>
          </div>
        </td>
        <td>
          <Link to="#" className="badge fz-14 badge-soft--primary">
            <span>0</span>
          </Link>
        </td>
        <td>
          <Link to="/rating" className="badge fz-14 badge-soft-info">
            <span>
              0.00 <i class="fa fa-star" aria-hidden="true"></i>{" "}
            </span>
          </Link>
        </td>

        <td>
          {seller?.driver_status == 0 ? (
            <label className="badge badge-primary cursor-pointer">Pending</label>
          ) : seller?.driver_status == 1 ? (
            <label className="badge badge-success cursor-pointer">Active</label>
          ) : (
            <label className="badge badge-danger cursor-pointer">Reject</label>
          )}
        </td>

        {seller?.driver_status == 0 ? (
          <select
            required
            className="js-example-responsive badge-focus form-control w-100 mt-3"
            onChange={(e) => {
              setstatus(e.target.value);

              vendoractive(seller?._id, e.target.value);
            }}
          >
            <option value="" selected disabled>
              Select status
            </option>
            <option value="1">Approve</option>
            <option value="2">Reject</option>
          </select>
        ) : seller?.driver_status == 1 ? (
          <label className="btn-success js-example-responsive form-control w-100 mt-3">
            Approved
          </label>
        ) : (
          <label className="btn-danger js-example-responsive form-control w-100 mt-3">
            Reject
          </label>
        )}
        <td>
          <div className="d-flex justify-content-center align-items-center gap-10">
            <Link
              to="/updatedeliveryman" onClick={((e)=>{
                secureLocalStorage.setItem("driveridd",seller?._id)
              })}  
              className="btn btn-outline--primary btn-sm edit"
              title="Edit"
              href="https://6valley.6amtech.com/admin/delivery-man/update/10"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
            <Link
              to="/earningstatement" onClick={((e)=>{
                secureLocalStorage.setItem("driveridd",seller?._id)
              })} 
              title="Earning Statement"
              className="btn btn-outline-info btn-sm square-btn"
              href="https://6valley.6amtech.com/admin/delivery-man/earning-statement-overview/10"
            >
              <i class="fa fa-money" aria-hidden="true"></i>
            </Link>

            <form>
              <input
                type="hidden"
                name="_token"
                defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
                autoComplete="off"
              />{" "}
              <input type="hidden" name="_method" defaultValue="delete" />{" "}
            </form>
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
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          marginLeft: "0px",
        }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                alt=""
              />
              Delivery Man
              <span className="badge badge-soft-dark radius-50 fz-12">
                {count}
              </span>
            </h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card">
                <div className="px-3 py-4">
                  <div className="d-flex justify-content-between gap-10 flex-wrap align-items-center">
                    <div className>
                      <form>
                        <div className="input-group input-group-merge input-group-custom">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input
                            type="search"
                            name="searchValue"
                            className="form-control"
                            placeholder="Search by name"
                            aria-label="Search orders"
                            onChange={handleFilter}
                          />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                        </div>
                      </form> 
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                      <div className="dropdown text-nowrap">
                        <button onClick={handleExport}
                          type="button"
                          className="btn btn-outline--primary"
                          data-toggle="dropdown"
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                          Export
                        </button>
                        
                      </div>
                      <Link
                        to="/addnewdeliveryman"
                        type="button"
                        className="btn btn--primary text-nowrap"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i> Add New
                        Delivery Man
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  {filteredSellerList.length > 0 ? (
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>SL</th>
                          <th>Name</th>
                          <th>Contact info</th>
                          <th>Total Orders</th>
                          <th>Rating</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                          <th className="text-center">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredSellerList
                          .slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          )
                          .map((seller, index) =>
                            renderSellerData(seller, index)
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
                        No deliveryman found
                      </p>
                    </div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {filteredSellerList.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={filteredSellerList.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
                </div>
                <div className="table-responsive mt-4">
                  <div className="px-4 d-flex justify-content-center justify-content-md-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverymanlist;
