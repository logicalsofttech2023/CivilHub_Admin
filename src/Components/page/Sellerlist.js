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

const Sellerlist = () => {
  const [count, setcount] = useState();
  const [sellerlist, setSellerlist] = useState([]);
  const [filteredSellerList, setFilteredSellerList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  let token = secureLocalStorage.getItem("adminidtoken");


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

  let vendoractive = (item) => {
    let sellerdata = {
      sellerId: item,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/sellerApproved`,
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
      .get(`${process.env.REACT_APP_API_KEY}admin/api/sallerList_api`)
      .then((res) => {

        setcount(res?.data?.data?.length);
        setSellerlist(res.data.data);
        setFilteredSellerList(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = sellerlist.filter(
      (item) =>
        item.mobile_number?.toLowerCase().includes(searchTerm) ||
        item.firstName?.toLowerCase().includes(searchTerm)
    );
    setFilteredSellerList(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderSellerData = (seller, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
   return(
    <tr key={index}>
      <td>{adjustedIndex}</td>
      <td>
        <div className="d-flex align-items-center gap-10 w-max-content">
          {seller?.shop_logo === null ? <img
            width={50}
            className="avatar rounded-circle"
            src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png"
            alt=""
          /> : <img
          width={50}
          className="avatar rounded-circle"
          src={`${process.env.REACT_APP_API_KEY}uploads/` + seller?.shop_logo}
          alt=""
        />}
          
          <div>
            <Link
              to="/sellerdetails"
              onClick={() => {
                secureLocalStorage.setItem("sellerid", seller?._id);
              }}
              className="title-color"
            >
              {seller?.shop_name?.length > 12 ? seller?.shop_name?.slice(0,12) +`...` : seller?.shop_name }
            </Link>
            <br />
            <span className="text-danger"></span>
          </div>
        </div>
      </td>
      <td>
        <Link
          to="/sellerdetails"
          onClick={() => {
            secureLocalStorage.setItem("sellerid", seller?._id);
          }}
          title="View"
          className="title-color"
        >
          {seller?.firstName?.length > 10 ? seller?.firstName?.slice(0,10) +`...` : seller?.firstName}
        </Link>
      </td>
      <td>
        <div className="mb-1">
          <strong>
            <a
              className="title-color hover-c1"
              href={`mailto:${seller?.email}`}
            >
              {seller?.email?.length > 10 ? seller?.email?.slice(0,10) +`...` : seller?.email}
            </a>
          </strong>
        </div>
        <a
          className="title-color hover-c1"
          href={`tel:${seller?.mobile_number}`}
        >
          {seller?.mobile_number}
        </a>
      </td>
      <td>
        {seller?.vender_status == 0 ? (
          <label
            onClick={() => {
              vendoractive(seller._id);
            }}
            className="badge badge-danger cursor-pointer"
          >
            Pending
          </label>
        ) : (
          <label
            onClick={() => {
              vendoractive(seller._id);
            }}
            className="badge badge-success cursor-pointer"
          >
            Active
          </label>
        )}
      </td>
      <td>
        <div
          onClick={() => {
            unblock(seller._id);
          }}
          className="text-center"
        >
          {seller?.active_status == 1 ? (
            <div className="btn btn-primary">Unblock</div>
          ) : (
            <div className="btn btn-danger">Block</div>
          )}
        </div>
      </td>
      <td className="text-center">
        <Link
          to="/products_list"
          href={`https://6valley.6amtech.com/admin/sellers/product-list/${seller?._id}`}
          className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12"
        >
          {seller?.productCount}
        </Link>
      </td>
      <td>
        <div className="d-flex justify-content-center gap-2">
          <Link
            to="/sellerdetails"
            onClick={() => {
              secureLocalStorage.setItem("sellerid", seller?._id);
            }}
            title="View"
            className="btn btn-outline-info btn-sm square-btn"
          >
            <i class="fa fa-eye" aria-hidden="true"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
          }

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
              Vendor List
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
                            placeholder="Search here...."
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
                      <Link
                        to="/addnewseller"
                        type="button"
                        className="btn btn--primary text-nowrap"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i> Add New
                        Vendor
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
                          <th>Shop name</th>
                          <th>Vendor_name</th>
                          <th>Contact info</th>
                          <th>Status</th>
                          <th className="text-center">Block / Unblock</th>
                          <th className="text-center">Total products</th>
                          <th className="text-center">Action</th>
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
                    <img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
                    <p class="mb-0 order-stats__subtitle">No seller found</p>
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

export default Sellerlist;
