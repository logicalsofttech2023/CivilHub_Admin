
import Header from "../Header";
import Sidebarr from "../Sidebar";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReactPlayer from "react-player";
import ReactAudioPlayer from 'react-audio-player'
import React, { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
const Massage = () => {
  let adminid = secureLocalStorage.getItem("adminid");
  const [customerchatlist, setcustomerchatlist] = useState();
  const [vendorchat, setvendorchat] = useState();
  
  const [text, settext] = useState();
  const [fileimage, setfileimage] = useState();
  const [customerid, setcustomerid] = useState();

  let token = secureLocalStorage.getItem("adminidtoken");
  let adminIdd = secureLocalStorage.getItem("adminid");

  let idcheck = (customerids) => {
    setcustomerid(customerids);
  };
  useEffect(() => {
    getcustomerlist();
  }, [0]);
  const getcustomerlist = () => {
    let options = {
      hraders: {
        token: token,
      },
    };
    const data = {
      adminId: adminIdd,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/customerChatlist`,
        data,
        options
      )
      .then((res) => {
        setcustomerchatlist(res.data.data);
      })
      .catch((error) => {});
  };

  const getvendormessage = (item) => {
    let options = {
      hraders: {
        token: token,
      },
    };
    const data = {
      adminId: adminIdd,
      userId: item ? item : customerid,
    };
 
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/adminGet_message`,
        data,
        options
      )
      .then((res) => {
        setvendorchat(res.data.data);
        getcustomerlist();
      })
      .catch((error) => {});
  };

  const sendmessage = (e) => {
    e.preventDefault();
    if (!fileimage && !text) {
      toast.error("Please give message");
      return null;
    }
    let formData;

    if (fileimage) {
      formData = new FormData();
      formData.append("adminId", adminIdd);
      formData.append("userId", customerid);
      formData.append("send_status", "0");
      formData.append("text", fileimage);
    } else {
      formData = {
        adminId: adminIdd,
        userId: customerid,
        send_status: "0",
        text: text,
      };
    }

    let options = {
      hraders: {
        token: token,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}admin/api/Send_message`,
        formData,
        options
      )
      .then((res) => {

        getvendormessage();
      })
      .catch((error) => {

        if (error.response.status === 404) {
          toast.error(error.response.data.msg);
        }
      });
    settext("");
    setfileimage("");
  };



  const Deletevendormessage = (item) => {
    let options = {
      hraders: {
        token: token,
      },
    };
    const data = {
      adminId: adminIdd,
      messageIds: [item],
    };

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}vender/api/removeVender_Message`,
        data,
        options
      )
      .then((res) => {
        getvendormessage();
      })
      .catch((error) => {});
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [vendorchat]);



  const [FilteredCustomerList, setFilteredCustomerList] = useState([]);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = customerchatlist?.filter(
      (item) =>
        item.first_name?.toLowerCase().includes(searchTerm)
    );
    setFilteredCustomerList(result);
  };
  
  useEffect(() => {
    setFilteredCustomerList(customerchatlist);
  }, [customerchatlist]);
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
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/support-ticket.png"
                  alt
                />
                Delivery Man Chat Details
              </h2>
            </div>
            <div className="row mb-5">
            <div className="col-xl-4 col-lg-4 chatSel">
              <div className="card card-body px-0 h-100">
                <div className="media align-items-center px-3 gap-3 mb-4">
                  <div className="avatar avatar-sm avatar-circle">
                    <img
                      className="avatar-img"
                      src="https://6valley.6amtech.com/storage/app/public/seller/2022-10-12-63467dae3ef83.png"
                      
                      alt="Image Description"
                    />
                    <span className="avatar-status avatar-sm-status avatar-status-success" />
                  </div>
                  <div className="media-body">
                    <h5 className="profile-name mb-1">
                      Innt Admin
                    </h5>
                    <span className="fz-12">Admin</span>
                  </div>
                </div>
                <div className="inbox_people">
                  <form className="search-form px-3" id="chat-search-form">
                    <div className="search-input-group">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      <input onChange={handleFilter}
                        className
                        id="myInput"
                        type="text"
                        placeholder="Search Delivery man..."
                        aria-label="Search customers..."
                      />
                    </div>
                  </form>
                  <div className="inbox_chat d-flex flex-column mt-1">
    {FilteredCustomerList?.length === 0 ? (
      <p className="text-center mt-3 mb-3">No data found.</p>
    ) : (
      FilteredCustomerList?.map((chatlist, index) => (
        <div className="list_filter" key={index}>
                          <div
                            className=" chat_list p-3 d-flex gap-2 user_9 seller-list   "
                            id={9}
                            data-name="Devid Jack"
                            data-phone={8801623456678}
                            data-image="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                            onclick="message_view('9')"
                          >
                            <div
                              onClick={() => {
                                getvendormessage(chatlist?.userId);
                                idcheck(chatlist?.userId);
                              }}
                              className="chat_people media gap-10"
                              id="chat_people"
                            >
                              <div className=" chat_img avatar avatar-sm avatar-circle">
                                {chatlist?.user_profile ? (
                                  <img
                                    src={
                                      `${process.env.REACT_APP_API_KEY}uploads/` +
                                      chatlist?.user_profile
                                    }
                                    id={9}
                                    className="avatar-img avatar-circle"
                                  />
                                ) : (
                                  <img
                                    src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                                    id={9}
                                    className="avatar-img avatar-circle"
                                  />
                                )}

                                <span className="avatar-satatus avatar-sm-status avatar-status-success" />
                              </div>
                              <div className="chat_ib media-body">
                                <h5
                                  className="mb-1 seller active-text "
                                  id={9}
                                  data-name="Devid Jack"
                                >
                                  {chatlist?.first_name &&
                                  chatlist?.first_name.length > 10
                                    ? chatlist?.first_name?.slice(0, 10) +
                                      "..."
                                    : chatlist?.first_name}
                                  {/* <span
                                    style={{ float: "right" ,marginLeft:'95px'}}
                                    class="lead small float-end"
                                  >
                                    07:15 PM
                                  </span>*/}
                                  <br />
                                  <span
                                    className="mt-2 font-weight-normal text-muted"
                                    id={9}
                                    data-name="Devid Jack"
                                  >
                                     {chatlist?.mobile_number}
                                    {/* {chatlist?.text &&
                                    chatlist?.text.length > 18
                                      ? chatlist?.text?.slice(0, 18) + "..."
                                      : chatlist?.text} */}
                                  </span>{" "}
                                 {/* <span
                                    style={{ float: "right" }}
                                    class="badge badge-soft-primary radius-50 fz-12"
                                  >
                                    {chatlist?.count}
                                  </span> */}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
      ))
    )}
  </div>
                </div>
              </div>
            </div>
            <section className="col-xl-8 col-lg-8 mt-4 mt-lg-0">
              <div className="card card-body card-chat justify-content-between Chat">
                <div className="inbox_msg_header d-flex flex-wrap gap-3 justify-content-between align-items-center border px-3 py-2 rounded mb-4">
                  <div className="media align-items-center gap-3">
                    <div className="avatar avatar-sm avatar-circle">
                      <img
                        className="avatar-img"
                        id="profile_image"
                        src={
                          vendorchat &&
                          vendorchat.length > 0 &&
                          vendorchat[0]?.userId?.user_profile
                            ? `${process.env.REACT_APP_API_KEY}uploads/${vendorchat[0]?.userId?.user_profile}`
                            : "https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                        }
                        alt="Image Description"
                      />
                      <span className="avatar-status avatar-sm-status avatar-status-success" />
                    </div>
                    <div className="media-body">
                      <h5 className="profile-name mb-1" id="profile_name">
                        {vendorchat && vendorchat.length > 0 ? (
                          <>{vendorchat[0]?.userId?.first_name}</>
                        ) : (
                          <>Innt Delivery Man</>
                        )}
                      </h5>
                      <span className="fz-12" id="profile_phone">
                        {vendorchat && vendorchat.length > 0 ? (
                          <>{vendorchat[0]?.userId?.mobile_number}</>
                        ) : (
                          <>XXX XXX XXX </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="messaging">
                  <div className="inbox_msg">
                    <div className="mesgs">
                      <div
                        className="msg_history pr-2 "
                        id="show_msg "
                        ref={chatContainerRef}
                      >
                        {/* <div
                          className="msg_history d-flex flex-column-reverse pr-2"
                          id="show_msg"
                        > */}
                        {vendorchat?.map((chatdata, index) => {
                          return (
                            <>
                              {chatdata?.send_status == 1 ? (
                                <div className="incoming_msg">
                                  <div className="received_msg">
                                    <div className="received_withd_msg">
                                      <div className="d-flex justify-content-start">
                                        {chatdata &&
                                          chatdata?.text &&
                                          chatdata?.text &&
                                          (chatdata?.text?.endsWith(".jpg") ||
                                          chatdata?.text?.endsWith(".png") ||
                                          chatdata?.text?.endsWith(".jpeg") ||
                                          chatdata?.text?.endsWith(".gif") ||
                                          chatdata?.text?.endsWith(".bmp") ||
                                          chatdata?.text?.endsWith(".webp") ? (
                                            <img
                                              className="rounded"
                                              src={`${process.env.REACT_APP_API_KEY}uploads/${chatdata?.text}`}
                                              width={120}
                                              alt="Image"
                                            />
                                          ) : chatdata?.text?.endsWith(
                                              ".wmv"
                                            ) ||
                                            chatdata?.text?.endsWith(".mp4") ||
                                            chatdata?.text?.endsWith(".mov") ||
                                            chatdata?.text?.endsWith(".avi") ||
                                            chatdata?.text?.endsWith(".flv") ||
                                            chatdata?.text?.endsWith(".mkv") ||
                                            chatdata?.text?.endsWith(".mts") ? (
                                            <video
                                              className="rounded"
                                              width={200}
                                              height={180}
                                              controls
                                            >
                                              <source
                                                src={`${process.env.REACT_APP_API_KEY}uploads/${chatdata?.text}`}
                                                type="video/mp4"
                                              />
                                              Your browser does not support the
                                              video tag.
                                            </video>
                                          ) : (
                                            <p className="bg-chat rounded px-3 py-2 mb-1">
                                              {chatdata?.text}
                                            </p>
                                          ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="outgoing_msg">
                                  <div className="sent_msg p-2">
                                    <div className="d-flex justify-content-end">
                                      {chatdata &&
                                        chatdata?.text &&
                                        chatdata?.text &&
                                        (chatdata?.text?.endsWith(".jpg") ||
                                        chatdata?.text?.endsWith(".png") ||
                                        chatdata?.text?.endsWith(".jpeg") ||
                                        chatdata?.text?.endsWith(".gif") ||
                                        chatdata?.text?.endsWith(".bmp") ||
                                        chatdata?.text?.endsWith(".webp") ? (
                                          <img
                                            className="rounded"
                                            src={`${process.env.REACT_APP_API_KEY}uploads/${chatdata?.text}`}
                                            width={120}
                                            alt="Image"
                                          />
                                        ) : chatdata?.text?.endsWith(".wmv") ||
                                          chatdata?.text?.endsWith(".mp4") ||
                                          chatdata?.text?.endsWith(".mov") ||
                                          chatdata?.text?.endsWith(".avi") ||
                                          chatdata?.text?.endsWith(".flv") ||
                                          chatdata?.text?.endsWith(".mkv") ||
                                          chatdata?.text?.endsWith(".mts") ? (
                                          <video
                                            className="rounded bg-c1 text-white rounded px-3 py-2 mb-1"
                                            width={200}
                                            height={180}
                                            controls
                                          >
                                            <source
                                              src={`${process.env.REACT_APP_API_KEY}uploads/${chatdata?.text}`}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        ) : chatdata?.text?.endsWith(".wmv") ||
                                          chatdata?.text?.endsWith(".mp3") ? (
                                          <ReactAudioPlayer
                                            className="bg-c1 text-white rounded px-3 py-2 mb-1"
                                            width={200}
                                            height={180}
                                            src={`${process.env.REACT_APP_API_KEY}uploads/${chatdata?.text}`}
                                            controls
                                          />
                                        ) : (
                                          <p className="bg-c1 text-white rounded px-3 py-2 mb-1">
                                            {chatdata?.text}
                                          </p>
                                        ))}
                                    </div>

                                    {/* <div style={{textAlign:'end'}}>
                                     
              <i  onClick={(()=>{Deletevendormessage(chatdata?._id)})} className="btn-danger btn-sm  fa fa-trash" aria-hidden="true" />
           


                                         </div> */}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })}
                      </div>
                      {fileimage ? (
                        fileimage.type.startsWith("image/") ? (
                          <img
                            width={150}
                            height={150}
                            src={URL.createObjectURL(fileimage)}
                            alt="Image"
                          />
                        ) : (
                          <ReactPlayer
                            width={150}
                            height={150}
                            controls
                            url={URL.createObjectURL(fileimage)}
                          />
                        )
                      ) : null}

                      <div class="type_msg">
                        <div class="input_msg_write">
                          <form
                            onSubmit={sendmessage}
                            class="mt-4 chatting-messages-ajax-form"
                            enctype="multipart/form-data"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              value="R2a4JPykxlbGP7QVKC69wpePkrNlz7T8J4fqJX1c"
                              autocomplete="off"
                            />{" "}
                            <input
                              type="hidden"
                              id="current-user-hidden-id"
                              value="9"
                              name="user_id"
                            />
                            <div class="position-relative d-flex">
                              <div>
                              <label class="py-0 px-3 d-flex align-items-center m-0 cursor-pointer position-absolute top-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                >
                                  <path
                                    d="M18.1029 1.83203H3.89453C2.75786 1.83203 1.83203 2.75786 1.83203 3.89453V18.1029C1.83203 19.2395 2.75786 20.1654 3.89453 20.1654H18.1029C19.2395 20.1654 20.1654 19.2395 20.1654 18.1029V3.89453C20.1654 2.75786 19.2395 1.83203 18.1029 1.83203ZM3.89453 3.20703H18.1029C18.4814 3.20703 18.7904 3.51595 18.7904 3.89453V12.7642L15.2539 9.2277C15.1255 9.09936 14.9514 9.02603 14.768 9.02603H14.7653C14.5819 9.02603 14.405 9.09936 14.2776 9.23136L10.3204 13.25L8.65845 11.5945C8.53011 11.4662 8.35595 11.3929 8.17261 11.3929C7.9957 11.3654 7.81053 11.4662 7.6822 11.6009L3.20703 16.1705V3.89453C3.20703 3.51595 3.51595 3.20703 3.89453 3.20703ZM3.21253 18.1304L8.17903 13.0575L13.9375 18.7904H3.89453C3.52603 18.7904 3.22811 18.4952 3.21253 18.1304ZM18.1029 18.7904H15.8845L11.2948 14.2189L14.7708 10.6898L18.7904 14.7084V18.1029C18.7904 18.4814 18.4814 18.7904 18.1029 18.7904Z"
                                    fill="#1455AC"
                                  ></path>
                                  <path
                                    d="M8.12834 9.03012C8.909 9.03012 9.54184 8.39728 9.54184 7.61662C9.54184 6.83597 8.909 6.20312 8.12834 6.20312C7.34769 6.20312 6.71484 6.83597 6.71484 7.61662C6.71484 8.39728 7.34769 9.03012 8.12834 9.03012Z"
                                    fill="#1455AC"
                                  ></path>
                                </svg>

                                <input
                                  onChange={(e) => {
                                    setfileimage(e.target.files[0]);
                                  }}
                                  type="file"
                                  id="msgfilesValue"
                                  className="h-100 position-absolute w-100 "
                                  hidden
                                  //multiple
                                  accept=".mp4, .mts, .mkv, .mov, .flv, .avi, .jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                                />
                              </label>
</div>

<div className="">
<label class="ml-5 py-0 px-3 d-flex align-items-center m-0 cursor-pointer position-absolute top-3">
                                <i
                                  class="fa fa-microphone mt-1"
                                  
                                ></i>
                                <input 
                                  onChange={(e) => {
                                    setfileimage(e.target.files[0]);
                                  }}
                                  type="file"
                                  
                                  className="h-100 position-absolute w-100 "
                                  hidden
                                  
                                  accept=".mp3, .mp4 audio/*"
                                />
                              </label>
</div>
                             

                              <input
                                value={text}
                                onChange={(e) => {
                                  settext(e.target.value);
                                }}
                                class="form-control w-0 pl-9 mt-1"
                                id="msgInputValue"
                                name="message"
                                type="text"
                                placeholder="Send a message"
                                aria-label="Search"
                              ></input>
                              <div class="d-flex align-items-center justify-content-center bg-F1F7FF radius-right-button">
                                <button
                                  class="aSend bg-transparent outline-0 border-0 shadow-0"
                                  type="submit"
                                  id="msgSendBtn"
                                >
                                  <img
                                    src="https://6valley.6amtech.com/public/assets/back-end/img/send-icon.png"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                            <div class="mt-3 d-flex justify-content-between">
                              <div class="overflow-x-auto pb-2 pt-3 w-100">
                                <div class="d-flex gap-3 filearray"></div>
                                <div id="selected-files-container"></div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default Massage;
