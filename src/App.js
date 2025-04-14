import logo from "./logo.svg";
import "./App.css";
import Allproducts from "./Components/page/Allproducts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Panding from "./Components/page/Panding";
import Confrimproducts from "./Components/page/Confrimproducts";
import Products_list from "./Components/page/Products_list";
import Addnewproducts from "./Components/page/Addnewproducts";
import Orderdetails from "./Components/page/Orderdetails";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Bannerlist from "./Components/page/Bannerlist";
import Editbanner from "./Components/page/Editbanner";
import Addbanner from "./Components/page/Addbanner";
import Notifications from "./Components/page/Notifications ";
import NotificationsEdit from "./Components/page/NotificationsEdit";
import Usermanagement from "./Components/page/Usermanagement";
import UserOrderdetails from "./Components/page/UserOrderdetails";
import Paymentmanagement from "./Components/page/Paymentmanagement";
import Vendor_manage from "./Components/page/Vendor_manage";
import Subscription from "./Components/page/Subscription";
import Profile from "./Components/page/Profile";
import Login from "./Components/Login";
import Packaging from "./Components/page/Packaging";
import Screen from "./Components/Screen";
import Overviewsale from "./Components/page/Overviewsale";
import Deliverdproducs from "./Components/page/Deliverdproducs";
import Outfordelivery from "./Components/page/Outfordelivery";
import Canceledproducts from "./Components/page/Canceledproducts";
import Returnedproducts from "./Components/page/Returnedproducts";
import Failedtodelivery from "./Components/page/Failedtodelivery";
import Sallerdetails from "./Components/page/Sallerdetails";
import Sallerorder from "./Components/page/Sallerorder";
import Sallerproducts from "./Components/page/Sallerproducts";
import Sallersatting from "./Components/page/Sallersatting";
import Sallertransacations from "./Components/page/Sallertransacations";
import Sallerreview from "./Components/page/Sallerreview";
import Sallerorderdetails from "./Components/page/Sallerorderdetails";
import Productsmange from "./Components/page/Productsmange";
import Editproducts from "./Components/page/Editproducts";
import Addsubscription from "./Components/page/Addsubscription";
import Massage from "./Components/page/Massage";
import Cetagory from "./Components/page/Cetagory";
import Subcetagory from "./Components/page/Subcetagory";
import Editsubcetagory from "./Components/page/Editsubcetagory";
import Subsubcategory from "./Components/page/Subsubcategory";
import Edit_subsubcetagory from "./Components/page/Edit_subsubcetagory";
import User_reaview from "./Components/page/User_reaview";
import Sallereditproducts from "./Components/page/Sallereditproducts";
import Newhello from "./Components/Newhello";
import Products_details from "./Components/page/Products_details";
import Products_edit from "./Components/page/Products_edit";
import Subscriberlist from "./Components/page/Subscriberlist";
import Refundpanding from "./Components/page/Refundpanding";
import Refundapproved from "./Components/page/Refundapproved";
import Refundrefunded from "./Components/page/Refundrefunded";
import Refundreject from "./Components/page/Refundreject";
import Refundstatus from "./Components/page/Refundstatus";
import { Category } from "@syncfusion/ej2-react-charts";
import Delivered from "./Components/page/Delivered";
import Canceled from "./Components/page/Canceled";
import Returned from "./Components/page/Returned";
import Coupan from "./Components/page/Coupan";
import Coupanupdate from "./Components/page/Coupanupdate";
import Chatwithadmin from "./Components/page/Chatwithadmin";
import Withdrow from "./Components/page/Withdrow";
import Customerlist from "./Components/page/Customerlist";
import Customerreview from "./Components/page/Customerreview";
import Wallet from "./Components/page/Wallet";
import Walletbonussetup from "./Components/page/Walletbonussetup";
import Walletbonusedit from "./Components/page/Walletbonusedit";
import Loyaltyreport from "./Components/page/Loyaltyreport";
import Addnewseller from "./Components/page/Addnewseller";
import Sellerlist from "./Components/page/Sellerlist";
import Sellerdetails from "./Components/page/Sellerdetails";
import Withdrawview from "./Components/page/Withdrawview";
import Withdrawmethod from "./Components/page/Withdrawmethod";
import Withdrawmethodadd from "./Components/page/Withdrawmethodadd";
import Addnewdeliveryman from "./Components/page/Addnewdeliveryman";
import Deliverymanlist from "./Components/page/Deliverymanlist";
import Earningstatement from "./Components/page/Earningstatement";
import Cashcollected from "./Components/page/Cashcollected";
import Updatedeliveryman from "./Components/page/Updatedeliveryman";
import Rating from "./Components/page/Rating";
import Emergencycontact from "./Components/page/Emergencycontact";
import Customermessage from "./Components/page/Customermessage";
import Customermessageview from "./Components/page/Customermessageview";
import Addnewbrands from "./Components/page/Addnewbrands";
import Brandlist from "./Components/page/Brandlist";
import Updatebrand from "./Components/page/Updatebrand";
import Productattribute from "./Components/page/Productattribute";
import Updateattribute from "./Components/page/Updateattribute";
import Newproductsrequest from "./Components/page/Newproductsrequest";
import Productupdaterequest from "./Components/page/Productupdaterequest";
import Vendorapprovedproductlist from "./Components/page/Vendorapprovedproductlist";
import Vendordeniedproductlist from "./Components/page/Vendordeniedproductlist";
import Protect from "./Components/page/Protect";
import Deliverycharge from "./Components/page/Deliverycharge";
import Aboutus from "./Components/page/Aboutus";
import Termcondition from "./Components/page/Termcondition";
import Privacypolicy from "./Components/page/Privacypolicy";
import Faq from "./Components/page/Faq";
import Contactus from "./Components/page/Contactus";
import Vendorchat from "./Components/page/Vendorchat";
import Test from "./Components/page/Test";
import Maincetagory from "./Components/page/Maincetagory";
import EditMaincategory from "./Components/page/EditMaincategory";
import Error from "./Components/Error";
import Addnewsize from "./Components/page/Addnewsize";
import Addnewcolor from "./Components/page/Addnewcolor";

