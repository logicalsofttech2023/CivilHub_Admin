import React from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebarr from "../Sidebar";
import swal from "sweetalert";
const Notifications = () => {
  let navigate = useNavigate();
  let eidtnotification = () => {
    navigate(`/editnotification`);
  };

  let deletebanner = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
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
              <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/push_notification.png"
                  alt
                />
                Send notification
              </h2>
            </div>
            <div className="row gx-2 gx-lg-3">
              <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
                <div className="card">
                  <div className="card-body">
                    <form
                      action="https://6valley.6amtech.com/admin/notification/store"
                      method="post"
                      style={{ textAlign: "left" }}
                      encType="multipart/form-data"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                      />
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="title-color text-capitalize"
                              htmlFor="exampleFormControlInput1"
                            >
                              Title{" "}
                            </label>
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="New notification"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label
                              className="title-color text-capitalize"
                              htmlFor="exampleFormControlInput1"
                            >
                              Description{" "}
                            </label>
                            <textarea
                              name="description"
                              className="form-control"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <center>
                              <img
                                className="upload-img-view mb-4"
                                id="viewer"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                                src="https://6valley.6amtech.com/public/assets/admin/img/900x400/img1.jpg"
                                alt="image"
                              />
                            </center>
                            <label className="title-color text-capitalize">
                              Image{" "}
                            </label>
                            <span className="text-info">(Ratio 1:1)</span>
                            <div className="custom-file text-left">
                              <input
                                type="file"
                                name="image"
                                id="customFileEg1"
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
                      <div className="d-flex justify-content-end gap-3">
                        <button type="reset" className="btn btn-secondary">
                          Reset{" "}
                        </button>
                        <button type="submit" className="btn btn--primary">
                          Send Notification{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12 mb-3 mb-lg-2">
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                        <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
                          Push notification table
                          <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                            2
                          </span>
                        </h5>
                      </div>
                      <div className="col-sm-8 col-md-6 col-lg-4">
                        <form action="" method="GET">
                          <div className="input-group input-group-merge input-group-custom">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i class="fa fa-search" aria-hidden="true"></i>
                              </div>
                            </div>
                            <input
                              id="datatableSearch_"
                              type="search"
                              name="search"
                              className="form-control"
                              placeholder="Search by title"
                              aria-label="Search orders"
                              defaultValue
                              required
                            />
                            <button type="submit" className="btn btn--primary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive datatable-custom">
                    <table
                      style={{ textAlign: "left" }}
                      className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
                    >
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>SL </th>
                          <th>Title </th>
                          <th>Description </th>
                          <th>Image </th>
                          <th>Notification count </th>
                          <th>Status </th>
                          <th>Resend </th>
                          <th className="text-center">Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <span className="d-block">Coupon</span>
                          </td>
                          <td>From October, Use Code "pcuw655ytg" to g...</td>
                          <td>
                            <img
                              className="min-w-75"
                              width={75}
                              height={75}
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img2.jpg'"
                              src="https://6valley.6amtech.com/storage/app/public/notification/2022-04-20-625f9cc7e2f84.png"
                            />
                          </td>
                          <td id="count-3">1</td>
                          <td>
                            <form
                              action="https://6valley.6amtech.com/admin/notification/status"
                              method="post"
                              id="notification_status3_form"
                              className="notification_status_form"
                            >
                              <input
                                type="hidden"
                                name="_token"
                                defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                              />{" "}
                              <input type="hidden" name="id" defaultValue={3} />
                              <label className="switcher mx-auto">
                                <input
                                  type="checkbox"
                                  className="switcher_input"
                                  id="notification_status3"
                                  name="status"
                                  defaultValue={1}
                                  defaultChecked
                                  onclick="toogleStatusModal(event,'notification_status3','notification-on.png','notification-off.png','Want to Turn ON Notification Status','Want to Turn OFF Notification Status',`<p>If enabled customers will receive notifications on their devices</p>`,`<p>If disabled customers will not receive notifications on their devices</p>`)"
                                />
                                <span className="switcher_control" />
                              </label>
                            </form>
                          </td>
                          <td>
                            <span
                              className="btn btn-outline-success square-btn btn-sm"
                              onclick="resendNotification(this)"
                              data-id={3}
                            >
                              <i className="fa fa-refresh" aria-hidden="true" />
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="d-flex justify-content-center gap-2">
                              <span
                                onClick={eidtnotification}
                                className="btn btn-outline--primary btn-sm edit square-btn"
                                title="Edit"
                              >
                                <i
                                  className="fa fa-pencil-square-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <a
                                className="btn btn-outline-danger btn-sm delete"
                                title="Delete"
                                href="javascript:"
                                id="3')"
                              >
                                <i
                                  onClick={deletebanner}
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <span className="d-block">Buy 2 get 1</span>
                          </td>
                          <td>Buy any 2 products then get any product.</td>
                          <td>
                            <img
                              className="min-w-75"
                              width={75}
                              height={75}
                              onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img2.jpg'"
                              src="https://6valley.6amtech.com/storage/app/public/notification/2022-04-16-625a6446ee10d.png"
                            />
                          </td>
                          <td id="count-2">2</td>
                          <td>
                            <form
                              action="https://6valley.6amtech.com/admin/notification/status"
                              method="post"
                              id="notification_status2_form"
                              className="notification_status_form"
                            >
                              <input
                                type="hidden"
                                name="_token"
                                defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa"
                              />{" "}
                              <input type="hidden" name="id" defaultValue={2} />
                              <label className="switcher mx-auto">
                                <input
                                  type="checkbox"
                                  className="switcher_input"
                                  id="notification_status2"
                                  name="status"
                                  defaultValue={1}
                                  defaultChecked
                                  onclick="toogleStatusModal(event,'notification_status2','notification-on.png','notification-off.png','Want to Turn ON Notification Status','Want to Turn OFF Notification Status',`<p>If enabled customers will receive notifications on their devices</p>`,`<p>If disabled customers will not receive notifications on their devices</p>`)"
                                />
                                <span className="switcher_control" />
                              </label>
                            </form>
                          </td>
                          <td>
                            <span
                              className="btn btn-outline-success square-btn btn-sm"
                              onclick="resendNotification(this)"
                              data-id={2}
                            >
                              <i className="fa fa-refresh" aria-hidden="true" />
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="d-flex justify-content-center gap-2">
                              <span
                                onClick={eidtnotification}
                                className="btn btn-outline--primary btn-sm edit square-btn"
                                title="Edit"
                              >
                                <i
                                  className="fa fa-pencil-square-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <a
                                className="btn btn-outline-danger btn-sm delete"
                                title="Delete"
                                href="javascript:"
                                id="2')"
                              >
                                <i
                                  onClick={deletebanner}
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="mt-4">
                      <tfoot></tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Notifications;
