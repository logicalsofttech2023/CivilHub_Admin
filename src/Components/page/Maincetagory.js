import React, { useEffect, useState } from "react";
import Header from "../Header";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";

const Maincetagory = () => {
  let navigate = useNavigate();


  const [maincategory_englishName, setmaincategory_englishName] = useState();
  const [maincategory_frenchName, setmaincategory_frenchName] = useState();
  const [maincategory_image, setmaincategory_image] = useState();

  const [categorylist, setcategorylist] = useState([]);
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  const [count, setcount] = useState();
  let token = secureLocalStorage.getItem("adminidtoken");

  let addcategorydata = () => {
    swal({
      title: "Maincategory added Successfully",
      text: "Maincategory inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const categorydatahandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("maincategory_englishName", maincategory_englishName);
    formData.append("maincategory_frenchName", maincategory_frenchName);
    
    formData.append("maincategory_image", maincategory_image);

    // let options = {
    //   headers: {
    //     token: token,
    //   },
    // };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/mainCategory`,
        formData
      )
      .then((res) => {

        addcategorydata();
        getbannerlist();
      })
      .catch((error) => {

      });
    setmaincategory_englishName("");
    setmaincategory_frenchName("");
    setmaincategory_image("");
    
  };

  useEffect(() => {
    getbannerlist();
  }, [0]);

  let getbannerlist = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_mainCategory_list`)
      .then((res) => {
        setcount(res?.data?.data?.length)
        setcategorylist(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = categorylist.filter(
      (item) =>
        item?.maincategory_englishName?.toLowerCase().includes(searchTerm) ||
        item?.maincategory_frenchName?.toLowerCase().includes(searchTerm)
    );
    setFilteredCategoryList(result);
  };




 

  let cetagoryedit = () => {
    navigate("/editMaincategory");
  };

  let deletesubcategory = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Maincategory!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletebannerimage = () => {
          let bannerdata = {
            categoryId: item,
          };

          let options = {
            headers: {
              token: token,
            },
          };
          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/deleteCategory`,
              bannerdata,
              options
            )
            .then((res) => {
              getbannerlist();
            })
            .catch((error) => {});
        };
        deletebannerimage();
        swal("Poof! Your Maincategory  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Maincategory is safe!");
      }
    });
  };

  const activedeactive = (item) => {
    const Data = {
      categoryId: item,
    };
    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/activeDeactive_category`,
        Data,
        options
      )
      .then((res) => {
        toast.success(res.data.message);
        getbannerlist();
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Toaster />
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4" style={{ paddingLeft: "0px" }}>
          {/* <Sidebarr /> */}
        </div>

        <div
          className="col-lg-9 col-md-8"
          style={{ paddingLeft: "0px", marginTop: "60px" }}
        >
          <div className="mt-3">
            <div className="mb-3">
              <h2 className="h1 mb-0 d-flex gap-10">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
                  alt
                />
                Maincategory
              </h2>
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <form onSubmit={categorydatahandle}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                           

                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Maincategory Name
                                <span className="text-danger">*</span> (EN)
                              </label>
                              <input
                                value={maincategory_englishName}
                                onChange={(e) => {
                                  setmaincategory_englishName(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder="New Maincategory"
                                required
                              />
                            </div>
                            <div className="form-group  lang_form">
                              <label className="title-color">
                                Maincategory Name
                                <span className="text-danger">*</span> (FR)
                              </label>
                              <input
                                value={maincategory_frenchName}
                                onChange={(e) => {
                                  setmaincategory_frenchName(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder="New Maincategory"
                                
                              />
                            </div>
                          </div>

                          <div className="from_part_2">
                            <label className="title-color">Mainategory Logo</label>
                            <span className="text-info">
                              <span className="text-danger"> (Optional) *</span>
                            </span>
                            <div className="custom-file text-left">
                              <input
                                onChange={(e) => {
                                  setmaincategory_image(e.target.files[0]);
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
                              {maincategory_image ? (
                                <img
                                  className="upload-img-view"
                                  src={URL.createObjectURL(maincategory_image)}
                                  alt="image"
                                />
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
                      </div>
                      <div className="d-flex flex-wrap gap-2 justify-content-end">
                        <button type="submit" className="btn btn--primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row mt-20" id="cate-table">
              <div className="col-md-12">
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                        <h5 className="text-capitalize d-flex gap-1">
                          Maincategory list                            <span className="badge badge-soft-dark radius-50 fz-12">
                            {count}
                          </span> 
                        </h5>
                      </div>

                      {/* <div className="col-sm-8 col-md-6 col-lg-4">
                        <form method="GET">
                          <div className="input-group input-group-custom input-group-merge">
                            <input
                              type="search"
                              name="search"
                              className="form-control"
                              placeholder="Search here"
                              onChange={handleFilter}
                            />
                            <button type="button" className="btn btn--primary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div> */}
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>ID</th>
                          <th className="text-center"> Image</th>
                          

                          <th> Maincategory (FR) </th>
                          <th> Maincategory (EN) </th>

                          {/* <th className="text-center"> Status</th> */}
                          {/* <th className="text-center">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCategoryList?.length > 0
                          ? filteredCategoryList?.map((categorydata, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="text-center">
                                  {categorydata?.maincategory_image !== null ? ( <img
                                    className="rounded"
                                    width={64}
                                    src={
                                      `${process.env.REACT_APP_API_KEY}uploads/` +
                                      categorydata?.maincategory_image
                                    }
                                  />) : ( <img
                                    className="rounded"
                                    width={64}
                                    src='logonew.png'
                                  />)}
                                 
                                </td>
                                
                                <td>{categorydata?.maincategory_frenchName}</td>
                                <td>{categorydata?.maincategory_englishName}</td>

                                {/* {categorydata?.acrtive_status != 0 ? (
                                  <td>
                                    <form className="banner_status_form">
                                      <input type="hidden" />
                                      <input type="hidden" name="id" />
                                      <label className="switcher">
                                        <input
                                          type="checkbox"
                                          className="switcher_input"
                                          name="status"
                                          onChange={() =>
                                            activedeactive(categorydata?._id)
                                          }
                                        />
                                        <span className="switcher_control" />
                                      </label>
                                    </form>
                                  </td>
                                ) : (
                                  <td>
                                    <form className="banner_status_form">
                                      <input type="hidden" />
                                      <input type="hidden" name="id" />
                                      <label className="switcher">
                                        <input
                                          id="coupon_status9"
                                          name="status"
                                          defaultValue={1}
                                          defaultChecked
                                          type="checkbox"
                                          className="switcher_input"
                                          onChange={() =>
                                            activedeactive(categorydata?._id)
                                          }
                                        />
                                        <span className="switcher_control" />
                                      </label>
                                    </form>
                                  </td>
                                )} */}
                                {/* <td>
                                  <div className="d-flex gap-10 justify-content-center">
                                    <span
                                      className="btn btn-outline--primary btn-sm cursor-pointer edit"
                                      onClick={() => {
                                        cetagoryedit(
                                          secureLocalStorage.setItem(
                                            "categoryid",
                                            categorydata?._id
                                          )
                                        );
                                      }}
                                      title="Edit"
                                    >
                                      <i
                                        className="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                      />
                                    </span>
                                     <a
                                      onClick={() => {
                                        deletesubcategory(categorydata?._id);
                                      }}
                                      className="btn btn-outline-danger btn-sm cursor-pointer delete"
                                      title="Delete"
                                      id={35}
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        onClick={deletesubcategory}
                                        aria-hidden="true"
                                      />
                                    </a> 
                                  </div>
                                </td> */}
                              </tr>
                            ))
                          : categorylist?.map((categorydata, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="text-center">
                                  {categorydata?.maincategory_image !== null ? ( <img
                                    className="rounded"
                                    width={64}
                                    src={
                                      `${process.env.REACT_APP_API_KEY}uploads/` +
                                      categorydata?.maincategory_image
                                    }
                                  />) : ( <img
                                    className="rounded"
                                    width={64}
                                    src='logonew.png'
                                  />)}
                                 
                                </td>
                               
                                <td>{categorydata?.maincategory_frenchName}</td>
                                <td>{categorydata?.maincategory_englishName}</td>

                                {/* {categorydata?.acrtive_status != 0 ? (
                                  <td>
                                    <form className="banner_status_form">
                                      <input type="hidden" />
                                      <input type="hidden" name="id" />
                                      <label className="switcher">
                                        <input
                                          type="checkbox"
                                          className="switcher_input"
                                          name="status"
                                          onChange={() =>
                                            activedeactive(categorydata?._id)
                                          }
                                        />
                                        <span className="switcher_control" />
                                      </label>
                                    </form>
                                  </td>
                                ) : (
                                  <td>
                                    <form className="banner_status_form">
                                      <input type="hidden" />
                                      <input type="hidden" name="id" />
                                      <label className="switcher">
                                        <input
                                          id="coupon_status9"
                                          name="status"
                                          defaultValue={1}
                                          defaultChecked
                                          type="checkbox"
                                          className="switcher_input"
                                          onChange={() =>
                                            activedeactive(categorydata?._id)
                                          }
                                        />
                                        <span className="switcher_control" />
                                      </label>
                                    </form>
                                  </td>
                                )} */}
                                {/* <td>
                                  <div className="d-flex gap-10 justify-content-center">
                                    <span
                                      className="btn btn-outline--primary btn-sm cursor-pointer edit"
                                      onClick={() => {
                                        cetagoryedit(
                                          secureLocalStorage.setItem(
                                            "categoryid",
                                            categorydata?._id
                                          )
                                        );
                                      }}
                                      title="Edit"
                                    >
                                      <i
                                        className="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                      />
                                    </span>
                                     <a
                                      onClick={() => {
                                        deletesubcategory(categorydata?._id);
                                      }}
                                      className="btn btn-outline-danger btn-sm cursor-pointer delete"
                                      title="Delete"
                                      id={35}
                                    >
                                      <i
                                        className="fa fa-trash-o"
                                        onClick={deletesubcategory}
                                        aria-hidden="true"
                                      />
                                    </a> 
                                  </div>
                                </td> */}
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive mt-4">
                    <div className="d-flex justify-content-lg-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Maincetagory;
