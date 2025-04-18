import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import "./manubar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  MdFeedback,
  MdLocalOffer,
  MdOutlineWallpaper,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaBlog, FaRocketchat, FaUserGraduate } from "react-icons/fa";
import { BiCategory, BiMoneyWithdraw } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFlagBannerFill } from "react-icons/pi";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";
const Sidebarr = (props) => {
  let navigate = useNavigate();
  const [randomResult, setRandomResult] = useState("hello");
  let [opcount, setopcount] = useState();
  let manubaricon = () => {
    setopcount(1);
  };

  let manubarcrossicon = () => {
    setopcount(0);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Initial updatef
  useEffect(() => {
    updateScreenWidth();

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]); // Empty dependency array ensures the effect runs only once on mount

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]); // Empty dependency array ensures the effect runs only once on mount

  const handleDropdownChange = (event) => {
    let linkvalue = event.target.value;
    // console.log(linkvalue)
    if (linkvalue === "message") {
      navigate("/message");
    } else if (linkvalue === "chatdeliveryman") {
      navigate("/chatdeliveryman");
    } else if (linkvalue === "chatwithadmin") {
      navigate("/chatwithadmin");
    }
  };

  const [sidebarStatus, setSidebarStatus] = useState(() => {
    return localStorage.getItem("setstatus");
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setSidebarStatus(localStorage.getItem("setstatus"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div>
      {/* <i
        className="fa fa-bars chkicons"
        onClick={manubaricon}
        style={{ fontSize: "20px" , color:'#073b74' }}
        aria-hidden="true"
      ></i> */}
      {screenWidth >= 767 ? (
        <aside
          className="sidenav"
          style={{ textAlign: "left", paddingLeft: "0px", marginTop: "60px" }}
        >
          {/* <i
            class="fa fa-times chkicons1"
            onClick={manubarcrossicon}
            style={{ fontSize: "20px"  }}
            aria-hidden="true"
          ></i> */}

          <div className="navbar-vertical-container ">
            <div className="navbar-vertical-footer-offset pb-0">
              <div className="">
                <ul className="navbar-nav navbar-nav-lg nav-tabs pb-10">
                  <li className="navbar-vertical-aside-has-menu ">
                    <Sidebar className="bg-info example">
                      <Menu style={{ width: "100%" }}>
                        {/* <Menu style={{ width: '75%' }}> */}
                        <MenuItem
                          component={<Link to="/home" />}
                          icon={
                            <i
                              class="fa fa-home"
                              style={{ color: "white", fontSize: "20px" }}
                              aria-hidden="true"
                            ></i>
                          }
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                          }}
                        >
                          {" "}
                          Dashboard{" "}
                        </MenuItem>
                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                            height: "39px",
                          }}
                        >
                          {" "}
                          USER MANAGEMENT{" "}
                        </MenuItem>
                        <SubMenu
                          label="Users"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<FaUser style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/freelancerList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Freelancer List
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/companyList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Company List
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/businessList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Bassness List
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/individualList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Individual List
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/reportedUsersList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Reported Users List{" "}
                          </MenuItem>

                          

                          
                        </SubMenu>

                        <SubMenu
                            label="Job"
                            style={{
                              paddingLeft: "5px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "39px",
                            }}
                            icon={<FaToolbox style={{ fontSize: "20px" }} />}
                          >
                            <MenuItem
                              component={<Link to="/jobList" />}
                              icon={
                                <i
                                  class="fa fa-circle"
                                  style={{ color: "white", fontSize: "5px" }}
                                  aria-hidden="true"
                                ></i>
                              }
                              style={{
                                paddingLeft: "20px",
                                backgroundColor: "#073b74",
                                color: "white",
                                height: "32px",
                              }}
                            >
                              {" "}
                              Job List
                            </MenuItem>
                          </SubMenu>

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          APP MANAGEMENT{" "}
                        </MenuItem>

                        <SubMenu
                          label="Categories"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<BiCategory style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/freelancerCategory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Freelancer Category{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/freelancerSubCategory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Freelancer Sub Category
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/jobCetegory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Job Category
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/productCategory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Product Category
                          </MenuItem>
                        </SubMenu>

                        {/*skilled  */}
                        <SubMenu
                          label="Skills"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<FaUserGraduate style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/skills" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Add Skills{" "}
                          </MenuItem>
                        </SubMenu>
                        {/* banner */}
                        <SubMenu
                          label="Banner"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <MdOutlineWallpaper style={{ fontSize: "20px" }} />
                          }
                        >
                          <MenuItem
                            component={<Link to="/freelancerBanner" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Freelancer Section Banner{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/marketPlaceBanner" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Market Place Section Banner{" "}
                          </MenuItem>
                        </SubMenu>

                        {/* blog */}
                        <SubMenu
                          label="Blogs"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<FaBlog style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/blogList" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Add Blog{" "}
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <TbBrandProducthunt style={{ fontSize: "20px" }} />
                          }
                          label="Market Place Products"
                        >
                          <MenuItem
                            component={<Link to="/newproductsrequest" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            New Products Requests{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/vendorapprovedproductlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Approved Products{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/vendordeniedproductlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Denied Products{" "}
                          </MenuItem>
                        </SubMenu>

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          SETTINGS{" "}
                        </MenuItem>

                        {/* <SubMenu
                          label="Chat"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <IoChatboxEllipses style={{ fontSize: "20px" }} />
                          }
                        >
                          <MenuItem
                            component={<Link to="/vendorchat" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Customer Chat{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/message" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Delivery-Man Chat{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/chatwithadmin" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Vendor Chat{" "}
                          </MenuItem>
                        </SubMenu> */}

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<IoMdSettings style={{ fontSize: "20px" }} />}
                          label="Setting"
                        >
                          <MenuItem
                            component={<Link to="/aboutus" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            About us{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/termcondition" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Term & Conditions{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/privacypolicy" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Privacy & Policy{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/faq" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Faq{" "}
                          </MenuItem>
                          
                        </SubMenu>
                      </Menu>
                    </Sidebar>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      ) : null}

      {sidebarStatus == "true" ? (
        <aside
          className="sidenav1"
          style={{
            textAlign: "left",
            paddingLeft: "0px",
            marginTop: "60px",
            opacity: `${opcount}`,
          }}
        >
          <div className="navbar-vertical-container ">
            <div className="navbar-vertical-footer-offset pb-0">
              <div className="">
                <ul
                  style={{ overflow: "scroll", height: "450px" }}
                  className="navbar-nav navbar-nav-lg nav-tabs pb-10"
                >
                  <li className="navbar-vertical-aside-has-menu ">
                    <Sidebar className="bg-info example">
                      <Menu style={{ width: "100%" }}>
                        <MenuItem
                          component={<Link to="/home" />}
                          icon={
                            <i
                              class="fa fa-home"
                              style={{ color: "white", fontSize: "20px" }}
                              aria-hidden="true"
                            ></i>
                          }
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                          }}
                        >
                          {" "}
                          Dashboard{" "}
                        </MenuItem>
                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                            height: "39px",
                          }}
                        >
                          {" "}
                          USER MANAGEMENT{" "}
                        </MenuItem>
                        <SubMenu
                          label="Customers"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<FaUser style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/customerlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Customer List{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/customerreview" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Customer Reviews
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/loyaltyreport" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Loyalty Points
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <TbBrandProducthunt style={{ fontSize: "20px" }} />
                          }
                          label="Vendor"
                        >
                          <MenuItem
                            component={<Link to="/addnewseller" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Add New Vendor{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/sellerlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Vendor List{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/withdrow" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Withdraws{" "}
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<FaUser style={{ fontSize: "20px" }} />}
                          label="Delivery Men"
                        >
                          <MenuItem
                            component={<Link to="/addnewdeliveryman" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Add New{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/deliverymanlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            List{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/deliverywithdraw" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Withdraws{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/emergencycontact" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Emergency Contact{" "}
                          </MenuItem>
                        </SubMenu>

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          PRODUCT MANAGEMENT{" "}
                        </MenuItem>

                        <SubMenu
                          label="Category"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<BiCategory style={{ fontSize: "20px" }} />}
                        >
                          <MenuItem
                            component={<Link to="/maincetagory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Main category{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/cetagory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Category{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/subcetagory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Sub Category
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/subsubcetagory" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Sub subcategory
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          label="Product Attribute"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <PiFlagBannerFill style={{ fontSize: "20px" }} />
                          }
                        >
                          <MenuItem
                            component={<Link to="/addnewcolor" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Color{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/addnewbrands" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Brands{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/addnewsize" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Size{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/addnewproducttype" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            Product Type{" "}
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <TbBrandProducthunt style={{ fontSize: "20px" }} />
                          }
                          label="Vendor Products"
                        >
                          <MenuItem
                            component={<Link to="/newproductsrequest" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            New Products Requests{" "}
                          </MenuItem>
                          {/* <MenuItem
                            component={<Link to="/productupdaterequest" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Products updated Requests{" "}
                          </MenuItem> */}

                          <MenuItem
                            component={<Link to="/vendorapprovedproductlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Approved Products{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/vendordeniedproductlist" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Denied Products{" "}
                          </MenuItem>
                        </SubMenu>

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          ORDER MANAGEMENT{" "}
                        </MenuItem>
                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <i
                              class="fa fa-shopping-cart"
                              style={{ fontSize: "20px" }}
                              aria-hidden="true"
                            ></i>
                          }
                          label="Order"
                        >
                          <MenuItem
                            component={<Link to="/panding" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Pending{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/confrimproducts" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Confirmed{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/packaging" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Packing{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/outForDelivery" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Shipped{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/delivered" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Delivered{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/returned" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Returned
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/failedToDelivery" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Not delivered
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/canceled" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "33px",
                            }}
                          >
                            {" "}
                            Cancelled
                          </MenuItem>
                        </SubMenu>

                        <SubMenu
                          label="Refund Request List"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <i
                              class="fa fa-credit-card"
                              style={{ fontSize: "15px" }}
                              aria-hidden="true"
                            ></i>
                          }
                        >
                          <MenuItem
                            component={<Link to="/refundpanding" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Pending{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/refundapproved" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Approved{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/refundrefunded" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Refunded{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/refundreject" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Rejected{" "}
                          </MenuItem>
                        </SubMenu>

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          PROMOTION MANAGEMENT{" "}
                        </MenuItem>
                        <MenuItem
                          component={<Link to="/bannerlist" />}
                          icon={
                            <PiFlagBannerFill style={{ fontSize: "20px" }} />
                          }
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                        >
                          {" "}
                          Banners{" "}
                        </MenuItem>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<MdLocalOffer style={{ fontSize: "20px" }} />}
                          label="Advertisement & Deals"
                        >
                          {/* <MenuItem
                            component={<Link to="/coupan" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Coupan{" "}
                          </MenuItem> */}
                          <MenuItem
                            component={<Link to="/addadvertisment" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Add Advertisement{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/dealsoftheday" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Deal of the day{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/dealsoftoday" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Today Offer{" "}
                          </MenuItem>
                          {/* <MenuItem
                            component={<Link to="/addnewproducts" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Feature Deal{" "}
                          </MenuItem> */}
                        </SubMenu>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <IoMdNotifications style={{ fontSize: "20px" }} />
                          }
                          label="Notification"
                        >
                          <MenuItem
                            component={<Link to="/sendnotification" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Send Notification{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/sendnotification" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Push Notification{" "}
                          </MenuItem>
                        </SubMenu>

                        {/* <MenuItem
                          component={<Link to="/coupan" />}
                          icon={<MdDiscount style={{ fontSize: "20px" }} />}
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                        >
                          {" "}
                          Promotion Sales Discount{" "}
                        </MenuItem> */}

                        <MenuItem
                          style={{
                            paddingLeft: "13px",
                            backgroundColor: "#073b74",
                            color: "#a3b9d2",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          CHAT DETAILS{" "}
                        </MenuItem>

                        <SubMenu
                          label="Chat"
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={
                            <IoChatboxEllipses style={{ fontSize: "20px" }} />
                          }
                        >
                          <MenuItem
                            component={<Link to="/vendorchat" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Customer Chat{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/message" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Delivery-Man Chat{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/chatwithadmin" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Vendor Chat{" "}
                          </MenuItem>
                        </SubMenu>
                        <MenuItem
                          component={<Link to="/suggestion" />}
                          icon={<MdFeedback style={{ fontSize: "20px" }} />}
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                        >
                          {" "}
                          Suggestion{" "}
                        </MenuItem>
                        <MenuItem
                          component={<Link to="/alltransication" />}
                          icon={
                            <BiMoneyWithdraw style={{ fontSize: "20px" }} />
                          }
                          style={{
                            paddingLeft: "7px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                        >
                          {" "}
                          All Transaction{" "}
                        </MenuItem>

                        <SubMenu
                          style={{
                            paddingLeft: "5px",
                            backgroundColor: "#073b74",
                            color: "white",
                            height: "39px",
                          }}
                          icon={<IoMdSettings style={{ fontSize: "20px" }} />}
                          label="Setting"
                        >
                          <MenuItem
                            component={<Link to="/deliverycharge" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Tax & Fare charge{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/aboutus" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            About us{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/termcondition" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Term & Conditions{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/returnpolicy" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Return Policy{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/cancellaionpolicy" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Cancellation Policy{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/refundpolicy" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Refund Policy{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/privacypolicy" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Privacy & Policy{" "}
                          </MenuItem>

                          <MenuItem
                            component={<Link to="/faq" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Faq{" "}
                          </MenuItem>
                          <MenuItem
                            component={<Link to="/contactus" />}
                            icon={
                              <i
                                class="fa fa-circle"
                                style={{ color: "white", fontSize: "5px" }}
                                aria-hidden="true"
                              ></i>
                            }
                            style={{
                              paddingLeft: "20px",
                              backgroundColor: "#073b74",
                              color: "white",
                              height: "32px",
                            }}
                          >
                            {" "}
                            Contact us{" "}
                          </MenuItem>
                        </SubMenu>
                      </Menu>
                    </Sidebar>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
};

export default Sidebarr;
