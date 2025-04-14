import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebarr from "../Sidebar";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Edit_subsubcetagory = () => {

  const [subcategory_image, setsubcategory_image] = useState();

  const [english_subcategory_name, setenglish_subcategory_name] = useState();
  const [french_subcategory_name, setfrench_subcategory_name] = useState();
  const [categorydata, setcategorydata] = useState();
  const Navigate = useNavigate();
  let token = secureLocalStorage.getItem("adminidtoken");

  let subcategory_id = secureLocalStorage.getItem("subsubcategoryid");

  useEffect(() => {
    getsubcategorydata();
  }, [0]);
  let getsubcategorydata = () => {
    const subcatdata = {
      sub_subcategoryId: subcategory_id,
    };
    let options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/getsubSubcategory_byId`,
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
      title: "Subsubategory Update Successfully",
      text: "Sbcategory inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const editsubcetagory = (e) => {
    e.preventDefault();

    const formData = {
   
   sub_subcategoryId: subcategory_id,

    english_sub_subcategory_name:english_subcategory_name,
    french_sub_subcategory_name: french_subcategory_name

    }
    // const formData = new FormData();
    // formData.append("subcategory_image", subcategory_image ? subcategory_image : categorydata?.subcategory_image);
    // formData.append("sub_subcategoryId", subcategory_id);

    // formData.append("english_subcategory_name", english_subcategory_name ? english_subcategory_name : categorydata?.english_subcategory_name);
    // formData.append("french_subcategory_name", french_subcategory_name ? french_subcategory_name : categorydata?.french_subcategory_name );

   
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/updatesubSubcategory`,
        formData
      )
      .then((res) => {

        setTimeout(() => {
          Navigate("/subsubcetagory");
        }, 3000);
        editdata();
      })
      .catch((error) => {

      });
 
  };
  return (
    <div>
    {/* <Header /> */}
    <div
      className="container row" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      
    >
      <div className="col-lg-3 col-md-4" >
        {/* <Sidebarr /> */}
      </div>

      <div
        className="col-lg-9 col-md-8"
        style={{  marginTop: "60px" }}
      >
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
                  <form onSubmit={editsubcetagory}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            
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
                                  categorydata?.french_sub_subcategory_name
                                }
                                
                              />
                            </div>

                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Subsubcategory Name
                                <span className="text-danger">*</span> (EN)
                              </label>
                              <input
                                value={english_subcategory_name}
                                onChange={(e) => {
                                  setenglish_subcategory_name(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder={
                                  categorydata?.english_sub_subcategory_name
                                }
                                
                              />
                            </div>
                          </div>

                          {/* <div className="from_part_2">
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
                          </div> */}
                        </div>
                        {/* <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
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
                                    `${process.env.REACT_APP_API_KEY}uploads/` +
                                    categorydata?.subcategory_image
                                  }
                                  alt="image"
                                />
                              )}
                            </center>
                          </div>
                        </div> */}
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

export default Edit_subsubcetagory;