import Addnewproducttype from "./Components/page/Addnewproducttype";
import Dealsoftheday from "./Components/page/Dealsoftheday";
import Returnpolicy from "./Components/page/Returnpolicy";
import Cancellaionpolicy from "./Components/page/Cancellaionpolicy";
import Refundpolicy from "./Components/page/Refundpolicy";
import Addadvertisment from "./Components/page/Addadvertisment";
import Alltransication from "./Components/page/Alltransication";
import Withdrawviewdetails from "./Components/page/Withdrawviewdetails";
import Suggestion from "./Components/page/Suggestion";
import Deliverywithdraw from "./Components/page/Deliverywithdraw";
import Deliverywithdrawreview from "./Components/page/Deliverywithdrawreview";
import Dealsoftoday from "./Components/page/Dealsoftoday";
import Skilled from "./Components/page/Skilled";
import Banner from "./Components/page/Banner";
import Blog from "./Components/page/Blog";
import Updatebanner from "./Components/page/Updatebanner";

// New Routes
import UserList from "./Components/Pages/UserList";
import FreelancerList from "./Components/Pages/FreelancerList";
import CompanyList from "./Components/Pages/CompanyList";
import BusinessList from "./Components/Pages/BusinessList";
import Individual from "./Components/Pages/Individual";
import FreelancerCategory from "./Components/Pages/FreelancerCategory";
import FreelancerSubCategory from "./Components/Pages/FreelancerSubCategory";
import JobCategory from "./Components/Pages/JobCategory";
import ProductCategory from "./Components/Pages/ProductCategory";
import Skills from "./Components/Pages/Skills";
import FreelancerBanner from "./Components/Pages/FreelancerBanner";
import MarketPlaceBanner from "./Components/Pages/MarketPlaceBanner";
import BlogList from "./Components/Pages/BlogList";
import UpdateBlog from "./Components/Pages/UpdateBlog";
import UserDetails from "./Components/Pages/UserDetails";
import UpdateFreelancerCategory from "./Components/Pages/UpdateFreelancerCategory";
import UpdateJobCategory from "./Components/Pages/UpdateJobCategory";
import UpdateSkill from "./Components/Pages/UpdateSkill";

