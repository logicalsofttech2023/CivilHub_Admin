import React, { useEffect, useState } from "react";
import Header from "../Header";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Pagination from "react-js-pagination"; 
const Subsubcategory = () => {
  let navigate = useNavigate();

  let subcetagoryedit = () => {
    navigate("/editsubsubcetagory");
  };

  const [categoryId, setcategoryId] = useState();

  const [english_subcategory_name, setenglish_subcategory_name] = useState();
  const [french_subcategory_name, setfrench_subcategory_name] = useState();
  const [subcategory_image, setsubcategory_image] = useState();
  const [categorylist, setcategorylist] = useState();
  const [subcategorylist, setsubcategorylist] = useState([]);
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  const [count, setcount] = useState(); 
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  let token = secureLocalStorage.getItem("adminidtoken");
  useEffect(() => {
    setFilteredCategoryList(subcategorylist); 
  }, [subcategorylist]);
  let cetagoryedit = () => {
    navigate("/editsubsubcetagory");
  };

  let addcategorydata = () => {
    swal({
      title: "Subsubcategory added Successfully",
      text: "Subsubcategory inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const subcategorydatahandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subcategoryId", categoryId);
    formData.append("english_sub_subcategory_name", english_subcategory_name);
    formData.append("french_sub_subcategory_name", french_subcategory_name);
    

    let options = {
      headers: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/Insert_subSubcategory`,
        formData,
        options
      )
      .then((res) => {
        addcategorydata();
        getbannerlist();
        getsubcategory();
      })
      .catch((error) => {});
   
    setenglish_subcategory_name("");
    setfrench_subcategory_name("");
   
  };

  useEffect(() => {
    getbannerlist();
  }, [0]);
  let getbannerlist = () => {
   
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/getsubcategory`)
      .then((res) => {
        setcategorylist(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getsubcategory();
  }, [0]);
  let getsubcategory = () => {
    // let options = {
    //   headers: {
    //     token: token,
    //   },
    // };
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/getsubSubcategory`)
      .then((res) => {
setcount(res?.data?.data?.length)
        setsubcategorylist(res.data.data);
      })
      .catch((error) => {});
  };



  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const result = subcategorylist.filter(
      (item) =>

    
        item?.english_sub_subcategory_name?.toLowerCase().includes(searchTerm) ||
        item?.french_sub_subcategory_name?.toLowerCase().includes(searchTerm)
    );
    setFilteredCategoryList(result);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  let deletesubcategory = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Subsubcategory!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletebannerimage = () => {
          let bannerdata = {
            sub_subcategoryId: item,
          };

          let options = {
            headers: {
              token: token,
            },
          };
          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/deletesubSubcategory`,
              bannerdata,
              options
            )
            .then((res) => {
              getsubcategory();
            })
            .catch((error) => {

            });
        };
        deletebannerimage();
        swal("Poof! Your subsubcategory  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your subsubcategory is safe!");
      }
    });
  };


  const renderCategoryData = (data, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
   return(
    <tr key={index}>
                       
                            
                              <td>{adjustedIndex}</td>
                             
                              <td>{data?.subcategoryId?.english_subcategory_name}</td>
                              <td>{data?.french_sub_subcategory_name}</td>
                              <td>{data?.english_sub_subcategory_name}</td>

                              <td>
                                <div className="d-flex gap-10 justify-content-center">
                                  <span
                                    className="btn btn-outline--primary btn-sm cursor-pointer edit"
                                    onClick={() => {
                                      subcetagoryedit(
                                        secureLocalStorage.setItem(
                                          "subsubcategoryid",
                                          data?._id
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
                                      deletesubcategory(data?._id);
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
                              </td>
                            </tr>
    );
  }
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
              <h2 className="h1 mb-0 d-flex gap-2">
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt />
                  Sub Sub Category 
              </h2>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-body" style={{ textAlign: 'left' }}>
                      <form onSubmit={subcategorydatahandle}>
                      <input type="hidden" />

                      <div className="row">
                        <div className=" col-lg-12 d-flex gap-3">
                          <div className="w-100">
                            <div className="form-group w-100">
                              <label
                                className="title-color"
                                htmlFor="exampleFormControlSelect1"
                              >
                                Select Subcategory
                                <span className="text-danger">*</span>
                              </label>

                              <select
                                id="exampleFormControlSelect1"
                                name="parent_id"
                                className="form-control"
                                required
                                onChange={(e) => setcategoryId(e.target.value)}
                              >
                                <option value="" selected disabled>
                                  Select subcategory
                                </option>

                                {categorylist?.map((categorydatalist) => (
                                  <option
                                    key={categorydatalist?._id}
                                    value={categorydatalist?._id}
                                  >
                                    {categorydatalist?.english_subcategory_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group  lang_form" id="en-form">
                              <label
                                className="title-color"
                                htmlFor="exampleFormControlInput1"
                              >
                                Sub subcategory name
                                
                                (EN) <span className="text-danger">*</span>
                              </label>
                              <input
                                value={english_subcategory_name}
                                onChange={(e) => {
                                  setenglish_subcategory_name(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder="New Sub Category"
                                required
                              />
                            </div>

                            <div className="form-group  lang_form" id="en-form">
                              <label
                                className="title-color"
                                htmlFor="exampleFormControlInput1"
                              >
                                Sub subcategory name 
                               
                                (FN) <span className="text-danger">(optional)*</span>
                              </label>
                              <input
                                value={french_subcategory_name}
                                onChange={(e) => {
                                  setfrench_subcategory_name(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder="New Sub Category"
                               
                              />
                            </div>
                            <input
                              type="hidden"
                              name="lang[]"
                              defaultValue="en"
                            />
                          </div>

                          <div className="form-group  w-100">
                            <center>

                            {subcategory_image ? (
                              <img
                              className="upload-img-view"
                              id="viewer"

                              src={URL.createObjectURL(subcategory_image)}
                              
                              alt="image"
                            />
                              
                              
                              ): ( <img
                                className="upload-img-view"
                                id="viewer"
                                src="https://6valley.6amtech.com/public/assets/back-end/img/900x400/img1.jpg"
                                alt="image"
                              />)}

                              
                            </center>
                            <label className="title-color mt-3">
                              Subcategory Logo
                            </label>
                            <span className="text-info">
                              <span className="text-danger"> (optional)*</span>
                            </span>
                            <div className="form-control custom-file text-left">
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
          </div>
          <div className="row mt-20" id="cate-table">
              <div className="col-md-12">
                  <div className="card mb-3">
                      <div className="px-3 py-4">
                          <div className="row align-items-center">
                              <div className="col-sm-5 col-md-6 col-lg-8 mb-2 mb-sm-0">
                                  <h5 className="text-capitalize d-flex gap-2">
                                      Sub sub category list
                                      <span className="badge badge-soft-dark radius-50 fz-12">{count}</span>
                                  </h5>
                              </div>
                              <div className="col-sm-7 col-md-6 col-lg-4">
                                  <form >
                                      <div className="input-group input-group-custom input-group-merge">
                                          <div className="input-group-prepend">
                                              <div className="input-group-text">
                                                  <i className="tio-search" />
                                              </div>
                                          </div>
                                          <input
                              type="search"
                              name="search"
                              className="form-control"
                              placeholder="Search subcategory here"
                              onChange={handleFilter}
                            />
                          <button type="submit" className="btn btn--primary">
                            Search
                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                    



































                  <div className="table-responsive">
                  {filteredCategoryList.length > 0 ? (
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                          <th>ID</th>
                          
                          <th>Subcategory </th>
                          <th>Subsubcategory (FN)</th>
                          <th>Subsubcategory (EN)</th>

                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCategoryList
                          .slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          )
                          .map((subcategorylist, index) =>
                            renderCategoryData(subcategorylist, index)
                          )}
                      </tbody>
                    </table>
                  ) : (
                    <div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No Subsubcategory found</p>
</div>
                  )}
                  <div className="d-flex justify-content-center mt-4">
                    {filteredCategoryList.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={filteredCategoryList.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )}
                  </div>
                </div>

                      <div className="table-responsive mt-4">
                          <div className="d-flex justify-content-lg-end">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          </div>
  
        </div>


      
    )
}

export default Subsubcategory
