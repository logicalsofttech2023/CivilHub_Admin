import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateFreelancerSubCategory = () => {
  const [subcategory_image, setsubcategory_image] = useState();
  const [english_subcategory_name, setenglish_subcategory_name] = useState();
  const [french_subcategory_name, setfrench_subcategory_name] = useState();
  const [categorydata, setCategoryData] = useState();
  const [categoryId, setCategoryId] = useState();
  const [categorylist, setCategoryList] = useState();


  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let subcategory_id = secureLocalStorage.getItem("subcategoryid");

  useEffect(() => {
    getSubCategoryData();
  }, [0]);
  let getSubCategoryData = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}admin/api/admin_subcate_details_free/${subcategory_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {      
        setCategoryData(res.data.data);
        setCategoryId(res.data.data.category_id._id);
        setfrench_subcategory_name(res.data.data.sub_cate_name)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let editData = () => {
    swal({
      title: "Subsubategory Update Successfully",
      text: "Sbcategory inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const editSubCetagory = (e) => {
    e.preventDefault();
  
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // important for file upload
      },
    };
  
    const formData = new FormData();
    formData.append("subcatId", categorydata?._id); // or the correct subcategory ID
    formData.append("category_id", categoryId);
    formData.append("sub_cate_name", french_subcategory_name);
  
    if (subcategory_image) {
      formData.append("sub_cat_image", subcategory_image);
    }
  
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/admin_update_subcategory_free`,
        formData,
        options
      )
      .then((res) => {
        editData();
        setTimeout(() => {
          Navigate("/freelancerSubCategory");
        }, 3000);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  

  useEffect(() => {
    getFreelancerCategoryList();
  }, [0]);
  let getFreelancerCategoryList = () => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/admin_all_category_freelancer`,options)
      .then((res) => {
        setCategoryList(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
        
      });
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
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <h2 className="h1 mb-0">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
                  className="mb-1 mr-1"
                  alt
                />
                Sub Sub Category Update
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <form onSubmit={editSubCetagory}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                          <div className="form-group w-100">
                                <label
                                  className="title-color"
                                  htmlFor="exampleFormControlSelect1"
                                >
                                  Select Category
                                  <span className="text-danger">*</span>
                                </label>
  
                                <select value={categoryId}
                                  id="exampleFormControlSelect1"
                                  name="parent_id"
                                  className="form-control"
                                  required
                                  onChange={(e) => setCategoryId(e.target.value)}
                                >
                                  <option value="" selected disabled>
                                    Select category
                                  </option>
  
                                  {categorylist?.map((categorydatalist) => (
                                    <option
                                      key={categorydatalist?._id}
                                      value={categorydatalist?._id}
                                    >             
                                      {categorydatalist?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Subsubcategory Name
                                <span className="text-danger">*</span> (FR)
                              </label>
                              <input
                                value={french_subcategory_name}
                                onChange={(e) => {
                                  setfrench_subcategory_name(e.target.value);
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
                              Subsubcategory Logo
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
                                  src={URL.createObjectURL(subcategory_image)}
                                  alt="image"
                                />
                              ) : (
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/admin/` +
                                    categorydata?.sub_cat_image
                                  }
                                  alt="image"
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

export default UpdateFreelancerSubCategory;