function App() {
  const [randomResult, setRandomResult] = useState("hello");

  useEffect(() => {
    // Generate 8-digit random number
    const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;

    // Generate 2 random alphabets
    const randomAlphabets =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Combine the random number and alphabets
    const result = randomNumber.toString() + randomAlphabets;

    // Set the result in the state
    // setRandomResult(result);
  }, []);
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Header />}
      {location.pathname !== "/" && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Protect ComponentName={Home} />}></Route>

        <Route
          path="/profile"
          element={<Protect ComponentName={Profile} />}
        ></Route>
        <Route
          path="/allorder"
          element={<Protect ComponentName={Allproducts} />}
        ></Route>

        <Route
          path="/panding"
          element={<Protect ComponentName={Panding} />}
        ></Route>

        <Route
          path="/confrimproducts"
          element={<Protect ComponentName={Confrimproducts} />}
        ></Route>

        <Route
          path="/packaging"
          element={<Protect ComponentName={Packaging} />}
        ></Route>

        <Route
          path="/delivered"
          element={<Protect ComponentName={Delivered} />}
        ></Route>

        <Route
          path="/canceled"
          element={<Protect ComponentName={Canceled} />}
        ></Route>

        <Route
          path="/returned"
          element={<Protect ComponentName={Returned} />}
        ></Route>

        <Route
          path="/coupan"
          element={<Protect ComponentName={Coupan} />}
        ></Route>

        <Route
          path="/coupanupdate"
          element={<Protect ComponentName={Coupanupdate} />}
        ></Route>

        <Route
          path="/message"
          element={<Protect ComponentName={Massage} />}
        ></Route>
        <Route
          path="/chatwithadmin"
          element={<Protect ComponentName={Chatwithadmin} />}
        ></Route>

        <Route
          path="/withdrow"
          element={<Protect ComponentName={Withdrow} />}
        ></Route>
        <Route
          path="/customerlist"
          element={<Protect ComponentName={Customerlist} />}
        ></Route>

        <Route
          path="/customerreview"
          element={<Protect ComponentName={Customerreview} />}
        ></Route>
        <Route
          path="/wallet"
          element={<Protect ComponentName={Wallet} />}
        ></Route>
        <Route
          path="/walletbonussetup"
          element={<Protect ComponentName={Walletbonussetup} />}
        ></Route>
        <Route
          path="/walletbonusedit"
          element={<Protect ComponentName={Walletbonusedit} />}
        ></Route>
        <Route
          path="/loyaltyreport"
          element={<Protect ComponentName={Loyaltyreport} />}
        ></Route>
        <Route
          path="/addnewseller"
          element={<Protect ComponentName={Addnewseller} />}
        ></Route>
        <Route
          path="/sellerlist"
          element={<Protect ComponentName={Sellerlist} />}
        ></Route>
        <Route
          path="/sellerdetails"
          element={<Protect ComponentName={Sallerdetails} />}
        ></Route>
        <Route
          path="/withdrawview"
          element={<Protect ComponentName={Withdrawview} />}
        ></Route>
        <Route
          path="/withdrawmethod"
          element={<Protect ComponentName={Withdrawmethod} />}
        ></Route>
        <Route
          path="/withdrawmethodadd"
          element={<Protect ComponentName={Withdrawmethodadd} />}
        ></Route>
        <Route
          path="/addnewdeliveryman"
          element={<Protect ComponentName={Addnewdeliveryman} />}
        ></Route>
        <Route
          path="/deliverymanlist"
          element={<Protect ComponentName={Deliverymanlist} />}
        ></Route>
        <Route
          path="/earningstatement"
          element={<Protect ComponentName={Earningstatement} />}
        ></Route>
        <Route
          path="/cashcollected"
          element={<Protect ComponentName={Cashcollected} />}
        ></Route>
        <Route
          path="/updatedeliveryman"
          element={<Protect ComponentName={Updatedeliveryman} />}
        ></Route>
        <Route
          path="/rating"
          element={<Protect ComponentName={Rating} />}
        ></Route>
        <Route
          path="/emergencycontact"
          element={<Protect ComponentName={Emergencycontact} />}
        ></Route>
        <Route
          path="/customermessage"
          element={<Protect ComponentName={Customermessage} />}
        ></Route>
        <Route
          path="/customermessageview"
          element={<Protect ComponentName={Customermessageview} />}
        ></Route>
        <Route
          path="/addnewbrands"
          element={<Protect ComponentName={Addnewbrands} />}
        ></Route>
        <Route
          path="/brandlist"
          element={<Protect ComponentName={Brandlist} />}
        ></Route>
        <Route
          path="/updatebrand"
          element={<Protect ComponentName={Updatebrand} />}
        ></Route>

        <Route
          path="/productattribute"
          element={<Protect ComponentName={Productattribute} />}
        ></Route>

        <Route
          path="/updateattribute"
          element={<Protect ComponentName={Updateattribute} />}
        ></Route>

        <Route
          path="/dealsoftoday"
          element={<Protect ComponentName={Dealsoftoday} />}
        ></Route>

        <Route
          path="/newproductsrequest"
          element={<Protect ComponentName={Newproductsrequest} />}
        ></Route>

        <Route
          path="/productupdaterequest"
          element={<Protect ComponentName={Productupdaterequest} />}
        ></Route>

        <Route
          path="/vendorapprovedproductlist"
          element={<Protect ComponentName={Vendorapprovedproductlist} />}
        ></Route>

        <Route
          path="/vendordeniedproductlist"
          element={<Protect ComponentName={Vendordeniedproductlist} />}
        ></Route>

        <Route
          path="/outfordelivery"
          element={<Protect ComponentName={Outfordelivery} />}
        ></Route>

        <Route
          path="/canceledproducts"
          element={<Protect ComponentName={Canceledproducts} />}
        ></Route>

        <Route
          path="/returnedproducts"
          element={<Protect ComponentName={Returnedproducts} />}
        ></Route>

        <Route
          path="/failedtodelivery"
          element={<Protect ComponentName={Failedtodelivery} />}
        ></Route>

        <Route
          path="/sallerdetails"
          element={<Protect ComponentName={Sallerdetails} />}
        ></Route>

        <Route
          path="/sallerorder"
          element={<Protect ComponentName={Sallerorder} />}
        ></Route>

        <Route
          path="/sallerproducts"
          element={<Protect ComponentName={Sallerproducts} />}
        ></Route>

        <Route
          path="/dealsoftheday"
          element={<Protect ComponentName={Dealsoftheday} />}
        ></Route>
        <Route
          path="/sallersatting"
          element={<Protect ComponentName={Sallersatting} />}
        ></Route>

        <Route
          path="/sallertransacation"
          element={<Protect ComponentName={Sallertransacations} />}
        ></Route>

        <Route
          path="/sallerreview"
          element={<Protect ComponentName={Sallerreview} />}
        ></Route>

        <Route
          path="/sallerorderdetils"
          element={<Protect ComponentName={Sallerorderdetails} />}
        ></Route>

        <Route
          path="/salleproductsedit"
          element={<Protect ComponentName={Sallereditproducts} />}
        ></Route>

        <Route
          path="/devivardproducts"
          element={<Protect ComponentName={Deliverdproducs} />}
        ></Route>

        <Route
          path="/products_list"
          element={<Protect ComponentName={Products_list} />}
        ></Route>

        <Route
          path="/addnewproducts"
          element={<Protect ComponentName={Addnewproducts} />}
        ></Route>

        <Route
          path="/orderdetails"
          element={<Protect ComponentName={Orderdetails} />}
        ></Route>

        <Route
          path="/add_banner"
          element={<Protect ComponentName={Addbanner} />}
        ></Route>

        <Route
          path="/bannerlist"
          element={<Protect ComponentName={Bannerlist} />}
        ></Route>

        <Route
          path="/editbannerlist"
          element={<Protect ComponentName={Editbanner} />}
        ></Route>

        <Route
          path="/sendnotification"
          element={<Protect ComponentName={Notifications} />}
        ></Route>

        <Route
          path="/editnotification"
          element={<Protect ComponentName={NotificationsEdit} />}
        ></Route>

        <Route
          path="/userreaview"
          element={<Protect ComponentName={User_reaview} />}
        ></Route>

        <Route
          path="/userorderlist"
          element={<Protect ComponentName={UserOrderdetails} />}
        ></Route>

        <Route
          path="/paymentmanage"
          element={<Protect ComponentName={Paymentmanagement} />}
        ></Route>

        <Route
          path="/vendormanage"
          element={<Protect ComponentName={Vendor_manage} />}
        ></Route>

        <Route
          path="/subscription"
          element={<Protect ComponentName={Subscription} />}
        ></Route>

        <Route
          path="/overviewsale"
          element={<Protect ComponentName={Overviewsale} />}
        ></Route>

        <Route
          path="/allproductsmanage"
          element={<Protect ComponentName={Productsmange} />}
        ></Route>

        <Route
          path="/productsdetails"
          element={<Protect ComponentName={Products_details} />}
        ></Route>

        <Route
          path="/productseditproducts"
          element={<Protect ComponentName={Products_edit} />}
        ></Route>

        <Route
          path="/subscriberlist"
          element={<Protect ComponentName={Subscriberlist} />}
        ></Route>
        <Route
          path="/addnewsize"
          element={<Protect ComponentName={Addnewsize} />}
        ></Route>
        <Route
          path="/addnewcolor"
          element={<Protect ComponentName={Addnewcolor} />}
        ></Route>

        <Route
          path="/editproducts"
          element={<Protect ComponentName={Editproducts} />}
        ></Route>

        <Route
          path="/addsubscription"
          element={<Protect ComponentName={Addsubscription} />}
        ></Route>

        <Route
          path="/massages"
          element={<Protect ComponentName={Massage} />}
        ></Route>
        <Route
          path="/skilled"
          element={<Protect ComponentName={Skilled} />}
        ></Route>

        <Route path="/blog" element={<Protect ComponentName={Blog} />}></Route>

        <Route
          path="/banner"
          element={<Protect ComponentName={Banner} />}
        ></Route>

        <Route
          path="/updatebanner"
          element={<Protect ComponentName={Updatebanner} />}
        ></Route>

        <Route
          path="/cetagory"
          element={<Protect ComponentName={Cetagory} />}
        ></Route>

        <Route
          path="/subcetagory"
          element={<Protect ComponentName={Subcetagory} />}
        ></Route>

        <Route
          path="/editsubcetagory"
          element={<Protect ComponentName={Editsubcetagory} />}
        ></Route>

        <Route
          path="/subsubcetagory"
          element={<Protect ComponentName={Subsubcategory} />}
        ></Route>

        <Route
          path="/editsubsubcetagory"
          element={<Protect ComponentName={Edit_subsubcetagory} />}
        ></Route>

        <Route
          path="/refundpanding"
          element={<Protect ComponentName={Refundpanding} />}
        ></Route>

        <Route
          path="/refundapproved"
          element={<Protect ComponentName={Refundapproved} />}
        ></Route>

        <Route
          path="/refundrefunded"
          element={<Protect ComponentName={Refundrefunded} />}
        ></Route>

        <Route
          path="/refundreject"
          element={<Protect ComponentName={Refundreject} />}
        ></Route>

        <Route
          path="/refundstatus"
          element={<Protect ComponentName={Refundstatus} />}
        ></Route>

        <Route
          path="/hello"
          element={<Protect ComponentName={Screen} />}
        ></Route>

        <Route
          path="/newhello"
          element={<Protect ComponentName={Newhello} />}
        ></Route>

        <Route
          path="/deliverycharge"
          element={<Protect ComponentName={Deliverycharge} />}
        ></Route>
        <Route
          path="/aboutus"
          element={<Protect ComponentName={Aboutus} />}
        ></Route>

        <Route
          path="/termcondition"
          element={<Protect ComponentName={Termcondition} />}
        ></Route>
        <Route
          path="/aboutus"
          element={<Protect ComponentName={Aboutus} />}
        ></Route>

        <Route
          path="/termcondition"
          element={<Protect ComponentName={Termcondition} />}
        ></Route>
        <Route
          path="/privacypolicy"
          element={<Protect ComponentName={Privacypolicy} />}
        ></Route>

        <Route
          path="/returnpolicy"
          element={<Protect ComponentName={Returnpolicy} />}
        ></Route>

        <Route
          path="/deliverywithdraw"
          element={<Protect ComponentName={Deliverywithdraw} />}
        ></Route>

        <Route
          path="/deliverywithdrawreview"
          element={<Protect ComponentName={Deliverywithdrawreview} />}
        ></Route>
        <Route
          path="/suggestion"
          element={<Protect ComponentName={Suggestion} />}
        ></Route>

        <Route
          path="/alltransication"
          element={<Protect ComponentName={Alltransication} />}
        ></Route>

        <Route
          path="/withdrawviewdetails"
          element={<Protect ComponentName={Withdrawviewdetails} />}
        ></Route>

        <Route
          path="/addadvertisment"
          element={<Protect ComponentName={Addadvertisment} />}
        ></Route>

        <Route
          path="/cancellaionpolicy"
          element={<Protect ComponentName={Cancellaionpolicy} />}
        ></Route>

        <Route
          path="/refundpolicy"
          element={<Protect ComponentName={Refundpolicy} />}
        ></Route>

        <Route path="/faq" element={<Protect ComponentName={Faq} />}></Route>

        <Route
          path="/contactus"
          element={<Protect ComponentName={Contactus} />}
        ></Route>

        <Route
          path="/vendorchat"
          element={<Protect ComponentName={Vendorchat} />}
        ></Route>
        <Route
          path="/maincetagory"
          element={<Protect ComponentName={Maincetagory} />}
        ></Route>

        <Route
          path="/editMaincategory"
          element={<Protect ComponentName={EditMaincategory} />}
        ></Route>

        <Route
          path="/addnewproducttype"
          element={<Protect ComponentName={Addnewproducttype} />}
        ></Route>

        {/* -------------- New Routes -------------- */}

        <Route
          path="/userList"
          element={<Protect ComponentName={UserList} />}
        ></Route>

        <Route
          path="/freelancerList"
          element={<Protect ComponentName={FreelancerList} />}
        ></Route>

        <Route
          path="/companyList"
          element={<Protect ComponentName={CompanyList} />}
        ></Route>

        <Route
          path="/businessList"
          element={<Protect ComponentName={BusinessList} />}
        ></Route>

        <Route
          path="/individualList"
          element={<Protect ComponentName={Individual} />}
        ></Route>

        <Route
          path="/freelancerCategory"
          element={<Protect ComponentName={FreelancerCategory} />}
        ></Route>

        <Route
          path="/freelancerSubCategory"
          element={<Protect ComponentName={FreelancerSubCategory} />}
        ></Route>

        <Route
          path="/jobCetegory"
          element={<Protect ComponentName={JobCategory} />}
        ></Route>

        <Route
          path="/productCategory"
          element={<Protect ComponentName={ProductCategory} />}
        ></Route>

        <Route
          path="/skills"
          element={<Protect ComponentName={Skills} />}
        ></Route>

        <Route
          path="/freelancerBanner"
          element={<Protect ComponentName={FreelancerBanner} />}
        ></Route>

        <Route
          path="/marketPlaceBanner"
          element={<Protect ComponentName={MarketPlaceBanner} />}
        ></Route>

        <Route
          path="/blogList"
          element={<Protect ComponentName={BlogList} />}
        ></Route>

        <Route
          path="/updateBlog"
          element={<Protect ComponentName={UpdateBlog} />}
        ></Route>

        <Route
          path="/userDetails"
          element={<Protect ComponentName={UserDetails} />}
        ></Route>

        <Route
          path="/updateFreelancerCategory"
          element={<Protect ComponentName={UpdateFreelancerCategory} />}
        ></Route>

        <Route
          path="/updateJobCategory"
          element={<Protect ComponentName={UpdateJobCategory} />}
        ></Route>

        <Route
          path="/updateSkill"
          element={<Protect ComponentName={UpdateSkill} />}
        ></Route>

        <Route path="/test" element={<Protect ComponentName={Test} />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      {location.pathname !== "/"}
    </div>
  );
}

export default App;
