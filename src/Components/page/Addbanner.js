import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import ReactPlayer from "react-player";

const Addbanner = () => {
  const [bannertype, setbannertype] = useState();
  const [resoucetype, setresoucetype] = useState();

  const [bannerimage, setbannerimage] = useState();
  const [banner_type, setbanner_type] = useState();
  const [resource_type, setresource_type] = useState();
  const [banner_url, setbanner_url] = useState();
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let adddata = () => {
    swal({
      title: "Banner added Successfully",
      text: "Banner inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const addbanner = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("banner_image", bannerimage);
    formData.append("banner_type", banner_type);
    formData.append("resource_type", resource_type);
    formData.append("banner_url", banner_url);

    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/create_banner_api`,
        formData,
        options
      )
      .then((res) => {
        adddata();
        setTimeout(() => {
          Navigate("/bannerlist");
        }, 3000);
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
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2 mt-3 pl-3">
                Add-Banner
              </h2>
            </div>

            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 text-capitalize">Banner form</h5>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={addbanner}
                    encType="multipart/form-data"
                    className="banner_form"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                    />{" "}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input type="hidden" id="id" name="id" />
                        <div className="form-group">
                          <label
                            htmlFor="name"
                            className="title-color text-capitalize"
                          >
                            Banner type
                          </label>
                          <select
                            required
                            className="js-example-responsive form-control w-100"
                            value={banner_type}
                            onChange={(e) => {
                              setbanner_type(e.target.value);
                            }}
                          >
                            <option value="" selected disabled>
                              Select Banner Type
                            </option>

                            {bannertype?.map((type) => (
                              <option key={type?._id} value={type?.bannerType}>
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
                            value={banner_url}
                            onChange={(e) => {
                              setbanner_url(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Enter url"
                          />
                        </div>
                        {/* <div className="form-group">
                          <label
                            htmlFor="resource_id"
                            className="title-color text-capitalize"
                          >
                            Resource type
                          </label>
                          <select
                            className="js-example-responsive form-control w-100"
                            required
                            value={resource_type}
                            onChange={(e) => {
                              setresource_type(e.target.value);
                            }}
                          >
                            <option value="" selected disabled>
                              Select Resource type
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
                        </div> */}
                      </div>
                     
                       <div  className="col-md-6 d-flex flex-column justify-content-center">
                       <div className="form-group">
                       <center>
  {bannerimage ? (
    bannerimage?.name?.endsWith('.mp4') || bannerimage?.name?.endsWith('.mov') || bannerimage?.name?.endsWith('.wmv') || bannerimage?.name?.endsWith('.flv') || bannerimage?.name?.endsWith('.avi') || bannerimage?.name?.endsWith('.avchd')  ? (
      <ReactPlayer controls  className="upload-img-view"  url={URL.createObjectURL(bannerimage)} />
    ) : (
      <img
        className="upload-img-view"
        src={URL.createObjectURL(bannerimage)}
        alt="image"
      />
    )
  ) : (
    <img
      className="upload-img-view"
      id="viewer"
      src="https://6valley.6amtech.com/public/assets/back-end/img/900x400/img1.jpg"
      alt="image"
    />
  )}
</center>

                     </div> 
                    </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                          <div className="custom-file text-left">
                              <input
                                onChange={(e) => {
                                  setbannerimage(e.target.files[0]);
                                }}
                                type="file"
                                name="image"
                                className="custom-file-input"
                                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff, .mp4, .mov, .wmv, .flv, .avi, .avchd|image/*"
                                required
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFileEg1"
                              >
                                Choose File
                              </label>
                            </div>
                        </div>
                    

                          
                      
                      <div className="col-12 d-flex justify-content-end flex-wrap gap-10">
                        <button
                          className="btn btn-secondary cancel px-4"
                          type="reset"
                        >
                          Reset
                        </button>
                        <button type="submit" className="btn btn--primary px-4">
                          Save
                        </button>
                        <button
                          id="update"
                          className="btn btn--primary d--none text-white"
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
  );
};

export default Addbanner;
