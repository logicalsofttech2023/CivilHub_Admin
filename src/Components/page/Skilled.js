import React, { useEffect, useState } from "react";
import Header from "../Header";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "react-js-pagination"; 
const Skilled = () => {
  let navigate = useNavigate();
  const [name, setname] = useState();
  const [categorylist, setcategorylist] = useState([]);
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
 const [count, setcount] = useState();
  let token = secureLocalStorage.getItem("adminidtoken");
  let deletebanner = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };
  useEffect(() => {
    setFilteredCategoryList(categorylist); 
  }, [categorylist]);
  let addcategorydata = () => {
    swal({
      title: "Category added Successfully",
      text: "Category inserted sucessfully",
      icon: "success",
      buttons: true,
    });
  };

  const categorydatahandle = (e) => {
    e.preventDefault();
    const cetegory = {
      name: name,
    }
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/admin_add_skills`,
        cetegory,
        options
      )
      .then((res) => {
        toast.success( res?.data?.msg || "Cetegory Add Successfully");
        addcategorydata();
        getbannerlist();
      })
      .catch((error) => {console.log(error)});
    // setmaincategory("");
    setname("");
    // setcategory_frenchName("");
    // setcategory_image("");
  };

  useEffect(() => {
    getbannerlist();
  }, [0]);

  let getbannerlist = () => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/admin_all_skills`,options)
      .then((res) => {
        setcount(res?.data?.data?.length)
        setcategorylist(res.data.data);
      })
      .catch((error) => {});
  };

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = categorylist.filter(
      (item) =>
        item.name?.toLowerCase().includes(searchTerm) ||
        item.category_frenchName?.toLowerCase().includes(searchTerm)
    );
    setFilteredCategoryList(result);
    setActivePage(1);
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };



  let cetagoryedit = () => {
    navigate("/updateskilled");
  };

  let deletesubcategory = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletebannerimage = () => {
          let bannerdata = {
            skillId: item,
          };

          const options = {
            headers:{
              Authorization: `Bearer ${token}`
            }
        };
          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/admin_skill_delete`,
              bannerdata,
              options
            )
            .then((res) => {
              getbannerlist();
              swal("Poof! Your category  has been deleted!", {
                icon: "success",
              });
            })
            .catch((error) => {
                swal("Poof! Your category  has been not deleted!", {
                    icon: "error",
                  });
            });
        };
        deletebannerimage();
      
      } else {
        swal("Your category is safe!");
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





  const renderCategoryData = (categorydata, index) => {
    const adjustedIndex = (activePage - 1) * itemsPerPage + index + 1;
   return( 
   <tr key={index}>
    <td>{adjustedIndex}</td>
    {/* <td className="text-center">
      <img
        className="rounded"
        width={64}
        src={
          `${process.env.REACT_APP_API_KEY}uploads/` +
          categorydata?.category_image
        }
      />
    </td> */}
    {/* <td>{categorydata?.maincategoryId?.mainname}</td> */}
    <td>{categorydata?.name}</td>
    <td>{new Date(categorydata?.updatedAt).toLocaleString()}</td>
    {categorydata?.acrtive_status != 0 ? (
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
    )}
    <td>
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
    </td>
  </tr> );
  }
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
                Skilled
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <form onSubmit={categorydatahandle}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                         
                            <div className="form-group  lang_form">
                              <label className="title-color">
                              Skilled Name
                                <span className="text-danger">*</span> (EN)
                              </label>
                              <input
                                value={name}
                                onChange={(e) => {
                                  setname(e.target.value);
                                }}
                                type="text"
                                name="name[]"
                                className="form-control"
                                placeholder="New Skilled"
                                required
                              />
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
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                        <h5 className="text-capitalize d-flex gap-1">
                        Skilled list
                           <span className="badge badge-soft-dark radius-50 fz-12">
                            {count}
                          </span> 
                        </h5>
                      </div>
                     

                      <div className="col-sm-8 col-md-6 col-lg-4">
                      <form>
                        <div className="input-group input-group-merge input-group-custom">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                          </div>
                          <input
                            type="search"
                            name="searchValue"
                            className="form-control"
                            placeholder="Search here...."
                            aria-label="Search orders"
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
                          <th>Sr.No</th>
                          {/* <th className="text-center"> Image</th> */}
                          {/* <th>Main Category </th> */}
                          <th> Skilled Name </th>
                          <th> Date/Time </th>
                          <th className=""> Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCategoryList
                          .slice(
                            (activePage - 1) * itemsPerPage,
                            activePage * itemsPerPage
                          )
                          .map((seller, index) =>
                            renderCategoryData(seller, index)
                          )}
                      </tbody>
                    </table>
                  ) : (
                    <div class="text-center p-4">
<img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
<p class="mb-0 order-stats__subtitle">No Skilled found</p>
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

export default Skilled;
