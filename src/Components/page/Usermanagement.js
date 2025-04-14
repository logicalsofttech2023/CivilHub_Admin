import React from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Sidebarr from '../Sidebar'

const Usermanagement = () => {
  let navigate = useNavigate()
  let user_orderlist = () => {
    navigate(`/userorderlist`)
  }

  let deleteproducts = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this banner?",
      icon: "success",
      dangerMode: true,
    })
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
              <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png" alt />
                User list
                <span className="badge badge-soft-dark radius-50">8</span>
              </h2>
              <div>


              </div>

            </div>
            <div className="card">
              <div className="px-3 py-4">
                <div className="row gy-2 align-items-center">
                  <div className="col-sm-8 col-md-6 col-lg-4">
                    <form action="" method="GET">
                      <div className="input-group input-group-merge input-group-custom">
                        
                        <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Name or Email or Phone"  />
                        <button type="submit" className="btn btn--primary">Search</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
              <div className="table-responsive datatable-custom">
                <table style={{ textAlign: 'left' }} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Customer name</th>
                      <th>Contact info</th>
                      <th>Total Order </th>
                      <th className="text-center">Block / Unblock</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Devid Jack
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#f3908680879c9e9681b3908680879c9e9681dd909c9e"><span className="__cf_email__" data-cfemail="a1c2d4d2d5ceccc4d3e1c2d4d2d5ceccc4d38fc2cecc">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:8801623456678">8801623456678</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          11
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status9_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={9} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status9" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status9','customer-block-on.png','customer-block-off.png','Want to Unlock Devid Jack','Want to Block Devid Jack',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>

                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/9" method="post" id="customer-9">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/8" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd43e43e3d1.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Joy Joy
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#1f7570662d2a2726295f78727e7673317c7072"><span className="__cf_email__" data-cfemail="117b7e68232429282751767c70787d3f727e7c">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:+880123456789">+880123456789</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          3
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status8_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={8} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status8" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status8','customer-block-on.png','customer-block-off.png','Want to Unlock Joy Joy','Want to Block Joy Joy',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/8" method="post" id="customer-8">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/7" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/def.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Bsgsh Nsbdv
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#d4b9b0fab5b8bdb9a6a1ba94b3b9b5bdb8fab7bbb9"><span className="__cf_email__" data-cfemail="58353c76393431352a2d36183f35393134763b3735">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:+8801759412381">+8801759412381</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          0
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status7_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={7} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status7" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status7','customer-block-on.png','customer-block-off.png','Want to Unlock Bsgsh Nsbdv','Want to Block Bsgsh Nsbdv',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/7" method="post" id="customer-7">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/6" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd4498b881c.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Demo user
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#d8bcbdb5b7ea98bcbdb5b7f6bbb7b5"><span className="__cf_email__" data-cfemail="96f2f3fbf9a4d6f2f3fbf9b8f5f9fb">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:545452">545452</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          3
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status6_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={6} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status6" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status6','customer-block-on.png','customer-block-off.png','Want to Unlock Demo user','Want to Block Demo user',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/6" method="post" id="customer-6">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/5" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd45662c830.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Jocky Lop
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#fa8e9f898eba9d979b9396d4999597"><span className="__cf_email__" data-cfemail="433726303703242e222a2f6d202c2e">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:+88012345678">+88012345678</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          1
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status5_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={5} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status5" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status5','customer-block-on.png','customer-block-off.png','Want to Unlock Jocky Lop','Want to Block Jocky Lop',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/5" method="post" id="customer-5">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/4" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2023-01-10-63bd46476b52a.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          Md.Safayet Hossain
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#ccbfadaaadb5a9b8fefefdf48caba1ada5a0e2afa3a1"><span className="__cf_email__" data-cfemail="b3c0d2d5d2cad6c78181828bf3d4ded2dadf9dd0dcde">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:45646456456">45646456456</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          5
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status4_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={4} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status4" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status4','customer-block-on.png','customer-block-off.png','Want to Unlock Md.Safayet Hossain','Want to Block Md.Safayet Hossain',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/4" method="post" id="customer-4">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        7
                      </td>
                      <td>
                        <a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1 d-flex align-items-center gap-10">
                          <img src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/160x160/img1.jpg'" className="avatar rounded-circle" alt width={40} />
                          fatema subarna
                        </a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href="/cdn-cgi/l/email-protection#54323520313935143339353d387a373b39"><span className="__cf_email__" data-cfemail="f2949386979f93b2959f939b9edc919d9f">[email&nbsp;protected]</span></a></strong>
                        </div>
                        <a className="title-color hover-c1" href="tel:018855">018855</a>
                      </td>
                      <td>
                        <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                          137
                        </label>
                      </td>
                      <td>
                        <form action="https://6valley.6amtech.com/admin/customer/status-update" method="post" id="customer_status2_form" className="customer_status_form">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="id" defaultValue={2} />
                          <label className="switcher mx-auto">
                            <input type="checkbox" className="switcher_input" id="customer_status2" name="status" defaultValue={1} defaultChecked onclick="toogleStatusModal(event,'customer_status2','customer-block-on.png','customer-block-off.png','Want to Unlock fatema subarna','Want to Block fatema subarna',`<p>If enabled this customer will be unblocked and can log in to this system again</p>`,`<p>If disabled this customer will be blocked and cannot log in to this system</p>`)" />
                            <span className="switcher_control" />
                          </label>
                        </form>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">

                          <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/userdetails">
                            <i className="fa fa-eye" aria-hidden="true" />
                          </Link>
                          <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </span>

                        </div>
                        <form action="https://6valley.6amtech.com/admin/customer/delete/2" method="post" id="customer-2">
                          <input type="hidden" name="_token" defaultValue="M5Ms1Z4GEx6hqRPEuULXw4EVAXN9PGreUwLBXESa" /> <input type="hidden" name="_method" defaultValue="delete" /> </form>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-4">
                <div className="px-4 d-flex justify-content-lg-end">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className='text-center'>
                <span>( Edit User)</span>
              </div>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form id="form-id" action="" method="post">
                <div className="text-center">

                </div>
                <div className="js-form-message form-group">
                  <label className="input-label" htmlFor="signinSrEmail">Name</label>
                  <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" tabIndex={1} placeholder="email@address.com" aria-label="email@address.com" required data-msg="Please enter a valid email address." />
                </div>
                <div className="js-form-message form-group">
                  <label className="input-label" htmlFor="signinSrEmail">Contact</label>
                  <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" tabIndex={1} placeholder="email@address.com" aria-label="email@address.com" required data-msg="Please enter a valid email address." />
                </div>
                <div className='text-center'>
                  <button className='btn btn-primary'>Edit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      </div>



      
      



    
  )
}

export default Usermanagement
