import React from 'react'
import Header from '../Header'
import Sidebarr from '../Sidebar'

const Paymentmanagement = () => {
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
            <div className="card  mt-3">
            <div className="card-header text-capitalize">
              <h4 className="mb-0">Filter options</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 pt-3">
                  <form action="https://6valley.6amtech.com/admin/customer/wallet/report" method="get">
                    <div className="row">
                      <div className="col-sm-6 col-12">
                        <div className="mb-3">
                          <input type="date" name="from" id="from_date" defaultValue className="form-control" title="From date" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="mb-3">
                          <input type="date" name="to" id="to_date" defaultValue className="form-control" title="To date" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="mb-3">
                          <select name="transaction_type" id className="form-control" title="Select transaction type">
                            <option value>All</option>
                            <option value="add_fund_by_admin">Add fund by admin</option>
                            <option value="order_refund">Refund order</option>
                            <option value="loyalty_point">Customer loyalty point</option>
                            <option value="order_place">Order place</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="mb-3">
                          <select id="customer" name="customer_id" data-placeholder="Select customer" className="js-data-example-ajax form-control" title="Select customer">
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn--primary px-4"><i className="tio-filter-list mr-1" />Filter</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header text-capitalize">
              <h4 className="mb-0">Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-3">
                <div className="order-stats flex-grow-1">
                  <div className="order-stats__content">
                    <h6 className="order-stats__subtitle">Debit</h6>
                  </div>
                  <span className="order-stats__title fz-14 text--primary">
                    $7,335.00
                  </span>
                </div>
                <div className="order-stats flex-grow-1">
                  <div className="order-stats__content">
                    <h6 className="order-stats__subtitle">Credit</h6>
                  </div>
                  <span className="order-stats__title fz-14 text-warning">
                    $64,739.00
                  </span>
                </div>
                <div className="order-stats flex-grow-1">
                  <div className="order-stats__content">
                    <h6 className="order-stats__subtitle">Balance</h6>
                  </div>
                  <span className="order-stats__title fz-14 text-success">
                    $57,404.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header text-capitalize gap-2">
              <h4 className="mb-0 text-nowrap ">
                Transactions
                <span className="badge badge-soft-dark radius-50 fz-12 ml-1">14</span>
              </h4>
           
            </div>
            <div className="table-responsive">
              <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Transaction ID</th>
                    <th>Customer</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th>Balance</th>
                    <th>Transaction type</th>
                    <th>Reference</th>
                    <th className="text-center">Created at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>05f4fb07-e72a-48e4-825c-2aa2b14e1b5a</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$500.00</td>
                    <td>$0.00</td>
                    <td>$1,725.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund
                      </span>
                    </td>
                    <td>Add funds to wallet</td>
                    <td className="text-center">2023/10/12 </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>77c643a6-09de-4190-98b5-2875e3be8c4f</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$200.00</td>
                    <td>$0.00</td>
                    <td>$1,225.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund
                      </span>
                    </td>
                    <td>Add funds to wallet</td>
                    <td className="text-center">2023/10/12 </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>713ded46-e453-48fe-a7d2-d21a94401097</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/5" className="title-color hover-c1">Jocky Lop</a></td>
                    <td>$0.00</td>
                    <td>$380.00</td>
                    <td>$44,064.00</td>
                    <td>
                      <span className="badge badge-soft-info">
                        Order place
                      </span>
                    </td>
                    <td>Order payment</td>
                    <td className="text-center">2023/01/10 </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>22bf3d66-c4c6-4489-8747-923f21c84db0</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/5" className="title-color hover-c1">Jocky Lop</a></td>
                    <td>$44,444.00</td>
                    <td>$0.00</td>
                    <td>$44,444.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td>Fwrf</td>
                    <td className="text-center">2023/01/10 </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>80386bf4-888e-4e67-a92e-b6a13a092d76</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$0.00</td>
                    <td>$575.00</td>
                    <td>$1,025.00</td>
                    <td>
                      <span className="badge badge-soft-info">
                        Order place
                      </span>
                    </td>
                    <td>Order payment</td>
                    <td className="text-center">2022/11/20 </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>37da52c7-9f69-4708-86e3-79be743bb9e5</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1">fatema subarna</a></td>
                    <td>$6,290.00</td>
                    <td>$0.00</td>
                    <td>$11,315.00</td>
                    <td>
                      <span className="badge badge-soft-danger">
                        Order refund
                      </span>
                    </td>
                    <td>Order refund</td>
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>6549c9d4-ab07-4937-af25-6beb6045696e</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$0.00</td>
                    <td>$5,400.00</td>
                    <td>$1,600.00</td>
                    <td>
                      <span className="badge badge-soft-info">
                        Order place
                      </span>
                    </td>
                    <td>Order payment</td>
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>dbbff5f5-f9d8-415e-80da-84a65a74f53e</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$6,000.00</td>
                    <td>$0.00</td>
                    <td>$7,000.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td />
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>65c99413-920a-411a-8e39-04209850a06d</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1">fatema subarna</a></td>
                    <td>$1,000.00</td>
                    <td>$0.00</td>
                    <td>$5,025.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td />
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>a07d98d6-79cb-4504-a5f4-783245d99ab0</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1">fatema subarna</a></td>
                    <td>$0.00</td>
                    <td>$980.00</td>
                    <td>$4,025.00</td>
                    <td>
                      <span className="badge badge-soft-info">
                        Order place
                      </span>
                    </td>
                    <td>Order payment</td>
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>a9e3bde5-4eea-46ff-aa51-0ca632696c9b</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1">fatema subarna</a></td>
                    <td>$5.00</td>
                    <td>$0.00</td>
                    <td>$5,005.00</td>
                    <td>
                      <span className="badge badge-soft-warning">
                        Loyalty point
                      </span>
                    </td>
                    <td>Point to wallet</td>
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>649a60b0-175c-481a-8f37-ee09d1bda8ac</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/9" className="title-color hover-c1">Devid Jack</a></td>
                    <td>$1,000.00</td>
                    <td>$0.00</td>
                    <td>$1,000.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td />
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>cb3b21bd-1502-493e-b656-741fec17c367</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/4" className="title-color hover-c1">Md.Safayet Hossain</a></td>
                    <td>$300.00</td>
                    <td>$0.00</td>
                    <td>$300.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td />
                    <td className="text-center">2022/10/12 </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>ebdaa18c-bfd8-4579-940e-389bae7d77ca</td>
                    <td><a href="https://6valley.6amtech.com/admin/customer/view/2" className="title-color hover-c1">fatema subarna</a></td>
                    <td>$5,000.00</td>
                    <td>$0.00</td>
                    <td>$5,000.00</td>
                    <td>
                      <span className="badge badge-soft-success">
                        Add fund by admin
                      </span>
                    </td>
                    <td>From admin</td>
                    <td className="text-center">2022/10/12 </td>
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
  )
}

export default Paymentmanagement
