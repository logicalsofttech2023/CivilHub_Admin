import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Updatedeliveryman = () => {
  const [details, setdetails] = useState();

  let driverid = secureLocalStorage.getItem("driveridd");
  useEffect(() => {
    getdetails();
  }, [0]);
  const getdetails = () => {
    const data = {
      driverId: driverid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}admin/api/driverDetails`, data)
      .then((response) => {
        setdetails(response.data.data);

        setfirstname(response.data.data[0].fname);
        setlastname(response.data.data[0].lname);
        setdateofbirth(response.data.data[0].dob);
        setcity(response.data.data[0].city);
      })
      .catch((error) => {});
  };

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [dateofbirth, setdateofbirth] = useState();
  const [city, setcity] = useState();

  
  const [frontid, setfrontId] = useState();
  const [backid, setbackid] = useState();
  const [vehicleimage, setvehicleimage] = useState();
  const [vehicleregistrastion, setvehicleregistrastion] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const Navigate = useNavigate();
  const deliverydata = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", firstname);
    formData.append("lname", lastname);
    formData.append("dob", dateofbirth);
    formData.append("city", city);
    formData.append("driverId", driverid);

    formData.append("frontId_iamge", frontid);
    formData.append("backId_iamge", backid);
    formData.append("vehical_iamge", vehicleimage);
    formData.append("document", vehicleregistrastion);
    axios
      .post(`${process.env.REACT_APP_API_KEY}admin/api/updateDriver`, formData)
      .then((response) => {
        getdetails();

        setTimeout(() => {
          Navigate("/deliverymanlist");
        }, 3000);
        toast.success(response?.data?.message);
      })
      .catch((error) => {

        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("You Entered Envlid Inoformation");
        }
      });
  };



  const changepassword = (e) =>{
    e.preventDefault();
    const data = {
      driverId : driverid,
      password : password,
      confirm_password : confirmpassword
    }
    axios.post(`${process.env.REACT_APP_API_KEY}admin/api/updateDriver_password`,data).then((res)=>{
      setTimeout(() => {
        Navigate("/deliverymanlist");
      }, 3000);
      toast.success(res.data.message)
    }).catch((error)=>{
      
      if (error.response.status === 400) {
        toast.error(error.response.data.message)
      }
      
    })
  }

  return (
    <div>
      <Toaster />
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/deliveryman.png"
                width={20}
                alt=""
              />
              Update Deliveryman
            </h2>
          </div>
          <div className="row">
            {details?.map((data) => {
              return (
                <div className="col-12 mb-3">
                  <form onSubmit={deliverydata}>
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
                      autoComplete="off"
                    />{" "}
                    <div className="card">
                      <div className="card-body">
                        <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                          <i class="fa fa-user" aria-hidden="true"></i>
                          General Information
                        </h5>
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label className="title-color d-flex">
                                First Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setfirstname(e.target.value);
                                }}
                                type="text"
                                defaultValue={data?.fname}
                                name="f_name"
                                className="form-control"
                                placeholder="New delivery man"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label className="title-color d-flex">
                                Last Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setlastname(e.target.value);
                                }}
                                type="text"
                                defaultValue={data?.lname}
                                name="l_name"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label
                                className="title-color d-flex"
                                htmlFor="exampleFormControlInput1"
                              >
                                City
                              </label>
                              <div className="input-group mb-3">
                                <input
                                  onChange={(e) => {
                                    setcity(e.target.value);
                                  }}
                                  type="text"
                                  name="city"
                                  defaultValue={data?.city}
                                  className="form-control"
                                  placeholder="Ex : 017********"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label className="title-color d-flex">
                                Date of birth ({data?.dob})
                              </label>
                              <input
                                onChange={(e) => {
                                  setdateofbirth(e.target.value);
                                }}
                                defaultValue={data?.dob}
                                type="date"
                                placeholder="Date of birth"
                                name="identity_type"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <div className="d-flex mb-2 gap-2 align-items-center">
                                <label className="title-color mb-0">
                                  FrontId Image
                                </label>
                              </div>
                              <div className="form-group">
                                <div className="custom-file">
                                  <input
                                    onChange={(e) => {
                                      setfrontId(e.target.files[0]);
                                    }}
                                    type="file"
                                    name="image"
                                    id="customFileEg1"
                                    className="custom-file-input"
                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="customFileEg1"
                                  >
                                    Choose File
                                  </label>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    frontid
                                      ? URL.createObjectURL(frontid)
                                      : `${process.env.REACT_APP_API_KEY}uploads/` +
                                        data?.frontId_iamge
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <div className="d-flex mb-2 gap-2 align-items-center">
                                <label className="title-color mb-0">
                                  BackId Image
                                </label>
                              </div>
                              <div className="form-group">
                                <div className="custom-file">
                                  <input
                                    onChange={(e) => {
                                      setbackid(e.target.files[0]);
                                    }}
                                    type="file"
                                    name="image"
                                    id="customFileEg1"
                                    className="custom-file-input"
                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="customFileEg1"
                                  >
                                    Choose File
                                  </label>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    backid
                                      ? URL.createObjectURL(backid)
                                      : `${process.env.REACT_APP_API_KEY}uploads/` +
                                        data?.backId_iamge
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <div className="d-flex mb-2 gap-2 align-items-center">
                                <label className="title-color mb-0">
                                  Vehicle Iamge
                                </label>
                              </div>
                              <div className="form-group">
                                <div className="custom-file">
                                  <input
                                    onChange={(e) => {
                                      setvehicleimage(e.target.files[0]);
                                    }}
                                    type="file"
                                    name="image"
                                    id="customFileEg1"
                                    className="custom-file-input"
                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="customFileEg1"
                                  >
                                    Choose File
                                  </label>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    vehicleimage
                                      ? URL.createObjectURL(vehicleimage)
                                      : `${process.env.REACT_APP_API_KEY}uploads/` +
                                        data?.vehical_iamge
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <div className="d-flex mb-2 gap-2 align-items-center">
                                <label className="title-color mb-0">
                                  Vehicle Registration
                                </label>
                              </div>
                              <div className="form-group">
                                <div className="custom-file">
                                  <input
                                    onChange={(e) => {
                                      setvehicleregistrastion(
                                        e.target.files[0]
                                      );
                                    }}
                                    type="file"
                                    name="image"
                                    id="customFileEg1"
                                    className="custom-file-input"
                                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="customFileEg1"
                                  >
                                    Choose File
                                  </label>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    vehicleregistrastion
                                      ? URL.createObjectURL(
                                          vehicleregistrastion
                                        )
                                      : `${process.env.REACT_APP_API_KEY}uploads/` +
                                        data?.document
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                         
                         <button
                           type="submit"
                           className="btn btn--primary px-4"
                         >
                           Update
                         </button>
                       </div>
                      </div>
                    </div>
                   
                  </form>
                </div>
              );
            })}



          </div>

          <div className="card mt-3 mb-5">
                      <div className="card card-body">
                        <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                          <i class="fa fa-user" aria-hidden="true"></i>
                          Update Password
                        </h5>
                        <form onSubmit={changepassword}>
                        <div className="row">
                         
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="title-color d-flex">
                                Password
                              </label>
                              <input onChange={((e)=>{setpassword(e.target.value)})}
                                type="text" required
                                name="password"
                                className="form-control"
                                placeholder="Ex : Password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="title-color d-flex">
                                Confirm password
                              </label>
                              <input onChange={((e)=>{setconfirmpassword(e.target.value)})}
                                type="text" required
                                name="confirm_password"
                                className="form-control"
                                placeholder="Ex : Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                         
                          <button
                            type="submit"
                            className="btn btn--primary px-4"
                          >
                            Update
                          </button>
                        </div>
                        </form>
                      </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Updatedeliveryman;
