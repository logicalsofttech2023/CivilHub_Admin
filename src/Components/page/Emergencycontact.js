import React, { useEffect, useState } from "react";
import "../sidebar.css";
import Header from "../Header";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Sidebarr from "../Sidebar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Emergencycontact = () => {
  const [phone, setphone] = useState();
  const [contact_name, setcontact_name] = useState();
  const [details, setdetails] = useState();
 const [count, setcount] = useState();
  const contactdata = (e) => {
    e.preventDefault();
    const formData = {
      phone: phone,
      contact_name: contact_name,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/insertEmergancy_Contact`,
        formData
      )
      .then((res) => {
        toast.success(res.data.message);
        getcontact();
      })
      .catch((error) => {});
    setcontact_name("");
    setphone("");
  };

  useEffect(() => {
    getcontact();
  }, [0]);

  let getcontact = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/emergancy_Contact_list`)
      .then((res) => {
        setcount(res?.data?.data?.length)
        setdetails(res.data.data);
      })
      .catch((error) => {});
  };

  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    });
  };

  let deletedata = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let deletecontacts = () => {
          let contactdataa = {
            _id: item,
          };

          axios
            .post(
              `${process.env.REACT_APP_API_KEY}admin/api/deleteEmergancy_Contact`,
              contactdataa
            )
            .then(() => {
              getcontact();
            })
            .catch((error) => {});
        };
        deletecontacts();
        swal("Poof! Your contact has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your contact is safe!");
      }
    });
  };

  
  const activedeactive = (item) => {
    const Data = {
      _id: item,
    };
    
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/changeStatusEmergancy_Contact`,
        Data,
        
      )
      .then((res) => {
        toast.success(res.data.message);
        getcontact();
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
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2 text-capitalize">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-delivery-man.png"
                alt=""
              />
              Emergency contact
            </h2>
          </div>
          <div className="row">
            <div className="col-12">
              <form onSubmit={contactdata}>
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
                  autoComplete="off"
                />{" "}
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-0 page-header-title d-flex align-items-center gap-2 border-bottom pb-3 mb-3 text-capitalize">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      Add new contact information
                    </h5>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="f_name"
                          >
                            Contact name
                          </label>
                          <input
                            value={contact_name}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Contact name"
                            onChange={(e) => {
                              setcontact_name(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                          <label
                            className="title-color d-flex"
                            htmlFor="exampleFormControlInput1"
                          >
                            Phone
                          </label>
                          <input
                            onChange={(e) => {
                              setphone(e.target.value);
                            }}
                            value={phone}
                            maxLength={10}
                            minLength={10}
                            type="number"
                            name="phone"
                            className="form-control"
                            placeholder="Ex:017***********"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-end">
                      {/* <button type="reset" id="reset" className="btn btn-secondary px-4">Reset</button> */}
                      <button type="submit" className="btn btn--primary px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="card mt-3">
                <div className="p-3">
                  <div className="row gy-1 align-items-center justify-content-between">
                    <div className="col-auto">
                      <h5 className="text-capitalize">
                        Contact information 
                        <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                          {count}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    id="datatable"
                    className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-left"
                  >
                    <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                        <th>SL</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                    {details?.length > 0 ? (

details?.map((list, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td className="text-center text-capitalize">
                              {list?.contact_name}
                            </td>
                            <td className="text-center">
                              <a
                                className="title-color hover-c1"
                                href="tel:0987654321"
                              >
                                {list?.phone}
                              </a>
                            </td>
                            
                            
        {list?.status != 1 ? (<td>
  <form 
  
   className="banner_status_form">
    <input type="hidden"  />
    <input type="hidden" name="id" />
    <label className="switcher">
      <input
        type="checkbox"
        className="switcher_input"
        name="status"
         onChange={() => activedeactive(list?._id)}
      />
      <span className="switcher_control" />
    </label>
  </form>
</td>):(<td>
  <form 
   
     className="banner_status_form">
    <input type="hidden"  />
    <input type="hidden" name="id" />
    <label className="switcher">
      <input  id="coupon_status9" name="status" defaultValue={1} defaultChecked
        type="checkbox"
        className="switcher_input"

         onChange={() => activedeactive(list?._id)}
      />
      <span className="switcher_control" />
    </label>
  </form>
</td>)
}

                            <td>
                              <a
                                onClick={() => {
                                  deletedata(list?._id);
                                }}
                                className="btn btn-outline-danger btn-sm delete mx-auto delete-data"
                                href="javascript:"
                                data-id="delete-contact-3"
                                title="Delete"
                              >
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </a>
                              <form
                                action="https://6valley.6amtech.com/admin/delivery-man/emergency-contact/destroy"
                                method="post"
                                id="delete-contact-3"
                              >
                                <input
                                  type="hidden"
                                  name="_token"
                                  defaultValue="5201ifIgVXHshEaS9xR5L76fdJ1eBw8H5dYCuDvv"
                                  autoComplete="off"
                                />{" "}
                                <input
                                  type="hidden"
                                  name="_method"
                                  defaultValue="delete"
                                />{" "}
                                <input
                                  type="hidden"
                                  name="id"
                                  defaultValue={3}
                                />
                              </form>
                            </td>
                          </tr>
                        );
                      })) : (<div class="text-center p-4">
                      <img class="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description"/>
                      <p class="mb-0 order-stats__subtitle">No Data found</p>
                      </div>)
                     }
                      </tbody>

                       
                    
                  </table>
                </div>
                <div className="table-responsive mt-4">
                  <div className="px-4 d-flex justify-content-center justify-content-md-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergencycontact;
