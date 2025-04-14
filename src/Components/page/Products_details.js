import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Sidebarr from '../Sidebar'
import secureLocalStorage from 'react-secure-storage'
import axios from 'axios'
import './products_details.css'
import { Link } from 'react-router-dom'
const Products_details = () => {
let product_id = secureLocalStorage.getItem("productid")
const [details, setdetails] = useState();
const [reviewdata, setreviewdata] = useState();


let token = secureLocalStorage.getItem("adminidtoken");

useEffect(() => {
  productdetails();
}, [0]);

const productdetails = () => {
  const productdata = {
    productId: product_id,
  };
  // const options = {
  //     headers :{
  //         token:token
  //     }
  // };
  axios
    .post(
      `${process.env.REACT_APP_API_KEY}admin/api/productDetails`,
      productdata
    )
    .then((res) => {

      setdetails(res.data.data);
    })
    .catch((error) => {});
};


useEffect(() => {
  productreview();
}, [0]);

const productreview = () => {
  const productdata = {
    productId: product_id,
  };

  // const options = {
  //     headers :{
  //         token:token
  //     }
  // };
  axios
    .post(
      `${process.env.REACT_APP_API_KEY}admin/api/productReviews`,
      productdata
    )
    .then((res) => {

      setreviewdata(res.data.data);
    })
    .catch((error) => {});
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
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
        <div className>
          <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt />
            Product details
          </h2>
        </div>
      </div>
      <div className="card ">
        <div className="card-body">
          <div className="d-flex flex-wrap flex-lg-nowrap gap-3 justify-content-between">
            <div className="media flex-wrap flex-sm-nowrap gap-3">
              <a className=" float-left overflow-hidden" href="#" data-lightbox="mygallery">
                {details?.image1 ? <img className="avatar avatar-170 rounded-0" src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image1} alt="Image Description" /> : <img className="avatar avatar-170 rounded-0" src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883db39dcbb.png" alt="Image Description" />}
                
              </a>
              <div className="d-block">
                <div className="d-flex flex-wrap flex-sm-nowrap align-items-start gap-2 mb-2 min-h-50">
                  <a className="larging aspect-1 float-left overflow-hidden" href="#" data-lightbox="mygallery">
                   {details?.image1 ?  <img width={100}  src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image1} alt="Product image" /> : null }
                  </a>
                  {details?.image2 ? (<a className="larging aspect-1 float-left overflow-hidden" href="#" data-lightbox="mygallery">
                    <img width={100}  src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image2} alt="Product image" />
                  </a>) : (null)}
                 {details?.image3 ? ( <a className="larging aspect-1 float-left overflow-hidden" href="#" data-lightbox="mygallery">
                    <img width={100}  src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image3} alt="Product image" />
                  </a>) : (null)}
                  {details?.image4 ? (<a className="larging aspect-1 float-left overflow-hidden" href="#" data-lightbox="mygallery">
                    <img width={100}  src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image4} alt="Product image" />
                  </a>) : (null)}
                  {details?.image5 ? (<a className="larging aspect-1 float-left overflow-hidden" href="#" data-lightbox="mygallery">
                    <img width={100}  src={`${process.env.REACT_APP_API_KEY}uploads/`+details?.image5} alt="Product image" />
                  </a>) : (null)}
                </div>
                <div className="d-block">
                  <div className="d-flex">
                    <h2 className="mb-2 pb-1 text-gulf-blue">{details?.product_name}
                    </h2>
                    {/* <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="#">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a> */}
                  </div>
                  <div className="d-flex gap-3 flex-wrap mb-3 lh-1">
                    <a href="#" className="text-dark">0 Orders</a>
                    <span className="border-left" />
                    <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
                    <i class="fa fa-star" aria-hidden="true"></i>
                      <span>0</span>
                      <div className="review-details-popup">
                        <h6 className="mb-2">Rating</h6>
                        <div className>
                          <ul className="list-unstyled list-unstyled-py-2 mb-0">
                            <li className="d-flex align-items-center font-size-sm">
                              <span className="mr-3">5 Star</span>
                              <div className="progress flex-grow-1">
                                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="ml-3">0</span>
                            </li>
                            <li className="d-flex align-items-center font-size-sm">
                              <span className="mr-3">4 Star</span>
                              <div className="progress flex-grow-1">
                                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="ml-3">0</span>
                            </li>
                            <li className="d-flex align-items-center font-size-sm">
                              <span className="mr-3">3 Star</span>
                              <div className="progress flex-grow-1">
                                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="ml-3">0</span>
                            </li>
                            <li className="d-flex align-items-center font-size-sm">
                              <span className="mr-3">2 Star</span>
                              <div className="progress flex-grow-1">
                                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="ml-3">0</span>
                            </li>
                            <li className="d-flex align-items-center font-size-sm">
                              <span className="mr-3">1 Star</span>
                              <div className="progress flex-grow-1">
                                <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="ml-3">0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span className="border-left" />
                    <a href="javascript:" className="text-dark">{details?.rating} Ratings</a>
                    <span className="border-left" />
                    <a href="javascript:" className="text-dark">0 Reviews</a>
                  </div>
                  <a style={{visibility:'hidden'}} href="#" className="btn btn-outline--primary mr-1" >
                    View live
                  </a>
                  <a style={{visibility:'hidden'}} href="#" className="btn btn-outline--primary mr-1" title="Download" download>
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-3 flex-wrap">
            <div className="border p-3 w-170">
              <div className="d-flex flex-column mb-1">
                <h6 className="font-weight-normal">Total sold :</h6>
                <h3 className="text-primary fs-18">0</h3>
              </div>
              <div className="d-flex flex-column">
                <h6 className="font-weight-normal">Total sold amount :</h6>
                <h3 className="text-primary fs-18">$00.00</h3>
              </div>
            </div>
            <div className="row gy-3 flex-grow-1">
              <div className="col-sm-6 col-xl-4">
                <h4 className="mb-3">General information</h4>
                <div className="pair-list">
                  <div>
                    <span className="key text-nowrap">Brand</span>
                    <span>:</span>
                    <span className="value">
                      {details?.brand_name}
                    </span>
                  </div>
                  <div>
                    <span className="key text-nowrap">Category</span>
                    <span>:</span>
                    <span className="value">
                      ebook
                    </span>
                  </div>
                  <div>
                    <span className="key text-nowrap">Product type</span>
                    <span>:</span>
                    <span className="value">{details?.productType}</span>
                  </div>
                  <div>
                    <span className="key text-nowrap">SKU</span>
                    <span>:</span>
                    <span className="value">{details?.product_code}</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <h4 className="mb-3">Price information</h4>
                <div className="pair-list">
                  <div>
                    <span className="key text-nowrap">Purchase price</span>
                    <span>:</span>
                    <span className="value">${details?.sale_price}</span>
                  </div>
                  <div>
                    <span className="key text-nowrap">Unit price</span>
                    <span>:</span>
                    <span className="value">${details?.unit_price}</span>
                  </div>
                  <div>
                    <span className="key text-nowrap">Tax</span>
                    <span>:</span>
                    <span className="value">{details?.Tax[0]?.tax_value} {details?.Tax[0]?.tax_name}</span>
                  </div>
                  <div>
                    <span className="key text-nowrap">Discount</span>
                    <span>:</span>
                    <span className="value">{details?.discount[0]?.discount_value} {details?.discount[0]?.discount_type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="table-responsive datatable-custom" style={{overflow:"scroll", height:'450px', scrollbarWidth:'none'}}>
          <table  className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
            <thead className="thead-light thead-50 text-capitalize" >
              <tr>
                <th>SL</th>
                <th>Reviewer</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Date</th>
                
              </tr>
            </thead>
            
              {reviewdata?.length > 0 ? reviewdata?.map((review,index)=>{
  return(
    <tbody >
    <tr>
    <td>{index+1}</td>
    <td>
      <Link to='/Customerdetails' onClick={() => {
              secureLocalStorage.setItem("customerid", review?.userId?._id);
            }} className="d-flex align-items-center" >
        <div className="avatar rounded">
          <img className="avatar-img" src={review?.userId?.user_profile? `${process.env.REACT_APP_API_KEY}uploads/`+ review?.userId?.user_profile : "https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png"}
           alt="" />
        </div>
        <div className="ml-3">
          <span className="d-block h5 text-hover-primary mb-0">
            {review?.userId?.first_name} {review?.userId?.last_name} &nbsp;
            <i className="fa fa-check-circle text-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Verified Customer" />
          </span>
          <span className="d-block font-size-sm text-body">
          </span>
        </div>
      </Link>
    </td>
    <td>
      <div className="d-flex align-items-center gap-2 text-primary">
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>{review?.rating}</span>
      </div>
    </td>
    <td>
      <div className="text-wrap max-w-400 min-w-200 " style={{textAlign:'justify'}}>
        <p>
          {review?.comment}
        </p>
      </div>
    </td>
    <td>
      {review?.userId?.createdAt?.slice(0,10)} {review?.userId?.createdAt?.slice(11,19)}
    </td>
  
  </tr>
  </tbody>
  )
}) : 

<div className="text-center p-4 ">
<img className="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="Image Description" />
<p className="mb-0">No review found</p>
</div>

}



             
             
           
          </table>
        </div>
       
      </div>
    </div>
      </div>

    </div>



    </div>
  )
}

export default Products_details
