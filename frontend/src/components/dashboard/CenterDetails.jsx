import Main from "../layouts/Main";
import { useState, useEffect } from "react";
import AgenciesSelect from "../common/AgenciesSelect";
import DistrictSelect from "../common/DistrictSelect";
import TalukaSelect from "../common/TalukaSelect";
import StatusSelect from "../common/StatusSelect";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function CenterDetails() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    const [showCenterModal, setShowCenterModal] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [centers, setCenters] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        agency: "",
        state: "",
        district: "",
        taluka: "",
        center_code: "",
        status: "",
        allocate_status: "",
    });

    useEffect(() => {
        fetchCenters();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "district" ? { taluka: "" } : {}) // reset taluka
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };
    const validator = () => {
        const newErrors = {};
        if (!formData.agency.trim()) newErrors.agency = "agency is required";
        if (!formData.state.trim()) newErrors.state = "state is required";
        if (!formData.district.trim()) newErrors.district = "district is required";
        if (!formData.taluka.trim()) newErrors.taluka = "taluka is required";
        if (!formData.center_code.trim()) newErrors.center_code = "center_code is required";
        if (!formData.status.trim()) newErrors.status = "status is required";
        if (!formData.allocate_status.trim()) newErrors.allocate_status = "allocate_status is required";
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validator();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await axios.post("http://127.0.0.1:8000/api/center-details/save", formData);
            alert("Center saved successfully");
            setShowCenterModal(false);
            fetchCenters();
        }
        catch (error) {
            console.error("Error while saving center", error);
        }
    }

    const fetchCenters = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/center-details/list');
            setCenters(res.data.message);
        }
        catch (error) {
            console.error("Error while fetching centers", errors);
        }
    }

    const handleAddCenterDetails = () => {
        setShowCenterModal(true);
    }

    const handleAddUpload = () => {
        setShowUploadModal(true);
    }




    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-light mb-0">Center Details </h5>
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary" onClick={handleAddCenterDetails}>Add Center Details</button>
                                <button className="btn btn-muted border text-light" onClick={handleAddUpload}>Upload Excel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="content-card">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Agency</th>
                                    <th>District</th>
                                    <th>Taluka</th>
                                    <th>Center Code </th>
                                    <th>Status</th>
                                    <th>Status Allocated</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {centers.map((cent, index) => (
                                    <tr>
                                        <td>{cent.agency}</td>
                                        <td>{cent.district}</td>
                                        <td>{cent.taluka}</td>
                                        <td>{cent.center_code}</td>
                                        <td>{cent.status == 1 ? "Active" : "Inactive"}</td>
                                        <td>{cent.allocate_status == 1 ? "Allocated" : "un-Allocated"}</td>
                                        <td className="d-flex gap-2">
                                            <button className="btn btn-sm btn-primary"><FaEdit /></button>
                                            <button className="btn btn-sm btn-danger"><FaTrash /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showCenterModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: '#000000ad' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Center Details</h5>
                                <button className="btn-close" onClick={() => setShowCenterModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-4 my-1">
                                            <AgenciesSelect name="agency" id="agency" value={formData.agency} onChange={handleChange} />
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="state" className="form-label">Select State</label>
                                            <select name="state" id="state" className="form-control" onChange={handleChange}>
                                                <option value="">Select State</option>
                                                <option value="1">Maharashtra</option>
                                                {/* <option value="2">School & Education Department</option> */}
                                            </select>
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <DistrictSelect value={formData.district} name="district" id="district" onChange={handleChange} />
                                        </div>


                                        <div className="col-md-4 my-1">
                                            <TalukaSelect districtId={formData.district} name="taluka" id="taluka" value={formData.taluka} onChange={handleChange} />

                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="center_code" className="form-label">Center Code</label>
                                            <input type="text" name="center_code" id="center_code" onChange={handleChange} className="form-control" />
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <StatusSelect value={formData.status} name="status" id="status" onChange={handleChange} />
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="allocate_status" className="form-label">Allocate Status</label>
                                            <select name="allocate_status" id="allocate_status" onChange={handleChange} className="form-control">
                                                <option value="">Select Status</option>
                                                <option value="1">Allocated</option>
                                                <option value="2">un-Allocated</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-muted border" type="button" onClick={() => setShowCenterModal(false)}>Cancel</button>
                                    <button className="btn btn-primary" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {showUploadModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: '#000000ad' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Upload Excel</h5>
                                <button className="btn-close" onClick={() => setShowUploadModal(false)}></button>
                            </div>
                            <form action="">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 my-1">
                                            <label htmlFor="agency" className="form-label">Select Agency</label>
                                            <select name="agency" id="agency" className="form-control">
                                                <option value="">Select agency</option>
                                                <option value="1">Women & Child Development Department</option>
                                                <option value="2">School & Education Department</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="state" className="form-label">Upload Excel</label>
                                            <input type="file" id="excel" name="excel" className="form-control" accept=".xls,.xlsx" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-muted border" type="button" onClick={() => setShowUploadModal(false)}>Cancel</button>
                                    <button className="btn btn-primary" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Main>
    );
}

export default CenterDetails;