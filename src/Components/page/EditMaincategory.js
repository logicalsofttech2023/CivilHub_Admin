import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebarr from "../Sidebar";
import swal from "sweetalert";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { Navigate, useNavigate } from "react-router-dom";

const EditMaincategory = () => {
  const [category_image, setcategory_image] = useState();
  const [mainCategory_name, setmainCategory_name] = useState();
  const [category_englishName, setcategory_englishName] = useState();
  const [category_frenchName, setcategory_frenchName] = useState();
  const [categorydata, setcategorydata] = useState();
  const [mainCategory_list, setmainCategory_list] = useState();
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let category_id = secureLocalStorage.getItem("categoryid");

  useEffect(() => {
    getsubcategorydata();
  }, [0]);
  let getsubcategorydata = () => {
    const subcatdata = {
      categoryId: category_id,
    };
    let options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/getCategory_byId`,
        subcatdata,
        options
      )
      .then((res) => {

        setcategorydata(res.data.data);
      })
      .catch((error) => {});
  };

  let editdata = () => {
    swal({
      title: "Category Update Successfully",
      text: "Category inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };
  const editcetagory = (e) => {
    e.preventDefault();
    // let options = {
    //   headers: {
    //     token: token,
    //   },
    // };
    const formData = new FormData();
    formData.append("category_image", category_image);
    formData.append("categoryId", category_id);
    formData.append("maincategoryId", mainCategory_name ? mainCategory_name : categorydata?.maincategoryId);
    formData.append("category_englishName", category_englishName ? category_englishName : categorydata?.category_englishName);
    formData.append("category_frenchName", category_frenchName ? category_frenchName : categorydata?.category_frenchName);
    
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/updateCategory`,
        formData
      )
      .then((res) => {

        setTimeout(() => {
          Navigate("/maincetagory");
        }, 3000);

        editdata();
      })
      .catch((error) => {});
    setcategory_image("");
    setmainCategory_name("");
    setcategory_englishName("");
    setcategory_image("");
    setcategory_image("");
  };


  useEffect(() => {
    mainCategorylist();
   }, [0]);
   let mainCategorylist = () => {

     axios
       .get(`${process.env.REACT_APP_API_KEY}admin/api/mainCategory_list`)
       .then((res) => {

         setmainCategory_list(res.data.data);
      })
       .catch((error) => {

       });
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
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <h2 className="h1 mb-0">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
                  className="mb-1 mr-1"
                  alt
                />
                Maincategory Update
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <form onSubmit={editcetagory}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <div className="form-group">
                              <label className="title-color">
                                Main category
                              </label>
                             

<select
                                 
                                value={mainCategory_name}
                                onChange={(e) => {
                                  setmainCategory_name(e.target.value);
                                }}
                                className="form-control"
                              >
                                <option value='' disabled selected>
                                Maincategory
                                </option>
                                {mainCategory_list?.map((data, index) => (
                          <option key={index} value={data?._id}>
                            {data?.maincategory_englishName}
                          </option>
                        ))}
                              </select>
                            </div>

                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Category Name
                                <span className="text-danger">*</span> (EN)
                              </label>
                              <input
                                value={category_englishName}
                                onChange={(e) => {
                                  setcategory_englishName(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder={categorydata?.category_englishName}
                                
                              />
                            </div>
                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Category Name
                                <span className="text-danger">*</span> (FR)
                              </label>
                              <input
                                value={category_frenchName}
                                onChange={(e) => {
                                  setcategory_frenchName(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder={categorydata?.category_frenchName}
                                
                              />
                            </div>
                          </div>

                          <div className="from_part_2">
                            <label className="title-color">Category Logo</label>
                            <span className="text-info">
                              <span className="text-danger">*</span>
                              {/* Ratio 1:1 (500 x 500 px) */}
                            </span>
                            <div className="custom-file text-left">
                              <input
                                onChange={(e) => {
                                  setcategory_image(e.target.files[0]);
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
                              {category_image ? (
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={URL.createObjectURL(category_image)}
                                  alt="image"
                                />
                              ) : (
                                <img
                                  className="upload-img-view"
                                  id="viewer"
                                  src={
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    categorydata?.category_image
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

export default EditMaincategory;


