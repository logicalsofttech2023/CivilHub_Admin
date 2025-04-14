import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import ReactPlayer from "react-player";

const Editbanner = () => {
  const [bannertype, setbannertype] = useState();
  const [resoucetype, setresoucetype] = useState();
  const [bannerimage, setbannerimage] = useState();
  const [banner, setbanner] = useState();

  const [banner_type, setbanner_type] = useState();
  const [resource_type, setresource_type] = useState();
  const [banner_url, setbanner_url] = useState();
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let bannerid = secureLocalStorage.getItem("banner_id");

  useEffect(() => {
    getbannerby();
  }, [0]);
  let getbannerby = () => {
    const bannerdata = {
      bannerId: bannerid,
    };
    let options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/getBanner_byId`,
        bannerdata,
        options
      )
      .then((res) => {
        setbanner(res.data.data);
      })
      .catch((error) => {});
  };

  let editdata = () => {
    swal({
      title: "Banner Update Successfully",
      text: "Banner inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };
  const editbanner = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("banner_image", bannerimage);
    formData.append("bannerId", bannerid);
    formData.append(
      "banner_type",
      banner_type ? banner_type : banner?.banner_type
    );
    formData.append(
      "resource_type",
      resource_type ? resource_type : banner?.resource_type
    );
    formData.append("banner_url", banner_url ? banner_url : banner?.banner_url);
    // let options = {
    //   hraders: {
    //     token: token,
    //   },
    // };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/update_banner_api`,

        formData
      )
      .then((res) => {
        setTimeout(() => {
          Navigate("/bannerlist");
        }, 3000);
        editdata();
      })
      .catch((error) => {});
    setbannerimage("");
  };

  useEffect(() => {
    getbannertype();
  }, [0]);
  const getbannertype = () => {
    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/bannerType_list`, options)
      .then((res) => {
        setbannertype(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    resourcetype();
  }, [0]);
  const resourcetype = () => {
    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/resourceType_list`,
        options
      )
      .then((res) => {
        setresoucetype(res.data.data);
      })
      .catch((error) => {});
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
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                  <img
                    width={20}
                    src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                    alt
                  />
                  Banner update form
                </h2>
              </div>
              <div>
                <Link className="btn btn--primary text-white" to="/bannerlist">
                  Back
                </Link>
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={editbanner}
                      encType="multipart/form-data"
                      className="banner_form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                      />{" "}
                      <input type="hidden" name="_method" defaultValue="put" />{" "}
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="hidden" id="id" name="id" />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="name"
                              className="title-color text-capitalize"
                            >
                              Banner type
                            </label>
                            <select
                              className="js-example-responsive form-control w-100"
                              name="banner_type"
                              value={banner_type}
                              onChange={(e) => {
                                setbanner_type(e.target.value);
                              }}
                            >
                              <option value="" selected disabled>
                                {banner?.banner_type}
                              </option>

                              {bannertype?.map((type) => (
                                <option
                                  key={type?._id}
                                  value={type?.bannerType}
                                >
                                  {type?.bannerType}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group mb-3">
                            <label
                              htmlFor="name"
                              className="title-color text-capitalize"
                            >
                              Banner URL
                            </label>
                            <input
                              className="form-control"
                              placeholder={banner?.banner_url}
                              value={banner_url}
                              onChange={(e) => {
                                setbanner_url(e.target.value);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="resource_id"
                              className="title-color text-capitalize"
                            >
                              Resource type
                            </label>
                            <select
                              className="js-example-responsive form-control w-100"
                              name="resource_type"
                              value={resource_type}
                              onChange={(e) => {
                                setresource_type(e.target.value);
                              }}
                            >
                              <option value="" selected disabled>
                                {banner?.resource_type}
                              </option>
                              {resoucetype?.map((restype) => (
                                <option
                                  key={restype?._id}
                                  value={restype?.resourceType}
                                >
                                  {restype?.resourceType}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
                          <div className="form-group mb-5">
                            <center>
                              {bannerimage ? (
                                bannerimage?.name?.endsWith(".mp4") ||
                                bannerimage?.name?.endsWith(".mov") ||
                                bannerimage?.name?.endsWith(".wmv") ||
                                bannerimage?.name?.endsWith(".flv") ||
                                bannerimage?.name?.endsWith(".avi") ||
                                bannerimage?.name?.endsWith(".avchd") ? (
                                  <ReactPlayer
                                    controls
                                    className="upload-img-view"
                                    url={URL.createObjectURL(bannerimage)}
                                  />
                                ) : (
                                  <img
                                    className="upload-img-view"
                                    src={URL.createObjectURL(bannerimage)}
                                    alt="image"
                                  />
                                )
                              ) : null}
                              {bannerimage ? null : banner?.banner_image ? (
                                banner.banner_image.endsWith(".mp4") ||
                                banner.banner_image.endsWith(".mov") ||
                                banner.banner_image.endsWith(".wmv") ||
                                banner.banner_image.endsWith(".flv") ||
                                banner.banner_image.endsWith(".avi") ||
                                banner.banner_image.endsWith(".avchd") ? (
                                  <ReactPlayer
                                    controls
                                    height={100}
                                    width={150}
                                    url={`${process.env.REACT_APP_API_KEY}uploads/${banner.banner_image}`}
                                  />
                                ) : (
                                  <img
                                    className="upload-img-view"
                                    width={64}
                                    src={`${process.env.REACT_APP_API_KEY}uploads/${banner.banner_image}`}
                                    alt="Banner image"
                                  />
                                )
                              ) : null}
                            </center>
                          </div>

                          <div className="from_part_2 ">
                            <label className="title-color">Banner image</label>
                            <span className="text-info">
                              <span className="text-danger">*</span>
                            </span>
                            <div className="custom-file text-left">
                              <input
                                onChange={(e) => {
                                  setbannerimage(e.target.files[0]);
                                }}
                                type="file"
                                name="image"
                                className="custom-file-input"
                                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff, .mp4, .mov, .wmv, .flv, .avi, .avchd|image/*"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFileEg1"
                              >
                                Choose File
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 d-flex justify-content-end gap-3">
                          <button
                            type="reset"
                            className="btn btn-secondary px-4"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn--primary px-4"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Editbanner;
