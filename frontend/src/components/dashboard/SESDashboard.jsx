import Main from "../layouts/Main";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function SESDashboard() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);

    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--x", `${x}px`);
        target.style.setProperty("--y", `${y}px`);
    };
    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card">
                        <h5 className="text-light mb-0">WCDP - District wise Dashboard</h5>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Ahmednagar</h6>
                        </div>

                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">30</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 23"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 03"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 04"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Akola</h6>
                        </div>

                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">16</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 04"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 01"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 11"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Amravati</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">51</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 47"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 02"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 02"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Aurangabad</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">49</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 25"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 4"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 20"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Beed</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">45</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 27"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 06"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 13"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Bhandara</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">26</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 14"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 00"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 12"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Buldhana</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">14</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 06"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 05"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 13"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Chandrapur</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">46</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 20"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 09"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 17"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Dhule</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">10</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 06"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 01"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 03"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Latur</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">42</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 21"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 05"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 16"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-2">
                    <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                        <div className="d-flex align-items-center gap-3">
                            <FaMapMarkerAlt className=" card-icon card-icon-1 border rounded" />
                            <h6 className="mb-0">Mumbai City</h6>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between align-items-end mb-1" style={{ fontSize: '0.85rem' }}>
                                <span className="text-light opacity-75">Total Machines</span>
                                <span className="fw-bold text-light">15</span>
                            </div>

                            <div className="d-flex w-100 rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="bg-success" style={{ width: '50%' }} title="Active: 05"></div>
                                <div className="bg-danger" style={{ width: '30%' }} title="Inactive: 01"></div>
                                <div className="bg-warning" style={{ width: '20%' }} title="Vacant: 09"></div>
                            </div>

                            <div className="d-flex justify-content-between mt-2" style={{ fontSize: '0.7rem' }}>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Active</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Inactive</span>
                                </div>
                                <div className="text-center">
                                    <span className="opacity-75 d-block">Vacant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Main>
    );
}

export default SESDashboard;