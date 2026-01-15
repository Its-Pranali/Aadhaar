import Main from "../layouts/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

function Taluka() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [districts, setDistricts] = useState([]);
    const [talukas, setTalukas] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState({
        district: "",
        taluka: "",
        status: "",
    });

    useEffect(() => {
        fetchDistrict();
        fetchTaluka();
    }, []);

    useEffect(() => {
        if (talukas.length > 0) {
            if ($.fn.DataTable.isDataTable("#talukasTable")) {
                $("#talukasTable").DataTable().destroy();
            }
            $("#talukasTable").DataTable({
                order: [[1, 'asc']],
                pageLength: 10,
                lengthChange: true,
                searching: true,
                ordering: true,
                destroy: true,
                drawCallback: function () {
                    const api = this.api();
                    api.column(0, { page: "current" }).nodes().each((cell, i) => {
                        cell.innerHTML = i + 1;
                    });
                }
            });
        }
    }, [talukas]);

    const validator = () => {
        const newErrors = {};
        if (!formData.district) newErrors.district = "District is required";
        if (!formData.taluka.trim()) newErrors.taluka = "Taluka is required";
        if (!formData.status.trim()) newErrors.status = "Status is required";
        return newErrors;
    }

    const fetchDistrict = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/taluka/getDistrict", formData);
            setDistricts(res.data.message);
        }
        catch (error) {
            console.error("Error while fetching district", error);
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    }

    const handleEdit = (tal) => {
        setFormData({
            district: tal.district_id,      // ✅ MATCHES <option value>
            taluka: tal.taluka,
            status: tal.status.toString(),
        });
        setIsEdit(tal.id);
        setShowModal(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validator();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            if (isEdit) {
                await axios.put(`http://127.0.0.1:8000/api/taluka/${isEdit}`, formData);
                alert("Taluka updated successfully");
            }
            else {
                await axios.post("http://127.0.0.1:8000/api/taluka/save", formData);
                alert("Taluka saved successfully");
            }
            setShowModal(false);
            fetchTaluka();
            handleReset();
        }
        catch (error) {
            console.error("Error while saving/updating taluka", error);
        }
    }

    const fetchTaluka = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/taluka/list", formData);
            setTalukas(res.data.message);
        }
        catch (error) {
            console.error("Error while fetching taluka", error);
        }
    }

    const handleDelete = async (id) => {
        const confirmMsg = window.confirm("Are you sure you want to delete taluka?");
        if (!confirmMsg) {
            return;
        }
        try {
            await axios.delete(`http://127.0.0.1:8000/api/taluka/${id}`);
            alert("Taluka deleted successfully");
            fetchTaluka();
        }
        catch (error) {
            console.error("Error while deleting taluka", error);
        }
    }

    const handleAddTaluka = () => {
        setShowModal(true);
        setIsEdit(false);
        handleReset();
    }

    const handleReset = () => {
        setFormData({
            district: "",
            taluka: "",
            status: "",
        });
    }

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-light mb-0">Taluka List </h5>
                            <button className="btn btn-primary btn-sm" onClick={handleAddTaluka}>Add Taluka</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="table-responsive">
                            <table className="custom-table" id="talukasTable">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        {/* <th>District Id</th> */}
                                        <th>District</th>
                                        {/* <th>Taluka Id</th> */}
                                        <th>Taluka</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {talukas.map((tal, index) => (
                                        <tr key={index}>
                                            <td></td>
                                            {/* <td>{tal.district}</td> */}
                                            <td>{tal.district_name}</td>
                                            {/* <td>{tal.id}</td> */}
                                            <td>{tal.taluka}</td>
                                            <td>{tal.status == 1 ? "Active" : "Inactive"}</td>
                                            <td className="d-flex gap-1">
                                                <button className="btn btn-sm btn-primary" onClick={() => handleEdit(tal)}><FaEdit /></button>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(tal.id)}><FaTrash /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: '#000000ad' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEdit ? "Edit Taluka" : "Add Taluka"}</h5>
                                <button className="btn-close btn-sm" onClick={() => setShowModal(false)}></button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 py-1">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <select name="district" id="district" onChange={handleChange} value={formData.district} className={`form-control ${errors.district ? "is-invalid" : ""}`}>
                                                <option value="">Select District</option>
                                                {districts.map((dist, index) => (
                                                    <option key={index} value={dist.id}>{dist.district}</option>
                                                ))}
                                            </select>
                                            {errors.district && (
                                                <div className="text-danger small">{errors.district}</div>
                                            )}
                                        </div>

                                        <div className="col-md-12 py-1">
                                            <label htmlFor="taluka" className="form-label">Taluka</label>
                                            <input type="text" name="taluka" id="taluka" onChange={handleChange} value={formData.taluka} className={`form-control ${errors.taluka ? "is-invalid" : ""}`} />
                                            {errors.taluka && (
                                                <div className="text-danger small">{errors.taluka}</div>
                                            )}
                                        </div>

                                        <div className="col-md-12 py-1">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" id="status" onChange={handleChange} value={formData.status} className={`form-control ${errors.status ? "is-invalid" : ""}`}>
                                                <option value="">Select status</option>
                                                <option value="1">Active</option>
                                                <option value="2">Inactive</option>
                                            </select>
                                            {errors.status && (
                                                <div className="text-danger small">{errors.status}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-sm btn-muted border" type="button" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className="btn btn-sm btn-primary" type="submit">{isEdit ? "Update" : "Save"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Main>
    );
}

export default Taluka;