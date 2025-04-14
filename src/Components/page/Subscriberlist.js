import React from 'react'
import Header from '../Header'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import Sidebarr from '../Sidebar'

const Subscriberlist = () => {
    let navigate = useNavigate()
    let deleteproducts = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this banner?",
            icon: "success",
            dangerMode: true,
        })
    }

    let addsub = () => {
        navigate(`/addsubscription`)

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
                        <div className="px-3 py-4 light-bg">
                            <div className="row g-2 align-items-center flex-grow-1">
                                <div className="col-md-4">
                                    <h5 className="text-capitalize d-flex gap-1">
                                        Subscriber list
                                        <span className="badge badge-soft-dark radius-50 fz-12">4</span>
                                    </h5>
                                </div>
                                <div className="col-md-8 d-flex gap-3 flex-wrap flex-sm-nowrap justify-content-md-end">
                                    <form action method="GET">
                                        <div className="input-group input-group-custom input-group-merge">

                                            <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Title" />
                                            <button type="submit" className="btn btn--primary input-group-text">Search</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="row mt-20">
                            <div className="col-md-12">
                                <div className="card">

                                    <div className="table-responsive">
                                        <table style={{ textAlign: 'left' }} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                                            <thead className="thead-light thead-50 text-capitalize">
                                                <tr>
                                                    <th>SL</th>
                                                    <th>Name</th>
                                                    <th scope="col">
                                                        Email
                                                    </th>
                                                    <th>Subscription date</th>
                                                    <th>Subscription Type</th>
                                                    <th>Subscription Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>


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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        Montly
                                                    </td>
                                                    <td>
                                                     1,000
                                                     </td>


                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        Montly
                                                    </td>
                                                    <td>
                                                     1,000
                                                     </td>


                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        Quarterly
                                                    </td>
                                                    <td>
                                                     1,000
                                                     </td>

                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        6 months
                                                    </td>

                                                    <td>
                                                         1,000
                                                    </td>

                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        Yearly
                                                    </td>
                                                    <td>
                                                        Yearly
                                                     1,000
                                                     </td>


                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                                                        joy@gmail.com
                                                    </td>
                                                    <td>
                                                        21 Apr 2022, 04:12 AM
                                                    </td>

                                                    <td>
                                                        Montly
                                                    </td>
                                                    <td>
                                                     1,000
                                                     </td>

                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">

                                                            <span data-toggle="modal" data-target="#myModal" title="View" className="btn btn-outline-info btn-sm square-btn" >
                                                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                                            </span>
                                                            <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </span>

                                                        </div>

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
                    </div>
                </div>



            </div>





            {/* The Modal */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <div className='text-center'>
                                <span>( Edit Subscription )</span>
                            </div>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="">
                                <div className="form-group">
                                    <label htmlFor="name" className="title-color">Name</label>
                                    <input type="text" name="name[]" id="sa_name" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="form-group">
                                    <label htmlFor="name" className="title-color">Title</label>
                                    <input type="text" name="name[]" id="sa_name" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="form-group">
                                    <label htmlFor="name" className="title-color">Date</label>
                                    <input type="text" name="name[]" id="sa_name" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="">
                                <div className="form-group">
                                    <label htmlFor="name" className="title-color">Details</label>
                                    <input type="text" name="name[]" id="sa_name" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-primary'>Update</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Subscriberlist
