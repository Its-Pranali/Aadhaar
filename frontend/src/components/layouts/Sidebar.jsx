
import { FaUserCircle, FaTh, FaFolderOpen, FaChevronRight, FaChevronDown, FaUserTie, FaPiggyBank, FaExchangeAlt, FaClock, FaFileAlt, FaUser, FaBriefcase, FaUpload, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../../public/assets/css/HeaderStyle.css";

function Sidebar({ isCollapsed }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu)); // toggle open/close
    };

    return (
        <aside className="sidebar position-fixed h-100 top-0 start-0 border-end overflow-y-scroll" style={{ width: isCollapsed ? "80px" : "250px", zIndex: 998 }}>
            <h6 className={`text-center user-name-text mb-0 ${isCollapsed ? "uname-text" : ""}`} style={{ padding: "17px 0px" }}>{isCollapsed ? "S" : "Super Admin"}</h6>
            <hr className="m-0" />
            <ul className="list-unstyled mt-5">
                <li className="mb-2 p-2 pt-4 nav-link">
                    <Link to="/profile" className={`d-flex align-items-center text-decoration-none rounded gap-3 ${isCollapsed ? "justify-content-center" : ""}`}>
                        <FaUserCircle className="text-light" />
                        {!isCollapsed && <span className="text-light">Profile</span>}
                    </Link>
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "dashboard" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("dashboard")}
                    >
                        <FaTh className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Dashboard
                                {openDropdown === "dashboard" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "dashboard" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/main-dashboard" className="text-decoration-none text-light">
                                    Main Dashboard
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/center-details" className="text-decoration-none text-light">
                                    Center Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/wcdp-dashboard" className="text-decoration-none text-light">
                                    WCDP Dashboard
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/ses-dashboard" className="text-decoration-none text-light">
                                    SES Dashboard
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "master" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("master")}
                    >
                        <FaFolderOpen className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Master Data
                                {openDropdown === "master" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "master" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/cdpo-details" className="text-decoration-none text-light">
                                    CDPO Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    District With Code
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Add Taluka
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Master User
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/bank" className="text-decoration-none text-light">
                                    Dstrict Co-Ordinator
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/branch" className="text-decoration-none text-light">
                                    Master Vendors
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/organization" className="text-decoration-none text-light"  >
                                    Inactive Machin Reports
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/designation" className="text-decoration-none text-light">
                                    DeActive - Coordinator
                                </Link>
                            </li>

                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/modules" className="text-decoration-none text-light">
                                    Daily enrollment File
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "operator" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("operator")}
                    >
                        <FaUserTie className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Operator Data
                                {openDropdown === "operator" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "operator" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Operators
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    De-Active Operator
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    All Operator
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Upload Op. With Distcode
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/bank" className="text-decoration-none text-light">
                                    Op. KYC Details New
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/branch" className="text-decoration-none text-light">
                                    Op. KYC Details View
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/organization" className="text-decoration-none text-light"  >
                                    Op. Agreement Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/designation" className="text-decoration-none text-light">
                                    Op.Verifyed Agreement
                                </Link>
                            </li>

                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/modules" className="text-decoration-none text-light">
                                    Op. Kit Details
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "operator-bank" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("operator-bank")}
                    >
                        <FaPiggyBank className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Operator Bank Data
                                {openDropdown === "operator-bank" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "operator-bank" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    User Bank Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Veriyed Bank Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Suspence Bank details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    User Bank Details All
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "edi-data" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("edi-data")}
                    >
                        <FaExchangeAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                EDI Data Reports
                                {openDropdown === "edi-data" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "edi-data" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    New Enrollment EID 0 - 5
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    New Enrollment EID > 5
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    MBU Enrollment EID 5-7
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    MBU Enrollment EID 15-17
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Biometric enrollment EID
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Demographic enrollment EID
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Update Enroll Repoert
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Enroll Final Count
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    EID notional  Count
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Final Count
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Not Avail User
                                </Link>
                            </li>


                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "penalty" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("penalty")}
                    >
                        <FaClock className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                DQDR Penalty Status
                                {openDropdown === "penalty" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "penalty" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Add Penalty Amount
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Add Penalty Percentage
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Error Enrollment Data
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Update  status
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    EDI and DQDR Final Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Monthwise Count
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Penalty Result
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "enrollment-report" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("enrollment-report")}
                    >
                        <FaFileAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Enrollments Reports
                                {openDropdown === "enrollment-report" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "enrollment-report" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Daily Upload Enroll Reports(Time Wise)
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Operator Payment Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Operator Status Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    MIS Summary Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    MBU Summary Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Report Not Uploaded - Verify by excel file
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Not Avail User In Our Database - Verify by excel file
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Check Uploaded Count
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "op-document" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("op-document")}
                    >
                        <FaUser className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Op.Document Reports
                                {openDropdown === "op-document" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "op-document" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Agreement Document Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Kyc Document Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Deposite Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Deposite Not Report
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "opratorwise" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("opratorwise")}
                    >
                        <FaBriefcase className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Operatorwise Report
                                {openDropdown === "opratorwise" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "opratorwise" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Op. Upload Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Op. Payment Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Op. Remain packet
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    All Op. Remain packet
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Op. Duplicate Record
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Excel for Last Day uploded Count
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Unobtainable Amount
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Unobtainable Amount Report
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/village" className="text-decoration-none text-light">
                                    Dist Wise Remain packet
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "aadhar-uploads" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("aadhar-uploads")}
                    >
                        <FaUpload className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Aadhaar Uploads
                                {openDropdown === "aadhar-uploads" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "aadhar-uploads" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Upload File
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Add Manual Entry
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Aadhaar Uploaded Reports
                                </Link>
                            </li>

                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "payment-status" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("payment-status")}
                    >
                        <FaMoneyBillAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Payment Status
                                {openDropdown === "payment-status" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "payment-status" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Initiate Payment
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Success Payment
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Mismatch Payment
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Add Cash Bulk Entry
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/taluka" className="text-decoration-none text-light">
                                    Verify payment By System
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "report-upload" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("report-upload")}
                    >
                        <FaMoneyBillAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Daily Report Upload
                                {openDropdown === "report-upload" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "report-upload" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Daily Report Uploaded Users
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Daily Report Not Uploaded Users
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "deposite-details" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("deposite-details")}
                    >
                        <FaMoneyBillAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Deposite Details
                                {openDropdown === "deposite-details" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "deposite-details" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Deposite Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Verifyed Deposite
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Suspence Deposit Detail
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Refund Deposit Detail
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Deposite Not Added User
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <div
                        className={`d-flex align-items-center p-2 rounded sidebar-item nav-link ${isCollapsed ? "justify-content-center" : ""} ${openDropdown === "corruption" ? "bg-new text-white" : "text-light"
                            }`}
                        style={{
                            cursor: "pointer",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handleToggle("corruption")}
                    >
                        <FaMoneyBillAlt className="fs-5" />
                        {!isCollapsed && (
                            <span className="ms-3 d-flex justify-content-between align-items-center w-100">
                                Corruption Details
                                {openDropdown === "corruption" ? (
                                    <FaChevronDown className="small" />
                                ) : (
                                    <FaChevronRight className="small" />
                                )}
                            </span>
                        )}
                    </div>

                    {!isCollapsed && openDropdown === "corruption" && (
                        <ul className="list-unstyled mt-1 rounded py-1" style={{ backgroundColor: "#ffffff1a", margin: "0px 7px" }} >
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/district" className="text-decoration-none text-light">
                                    Corruption Details
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Corruption Verify
                                </Link>
                            </li>
                            <li className="py-2 ps-4 m-1 rounded hover-bg">
                                <Link to="/role" className="text-decoration-none text-light">
                                    Corruption Verifyed
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;