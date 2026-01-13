import { useState } from "react";
import Main from "./layouts/Main";
import { FaEdit, FaUser } from "react-icons/fa";



function Profile() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState("My Profile");
    const [isPersonalEditing, setIsPersonalEditing] = useState(false);
    const [isAddressEditing, setIsAddressEditing] = useState(false);
    const [isLoginEditing, setIsLoginEditing] = useState(false);
    const [summaryTab, setSummaryTab] = useState("Monthwise");

    const toggleSidebar = () => setIsCollapsed((prev) => !prev);

    const tabs = [
        "My Profile",
        "Login Details",
        "Change Password",
        "Summary Reports"
    ];

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="container">
                <div className="row text-light">
                    <div className="content-card">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-group">
                                    {tabs.map((tab) => (
                                        <li
                                            key={tab}
                                            className={`list-group-item cursor-pointer text-dark ${activeTab === tab ? "active" : ""}`}
                                            onClick={() => setActiveTab(tab)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {tab}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-9">
                                {activeTab === "My Profile" && (
                                    <>
                                        <h5>My Profile</h5>
                                        <div className="content-card">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex gap-3 align-items-center">
                                                    {/* <img src="../../public/assets/images/Govardhan_Jangale27-04-2323-02-21-51.jpeg" alt="" className="rounded-circle user-img" /> */}
                                                    <FaUser className="rounded-circle user-icon" />
                                                    <div>
                                                        <h5 className="mb-0">Govardhan Jangale </h5>
                                                        <p className="text-muted">SuperAdmin</p>
                                                    </div>
                                                </div>
                                                {/* <FaEdit className="border rounded p-1" style={{ fontSize: "25px" }} /> */}
                                            </div>
                                        </div>

                                        <div className="content-card mt-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="">Personal Information </h5>
                                                <FaEdit
                                                    className="border rounded p-1 cursor-pointer"
                                                    style={{ fontSize: "25px", cursor: "pointer" }}
                                                    onClick={() => setIsPersonalEditing(!isPersonalEditing)}
                                                    role="button"
                                                />
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="full_name">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="full_name"
                                                        id="full_name"
                                                        className={isPersonalEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="Govardhan Jangale"
                                                        readOnly={!isPersonalEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="mobile_no">Mobile Number</label>
                                                    <input
                                                        type="tel"
                                                        name="mobile_no"
                                                        id="mobile_no"
                                                        className={isPersonalEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="+91 9876543210"
                                                        readOnly={!isPersonalEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className={isPersonalEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="admin@example.com"
                                                        readOnly={!isPersonalEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="aadhaar_no">Aadhaar No</label>
                                                    <input
                                                        type="text"
                                                        name="aadhaar_no"
                                                        id="aadhaar_no"
                                                        className={isPersonalEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="1234 5678 9012"
                                                        readOnly={!isPersonalEditing}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-card mt-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="">Address </h5>
                                                <FaEdit
                                                    className="border rounded p-1 cursor-pointer"
                                                    style={{ fontSize: "25px", cursor: "pointer" }}
                                                    onClick={() => setIsAddressEditing(!isAddressEditing)}
                                                    role="button"
                                                />
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="address">Address</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        className={isAddressEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="123, Main Street"
                                                        readOnly={!isAddressEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="city">City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        className={isAddressEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="Pune"
                                                        readOnly={!isAddressEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="district">District</label>
                                                    <input
                                                        type="text"
                                                        name="district"
                                                        id="district"
                                                        className={isAddressEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="Pune"
                                                        readOnly={!isAddressEditing}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="pincode">Pincode</label>
                                                    <input
                                                        type="text"
                                                        name="pincode"
                                                        id="pincode"
                                                        className={isAddressEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                        defaultValue="411001"
                                                        readOnly={!isAddressEditing}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {activeTab === "Login Details" && (
                                    <div className="content-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>Login Details</h5>
                                            <FaEdit
                                                className="border rounded p-1 cursor-pointer"
                                                style={{ fontSize: "25px", cursor: "pointer" }}
                                                onClick={() => setIsLoginEditing(!isLoginEditing)}
                                                role="button"
                                            />
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="address">Username</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="address"
                                                    className={isLoginEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                    defaultValue="8007803727"
                                                    readOnly={!isLoginEditing}
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="city">Password</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className={isLoginEditing ? "form-control" : "form-control-plaintext text-muted"}
                                                    defaultValue="3248e8509098e9ee1c338fee7a828e9b"
                                                    readOnly={!isLoginEditing}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "Change Password" && (
                                    <>
                                        <h5>Change Password</h5>
                                        <div className="content-card">

                                            <div className="row">
                                                <div className="col-md-12 mb-2">
                                                    <label>Current Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label>New Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label>Re-enter Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary">Update Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )}
                                {activeTab === "Summary Reports" && (
                                    <>
                                        <h5>Summary Reports</h5>
                                        <div className="content-card">

                                            <div className="d-flex gap-4  border-bottom">
                                                <p
                                                    className={`mb-2 cursor-pointer ${summaryTab === "Monthwise" ? "text-primary fw-bold border-bottom border-primary border-2 pb-1" : "text-secondary"}`}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setSummaryTab("Monthwise")}
                                                >
                                                    Monthwise
                                                </p>
                                                <p
                                                    className={`mb-2 cursor-pointer ${summaryTab === "Daily" ? "text-primary fw-bold border-bottom border-primary border-2 pb-1" : "text-secondary"}`}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setSummaryTab("Daily")}
                                                >
                                                    Daily
                                                </p>
                                            </div>
                                            <div className="mt-3">
                                                {summaryTab === "Monthwise" && (
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h6>WCDP Summary Report :</h6>
                                                            <p>Total Machines: <span className="text-muted">778</span></p>
                                                            <p>Active Machines: <span className="text-muted">124</span></p>
                                                            <p>Inactive Machines: <span className="text-muted">12</span></p>
                                                            <p>Vacant Machines: <span className="text-muted">215</span></p>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <h6>SES Summary Report :</h6>
                                                            <p>Total Machines: <span className="text-muted">778</span></p>
                                                            <p>Active Machines: <span className="text-muted">124</span></p>
                                                            <p>Inactive Machines: <span className="text-muted">12</span></p>
                                                            <p>Vacant Machines: <span className="text-muted">215</span></p>
                                                        </div>
                                                    </div>
                                                )}
                                                {summaryTab === "Daily" && (
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h6>WCDP Summary Report :</h6>
                                                            <p>Total Machines: <span className="text-muted">522</span></p>
                                                            <p>Active Machines: <span className="text-muted">110</span></p>
                                                            <p>Inactive Machines: <span className="text-muted">38</span></p>
                                                            <p>Vacant Machines: <span className="text-muted">100</span></p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Profile;