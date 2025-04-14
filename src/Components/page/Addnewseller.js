import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
const Addnewseller = () => {
  const [address, setAddress] = useState("");

  const [details, setDetails] = useState(null);
  const Navigate = useNavigate();
const [maincategory, setmaincategory] = useState();
  let token = secureLocalStorage.getItem("adminidtoken");

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setDetails(latLng);
    } catch (error) {}
  };

  // workinghours
  const [workHours, setWorkHours] = useState([
    {
      day_name: "Monday",
      status: false,
      open_time: "",
      close_time: "",
    },

    {
      day_name: "Tuesday",
      status: false,
      open_time: "",
      close_time: "",
    },
    {
      day_name: "Wensday",
      status: false,
      open_time: "",
      close_time: "",
    },
    {
      day_name: "Thursday",
      status: false,
      open_time: "",
      close_time: "",
    },
    {
      day_name: "Friday",
      status: false,
      open_time: "",
      close_time: "",
    },
    {
      day_name: "Saturday",
      status: false,
      open_time: "",
      close_time: "",
    },
    {
      day_name: "Sunday",
      status: false,
      open_time: "",
      close_time: "",
    },
  ]);

  useEffect(() => {
    getmaincategory();
  }, [0]);
  const  getmaincategory = () => {
    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/maincategory_list`, options)
      .then((res) => {

        setmaincategory(res.data);
      })
      .catch((error) => {});
  };
  const handleInputChange = (index, field, value) => {
    setWorkHours((prevWorkHours) => {
      const newWorkHours = [...prevWorkHours];
      if (field === "status") {
        newWorkHours[index][field] = value;
      } else {
        newWorkHours[index][field + "_time"] =
          value &&
          new Date(`2000-01-01T${value}`).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
      }
      return newWorkHours;
    });
  };

  // New states

  const [first_name, setfirst_name] = useState();
  const [last_name, setlast_name] = useState();
  const [dateof_birth, setdateof_birth] = useState();
  const [residence_city, setresidence_city] = useState();
  const [email, setemail] = useState();
  const [front_id, setfrontsideid] = useState();
  const [back_id, setbacksideid] = useState();
  const [business_type, setbusiness_type] = useState();
  const [store_name, setstore_name] = useState();
  const [store_address, setstore_address] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [service, setservice] = useState();

  const [store_logo, setstore_logo] = useState();
  const [front_image, setfront_image] = useState();
  const [store_license, setstore_license] = useState();
  const [phone_number, setphone_number] = useState();
  const [acc_number, setacc_number] = useState();
  const [bank_name, setbank_name] = useState();
  const [branch_name, setbranch_name] = useState();
  const [swift_code, setswift_code] = useState();
  const [mobile_money_number, setmobile_money_number] = useState();
  const [password, setpassword] = useState();
  const [store_description, setstore_description] = useState();


  const addseller = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", first_name);
    formData.append("lastName", last_name);
    formData.append("dob", dateof_birth);
    formData.append("residenceyCity", residence_city);
    formData.append("mobile_number", phone_number);
    formData.append("email", email);
    formData.append("typeOfbusiness", business_type);
    formData.append("shop_address", store_address);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("serviceType", service);

    formData.append("workHours", JSON.stringify(workHours));
    formData.append("acc_number", acc_number);
    formData.append("bankAccount_name", bank_name);
    formData.append("bank_name", branch_name);
    formData.append("swift_code", swift_code);
    formData.append("mobile_money_number", mobile_money_number);
    formData.append("fcm_Id", "12345");
    formData.append("latitude", details?.lat);
    formData.append("longitude", details?.lng);
    formData.append("upload_frontId", front_id);
    formData.append("upload_backsideId", back_id);
    formData.append("vender_profile", front_image);
    formData.append("shop_logo", store_logo);
    formData.append("shop_licence", store_license);
    formData.append("password", password);
    formData.append("shop_name", store_name);
    formData.append("store_description", store_description);
    
axios.post(`${process.env.REACT_APP_API_KEY}admin/api/sallerSignup`, formData)

      .then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          Navigate("/sellerlist");
        }, 3000);
      })
      .catch((error) => {
        if (error.res && error.res.status === 400) {
          toast.error(error.res.data.message);
        } else {
          toast.error("Some Error Has Been Occured");
        }
        // toast.error("Some Error Has Been Occured");
      });
  };


  return (
    <div>
      <Toaster />
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
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
                className="mb-1"
                alt=""
              />
              Add new Vendor
            </h2>
          </div>
          <form className="user mb-5" onSubmit={addseller}>
            <input type="hidden" /> {/* Vendore information new page */}
            <div className="card">
              <div className="card-body">
                <input type="hidden" name="status" defaultValue="approved" />
                <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png"
                    className="mb-1"
                    alt=""
                  />
                  Vendor information
                </h5>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleFirstName"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-user"
                        value={first_name}
                        onChange={(e) => {
                          setfirst_name(e.target.value);
                        }}
                        placeholder="Ex: First Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleLastName"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-user"
                        value={last_name}
                        onChange={(e) => {
                          setlast_name(e.target.value);
                        }}
                        placeholder="Ex: Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPhone"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        Date of birth
                      </label>
                      <input 
       
                        type="date"
                        className="form-control form-control-user"
                        value={dateof_birth}
                        onChange={(e) => {
                          setdateof_birth(e.target.value);
                        }}
                        placeholder="Ex: 01/02/2024"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPhone"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        Residence city
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-user"
                        value={residence_city}
                        onChange={(e) => {
                          setresidence_city(e.target.value);
                        }}
                        placeholder="Ex: Residence_city"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPhone"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        Phone number
                      </label>
                      <input
                        maxLength={10}
                        minLength={10}
                        type="text"
                        className="form-control form-control-user"
                        value={phone_number}
                        onChange={(e) => {
                          setphone_number(e.target.value);
                        }}
                        placeholder="Ex: 9999999999"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPhone"
                        className="title-color d-flex gap-1 align-items-center"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-user"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        placeholder="Ex: @gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="d-flex justify-content-center">
                        {front_id ? (
                          <img
                            className="upload-img-view"
                            src={URL.createObjectURL(front_id)}
                            alt="Banner image"
                          />
                        ) : (
                          <img
                            className="upload-img-view"
                            src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                            alt="Banner image"
                          />
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="title-color mb-2 d-flex gap-1 align-items-center">
                        Upload front side ID <span className="text-info"></span>
                      </div>
                      <div className="custom-file text-left">
                        <input
                          required
                          type="file"
                          name="image"
                          onChange={(e) => {
                            setfrontsideid(e.target.files[0]);
                          }}
                          className="custom-file-input image-input"
                          accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="custom-file-upload"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="d-flex justify-content-center">
                        {back_id ? (
                          <img
                            className="upload-img-view"
                            src={URL.createObjectURL(back_id)}
                            alt="Banner image"
                          />
                        ) : (
                          <img
                            className="upload-img-view"
                            src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                            alt="Banner image"
                          />
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="title-color mb-2 d-flex gap-1 align-items-center">
                        Upload back side ID <span className="text-info"></span>
                      </div>
                      <div className="custom-file text-left">
                        <input
                          required
                          type="file"
                          name="image"
                          onChange={(e) => {
                            setbacksideid(e.target.files[0]);
                          }}
                          className="custom-file-input image-input"
                          accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="custom-file-upload"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Store information */}
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png"
                    className="mb-1"
                    alt=""
                  />
                  Store information
                </h5>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Type of business
                    </label>
                    <select
                      value={business_type}
                      onChange={(e) => {
                        setbusiness_type(e.target.value);
                      }}
                      required
                      className="form-control"
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option>Enterprise</option>
                      <option>Individual</option>
                    </select>
                  </div>

                  
                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="shop_address"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Short business description
                    </label>
                    <input
                      type="text"
                      required
                      value={store_description}
                      className="form-control"
                      onChange={(e) => {
                        setstore_description(e.target.value);
                      }}
                      rows={1}
                      placeholder="Ex:Store description"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="shop_address"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Store name
                    </label>
                    <input
                      type="text"
                      required
                      value={store_name}
                      className="form-control"
                      onChange={(e) => {
                        setstore_name(e.target.value);
                      }}
                      rows={1}
                      placeholder="Ex:Store Name"
                    />
                  </div>

                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="shop_address"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Store address
                    </label>
                    <input
                      required
                      type="text"
                      name="store_address"
                      className="form-control"
                      value={store_address}
                      onChange={(e) => {
                        setstore_address(e.target.value);
                      }}
                      rows={1}
                      placeholder="Ex:Store Address"
                    />
                  </div>

                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      required
                      className="form-control"
                    >
                      <option disabled selected>
                        Select country
                      </option>
                      <option>California</option>
                      <option>Usa Kingdom</option>
                    </select>
                  </div>

                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => {
                        setcity(e.target.value);
                      }}
                      required
                      className="form-control"
                    >
                      <option disabled selected>
                        Select city
                      </option>
                      <option>wishdom</option>
                      <option>Kingdom</option>
                    </select>
                  </div>

                  <div className="col-lg-6 form-group ">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Store location
                    </label>
                    <PlacesAutocomplete
                      value={address}
                      onChange={(newValue) => setAddress(newValue)}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            style={{ width: "100%", marginTop: "0px" }}
                            className="form-control"
                            {...getInputProps({
                              placeholder: "Select location",
                            })}
                          />
                          <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#41b6e6"
                                  : "#fff",
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>

                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      placeholder="Enter password"
                      required
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-lg-6 form-group">
                    <label
                      htmlFor="exampleInputPhone"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Do you provide restauration services? (Restaurant, fast
                      food, bar, pub, café….)
                    </label>
                    <select 
                      value={service}
                      onChange={(e) => {
                        setservice(e.target.value);
                      }}
                      required
                      className="form-control"
                    >
                      <option disabled selected>
                        Select 
                      </option>
                     <option  value={maincategory?.data[0]?._id}> No</option>
                      <option value={maincategory?.data[1]?._id} >Yes</option> 
                      
                      {/* {maincategory?.map((type) => (
                              <option key={type?._id} value={type?._id}>
                                {type?.maincategory_englishName}
                              </option>
                            ))} */}
                    </select>
                  </div>

                  <div className="row card-body">
                    <h5 className="ml-3">Working hours</h5>
                    {workHours.map((day, index) => (
                      <div key={index} className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom:'-40px'}}>
                        <div className="d-flex align-items-center mb-0">
                          {/* <h5 className="mr-2">Working hours</h5> */}
                          {/* <h5 style={{ border: "none" }}>{day.day_name}</h5> */}
                        </div>

                        <div className="form-group d-flex align-items-center ">
                          <h5 style={{ border: "none", width: "100px" }}>
                            {day.day_name}
                          </h5>{" "}
                          <label className="switcher">
                            <input
                              type="checkbox"
                              id={`status-${index}`}
                              checked={day.status}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "status",
                                  e.target.checked
                                )
                              }
                              className="switcher_input"
                            />
                            <span className="switcher_control" />
                          </label>
                          <span
                            style={{ fontWeight: "bold" }}
                            className="mr-3 ml-3"
                          >
                            {day.status ? "Open" : "Closed"}
                          </span>
                          <div className="form-group">
                            <label
                              style={{ visibility: "hidden" }}
                              htmlFor={`open-${index}`}
                              className="mr-2"
                            >
                              Open time:
                            </label>
                            <input
                              type="time"
                              id={`open-${index}`}
                              value={day.open}
                              onChange={(e) =>
                                handleInputChange(index, "open", e.target.value)
                              }
                              className="form-control"
                            />
                          </div>
                          <div className="form-group ml-3">
                            <label
                              style={{ visibility: "hidden" }}
                              htmlFor={`close-${index}`}
                              className="mr-2"
                            >
                              Close time:
                            </label>
                            <input
                              type="time"
                              id={`close-${index}`}
                              value={day.close}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "close",
                                  e.target.value
                                )
                              }
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row card-body">
                    <div className="col-lg-4 form-group">
                      <div className="d-flex justify-content-center">
                        {store_logo ? (
                          <img
                            className="upload-img-view"
                            src={URL.createObjectURL(store_logo)}
                            alt="Banner image"
                          />
                        ) : (
                          <img
                            className="upload-img-view"
                            id="viewerLogo"
                            src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                            alt="Banner image"
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="d-flex gap-1 align-items-center title-color mb-2">
                          Upload your store logo(optional)
                          <span className="text-info"></span>
                        </div>
                        <div className="custom-file">
                          <input
                            
                            type="file"
                            name="logo"
                            onChange={(e) => {
                              setstore_logo(e.target.files[0]);
                            }}
                            className="custom-file-input image-input"
                            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="logo-upload"
                          >
                            Upload your store logo
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 form-group">
                      <div className="d-flex justify-content-center">
                        {front_image ? (
                          <img
                            className="upload-img-view "
                            id="viewerBanner"
                            src={URL.createObjectURL(front_image)}
                            alt="Banner image"
                          />
                        ) : (
                          <img
                            className="upload-img-view "
                            id="viewerBanner"
                            src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                            alt="Banner image"
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="d-flex gap-1 align-items-center title-color mb-2">
                          Upload your front image (optional)
                          <span className="text-info"></span>
                        </div>
                        <div className="custom-file">
                          <input
                            
                            type="file"
                            name="banner"
                            onChange={(e) => {
                              setfront_image(e.target.files[0]);
                            }}
                            className="custom-file-input image-input"
                            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                          />
                          <label
                            className="custom-file-label text-capitalize"
                            htmlFor="banner-upload"
                          >
                            Upload your front image
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 form-group">
                      <div className="d-flex justify-content-center">
                        {store_license ? (
                          <img
                            className="upload-img-view "
                            id="viewerBanner"
                            src={URL.createObjectURL(store_license)}
                            alt="Banner image"
                          />
                        ) : (
                          <img
                            className="upload-img-view "
                            id="viewerBanner"
                            src="https://6valley.6amtech.com/public\assets\back-end\img\400x400\img2.jpg"
                            alt="Banner image"
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="d-flex gap-1 align-items-center title-color mb-2">
                          Upload your store license (for enterprise)
                          <span className="text-info"></span>
                        </div>
                        <div className="custom-file">
                          <input
                            required
                            type="file"
                            name="banner"
                            onChange={(e) => {
                              setstore_license(e.target.files[0]);
                            }}
                            className="custom-file-input image-input"
                            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff,.pdf|image/*"
                          />
                          <label
                            className="custom-file-label text-capitalize"
                            htmlFor="banner-upload"
                          >
                            Upload your store license
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <input type="hidden" name="status" defaultValue="approved" />
                <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/seller-information.png"
                    className="mb-1"
                    alt=""
                  />
                  Bank and mobile money
                </h5>
                <div className="row">
                  <div className="col-lg-4 form-group">
                    <label
                      htmlFor="user_password"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Bank name (optional)
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="js-toggle-password form-control"
                        value={branch_name}
                        onChange={(e) => {
                          setbranch_name(e.target.value);
                        }}
                        
                        placeholder="Bank Name"
                        data-hs-toggle-password-options="{
                                                        
                                                }"
                      />
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text" href="javascript:">
                          {/* <i id="changePassIcon" className="tio-hidden-outlined" /> */}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 form-group">
                    <label
                      htmlFor="exampleInputEmail"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Bank account number (optional)
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-user"
                      value={acc_number}
                      onChange={(e) => {
                        setacc_number(e.target.value);
                      }}
                      placeholder="Ex:Account Number"
                      
                    />
                  </div>

                  <div className="col-lg-4 form-group">
                    <label
                      htmlFor="confirm_password"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Bank account name (optional)
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="js-toggle-password form-control"
                        value={bank_name}
                        onChange={(e) => {
                          setbank_name(e.target.value);
                        }}
                        
                        placeholder="Bank Account Name"
                      />
                      <div
                        id="changeConfirmPassTarget"
                        className="input-group-append"
                      >
                        <a className="input-group-text" href="javascript:"></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 form-group">
                    <label
                      htmlFor="confirm_password"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      SWIFT code (optional)
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="js-toggle-password form-control"
                        value={swift_code}
                        onChange={(e) => {
                          setswift_code(e.target.value);
                        }}
                        
                        placeholder="Swift code"
                      />
                      <div
                        id="changeConfirmPassTarget"
                        className="input-group-append"
                      >
                        <a className="input-group-text" href="javascript:"></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 form-group">
                    <label
                      htmlFor="confirm_password"
                      className="title-color d-flex gap-1 align-items-center"
                    >
                      Mobile money number
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="number"
                        className="js-toggle-password form-control"
                        value={mobile_money_number}
                        onChange={(e) => {
                          setmobile_money_number(e.target.value);
                        }}
                        required
                        placeholder="Mobile money number"
                      />
                      <div
                        id="changeConfirmPassTarget"
                        className="input-group-append"
                      >
                        <a className="input-group-text" href="javascript:"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-end gap-10">
                  <input
                    type="hidden"
                    name="from_submit"
                    defaultValue="admin"
                  />
                  {/* <button
                    type="reset"
                    className="btn btn-secondary reset-button"
                  >
                    Reset{" "}
                  </button> */}
                  <button type="submit" className="btn btn--primary btn-user">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnewseller;
