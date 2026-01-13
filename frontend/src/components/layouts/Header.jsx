import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCog, FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import "../../../public/assets/css/HeaderStyle.css";

function Header({ toggleSidebar, isCollapsed }) {

    const [langOpen, setLangOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); // redirect to login
    };

    return (
        <>
            <section className={`header-sec py-2 bg-muted position-fixed top-0 ${isCollapsed ? "header-full" : "header-with-sidebar"}`} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-link text-light" onClick={toggleSidebar}>
                                <FaBars />
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="" >
                                    <button className="btn btn-sm  text-light"><FaEnvelope /></button>
                                </div>


                                {/* Admin Dropdown */}
                                <div className="dropdown position-relative" onMouseEnter={() => setAdminOpen(true)} onMouseLeave={() => setAdminOpen(false)} >
                                    <button className="btn btn-sm dropdown-toggle text-light">Goverdhan Jangale</button>
                                    {adminOpen && (
                                        <div className="dropdown-menu show position-absolute end-0 profile-dropdown">
                                            <div className="text-center">
                                                <h6 className="mb-0">Goverdhan Jangale</h6>
                                                <p className="mb-2">-Super Admin</p>
                                            </div>
                                            <hr className="my-2" />
                                            <Link className="dropdown-item d-flex gap-2 align-items-center" to="/profile">
                                                <FaUserCircle /> Profile
                                            </Link>
                                            <Link className="dropdown-item d-flex gap-2 align-items-center" to="/profile">
                                                <FaCog /> Account Setting
                                            </Link>
                                            <Link className="dropdown-item text-danger d-flex gap-2 align-items-center" to="/">
                                                <FaSignOutAlt />  Logout
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Header;