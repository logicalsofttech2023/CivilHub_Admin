import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [id, setid] = useState(null);
  const [id1, setid1] = useState(null);

  const token = secureLocalStorage.getItem("adminidtoken");

  const submitForm = (event) => {
    event.preventDefault();
    const dataAbout = {
      type: "Company",
      title: title ? title : aboutData[0]?.title,
      description: text ? text : aboutData[0]?.description,
    };
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .put(
        `${process.env.REACT_APP_API_KEY}admin/api/update_about/${id}`,
        dataAbout,
        options
      )
      .then((res) => {
        toast.success( res?.data?.msg || "About us Data Updated Successfully");
        getAbout();
      })
      .catch((error) => {console.log(error)});
    setTitle("");
    setText("");
    setid("")
  };

  const getAbout = () => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_abouts`,options)
      .then((res) => {
        const freelancerData = res.data.data.find(item => item.type === "Company");
        if(freelancerData){
          setAboutData([freelancerData]); 
          setTitle(freelancerData.title);
          setText(freelancerData.description || "");
          setid(freelancerData._id || "");
        }   
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getAbout();
  }, [0]);

  const submitForm1 = (event) => {
    event.preventDefault();
    const dataAbout = {
      type: "Freelancer",
      title: title1 ? title1 : aboutData[1]?.title,
      text: text1 ? text1 : aboutData[1]?.text,
    };
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }

    axios
      .put(
        `${process.env.REACT_APP_API_KEY}admin/api/update_about/${id1}`,
        dataAbout,
        options
      )
      .then((res) => {
        toast.success( res?.data?.msg || "About us Data Updated Successfully");
        getAbout1();
      })
      .catch((error) => {console.log(error)});

    setTitle1("");
    setText1("");
    setid1("");
  };
  const getAbout1 = () => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_abouts`,options)
      .then((res) => {
        const freelancerData = res.data.data.find(item => item.type === "Freelancer");
        if (freelancerData) {
          setAboutData([freelancerData]); 
          setTitle1(freelancerData.title || "");  
          setText1(freelancerData.description || "");  
          setid1(freelancerData._id || "");
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAbout1();
  }, [0]);
  return (
    <div>
      <Toaster/>
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">{/* <Sidebarr /> */}</div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                  alt=""
                />
                About Us
              </h2>
            </div>

            <div className="row mb-5">
              <div className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-header justify-content-center">
                    <h2 className="mb-0">About Us for Company</h2>
                  </div>

                  <form className="card" onSubmit={submitForm}>
                    <div className="card-body">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-xxl-12 col-lx-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize"
                              >
                                Title
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-12 col-lg-12 col-xxl-12 col-lx-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize"
                              >
                                Description
                              </label>
                              <ReactQuill value={text} onChange={setText} />
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <button
                                type="submit"
                                className="btn btn--primary "
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header justify-content-center">
                    <h2 className="mb-0">About Us for Freelancer</h2>
                  </div>

                  <form className="card" onSubmit={submitForm1}>
                    <div className="card-body">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-xxl-12 col-lx-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize"
                              >
                                Title
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                value={title1}
                                onChange={(e) => setTitle1(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-12 col-lg-12 col-xxl-12 col-lx-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize"
                              >
                                Description
                              </label>
                              <ReactQuill value={text1} onChange={setText1} />
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <button
                                type="submit"
                                className="btn btn--primary"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// import React, { useEffect, useRef, useState } from "react";
// import Header from "../Header";
// import { Link } from "react-router-dom";
// import Sidebarr from "../Sidebar";
// import axios from "axios";
// import swal from "sweetalert";
// import secureLocalStorage from "react-secure-storage";

// const Aboutus = () => {
//   const [aboutdata, setaboutdata] = useState();
//   const [title, settitle] = useState();
//   const [text, settext] = useState();

//   let aboutdataa = () => {
//     swal({
//       title: "About data added Successfully",
//       text: "Data inserted sucessfully",
//       icon: "success",
//       buttons: true,
//     });
//   };

//   let token = secureLocalStorage.getItem("adminidtoken");

//   const submitForm = (event) => {
//     event.preventDefault();

//     const dataabout = {
//       title: title,
//       text: text,
//     };
//     let options = {
//       headers: {
//         token: token,
//       },
//     };

//     axios
//       .post(
//         `${process.env.REACT_APP_API_KEY}admin/api/create_aboutUs`,
//         dataabout,
//         options
//       )
//       .then((res) => {
//         aboutdataa();
//         getabout();
//       })
//       .catch((error) => {});
//     settitle("");
//     settext("");
//   };

//   useEffect(() => {
//     getabout();
//   }, [0]);
//   let getabout = () => {
//     axios
//       .get(`${process.env.REACT_APP_API_KEY}admin/api/aboutUs_list`)
//       .then((res) => {
//         setaboutdata(res.data.data);
//       })
//       .catch((error) => {});
//   };

//   return (
//     <div>
//       <Header />
//       <div
//         className="container row"
//         style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
//       >
//         <div className="col-lg-3 col-md-4">
//           <Sidebarr />
//         </div>

//         <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
//           <div className="mt-3 mb-5">
//             <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
//               <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
//                 <img
//                   width={20}
//                   src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
//                   alt=""
//                 />
//                 About Us
//               </h2>
//             </div>

//             <div className="row mb-5">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <h5 className="mb-0">About Us</h5>
//                   </div>

//                   <form onSubmit={submitForm}>
//                     <div className="card-body">
//                       <div className="form-group">
//                         {/* <label htmlFor="aboutUs">About Us:</label> */}
//                         <div className="row">
//                           <div className="col-md-4">
//                             <input type="hidden" id="id" name="id" />
//                             <div className="form-group mb-3">
//                               <label
//                                 htmlFor="name"
//                                 className="title-color text-capitalize"
//                               >
//                                 Title
//                               </label>
//                               <input
//                                 required
//                                 type="text"
//                                 value={title}
//                                 className="form-control"
//                                 onChange={(e) => {
//                                   settitle(e.target.value);
//                                 }}
//                                 placeholder="Title"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-md-8">
//                             <input type="hidden" id="id" name="id" />

//                             <div className="form-group mb-3">
//                               <label
//                                 htmlFor="name"
//                                 className="title-color text-capitalize"
//                               >
//                                 Description
//                               </label>
//                               <textarea
//                                 required
//                                 type="text"
//                                 value={text}
//                                 onChange={(e) => {
//                                   settext(e.target.value);
//                                 }}
//                                 className="form-control"
//                                 placeholder="Description"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="card-footer">
//                       {aboutdata?.map((aboutlist) => {
//                         return (
//                           <div className="form-group mb-2 btn-danger1">
//                             <button className="btn btn-danger1 ">
//                               Title - {aboutlist?.title}
//                             </button>
//                             <br />
//                             <button
//                               className="btn btn-danger1 "
//                               style={{ textAlign: "justify" }}
//                             >
//                               Description - {aboutlist?.text}
//                             </button>
//                           </div>
//                         );
//                       })}
//                     </div>

//                     <div className="card-footer">
//                       <div className="form-group mb-2">
//                         <button
//                           className="btn btn--primary btn-block"
//                           type="submit"
//                         >
//                           Update
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;

// import React, { useEffect, useState } from "react";
// import Header from "../Header";
// import Sidebarr from "../Sidebar";
// import axios from "axios";
// import swal from "sweetalert";
// import secureLocalStorage from "react-secure-storage";

// const AboutUs = () => {
//   const [aboutData, setAboutData] = useState([]);
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [updatingAbout, setUpdatingAbout] = useState(false);

//   const aboutDataNotification = () => {
//     swal({
//       title: "About data added successfully",
//       text: "Data inserted successfully",
//       icon: "success",
//       buttons: true,
//     });
//   };

//   const token = secureLocalStorage.getItem("adminidtoken");

//   const submitForm = (event) => {
//     event.preventDefault();

//     const dataAbout = {
//       title: title,
//       text: text,
//     };

//     const options = {
//       headers: {
//         token: token,
//       },
//     };

//     axios
//       .post(`${process.env.REACT_APP_API_KEY}admin/api/create_aboutUs`, dataAbout, options)
//       .then((res) => {
//         aboutDataNotification();
//         getAbout();
//         setUpdatingAbout(false);
//       })
//       .catch((error) => {});
//   };

//   const getAbout = () => {
//     axios
//       .get(`${process.env.REACT_APP_API_KEY}admin/api/aboutUs_list`)
//       .then((res) => {
//         setAboutData(res.data.data);
//       })
//       .catch((error) => {});
//   };

//   useEffect(() => {
//     getAbout();
//   }, []);

//   const handleEditClick = (aboutItem) => {
//     setUpdatingAbout(true);
//     setTitle(aboutItem.title);
//     setText(aboutItem.text);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container row" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}>
//         <div className="col-lg-3 col-md-4">
//           <Sidebarr />
//         </div>

//         <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
//           <div className="mt-3 mb-5">
//             <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
//               <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
//                 <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="" />
//                 About Us
//               </h2>
//             </div>

//             <div className="row mb-5">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <h5 className="mb-0">About Us</h5>
//                   </div>

//                   <form onSubmit={submitForm}>
//                     <div className="card-body">
//                       <div className="form-group">
//                         <div className="row">
//                           <div className="col-md-4">
//                             <div className="form-group mb-3">
//                               <label htmlFor="name" className="title-color text-capitalize">
//                                 Title
//                               </label>
//                               <input
//                                 required
//                                 type="text"
//                                 value={title}
//                                 className="form-control"
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 placeholder="Title"
//                               />
//                             </div>
//                           </div>

//                           <div className="col-md-8">
//                             <div className="form-group mb-3">
//                               <label htmlFor="name" className="title-color text-capitalize">
//                                 Description
//                               </label>
//                               <textarea
//                                 required
//                                 type="text"
//                                 value={text}
//                                 onChange={(e) => setText(e.target.value)}
//                                 className="form-control"
//                                 placeholder="Description"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="card-footer">
//                       {aboutData?.map((aboutItem, index) => (
//                         <div key={index} className="form-group mb-2 btn-danger1">
//                           <button
//                             type="button"
//                             className="btn btn-danger1 "
//                             onClick={() => handleEditClick(aboutItem)}
//                           >
//                             Title - {aboutItem?.title}
//                           </button>
//                           <br />
//                           <button
//                             type="button"
//                             className="btn btn-danger1 "
//                             style={{ textAlign: "justify" }}
//                             onClick={() => handleEditClick(aboutItem)}
//                           >
//                             Description - {aboutItem?.text}
//                           </button>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="card-footer">
//                       <div className="form-group mb-2">
//                         <button className="btn btn--primary btn-block" type="submit">
//                           {updatingAbout ? "Update" : "Submit"}
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
