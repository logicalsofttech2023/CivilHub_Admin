import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import secureLocalStorage from "react-secure-storage";
import toast, { Toaster } from "react-hot-toast";

const Cancellaionpolicy = () => {
  const [aboutData, setAboutData] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const token = secureLocalStorage.getItem("adminidtoken");

  const submitForm = (event) => {
    event.preventDefault();

    const dataAbout = {
      title: title ? title : aboutData[0]?.title,
      text: text ? text : aboutData[0]?.text,
    };

    const options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/cancellationPolicy`,
        dataAbout,
        options
      )
      .then((res) => {
        getAbout();
      })
      .catch((error) => {});

    setTitle("");
    setText("");
  };

  const getAbout = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/cancellationPolicyList`)
      .then((res) => {
        toast.success("Faq Data Updated Successfully");
        setAboutData(res.data.data);

        setTitle(res.data.data[0]?.title || "");
        setText(res.data.data[0]?.text || "");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAbout();
  }, [0]);


       
  return (
    <div>
      {/* <Header /> */}
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4">
          {/* <Sidebarr /> */}
        </div>

        <div className="col-lg-9 col-md-8 "  style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                  alt
                />
                Cancellation Policy
              </h2>
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
  );
};

export default Cancellaionpolicy;







