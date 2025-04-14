import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import swal from "sweetalert";
import Pagination from "react-js-pagination"; // Import the Pagination component

const Customerlist = () => {
  const [customerlist, setcustomerlist] = useState([]);
  const [count, setcount] = useState();
 
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10; 

  let token = secureLocalStorage.getItem("adminidtoken");

  let unblockcustomer = () => {
    swal({
      title: "Customer Status Changed",
      icon: "success",
    });
  };

  let unblock = (item) => {
    let unblockdata = {
      userId: item,
    };

    let options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/userBlock_unblock_api`,
        unblockdata,
        options
      )
      .then((res) => {
        unblockcustomer();
        getcustomerlist();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getcustomerlist();
  }, [0]);

  let getcustomerlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/customerList`)
      .then((res) => {

        setcount(res?.data?.data?.length)
        setcustomerlist(res.data.data);
        setFilteredCategoryList(res.data.data); 
      })
      .catch((error) => {});
  };

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = customerlist.filter(
      (item) =>
        item?.firstName?.toLowerCase().includes(searchTerm) ||
        item?.lastName?.toLowerCase().includes(searchTerm) ||
        item?.email?.toLowerCase().includes(searchTerm) ||
        item?.phone?.toLowerCase().includes(searchTerm)
    );
    setFilteredCategoryList(result);
    setActivePage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderCustomerData = (customer, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
  
    return (
      <tr key={index}>
        <td>{adjustedIndex}</td>
        <td>
          <Link
            to="/Customerdetails"
            onClick={() => {
              secureLocalStorage.setItem("customerid", customer?.userId);
            }}
            className="title-color hover-c1 d-flex align-items-center gap-10"
          >
           {customer?.user_profile === " " ? <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"

              className="avatar rounded-circle "
              alt=""
              width={40}
            /> : <img
            src={
              `${process.env.REACT_APP_API_KEY}uploads/` + customer?.user_profile
            }
            className="avatar rounded-circle "
            alt=""
            width={40}
          />} 
            {customer?.firstName} 
            {/* {customer?.lastName} */}
          </Link>
        </td>
        <td>
          <div className="mb-1">
            <strong>
              <a
                className="title-color hover-c1"
                href={`mailto:${customer?.email}`}
              >
                {/* {customer?.email?.slice(0,15)} */}
                {customer?.email?.length > 15 ? customer?.email?.slice(0,15) +`...` : customer?.email}
              </a>
            </strong>
          </div>
          <a className="title-color hover-c1" href={`tel:${customer?.phone}`}>
            {customer?.phone}
          </a>
        </td>
        <td>{customer?.createdAt?.slice(0,10)} {customer?.createdAt?.slice(11,16)}</td>
  
        <td>
          <div onClick={() => unblock(customer.userId)} className="text-center">
            {customer?.active_status === 1 ? (
              <div className="btn btn-primary">Unblock</div>
            ) : (
              <div className="btn btn-danger">Block</div>
            )}
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-center gap-2">
            <Link
              to="/Customerdetails"
              onClick={() => {
                secureLocalStorage.setItem("customerid", customer?.userId);
              }}
              title="View"
              className="btn btn-outline-info btn-sm square-btn"
            >
              <i className="fa fa-eye" aria-hidden="true"></i>
            </Link>
          </div>
          <form>
            <input
              type="hidden"
              name="_token"
              defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
              autoComplete="off"
            />
            <input
              type="hidden"
              name="_method"
              defaultValue="delete"
            />
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
                width={20}
                src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
                alt=""
              />
              Customer list
              <span className="badge badge-soft-dark radius-50">{count}</span>
            </h2>
          </div>
          <div className="card mb-5">
            <div className="px-3 py-4">
              <div className="row gy-2 align-items-center">
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form>
                    <div className="input-group input-group-merge input-group-custom">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input
                        onChange={handleFilter}
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search here......"
                        aria-label="Search orders"
                      />
                      <button type="submit" className="btn btn--primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
               
              </div>
            </div>
         


<div className="table-responsive datatable-custom">
              {filteredCategoryList.length > 0 ? (
                <table
                  style={{ textAlign: "left" }}
                  className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                >
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Customer name</th>
                      <th>Contact info</th>
                      <th>Registered info</th>
                      <th className="text-center">Block / Unblock</th>
                      <th className="text-center">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCategoryList
                      .slice(
                        (activePage - 1) * itemsPerPage,
                        activePage * itemsPerPage
                      )
                      .map((customer, index) =>
                        renderCustomerData(customer, index)
                      )}
                  </tbody>
                </table>
              ) : (
                <div class="text-center p-4">
                <img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
                <p class="mb-0 order-stats__subtitle">No Data found</p>
                </div>
              )}
              <div className="d-flex justify-content-center mt-4">
                {filteredCategoryList.length > itemsPerPage && (
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={filteredCategoryList.length}
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
  );
};

export default Customerlist;
