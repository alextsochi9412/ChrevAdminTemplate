import React, { Fragment } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// imeges
import bit_1 from "../../../images/svg/bitcoin-1.svg";
import bit_2 from "../../../images/svg/ethereum-1.svg";
import bit_3 from "../../../images/svg/ripple-1.svg";
import bit_4 from "../../../images/svg/litecoin-1.svg";

// Chart
import WidgetChart1 from "../Dhrev/Home/chart/WidgetChart1";
import WidetChart2 from "../Dhrev/Home/chart/WidetChart2";
import WidetChart3 from "../Dhrev/Home/chart/WidetChart3";
import WidetChart4 from "../Dhrev/Home/chart/WidetChart4";
import ActivityLine from "../Dhrev/Home/chart/ActivityLine";
import ActivityLine2 from "../Dhrev/Home/chart/ActivityLine2";
import ActivityLine3 from "../Dhrev/Home/chart/ActivityLine3";
import Donut from "../Dhrev/Home/chart/Donut";

// Slider
import CardSlider from "../Dhrev/Home/slider/CardSlider";
import Contacts from "../Dhrev/Home/slider/Contacts";

const Home = () => {
   return (
      <Fragment>
         <>
            <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
               <div className="input-group search-area d-inline-flex">
                  <div className="input-group-append">
                     <span className="input-group-text">
                        <i className="flaticon-381-search-2" />
                     </span>
                  </div>
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Search here"
                  />
               </div>
               <Link to="/" className="btn btn-primary ml-auto">
                  + Add New Cyrpto
               </Link>
            </div>
            <div className="row">
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">
                              $65,123
                           </h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_1} alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart1" height={75} /> */}
                        <WidgetChart1 />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">$2,551</h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_2} alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart2" height={75} /> */}
                        <WidetChart2 />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">$0,55</h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_3} alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart3" height={75} /> */}
                        <WidetChart3 />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">
                              $65,123
                           </h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_4} alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart4" height={75} /> */}
                        <WidetChart4 />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <div className="card-header d-sm-flex d-block pb-0 border-0">
                        <div>
                           <h4 className="text-black fs-20">Market Overview</h4>
                           <p className="fs-13 mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="mt-sm-0 mt-3">
                           <Dropdown.Toggle
                              variant=""
                              className="btn rounded-0 text-black bgl-light dropdown-toggle "
                           >
                              Monthly (2020)
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 Link 1
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 Link 2
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 Link 3
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body" id="user-activity">
                        <Tab.Container defaultActiveKey="all">
                           <div className="d-flex flex-wrap justify-content-between mb-5">
                              <div className="card-action card-tabs icontabs mt-3 mt-sm-0">
                                 <Nav className="nav nav-tabs" role="tablist">
                                    <Nav.Item className="nav-item">
                                       <Nav.Link eventKey="all">ALL</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                       <Nav.Link eventKey="btc">
                                          <i
                                             className="fa fa-btc"
                                             aria-hidden="true"
                                          />
                                       </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                       <Nav.Link eventKey="ethereum">
                                          <i className="lab la-ethereum" />
                                       </Nav.Link>
                                    </Nav.Item>
                                 </Nav>
                              </div>
                              <div className="d-flex align-items-center mt-3 mt-sm-0">
                                 <p className="mb-0 fs-13 mr-3">Average</p>
                                 <h2 className="mb-0 text-black font-w600">
                                    45%
                                 </h2>
                              </div>
                           </div>
                           <Tab.Content
                              className="tab-content"
                              id="myTabContent"
                           >
                              <Tab.Pane eventKey="all">
                                 <ActivityLine />
                              </Tab.Pane>
                              <Tab.Pane eventKey="btc">
                                 <ActivityLine2 />
                              </Tab.Pane>
                              <Tab.Pane eventKey="ethereum">
                                 <ActivityLine3 />
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <div className="card-header d-block d-sm-flex border-0 pb-0">
                        <div>
                           <h4 className="text-black fs-20">Cards</h4>
                           <p className="fs-13 mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="dropdown custom-dropdown mb-0 mt-3 mt-sm-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn text-black bgl-light rounded-0 i-false"
                           >
                              Settings
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 width="18px"
                                 height="18px"
                                 viewBox="0 0 24 24"
                                 version="1.1"
                              >
                                 <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                 >
                                    <rect x={0} y={0} width={24} height={24} />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={5}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={12}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={19}
                                       r={2}
                                    />
                                 </g>
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 Details
                              </Link>
                              <Link
                                 className="dropdown-item text-danger"
                                 to="/"
                              >
                                 Cancel
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body card-carousel">
                        <div className="owl-bank-wallet owl-carousel owl-loaded owl-drag mb-4">
                           <CardSlider />
                        </div>
                        <div className="media align-items-center d-none d-sm-flex">
                           <div className="d-inline-block relative donut-chart-sale mr-4">
                              <Donut />
                              <small className="text-primary">71%</small>
                           </div>
                           <div className="media-body">
                              <p className="mb-2">Monthly Limits</p>
                              <h4 className="mb-0 text-black font-w600 fs-20">
                                 $20,000 of $100,000
                              </h4>
                           </div>
                           <Link
                              className="btn btn-link ml-auto font-w700"
                              to="/"
                           >
                              View details
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-8 col-lg-8">
                  <div className="card">
                     <Tab.Container defaultActiveKey="monthly">
                        <div className="card-header d-block d-sm-flex border-0">
                           <div>
                              <h4 className="fs-20 text-black">
                                 Recent Trading Activities
                              </h4>
                              <p className="mb-0 fs-13">
                                 Lorem ipsum dolor sit amet, consectetur
                              </p>
                           </div>
                           <div className="card-action card-tabs mt-3 mt-sm-0">
                              <Nav className="nav nav-tabs" role="tablist">
                                 <Nav.Item>
                                    <Nav.Link eventKey="monthly">
                                       Monthly
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="Weekly">
                                       Weekly
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="Today">Today</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </div>
                        <div className="card-body tab-content p-0">
                           <Tab.Content>
                              <Tab.Pane eventKey="monthly">
                                 <div className="table-responsive">
                                    <table className="table shadow-hover card-table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3 d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600 wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                                                            fill="#FFAB2D"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Bitcoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3 d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600  wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12.3181 13.6532C12.1138 13.7348 11.8862 13.7348 11.6819 13.6532L9.48938 12.7761L12 17.7974L14.5107 12.7761L12.3181 13.6532Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 11.9341L15.0155 10.7279L12 5.90306L8.9845 10.7279L12 11.9341Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z"
                                                            fill="#DC3CCC"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ethereum
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$542
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="/"
                                                >
                                                   Pending
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3 d-inline-block ">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600  wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM17.8879 10.6801C17.4417 11.0743 16.9263 11.3824 16.3679 11.5885C15.9726 11.7164 15.6111 11.9312 15.3098 12.2174C14.9098 13.1698 15.1554 14.2713 15.9227 14.9637C15.9488 14.9899 15.9734 15.0179 15.9962 15.0474C16.9614 16.2842 16.8633 18.0438 15.7668 19.1657C14.5528 20.3776 12.5865 20.3776 11.3722 19.1657C10.6039 18.2437 10.3528 16.9962 10.7044 15.8486C10.7894 15.1855 10.5626 14.5201 10.0899 14.0471C9.62093 13.5951 8.97064 13.383 8.32532 13.4711C7.17777 13.8222 5.93055 13.5703 5.009 12.8017C3.79553 11.5898 3.79448 9.6238 5.00639 8.41059C5.00717 8.40955 5.00822 8.40876 5.009 8.40798C6.1304 7.31065 7.89083 7.21256 9.12732 8.17857C9.99289 9.03394 11.2752 9.32194 11.9566 8.86339C12.2438 8.56283 12.4588 8.20107 12.5859 7.8053C12.7921 7.24735 13.0997 6.73256 13.4934 6.28682C14.7068 5.07335 16.6739 5.07335 17.8874 6.28656C19.1011 7.50003 19.1011 9.46712 17.8879 10.6806V10.6801Z"
                                                            fill="#2B98D6"
                                                         />
                                                         <path
                                                            d="M14.6784 7.39816C14.4502 7.69123 14.2697 8.01851 14.1441 8.368C13.9151 9.05703 13.4924 9.66563 12.9269 10.1211C11.3324 10.9773 9.36089 10.6462 8.13349 9.31614C7.59153 8.95261 6.86908 9.01592 6.39859 9.4683C5.8676 9.99853 5.86709 10.8591 6.39732 11.3901C6.39783 11.3904 6.39808 11.3909 6.39859 11.3911C6.71872 11.71 7.17465 11.7605 8.1483 11.5823C8.34563 11.5466 8.54577 11.5285 8.74643 11.5285C9.72186 11.5443 10.6549 11.9298 11.3572 12.6068C12.2081 13.4577 12.6027 14.6632 12.4194 15.8526C12.2382 16.8239 12.2887 17.2814 12.6091 17.6023C13.1404 18.1326 14.0007 18.1326 14.5319 17.6023C14.9909 17.1119 15.0363 16.3647 14.6399 15.8224C13.3436 14.5927 13.0316 12.6469 13.8786 11.0736C14.3341 10.5083 14.9426 10.0861 15.6317 9.85787C15.9816 9.73175 16.3092 9.55024 16.602 9.32048C17.1327 8.78948 17.1327 7.92865 16.6017 7.3979C16.0705 6.86715 15.2099 6.86741 14.6792 7.39841L14.6784 7.39816Z"
                                                            fill="#2B98D6"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ripple
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$912
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="/"
                                                >
                                                   Canceled
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3 d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600 wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z"
                                                            fill="#5F5F5F"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Litecoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$7,762
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3 d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600 wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                                                            fill="#FFAB2D"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Bitcoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600 wspace-no">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM17.8879 10.6801C17.4417 11.0743 16.9263 11.3824 16.3679 11.5885C15.9726 11.7164 15.6111 11.9312 15.3098 12.2174C14.9098 13.1698 15.1554 14.2713 15.9227 14.9637C15.9488 14.9899 15.9734 15.0179 15.9962 15.0474C16.9614 16.2842 16.8633 18.0438 15.7668 19.1657C14.5528 20.3776 12.5865 20.3776 11.3722 19.1657C10.6039 18.2437 10.3528 16.9962 10.7044 15.8486C10.7894 15.1855 10.5626 14.5201 10.0899 14.0471C9.62093 13.5951 8.97064 13.383 8.32532 13.4711C7.17777 13.8222 5.93055 13.5703 5.009 12.8017C3.79553 11.5898 3.79448 9.6238 5.00639 8.41059C5.00717 8.40955 5.00822 8.40876 5.009 8.40798C6.1304 7.31065 7.89083 7.21256 9.12732 8.17857C9.99289 9.03394 11.2752 9.32194 11.9566 8.86339C12.2438 8.56283 12.4588 8.20107 12.5859 7.8053C12.7921 7.24735 13.0997 6.73256 13.4934 6.28682C14.7068 5.07335 16.6739 5.07335 17.8874 6.28656C19.1011 7.50003 19.1011 9.46712 17.8879 10.6806V10.6801Z"
                                                            fill="#2B98D6"
                                                         />
                                                         <path
                                                            d="M14.6784 7.39816C14.4502 7.69123 14.2697 8.01851 14.1441 8.368C13.9151 9.05703 13.4924 9.66563 12.9269 10.1211C11.3324 10.9773 9.36089 10.6462 8.13349 9.31614C7.59153 8.95261 6.86908 9.01592 6.39859 9.4683C5.8676 9.99853 5.86709 10.8591 6.39732 11.3901C6.39783 11.3904 6.39808 11.3909 6.39859 11.3911C6.71872 11.71 7.17465 11.7605 8.1483 11.5823C8.34563 11.5466 8.54577 11.5285 8.74643 11.5285C9.72186 11.5443 10.6549 11.9298 11.3572 12.6068C12.2081 13.4577 12.6027 14.6632 12.4194 15.8526C12.2382 16.8239 12.2887 17.2814 12.6091 17.6023C13.1404 18.1326 14.0007 18.1326 14.5319 17.6023C14.9909 17.1119 15.0363 16.3647 14.6399 15.8224C13.3436 14.5927 13.0316 12.6469 13.8786 11.0736C14.3341 10.5083 14.9426 10.0861 15.6317 9.85787C15.9816 9.73175 16.3092 9.55024 16.602 9.32048C17.1327 8.78948 17.1327 7.92865 16.6017 7.3979C16.0705 6.86715 15.2099 6.86741 14.6792 7.39841L14.6784 7.39816Z"
                                                            fill="#2B98D6"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ripple
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$912
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="/"
                                                >
                                                   Canceled
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Weekly">
                                 <div className="table-responsive">
                                    <table className="table shadow-hover  card-table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                                                            fill="#FFAB2D"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Bitcoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="#"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12.3181 13.6532C12.1138 13.7348 11.8862 13.7348 11.6819 13.6532L9.48938 12.7761L12 17.7974L14.5107 12.7761L12.3181 13.6532Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 11.9341L15.0155 10.7279L12 5.90306L8.9845 10.7279L12 11.9341Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z"
                                                            fill="#DC3CCC"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ethereum
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$542
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="#"
                                                >
                                                   Pending
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM17.8879 10.6801C17.4417 11.0743 16.9263 11.3824 16.3679 11.5885C15.9726 11.7164 15.6111 11.9312 15.3098 12.2174C14.9098 13.1698 15.1554 14.2713 15.9227 14.9637C15.9488 14.9899 15.9734 15.0179 15.9962 15.0474C16.9614 16.2842 16.8633 18.0438 15.7668 19.1657C14.5528 20.3776 12.5865 20.3776 11.3722 19.1657C10.6039 18.2437 10.3528 16.9962 10.7044 15.8486C10.7894 15.1855 10.5626 14.5201 10.0899 14.0471C9.62093 13.5951 8.97064 13.383 8.32532 13.4711C7.17777 13.8222 5.93055 13.5703 5.009 12.8017C3.79553 11.5898 3.79448 9.6238 5.00639 8.41059C5.00717 8.40955 5.00822 8.40876 5.009 8.40798C6.1304 7.31065 7.89083 7.21256 9.12732 8.17857C9.99289 9.03394 11.2752 9.32194 11.9566 8.86339C12.2438 8.56283 12.4588 8.20107 12.5859 7.8053C12.7921 7.24735 13.0997 6.73256 13.4934 6.28682C14.7068 5.07335 16.6739 5.07335 17.8874 6.28656C19.1011 7.50003 19.1011 9.46712 17.8879 10.6806V10.6801Z"
                                                            fill="#2B98D6"
                                                         />
                                                         <path
                                                            d="M14.6784 7.39816C14.4502 7.69123 14.2697 8.01851 14.1441 8.368C13.9151 9.05703 13.4924 9.66563 12.9269 10.1211C11.3324 10.9773 9.36089 10.6462 8.13349 9.31614C7.59153 8.95261 6.86908 9.01592 6.39859 9.4683C5.8676 9.99853 5.86709 10.8591 6.39732 11.3901C6.39783 11.3904 6.39808 11.3909 6.39859 11.3911C6.71872 11.71 7.17465 11.7605 8.1483 11.5823C8.34563 11.5466 8.54577 11.5285 8.74643 11.5285C9.72186 11.5443 10.6549 11.9298 11.3572 12.6068C12.2081 13.4577 12.6027 14.6632 12.4194 15.8526C12.2382 16.8239 12.2887 17.2814 12.6091 17.6023C13.1404 18.1326 14.0007 18.1326 14.5319 17.6023C14.9909 17.1119 15.0363 16.3647 14.6399 15.8224C13.3436 14.5927 13.0316 12.6469 13.8786 11.0736C14.3341 10.5083 14.9426 10.0861 15.6317 9.85787C15.9816 9.73175 16.3092 9.55024 16.602 9.32048C17.1327 8.78948 17.1327 7.92865 16.6017 7.3979C16.0705 6.86715 15.2099 6.86741 14.6792 7.39841L14.6784 7.39816Z"
                                                            fill="#2B98D6"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ripple
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$912
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="#"
                                                >
                                                   Canceled
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM17.8879 10.6801C17.4417 11.0743 16.9263 11.3824 16.3679 11.5885C15.9726 11.7164 15.6111 11.9312 15.3098 12.2174C14.9098 13.1698 15.1554 14.2713 15.9227 14.9637C15.9488 14.9899 15.9734 15.0179 15.9962 15.0474C16.9614 16.2842 16.8633 18.0438 15.7668 19.1657C14.5528 20.3776 12.5865 20.3776 11.3722 19.1657C10.6039 18.2437 10.3528 16.9962 10.7044 15.8486C10.7894 15.1855 10.5626 14.5201 10.0899 14.0471C9.62093 13.5951 8.97064 13.383 8.32532 13.4711C7.17777 13.8222 5.93055 13.5703 5.009 12.8017C3.79553 11.5898 3.79448 9.6238 5.00639 8.41059C5.00717 8.40955 5.00822 8.40876 5.009 8.40798C6.1304 7.31065 7.89083 7.21256 9.12732 8.17857C9.99289 9.03394 11.2752 9.32194 11.9566 8.86339C12.2438 8.56283 12.4588 8.20107 12.5859 7.8053C12.7921 7.24735 13.0997 6.73256 13.4934 6.28682C14.7068 5.07335 16.6739 5.07335 17.8874 6.28656C19.1011 7.50003 19.1011 9.46712 17.8879 10.6806V10.6801Z"
                                                            fill="#2B98D6"
                                                         />
                                                         <path
                                                            d="M14.6784 7.39816C14.4502 7.69123 14.2697 8.01851 14.1441 8.368C13.9151 9.05703 13.4924 9.66563 12.9269 10.1211C11.3324 10.9773 9.36089 10.6462 8.13349 9.31614C7.59153 8.95261 6.86908 9.01592 6.39859 9.4683C5.8676 9.99853 5.86709 10.8591 6.39732 11.3901C6.39783 11.3904 6.39808 11.3909 6.39859 11.3911C6.71872 11.71 7.17465 11.7605 8.1483 11.5823C8.34563 11.5466 8.54577 11.5285 8.74643 11.5285C9.72186 11.5443 10.6549 11.9298 11.3572 12.6068C12.2081 13.4577 12.6027 14.6632 12.4194 15.8526C12.2382 16.8239 12.2887 17.2814 12.6091 17.6023C13.1404 18.1326 14.0007 18.1326 14.5319 17.6023C14.9909 17.1119 15.0363 16.3647 14.6399 15.8224C13.3436 14.5927 13.0316 12.6469 13.8786 11.0736C14.3341 10.5083 14.9426 10.0861 15.6317 9.85787C15.9816 9.73175 16.3092 9.55024 16.602 9.32048C17.1327 8.78948 17.1327 7.92865 16.6017 7.3979C16.0705 6.86715 15.2099 6.86741 14.6792 7.39841L14.6784 7.39816Z"
                                                            fill="#2B98D6"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ripple
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$912
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="#"
                                                >
                                                   Canceled
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Today">
                                 <div className="table-responsive">
                                    <table className="table shadow-hover card-table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                                                            fill="#FFAB2D"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Bitcoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="#"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12.3181 13.6532C12.1138 13.7348 11.8862 13.7348 11.6819 13.6532L9.48938 12.7761L12 17.7974L14.5107 12.7761L12.3181 13.6532Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 11.9341L15.0155 10.7279L12 5.90306L8.9845 10.7279L12 11.9341Z"
                                                            fill="#DC3CCC"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z"
                                                            fill="#DC3CCC"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ethereum
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$542
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="#"
                                                >
                                                   Pending
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-danger p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M5.13185 13.9043L5.13185 13.9043L5.11515 6.99607C5.11511 6.99224 5.11513 6.98868 5.11517 6.98542M5.13185 13.9043L5.61517 6.99089L5.11517 6.99005C5.11519 6.97692 5.11575 6.96665 5.116 6.96234L5.11608 6.96082C5.11588 6.96411 5.11535 6.97298 5.11519 6.98431C5.11518 6.98468 5.11517 6.98505 5.11517 6.98542M5.13185 13.9043C5.13378 14.6982 5.77881 15.3403 6.57281 15.3384C7.36672 15.3365 8.00877 14.6914 8.00689 13.8975L8.00689 13.8975L7.99856 10.4687M5.13185 13.9043L7.99856 10.4687M5.11517 6.98542C5.11755 6.19684 5.75739 5.55451 6.54875 5.55238C6.55044 5.55236 6.5522 5.55235 6.554 5.55234L6.55606 5.55234L6.57321 5.55239L13.4671 5.56905L13.4658 6.06905L13.4671 5.56905C14.2608 5.57098 14.903 6.21593 14.9011 7.01004C14.8992 7.80394 14.2541 8.44597 13.4602 8.44409L13.4602 8.4441L10.0315 8.43582L23.2141 21.6184C23.7755 22.1798 23.7755 23.0899 23.2141 23.6513C22.6527 24.2127 21.7426 24.2127 21.1812 23.6513L7.99856 10.4687M5.11517 6.98542C5.11516 6.98743 5.11517 6.98943 5.11517 6.99144L7.99856 10.4687M6.5541 5.55237C6.55474 5.55237 6.5554 5.55237 6.55606 5.55238L6.5541 5.55237Z"
                                                         fill="#FF2E2E"
                                                         stroke="#FF2E2E"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM17.8879 10.6801C17.4417 11.0743 16.9263 11.3824 16.3679 11.5885C15.9726 11.7164 15.6111 11.9312 15.3098 12.2174C14.9098 13.1698 15.1554 14.2713 15.9227 14.9637C15.9488 14.9899 15.9734 15.0179 15.9962 15.0474C16.9614 16.2842 16.8633 18.0438 15.7668 19.1657C14.5528 20.3776 12.5865 20.3776 11.3722 19.1657C10.6039 18.2437 10.3528 16.9962 10.7044 15.8486C10.7894 15.1855 10.5626 14.5201 10.0899 14.0471C9.62093 13.5951 8.97064 13.383 8.32532 13.4711C7.17777 13.8222 5.93055 13.5703 5.009 12.8017C3.79553 11.5898 3.79448 9.6238 5.00639 8.41059C5.00717 8.40955 5.00822 8.40876 5.009 8.40798C6.1304 7.31065 7.89083 7.21256 9.12732 8.17857C9.99289 9.03394 11.2752 9.32194 11.9566 8.86339C12.2438 8.56283 12.4588 8.20107 12.5859 7.8053C12.7921 7.24735 13.0997 6.73256 13.4934 6.28682C14.7068 5.07335 16.6739 5.07335 17.8874 6.28656C19.1011 7.50003 19.1011 9.46712 17.8879 10.6806V10.6801Z"
                                                            fill="#2B98D6"
                                                         />
                                                         <path
                                                            d="M14.6784 7.39816C14.4502 7.69123 14.2697 8.01851 14.1441 8.368C13.9151 9.05703 13.4924 9.66563 12.9269 10.1211C11.3324 10.9773 9.36089 10.6462 8.13349 9.31614C7.59153 8.95261 6.86908 9.01592 6.39859 9.4683C5.8676 9.99853 5.86709 10.8591 6.39732 11.3901C6.39783 11.3904 6.39808 11.3909 6.39859 11.3911C6.71872 11.71 7.17465 11.7605 8.1483 11.5823C8.34563 11.5466 8.54577 11.5285 8.74643 11.5285C9.72186 11.5443 10.6549 11.9298 11.3572 12.6068C12.2081 13.4577 12.6027 14.6632 12.4194 15.8526C12.2382 16.8239 12.2887 17.2814 12.6091 17.6023C13.1404 18.1326 14.0007 18.1326 14.5319 17.6023C14.9909 17.1119 15.0363 16.3647 14.6399 15.8224C13.3436 14.5927 13.0316 12.6469 13.8786 11.0736C14.3341 10.5083 14.9426 10.0861 15.6317 9.85787C15.9816 9.73175 16.3092 9.55024 16.602 9.32048C17.1327 8.78948 17.1327 7.92865 16.6017 7.3979C16.0705 6.86715 15.2099 6.86741 14.6792 7.39841L14.6784 7.39816Z"
                                                            fill="#2B98D6"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Ripple
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$912
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="#"
                                                >
                                                   Canceled
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z"
                                                            fill="#5F5F5F"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Litecoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$7,762
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="#"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <span className="bgl-success p-3  d-inline-block">
                                                   <svg
                                                      width={29}
                                                      height={29}
                                                      viewBox="0 0 29 29"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         d="M23.6186 15.7207L23.6186 15.7207L23.6353 22.6289C23.6354 22.6328 23.6354 22.6363 23.6353 22.6396M23.6186 15.7207L23.1353 22.6341L23.6353 22.635C23.6353 22.6481 23.6347 22.6583 23.6345 22.6627L23.6344 22.6642C23.6346 22.6609 23.6351 22.652 23.6353 22.6407C23.6353 22.6403 23.6353 22.64 23.6353 22.6396M23.6186 15.7207C23.6167 14.9268 22.9717 14.2847 22.1777 14.2866C21.3838 14.2885 20.7417 14.9336 20.7436 15.7275L20.7436 15.7275L20.7519 19.1563M23.6186 15.7207L20.7519 19.1563M23.6353 22.6396C23.6329 23.4282 22.9931 24.0705 22.2017 24.0726C22.2 24.0726 22.1983 24.0727 22.1965 24.0727L22.1944 24.0727L22.1773 24.0726L15.2834 24.056L15.2846 23.556L15.2834 24.056C14.4897 24.054 13.8474 23.4091 13.8494 22.615C13.8513 21.8211 14.4964 21.179 15.2903 21.1809L15.2903 21.1809L18.719 21.1892L5.53639 8.0066C4.975 7.44521 4.975 6.53505 5.53639 5.97367C6.09778 5.41228 7.00793 5.41228 7.56932 5.97367L20.7519 19.1563M23.6353 22.6396C23.6353 22.6376 23.6353 22.6356 23.6353 22.6336L20.7519 19.1563M22.1964 24.0726C22.1957 24.0726 22.1951 24.0726 22.1944 24.0726L22.1964 24.0726Z"
                                                         fill="#2BC155"
                                                         stroke="#2BC155"
                                                      />
                                                   </svg>
                                                </span>
                                             </td>
                                             <td>
                                                <div className="font-w600">
                                                   <span className="mr-1">
                                                      <svg
                                                         width={24}
                                                         height={24}
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z"
                                                            fill="#FFAB2D"
                                                         />
                                                         <path
                                                            d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                                                            fill="#FFAB2D"
                                                         />
                                                      </svg>
                                                   </span>
                                                   Bitcoin
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                06:24:45 AM
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/"
                                                >
                                                   Completed
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                           </Tab.Content>
                        </div>
                     </Tab.Container>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
                  <div className="card">
                     <div className="card-header border-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <Dropdown className="dropdown custom-dropdown mb-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn sharp btn-primary tp-btn i-false"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 width="24px"
                                 height="24px"
                                 viewBox="0 0 24 24"
                                 version="1.1"
                              >
                                 <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                 >
                                    <rect x={0} y={0} width={24} height={24} />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={5}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={12}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={19}
                                       r={2}
                                    />
                                 </g>
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 Details
                              </Link>
                              <Link
                                 className="dropdown-item text-danger"
                                 to="/"
                              >
                                 Cancel
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body p-0">
                        <Dropdown className="dropdown custom-dropdown d-block ">
                           <Dropdown.Toggle
                              variant=""
                              as="div"
                              className="btn bgl-light d-flex align-items-center rounded-0 svg-btn i-false"
                           >
                              <svg
                                 width={42}
                                 height={42}
                                 viewBox="0 0 42 42"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M21.5567 23.8931C21.1992 24.0359 20.8009 24.0359 20.4434 23.8931L16.6064 22.3582L21.0001 31.1454L25.3937 22.3582L21.5567 23.8931Z"
                                    fill="#DC3CCC"
                                 />
                                 <path
                                    d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z"
                                    fill="#DC3CCC"
                                 />
                                 <path
                                    d="M20.9999 9.15527e-05C9.40201 9.15527e-05 0 9.4021 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.987 9.40759 32.5923 0.0129089 20.9999 9.15527e-05ZM29.8416 20.171L22.3416 35.171C21.9713 35.9121 21.0699 36.2124 20.3293 35.8421C20.0386 35.697 19.8033 35.4617 19.6582 35.171L12.1582 20.171C11.9252 19.7032 11.9518 19.1479 12.2282 18.7043L19.7282 6.7045C20.2267 6.00229 21.1995 5.83658 21.9017 6.33508C22.045 6.43671 22.17 6.56122 22.2716 6.7045L29.7711 18.7043C30.0481 19.1479 30.0746 19.7032 29.8416 20.171Z"
                                    fill="#DC3CCC"
                                 />
                              </svg>
                              <div className="text-left ml-3">
                                 <span className="d-block fs-16 text-black">
                                    Ethereum
                                 </span>
                              </div>
                              <i className="fa fa-angle-down scale5 ml-auto" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 4 June 2020 - 4 July 2020
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 5 july 2020 - 4 Aug 2020
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                        <div className="table-responsive">
                           <table className="table text-center bg-secondary-hover card-table">
                              <thead>
                                 <tr>
                                    <th className="text-left">Price</th>
                                    <th>Amount</th>
                                    <th className="text-right">Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="text-left">82.3</td>
                                    <td>0.15</td>
                                    <td className="text-right">$134,12</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">83.9</td>
                                    <td>0.18</td>
                                    <td className="text-right">$237,31</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">84.2</td>
                                    <td>0.25</td>
                                    <td className="text-right">$252,58</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">86.2</td>
                                    <td>0.35</td>
                                    <td className="text-right">$126,26</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">91.6</td>
                                    <td>0.75</td>
                                    <td className="text-right">$46,92</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">92.6</td>
                                    <td>0.21</td>
                                    <td className="text-right">$123,27</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">93.9</td>
                                    <td>0.55</td>
                                    <td className="text-right">$212,56</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">94.2</td>
                                    <td>0.18</td>
                                    <td className="text-right">$129,26</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/" className="btn-link">
                           Show more{" "}
                           <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
                  <div className="card">
                     <div className="card-header border-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <Dropdown className="dropdown custom-dropdown mb-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn sharp btn-primary tp-btn i-false"
                              data-toggle="dropdown"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 width="24px"
                                 height="24px"
                                 viewBox="0 0 24 24"
                                 version="1.1"
                              >
                                 <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                 >
                                    <rect x={0} y={0} width={24} height={24} />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={5}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={12}
                                       r={2}
                                    />
                                    <circle
                                       fill="#000000"
                                       cx={12}
                                       cy={19}
                                       r={2}
                                    />
                                 </g>
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 Details
                              </Link>
                              <Link
                                 className="dropdown-item text-danger"
                                 to="/"
                              >
                                 Cancel
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body p-0">
                        <Dropdown className="dropdown custom-dropdown d-block">
                           <Dropdown.Toggle
                              as="div"
                              variant=""
                              className="btn bgl-light d-flex align-items-center rounded-0 svg-btn i-false"
                              data-toggle="dropdown"
                           >
                              <svg
                                 width={43}
                                 height={42}
                                 viewBox="0 0 43 42"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M21.0048 9.15527e-05C9.40689 9.15527e-05 0.00488281 9.4021 0.00488281 21C0.00488281 32.5979 9.40689 41.9999 21.0048 41.9999C32.6027 41.9999 42.0047 32.5979 42.0047 21C41.9914 9.40759 32.5972 0.0133667 21.0048 9.15527e-05ZM31.3086 18.6901C30.5276 19.38 29.6259 19.9192 28.6485 20.2799C27.9568 20.5038 27.3242 20.8796 26.7969 21.3804C26.097 23.0471 26.5268 24.9748 27.8694 26.1865C27.9152 26.2322 27.9582 26.2812 27.998 26.3329C29.6872 28.4973 29.5155 31.5766 27.5966 33.54C25.4721 35.6608 22.0311 35.6608 19.9062 33.54C18.5617 31.9264 18.1223 29.7433 18.7375 27.7351C18.8863 26.5746 18.4894 25.4101 17.6622 24.5825C16.8414 23.7914 15.7034 23.4202 14.5741 23.5745C12.5659 24.1888 10.3833 23.748 8.7706 22.403C6.64703 20.2822 6.6452 16.8417 8.76602 14.7186C8.7674 14.7167 8.76923 14.7154 8.7706 14.714C10.733 12.7937 13.8138 12.622 15.9776 14.3125C17.4924 15.8094 19.7363 16.3134 20.9288 15.511C21.4314 14.985 21.8077 14.3519 22.0302 13.6593C22.3909 12.6829 22.9292 11.782 23.6182 11.002C25.7417 8.87842 29.1841 8.87842 31.3077 11.0015C33.4317 13.1251 33.4317 16.5675 31.3086 18.691V18.6901Z"
                                    fill="#2B98D6"
                                 />
                                 <path
                                    d="M25.7396 13.1205C25.3303 13.646 25.0067 14.2329 24.7815 14.8596C24.3709 16.0951 23.6128 17.1864 22.5989 18.003C19.7397 19.5384 16.2044 18.9446 14.0034 16.5597C13.0316 15.9078 11.7361 16.0214 10.8925 16.8325C9.94033 17.7833 9.93941 19.3264 10.8902 20.2786C10.8911 20.279 10.8916 20.2799 10.8925 20.2804C11.4665 20.8521 12.2841 20.9428 14.03 20.6233C14.3838 20.5592 14.7427 20.5267 15.1025 20.5267C16.8516 20.555 18.5248 21.2463 19.7841 22.4603C21.3098 23.986 22.0175 26.1475 21.6888 28.2803C21.3638 30.0221 21.4545 30.8424 22.029 31.4178C22.9816 32.3686 24.5242 32.3686 25.4768 31.4178C26.2999 30.5384 26.3814 29.1985 25.6705 28.2263C23.3459 26.0212 22.7865 22.5321 24.3054 19.7109C25.1221 18.6974 26.2134 17.9403 27.4489 17.5311C28.0765 17.3049 28.6638 16.9795 29.1888 16.5675C30.1405 15.6153 30.1405 14.0717 29.1884 13.1201C28.2358 12.1684 26.6926 12.1688 25.741 13.121L25.7396 13.1205Z"
                                    fill="#2B98D6"
                                 />
                              </svg>
                              <div className="text-left ml-3">
                                 <span className="d-block fs-16 text-black">
                                    Ripple
                                 </span>
                              </div>
                              <i className="fa fa-angle-down scale5 ml-auto" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 4 June 2020 - 4 July 2020
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 5 july 2020 - 4 Aug 2020
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                        <div className="table-responsive">
                           <table className="table text-center bg-info-hover card-table">
                              <thead>
                                 <tr>
                                    <th className="text-left">Price</th>
                                    <th>Amount</th>
                                    <th className="text-right">Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="text-left">83.9</td>
                                    <td>0.18</td>
                                    <td className="text-right">$237,31</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">82.3</td>
                                    <td>0.15</td>
                                    <td className="text-right">$134,12</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">84.2</td>
                                    <td>0.25</td>
                                    <td className="text-right">$252,58</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">91.6</td>
                                    <td>0.75</td>
                                    <td className="text-right">$46,92</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">94.2</td>
                                    <td>0.18</td>
                                    <td className="text-right">$129,26</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">86.2</td>
                                    <td>0.35</td>
                                    <td className="text-right">$126,26</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">93.9</td>
                                    <td>0.55</td>
                                    <td className="text-right">$212,56</td>
                                 </tr>
                                 <tr>
                                    <td className="text-left">92.6</td>
                                    <td>0.21</td>
                                    <td className="text-right">$123,27</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/" className="btn-link">
                           Show more{" "}
                           <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-8 col-lg-8">
                  <div className="card">
                     <div className="card-header border-0 pb-0 d-block d-md-flex">
                        <div>
                           <h4 className="fs-20 text-black">Quick Trade</h4>
                           <p className="mb-0 fs-13">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn bgl-light d-flex align-items-center rounded-0 svg-btn btn-md i-false"
                              data-toggle="dropdown"
                           >
                              <i className="fa fa-angle-down scale5 mr-3" />
                              <div className="text-left ml-3">
                                 <span className="d-block fs-16 text-black">
                                    561,511 Btc
                                 </span>
                              </div>
                              <svg
                                 className="ml-3"
                                 width={42}
                                 height={42}
                                 viewBox="0 0 42 42"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M28.5001 16.5002C28.4987 14.844 27.1561 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.1561 19.4985 28.4987 18.1559 28.5001 16.5002Z"
                                    fill="#FFAB2D"
                                 />
                                 <path
                                    d="M16.5002 28.5H25.5003C27.157 28.5 28.5001 27.157 28.5001 25.5003C28.5001 23.8432 27.157 22.5001 25.5003 22.5001H16.5002V28.5Z"
                                    fill="#FFAB2D"
                                 />
                                 <path
                                    d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.9865 9.40762 32.5923 0.0133972 20.9999 0.00012207ZM31.5001 25.4998C31.496 28.8122 28.8121 31.4961 25.5002 31.4998V32.9998C25.5002 33.8284 24.8282 34.4999 24.0001 34.4999C23.1715 34.4999 22.5 33.8284 22.5 32.9998V31.4998H19.5003V32.9998C19.5003 33.8284 18.8283 34.4999 18.0002 34.4999C17.1716 34.4999 16.5001 33.8284 16.5001 32.9998V31.4998H12.0003C11.1717 31.4998 10.5002 30.8282 10.5002 30.0001C10.5002 29.1716 11.1717 28.5 12.0003 28.5H13.4999V13.5H12.0003C11.1717 13.5 10.5002 12.8285 10.5002 11.9999C10.5002 11.1714 11.1717 10.4998 12.0003 10.4998H16.5001V9.00021C16.5001 8.17166 17.1716 7.50012 18.0002 7.50012C18.8287 7.50012 19.5003 8.17166 19.5003 9.00021V10.4998H22.5V9.00021C22.5 8.17166 23.1715 7.50012 24.0001 7.50012C24.8286 7.50012 25.5002 8.17166 25.5002 9.00021V10.4998C28.7997 10.4861 31.4859 13.1494 31.5001 16.4489C31.5074 18.1962 30.7498 19.8593 29.4264 21C30.7375 22.128 31.4941 23.77 31.5001 25.4998Z"
                                    fill="#FFAB2D"
                                 />
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 4 June 2020 - 4 July 2020
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 5 july 2020 - 4 Aug 2020
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body">
                        <div className="basic-form">
                           <form>
                              <div className="form-group">
                                 <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text bg-white border rounded-0">
                                          Amount BTC
                                       </span>
                                    </div>
                                    <input
                                       type="number"
                                       className="form-control rounded-0"
                                       placeholder="0,000000"
                                    />
                                 </div>
                              </div>
                              <div className="form-group">
                                 <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text bg-white border  rounded-0">
                                          Price BPL
                                       </span>
                                    </div>
                                    <input
                                       type="number"
                                       className="form-control rounded-0"
                                       placeholder="0,000000"
                                    />
                                 </div>
                              </div>
                              <div className="form-group">
                                 <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text bg-white border rounded-0">
                                          Fee (1%)
                                       </span>
                                    </div>
                                    <input
                                       type="number"
                                       className="form-control rounded-0"
                                       placeholder="0,000000"
                                    />
                                 </div>
                              </div>
                              <div className="form-group">
                                 <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text bg-white border rounded-0">
                                          Total BPL
                                       </span>
                                    </div>
                                    <input
                                       type="number"
                                       className="form-control rounded-0"
                                       placeholder="0,000000"
                                    />
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="card-footer border-0 pt-0">
                        <div className="row align-items-center">
                           <div className="col-md-5">
                              <p className="mb-0 fs-13">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor
                                 incididunt ut
                              </p>
                           </div>
                           <div className="col-md-7 text-left mt-3 mt-sm-0 text-sm-right">
                              <Link
                                 to="/"
                                 className="btn btn-success rounded-0 mb-2"
                              >
                                 BUY
                                 <svg
                                    className="ml-4 scale3"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                       fill="white"
                                       stroke="white"
                                    />
                                 </svg>
                              </Link>
                              <Link
                                 to="/"
                                 className="btn ml-3 btn-danger rounded-0 mb-2"
                              >
                                 SELL
                                 <svg
                                    className="ml-4 scale5"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                       fill="white"
                                       stroke="white"
                                    />
                                 </svg>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12">
                  <div className="card">
                     <div className="card-header d-block d-sm-flex border-0 pb-0">
                        <div>
                           <h4 className="fs-20 text-black">Quick Transfer</h4>
                           <p className="mb-0 fs-13">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn bgl-light d-flex align-items-center rounded-0 svg-btn i-false"
                              data-toggle="dropdown"
                           >
                              <i className="fa fa-angle-down scale5 mr-3" />
                              <div className="text-left ml-3">
                                 <span className="d-block fs-16 text-black">
                                    23,511 Ltc
                                 </span>
                              </div>
                              <svg
                                 className="ml-3"
                                 width={42}
                                 height={42}
                                 viewBox="0 0 42 42"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.9865 9.40762 32.5923 0.0133972 20.9999 0.00012207ZM28.4999 31.5002H16.5001C15.6715 31.5002 15 30.8287 15 30.0001C15 29.9292 15.005 29.8582 15.0151 29.7877L16.144 21.8844L13.8638 22.4548C13.7448 22.485 13.6226 22.5001 13.4999 22.5001C12.6714 22.4992 12.0007 21.8272 12.0012 20.9987C12.0021 20.3111 12.4699 19.7123 13.1369 19.5448L16.6017 18.6787L18.0148 8.78735C18.132 7.96704 18.8919 7.39758 19.7122 7.51477C20.5325 7.63196 21.102 8.39185 20.9848 9.21216L19.7443 17.8932L25.1363 16.5451C25.9387 16.3405 26.7549 16.8252 26.9591 17.6277C27.1637 18.4301 26.6789 19.2463 25.8765 19.451C25.8719 19.4519 25.8673 19.4532 25.8627 19.4542L19.2856 21.0984L18.2286 28.5H28.4999C29.3285 28.5 30 29.1716 30 30.0001C30 30.8282 29.3285 31.5002 28.4999 31.5002Z"
                                    fill="#5F5F5F"
                                 />
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu
                              align="right"
                              className="dropdown-menu dropdown-menu-right"
                           >
                              <Link className="dropdown-item" to="/">
                                 4 June 2020 - 4 July 2020
                              </Link>
                              <Link className="dropdown-item" to="/">
                                 5 july 2020 - 4 Aug 2020
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body">
                        <div className="basic-form">
                           <form>
                              <div className="form-group">
                                 <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text bg-white border rounded-0">
                                          Amount BTC
                                       </span>
                                    </div>
                                    <input
                                       type="number"
                                       className="form-control rounded-0"
                                       placeholder="0,000000"
                                    />
                                 </div>
                              </div>
                           </form>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                           <h4 className="fs-20 text-black mb-0">
                              Recent Contacts
                           </h4>
                           <Link to="/" className="btn btn-link">
                              View more
                           </Link>
                        </div>
                        <div className="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
                           <Contacts />
                        </div>
                     </div>
                     <div className="card-footer border-0 pt-0">
                        <div className="row align-items-center">
                           <div className="col-md-7">
                              <p className="mb-0 fs-14">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor
                                 incididunt ut
                              </p>
                           </div>
                           <div className="col-md-5 text-right">
                              <Link
                                 to="/"
                                 className="btn btn-primary d-block rounded-0 mt-3 mt-md-0"
                              >
                                 TRANSFER NOW
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default Home;