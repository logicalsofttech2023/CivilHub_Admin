import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import swal from "sweetalert";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "react-js-pagination";
import ReactPlayer from "react-player";

const Bannerlist = () => {
  let navigate = useNavigate();
  const [bannerlist, setBannerlist] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  let banneredit = () => {
    navigate(`/editbannerlist`);
  };

  let token = secureLocalStorage.getItem("adminidtoken");

  let deletebanner = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this banner file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletebannerimage = () => {
          let bannerdata = {
            bannerId: item,
          };

          let options = {
            headers: {
              token: token,
            },
          };
          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/delete_banner_api`,
              bannerdata,
              options
            )
            .then((res) => {
              getBannerlist();
            })
            .catch((error) => {});
        };
        deletebannerimage();
        swal("Poof! Your banner file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your banner is safe!");
      }
    });
  };

  let add_banner = () => {
    navigate(`/add_banner`);
  };

  useEffect(() => {
    getBannerlist();
  }, []);

  let getBannerlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_banner_api`)
      .then((res) => {
        setBannerlist(res.data.data);
      })
      .catch((error) => {});
  };

  const activedeactive = (item) => {
    const Data = {
      bannerId: item,
    };
    let options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/activeDeactive_banner`,
        Data,
        options
      )
      .then((res) => {
        toast.success(res.data.message);
        getBannerlist();
      })
      .catch((error) => {});
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderBannerData = (bannerdata, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
    return (
      <tr id={`data-${index}`}>
        <td className="pl-xl-5">{adjustedIndex}</td>
        <td>
  {bannerdata?.banner_image ? (
    bannerdata?.banner_image?.endsWith('.mp4') ||
    bannerdata?.banner_image.endsWith('.mov') ||
    bannerdata?.banner_image?.endsWith('.wmv') ||
    bannerdata?.banner_image?.endsWith('.flv') ||
    bannerdata?.banner_image?.endsWith('.avi') ||
    bannerdata?.banner_image?.endsWith('.avchd') ? (
      <ReactPlayer
        controls
        
        height={100} width={150}
        url={`${process.env.REACT_APP_API_KEY}uploads/${bannerdata?.banner_image}`}
      />
    ) : (
      <img
        className="rounded"
        width={64}
        src={`${process.env.REACT_APP_API_KEY}uploads/${bannerdata?.banner_image}`}
        alt="Banner image"
      />
    )
  ) : null}
</td>

        <td>{bannerdata?.banner_type}</td>
        {bannerdata?.active_status != 0 ? (<td>
  <form 
  
   className="banner_status_form">
    <input type="hidden"  />
    <input type="hidden" name="id" />
    <label className="switcher">
      <input
        type="checkbox"
        className="switcher_input"
        name="status"
         onChange={() => activedeactive(bannerdata?._id)}
      />
      <span className="switcher_control" />
    </label>
  </form>
</td>):(<td>
  <form 
   
     className="banner_status_form">
    <input type="hidden"  />
    <input type="hidden" name="id" />
    <label className="switcher">
      <input  id="coupon_status9" name="status" defaultValue={1} defaultChecked
        type="checkbox"
        className="switcher_input"

         onChange={() => activedeactive(bannerdata?._id)}
      />
      <span className="switcher_control" />
    </label>
  </form>
</td>)
}
        <td>
          <div className="d-flex gap-10 justify-content-center">
            <span
              className="btn btn-outline--primary btn-sm cursor-pointer edit"
              onClick={() => {
                banneredit(secureLocalStorage.setItem("banner_id", bannerdata?._id));
              }}
              title="Edit"
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </span>
            <a
              onClick={() => {
                deletebanner(bannerdata?._id);
              }}
              className="btn btn-outline-danger btn-sm cursor-pointer delete"
              title="Delete"
              id={index + 1}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </a>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Toaster />
      {/* <Header /> */}
      <div className="container row" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}>
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                  alt="Banner icon"
                />
                Banner Setup
              </h2>
            </div>

            <div className="row" id="banner-table">
              <div className="col-md-12">
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-lg-6 mb-2 mb-md-0">
                        <h5 className="mb-0 text-capitalize d-flex gap-2">
                          Banner Data
                          <span className="badge badge-soft-dark radius-50 fz-12">{bannerlist?.length}</span>
                        </h5>
                      </div>
                      <div className="col-md-8 col-lg-5">
                        <div className="row gy-2 gx-2 align-items-center text-left">
                          <div className="col-sm-12 col-md-9"></div>
                          <div className="col-sm-12 col-md-3">
                            <div id="banner-btn">
                              <button
                                onClick={add_banner}
                                id="main-banner-add"
                                className="btn btn--primary text-nowrap text-capitalize"
                              >
                                Add banner
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="columnSearchDatatable"
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th className="pl-xl-5">SL</th>
                          <th>Image</th>
                          <th>Banner type</th>
                          <th>Published</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bannerlist.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage).map((bannerdata, index) => {
                          return renderBannerData(bannerdata, index);
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive mt-4">
                    <div className="px-4 d-flex justify-content-lg-center">
                      <div className="d-flex justify-content-center mt-4">
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={itemsPerPage}
                          totalItemsCount={bannerlist ? bannerlist.length : 0}
                          pageRangeDisplayed={5}
                          onChange={handlePageChange}
                          itemClass="page-item"
                          linkClass="page-link"
                        />
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
  );
};

export default Bannerlist;
