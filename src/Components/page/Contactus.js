import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";

const Contactus = () => {
  const [aboutdata, setAboutData] = useState([]);
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [whatsapno, setWhatsapno] = useState("");
  const [email, setEmail] = useState("");
  const token = secureLocalStorage.getItem("adminidtoken");

  useEffect(() => {
    getAbout();
  }, []);

  const contactDataNotification = () => {
    swal({
      title: "Contact data added Successfully",
      text: "Data inserted successfully",
      icon: "success",
      buttons: true,
    });
  };

  const getAbout = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}admin/api/contactUs_list`)
      .then((res) => {
        setAboutData(res.data.data);
        if (res.data.data.length > 0) {
          const contact = res.data.data[0];
          setName(contact.client_name);
          setPhoneno(contact.phone_no);
          setWhatsapno(contact.whatsapp_number);
          setEmail(contact.email);
        }
      })
      .catch((error) => {

      });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const dataAbout = {
      contactId: aboutdata[0]?._id,
      client_name: name,
      phone_no: phoneno,
      email: email,
      whatsapp_number: whatsapno,
    };

    const options = {
      headers: {
        token: token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/updateContact_us`,
        dataAbout,
        options
      )
      .then((res) => {
        contactDataNotification();
        getAbout();
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div
        className="container row"
        style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-lg-3 col-md-4"></div>

        <div className="col-lg-9 col-md-8" style={{ marginTop: "60px" }}>
          <div className="mt-3 mb-5">
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                <img
                  width={20}
                  src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
                  alt=""
                />
                Contact Us
              </h2>
            </div>
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Contact Us</h5>
                  </div>

                  <form onSubmit={submitForm}>
                    <div className="card-body">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-3">
                            <input type="hidden" id="name" name="id" />
                            <div className="form-group mb-3">
                              <label
                                htmlFor="name"
                                className="title-color text-capitalize"
                              >
                                Client Name
                              </label>
                              <input
                                type="text"
                                value={name}
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                placeholder={aboutdata[0]?.client_name}
                              />
                            </div>
                          </div>

                          <div className="col-md-3">
                            <input type="hidden" id="phone_no" name="id" />
                            <div className="form-group mb-3">
                              <label
                                htmlFor="phone_no"
                                className="title-color text-capitalize"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                maxLength={10}
                                minLength={10}
                                value={phoneno}
                                onChange={(e) => setPhoneno(e.target.value)}
                                className="form-control"
                                placeholder={aboutdata[0]?.phone_no}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <input
                              type="hidden"
                              id="whatsapp_number"
                              name="id"
                            />
                            <div className="form-group mb-3">
                              <label
                                htmlFor="whatsapp_number"
                                className="title-color text-capitalize"
                              >
                                WhatsApp Number
                              </label>
                              <input
                                type="text"
                                maxLength={10}
                                minLength={10}
                                value={whatsapno}
                                onChange={(e) => setWhatsapno(e.target.value)}
                                className="form-control"
                                placeholder={aboutdata[0]?.whatsapp_number}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <input type="hidden" id="email" name="id" />
                            <div className="form-group mb-3">
                              <label
                                htmlFor="email"
                                className="title-color text-capitalize"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder={aboutdata[0]?.email}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            <button className="btn btn--primary" type="submit">
                              Update
                            </button>
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

export default Contactus;
