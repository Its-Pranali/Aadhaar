import { useState, useEffect } from "react";
import Main from "../layouts/Main";
import { FaClock, FaBolt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import EnrollmentBarChart from "../graphs/EnrollmentBarChart";

function MainDashboard() {
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

            <div className="controller">
                <div className="row">
                    <div className="col-md-3">
                        <div className="content-card spotlight-card card-1 text-light" onMouseMove={handleMouseMove} >
                            <div className="d-flex gap-3">
                                <FaClock className="mt-2 card-icon card-icon-1 border rounded" />
                                <div>
                                    <h6 className="mb-0">Pending</h6>
                                    <p className="mb-0 text-muted">3006</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="content-card spotlight-card card-2 text-light" onMouseMove={handleMouseMove} >
                            <div className="d-flex gap-3">
                                <FaBolt className="mt-2 card-icon card-icon-2 border rounded" />
                                <div>
                                    <h6 className="mb-0">Initiate</h6>
                                    <p className="mb-0 text-muted">230772</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="content-card spotlight-card card-3 text-light" onMouseMove={handleMouseMove} >
                            <div className="d-flex gap-3">
                                <FaCheckCircle className="mt-2 card-icon card-icon-3 border rounded" />
                                <div>
                                    <h6 className="mb-0">Success</h6>
                                    <p className="mb-0 text-muted">230772</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="content-card spotlight-card card-4 text-light" onMouseMove={handleMouseMove} >
                            <div className="d-flex gap-3">
                                <FaTimesCircle className="mt-2 card-icon card-icon-4 border rounded" />
                                <div>
                                    <h6 className="mb-0">Mismatch</h6>
                                    <p className="mb-0 text-muted">230772</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-3">
                    <div className="col-md-6">
                        <EnrollmentBarChart
                            title="Month Wise Enrollments - Jan 2026"
                            data={[
                                { time: "12 AM - 09 AM", enrollments: 24 },
                                { time: "09 AM - 10 AM", enrollments: 496 },
                                { time: "10 AM - 06 PM", enrollments: 1040 },
                                { time: "06 PM - 07 PM", enrollments: 124 },
                                { time: "07 PM - 12 PM", enrollments: 150 },
                            ]}
                        />
                    </div>

                    <div className="col-md-6">
                        <EnrollmentBarChart
                            title={`Date Wise Enrollments - ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                            data={[
                                { time: "12 AM - 09 AM", enrollments: 12 },
                                { time: "09 AM - 10 AM", enrollments: 156 },
                                { time: "10 AM - 06 PM", enrollments: 40 },
                                { time: "06 PM - 07 PM", enrollments: 89 },
                                { time: "07 PM - 12 PM", enrollments: 34 },
                            ]}
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="content-card">
                            <div className="table-responsive">
                                <table className="custom-table">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>New</th>
                                            <th>MUB</th>
                                            <th>DU</th>
                                            <th>BU</th>
                                            <th>Amt</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { type: "Zip File", new: 3, mub: 1, du: 5, bu: 2, amt: 840, total: 11, status: "Pending" },
                                            { type: "Zip File", new: 4, mub: 3, du: 1, bu: 9, amt: 510, total: 17, status: "Pending" },
                                            { type: "Zip File", new: 3, mub: 1, du: 5, bu: 2, amt: 840, total: 11, status: "Pending" },
                                            { type: "Zip File", new: 1, mub: 0, du: 5, bu: 7, amt: 820, total: 12, status: "Pending" },
                                        ].map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.type}</td>
                                                <td>{item.new}</td>
                                                <td>{item.mub}</td>
                                                <td>{item.du}</td>
                                                <td>{item.bu}</td>
                                                <td>{item.amt}</td>
                                                <td>{item.total}</td>
                                                <td><span className="badge rounded bg-warning">{item.status}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default MainDashboard;