
  import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";
const Termcondition = () => {
  const [aboutData, setAboutData] = useState([]);
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [id, setid] = useState(null);
  const [id1, setid1] = useState(null);

  const token = secureLocalStorage.getItem("adminidtoken");
console.log(token)
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
        `${process.env.REACT_APP_API_KEY}admin/api/update_terms/${id}`,
        dataAbout,
        options
      )
      .then((res) => {
        getAbout();
      toast.success( res?.data?.msg || "Terms and Condition Data Updated Successfully");

      })
      .catch((error) => {});

    setTitle("");
    setText("");
    setid("");
  };

  const getAbout = () => {
    const options = {
        headers:{
          Authorization: `Bearer ${token}`
        }
    }
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_termscondition`,options)
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
      description: text1 ? text1 : aboutData[1]?.description,
    };
    const options = {
      headers:{
        Authorization: `Bearer ${token}`
      }
  }
    axios
      .put(
        `${process.env.REACT_APP_API_KEY}admin/api/update_terms/${id1}`,
        dataAbout,
        options
      )
      .then((res) => {
        toast.success( res?.data?.msg || "Terms and Condition Data Updated Successfully");
        getAbout1();
      })
      .catch((error) => {console.log(error)});

    setTitle1("");
    setText1("");
    setid1("");
  };

  const getAbout1 = () => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/get_termscondition`, options)
      .then((res) => {
        const freelancerData = res.data.data.find(item => item.type === "Freelancer");
        if (freelancerData) {
          setAboutData([freelancerData]); 
          setTitle1(freelancerData.title || "");  
          setText1(freelancerData.description || "");  
          setid1(freelancerData._id || "");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>
        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                  alt
                />
                Term & Condition
              </h2>
            </div>

            <div className="row mb-5">
              <div className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-header justify-content-center">
                    <h2 className="mb-0 ">Term & Condition for Company</h2>
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
              
              <div className="col-md-12 ">
                <div className="card">
                  <div className="card-header justify-content-center">
                    <h2 className="mb-0">Term & Condition for Freelancer</h2>
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

export default Termcondition;
