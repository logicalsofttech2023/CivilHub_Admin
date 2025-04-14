import React from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Sidebarr from '../Sidebar'
const Vendor_manage = () => {
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
                <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt />
                Seller List
                <span className="badge badge-soft-dark radius-50 fz-12">10</span>
              </h2>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="px-3 py-4">
                    <div className="d-flex justify-content-between gap-10 flex-wrap align-items-center">
                      <div className>
                        <form action="#-list" method="GET">
                          <div className="input-group input-group-merge input-group-custom">

                            <input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Search by Name or Phone or Email" />
                            <button type="submit" className="btn btn--primary">Search</button>
                          </div>
                        </form>
                      </div>
                      <div className="d-flex justify-content-end gap-2">
                        <div className="dropdown text-nowrap">

                          <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                              <a type="submit" className="dropdown-item d-flex align-items-center gap-2 " href="#">
                                <img width={14} src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt />
                                Excel
                              </a>
                            </li>
                          </ul>
                        </div>
                        <a href="#-add" type="button" className="btn btn--primary text-nowrap">
                          Add new seller
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table style={{ textAlign: 'left' }} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                      <thead className="thead-light thead-50 text-capitalize">
                        <tr>
                          <th>SL</th>
                          <th>Shop name</th>
                          <th>Seller name</th>
                          <th>Contact info</th>
                          <th className="text-center">Total products</th>
                          <th className="text-center">Total orders</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png" alt />
                              <div>
                                <a className="title-color" href="#0">Digital House</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#0">
                              Digital Seller
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:seller@seller.com">seller@seller.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:00111111111">00111111111</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/10" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              5
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/10" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              2
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/10" className="">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-23-626405e4d6205.png" alt />
                              <div>
                                <a className="title-color" href="#">Super Store Online</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              test seller 5
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test.seller5@gmail.com">test.seller5@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:011111000001">011111000001</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/9" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              4
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/9" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/9" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png" alt />
                              <div>
                                <a className="title-color" href="#">Royal Crown</a>
                                <br />
                                <span className="text-danger">
                                  Temporary closed
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              test seller 2
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test.seller2@gmail.com">test.seller2@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:018855667755">018855667755</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/8" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              5
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/8" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/8" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2023-06-14-648868dfa14f3.png" alt />
                              <div>
                                <a className="title-color" href="#">Tech Shop</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              test seller 4
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test.seller4@gmail.com">test.seller4@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:0188880000">0188880000</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/7" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              5
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/7" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/7" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f23c79774.png" alt />
                              <div>
                                <a className="title-color" href="#">Country Fair</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              Test Seller 3
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test.seller3@gmail.com">test.seller3@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01111111114">01111111114</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/6" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              3
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/6" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/6" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f29f4a3bd.png" alt />
                              <div>
                                <a className="title-color" href="#">KR Fashion</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              test test
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test1@gmail.com">test1@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01111111113">01111111113</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/5" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              3
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/5" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/5" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f30a58846.png" alt />
                              <div>
                                <a className="title-color" href="#">Bicycle Shop</a>
                                <br />
                                <span className="text-danger">
                                  Temporary closed
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              test seller
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test@gmail.com">test@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01111111111">01111111111</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/4" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              3
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/4" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              0
                            </a>
                          </td>




                          <td className="text-center">
                            <a href="#list/4" className="b">



                                  <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>



                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f38e9ce54.png" alt />
                              <div>
                                <a className="title-color" href="#">Wellness Fair</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              abc abc
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:abc@gmail.com">abc@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01111111117">01111111117</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/3" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              2
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/3" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              14
                            </a>
                          </td>




                          <td className="text-center">



                            <a href="#list/3" className="">
                              


                                <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>  
                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png" alt />
                              <div>
                                <a className="title-color" href="#">Mart Morning</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              kamrujjaman joy
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:test.seller@gmail.com">test.seller@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01633333339">01633333339</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/2" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              11
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/2" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              22
                            </a>
                          </td>




                          <td className="text-center">



                            <a href="#list/2" className="0">
                              


                                <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button> 
                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

                              <span title="Delete" onClick={deleteproducts} className="btn btn-outline-danger btn-sm delete square-btn" >
                                <i className="fa fa-trash-o" aria-hidden="true" />
                              </span>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <div className="d-flex align-items-center gap-10 w-max-content">
                              <img width={50} className="avatar rounded-circle" onerror="this.src='https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f790349f7.png" alt />
                              <div>
                                <a className="title-color" href="#">Deluxe Online</a>
                                <br />
                                <span className="text-danger">
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a title="View" className="title-color" href="#">
                              fatema subarna
                            </a>
                          </td>
                          <td>
                            <div className="mb-1">
                              <strong><a className="title-color hover-c1" href="mailto:fatema@gmail.com">fatema@gmail.com</a></strong>
                            </div>
                            <a className="title-color hover-c1" href="tel:01111111111">01111111111</a>
                          </td>

                          <td className="text-center">
                            <a href="#t-list/1" className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12">
                              9
                            </a>
                          </td>
                          <td className="text-center">
                            <a href="#list/1" className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0">
                              57
                            </a>
                          </td>




                          <td className="text-center">



                            <a href="#list/1" className=
                            "0">
                              


                                <button className='btn btn-success'>Accept</button>  <button className='btn btn-danger'>Reject</button>  
                            </a>
                          </td>




                          <td>
                            <div className="d-flex justify-content-center gap-2">


                              <span className="btn btn-outline--primary btn-sm cursor-pointer edit" data-toggle="modal" data-target="#myModal" title="Edit">
                                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                              </span>

                              <Link className="btn btn-outline--primary btn-sm square-btn" title="View" to="/sallerdetails">
                                <i className="fa fa-eye" aria-hidden="true" />
                              </Link>

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
                    <div className="px-4 d-flex justify-content-center justify-content-md-end">
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

export default Vendor_manage
