import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Editsubcetagory = () => {
  const [subcategory_image, setsubcategory_image] = useState();
  const [cetegory_name, setcetegory_name] = useState();
  const [sub_cate_name, setsub_cate_name] = useState();
  const [categorydata, setcategorydata] = useState();
  const [category_id, setcetegory_id] = useState(null);
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let subcategory_id = secureLocalStorage.getItem("subcategoryid");

  useEffect(() => {
    getsubcategorydata();
  }, [0]);
  let getsubcategorydata = () => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/admin_subcate_details/${subcategory_id}`,
        options
      )
      .then((res) => {
        setcategorydata(res.data.data);
        setcetegory_name(res.data.data?.category_id?.name);
        setcetegory_id(res.data.data?.category_id?._id);
        setsub_cate_name(res.data.data?.sub_cate_name);
        setsubcategory_image(res.data.data?.sub_cat_image);
      })
      .catch((error) => {
      });
  };

  let editdata = () => {
    swal({
      title: "Subcategory Update Successfully",
      text: "Subcategory inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const editsubcetagory = (e) => {
    e.preventDefault();
    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const formData = new FormData();
    formData.append("subcatId", subcategory_id);
    formData.append("category_id", category_id);
    formData.append("sub_cat_image", subcategory_image);
    formData.append("sub_cate_name",sub_cate_name);
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/admin_update_subcategory`,
        formData,
        options
      )
      .then((res) => {
        toast.success( res?.data?.msg || "Subcetegory Update Successfully");
        setTimeout(() => {
          Navigate("/subcetagory");
        }, 3000);
        editdata();
      })
      .catch((error) => {
console.log(error)
      });
    setsubcategory_image("")
    setsub_cate_name("")
    setcetegory_name("")
    setcetegory_id("")
  };

  return (
    <div>
        <Toaster/>
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
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <h2 className="h1 mb-0">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
                  className="mb-1 mr-1"
                  alt
                />
                Subcategory Update
              </h2>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <form onSubmit={editsubcetagory}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Cetegory Name
                                <span className="text-danger">*</span> (EN)
                              </label>
                              <input
                                value={cetegory_name}
                                onChange={(e) => {
                                  setcetegory_name(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder={
                                  categorydata?.cetegory_name
                                }

                              />
                            </div>
                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Subcategory Name
                                <span className="text-danger">*</span> (FR)
                              </label>
                              <input
                                value={sub_cate_name}
                                onChange={(e) => {
                                  setsub_cate_name(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder={
                                  categorydata?.sub_cate_name
                                }
                              />
                            </div>
                          </div>

                          <div className="from_part_2">
                            <label className="title-color">
                              Subcategory Logo
                            </label>
                            <span className="text-info">
                              <span className="text-danger">*</span>
                            </span>
                            <div className="custom-file text-left">
                              <input
                                onChange={(e) => {
                                  setsubcategory_image(e.target.files[0]);
                                }}
                                type="file"
                                name="image"
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
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
                          <div className="form-group">
                          <center>
                              {subcategory_image ? (
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    subcategory_image instanceof File
                                      ? URL.createObjectURL(subcategory_image) // If it's a new uploaded file
                                      : `${process.env.REACT_APP_API_KEY}uploads/admin/${subcategory_image}` // If it's from API
                                  }
                                  alt="Uploaded Image"
                                />
                              ) : (
                                <img
                                  src="bussiness-man.png"
                                  className="upload-img-view"
                                  alt="Default Avatar"

                                />
                              )}
                            </center>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2 justify-content-end">
                        <button type="submit" className="btn btn--primary">
                          Update
                        </button>
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

export default Editsubcetagory;
