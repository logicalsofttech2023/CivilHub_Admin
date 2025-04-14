import React, { useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Addnewdeliveryman = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [dateofbirth, setdateofbirth] = useState();
  const [city, setcity] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [frontid, setfrontid] = useState();
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
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("conform_password", confirmpassword);
    formData.append("fcm_id", "123456");
    

    
    
    formData.append("frontId_iamge", frontid);
    formData.append("backId_iamge", backid);
    formData.append("vehical_iamge", vehicleimage);
    formData.append("document", vehicleregistrastion);
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/driverAdd`,
        formData
      )
      .then((response) => {
        setTimeout(() => {
          Navigate("/deliverymanlist");
        }, 3000);
        toast.success(`Congratulations ${response?.data?.data?.fname} ! You are now registered on innt as a rider`)
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("You Entered Envlid Inoformation");
        }
      });
  };

  return (
    <div>
      {/* <Header /> */}
      <Toaster />
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-delivery-man.png"
                alt=""
              />
              Add new delivery man
            </h2>
          </div>
          <div className="row mb-5">
            <div className="col-12">
              <form onSubmit={deliverydata}>
                <input type="hidden" name="_token" autoComplete="off" />{" "}
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      Personal Information
                    </h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="f_name"
                          >
                            First Name&nbsp;<span class="text-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => {
                              setfirstname(e.target.value);
                            }}
                            type="text"
                            value={firstname}
                            name="f_name"
                            className="form-control"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Last Name&nbsp;<span class="text-danger">*</span>
                          </label>
                          <input
                            value={lastname}
                            onChange={(e) => {
                              setlastname(e.target.value);
                            }}
                            type="text"
                            name="l_name"
                            className="form-control"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Date of birth&nbsp;
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            value={dateofbirth}
                            onChange={(e) => {
                              setdateofbirth(e.target.value);
                            }}
                            type="date"
                            name="l_name"
                            className="form-control"
                            placeholder="select date of birth"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Residence city&nbsp;
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            value={city}
                            onChange={(e) => {
                              setcity(e.target.value);
                            }}
                            type="text"
                            name="l_name"
                            className="form-control"
                            placeholder="Enter residence city"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Phone number&nbsp;<span class="text-danger">*</span>
                          </label>

                          <input
                            value={phone}
                            onChange={(e) => {
                              setphone(e.target.value);
                            }}
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="phone"
                            className="form-control"
                            placeholder="Ex : 017********"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Email
                          </label>

                          <input
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            type="email"
                            name="phone"
                            className="form-control"
                            placeholder="xyz@gmail.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="user_password"
                          >
                            Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input value={password} on onChange={((e)=>{setpassword(e.target.value)})} minLength={8}
                              type="password"
                              className="js-toggle-password form-control"
                              name="password"
                              required
                              id="user_password"
                              placeholder="Password minimum 8 characters"
                              
                            />
                            <div
                              id="changePassTarget"
                              className="input-group-append"
                            >
                              <a
                                className="input-group-text"
                                href="javascript:"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div> 
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="user_password"
                          >
                           Confirm Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input value={confirmpassword} onChange={((e)=>{setconfirmpassword(e.target.value)})} minLength={8}
                              type="password"
                              className="js-toggle-password form-control"
                              name="password"
                              required
                              id="user_password"
                              placeholder="Password minimum 8 characters"
                              
                            />
                            <div
                              id="changePassTarget"
                              className="input-group-append"
                            >
                              <a
                                className="input-group-text"
                                href="javascript:"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          {frontid ? (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src={URL.createObjectURL(frontid)}
                                alt="delivery-man image"
                              />
                            </div>
                          ) : (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                                alt="delivery-man image"
                              />
                            </div>
                          )}
                          <label className="title-color">
                            Upload front side ID
                          </label>
                          &nbsp;
                          <span className="text-danger">* </span>
                          <div className="custom-file">
                            <input
                              onChange={(e) => {
                                setfrontid(e.target.files[0]);
                              }}
                              type="file"
                              name="image"
                              id="customFileEg1"
                              className="custom-file-input"
                              accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
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
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          {backid ? (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src={URL.createObjectURL(backid)}
                                alt="delivery-man image"
                              />
                            </div>
                          ) : (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                                alt="delivery-man image"
                              />
                            </div>
                          )}
                          <label className="title-color">
                            Upload back side ID
                          </label>
                          &nbsp;
                          <span className="text-danger">* </span>
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
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          {vehicleimage ? (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src={URL.createObjectURL(vehicleimage)}
                                alt="delivery-man image"
                              />
                            </div>
                          ) : (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                                alt="delivery-man image"
                              />
                            </div>
                          )}
                          <label className="title-color">
                            Upload vehicle image
                          </label>
                          &nbsp;
                          <span className="text-danger">* </span>
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
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          {vehicleregistrastion ? (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src={URL.createObjectURL(vehicleregistrastion)}
                                alt="delivery-man image"
                              />
                            </div>
                          ) : (
                            <div className="mb-3 mt-4 text-center">
                              <img
                                className="upload-img-view"
                                id="viewer"
                                src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                                alt="delivery-man image"
                              />
                            </div>
                          )}
                          <label className="title-color">
                            Upload vehicle registration document
                          </label>
                          &nbsp;
                          <span className="text-danger">* </span>
                          <div className="custom-file">
                            <input
                              onChange={(e) => {
                                setvehicleregistrastion(e.target.files[0]);
                              }}
                              type="file"
                              name="image"
                              id="customFileEg1"
                              className="custom-file-input"
                              accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
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
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-end">
                      {/* <button
                        type="reset"
                        id="reset"
                        className="btn btn-secondary px-4"
                      >
                        Reset
                      </button> */}
                      <button type="submit" className="btn btn--primary px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      Account Information
                    </h5>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Ex : ex@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="user_password"
                          >
                            Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              className="js-toggle-password form-control"
                              name="password"
                              required
                              id="user_password"
                              placeholder="Password minimum 8 characters"
                              data-hs-toggle-password-options='{
                                                         "target": "#changePassTarget",
                                                        "defaultClass": "tio-hidden-outlined",
                                                        "showClass": "tio-visible-outlined",
                                                        "classChangeTarget": "#changePassIcon"
                                                }'
                            />
                            <div
                              id="changePassTarget"
                              className="input-group-append"
                            >
                              <a
                                className="input-group-text"
                                href="javascript:"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="confirm_password"
                          >
                            Confirm password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              className="js-toggle-password form-control"
                              name="confirm_password"
                              required
                              id="confirm_password"
                              placeholder="Password minimum 8 characters"
                              data-hs-toggle-password-options='{
                                                         "target": "#changeConfirmPassTarget",
                                                        "defaultClass": "tio-hidden-outlined",
                                                        "showClass": "tio-visible-outlined",
                                                        "classChangeTarget": "#changeConfirmPassIcon"
                                                }'
                            />
                            <div
                              id="changeConfirmPassTarget"
                              className="input-group-append"
                            >
                              <a
                                className="input-group-text"
                                href="javascript:"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-end">
                      <button
                        type="reset"
                        id="reset"
                        className="btn btn-secondary px-4"
                      >
                        Reset
                      </button>
                      <button type="submit" className="btn btn--primary px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnewdeliveryman;
