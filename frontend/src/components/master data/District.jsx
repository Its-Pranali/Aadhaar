import { useState, useEffect } from "react";
import Main from "../layouts/Main";
import axios from 'axios';
import { FaTrash, FaEdit } from "react-icons/fa";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

function District() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [districts, setDistricts] = useState([]);
    const [formData, setFormData] = useState({
        district: "",
        status: "",
    });

    useEffect(() => {
        fetchDistrict();
    }, []);

    useEffect(() => {
        if (districts.length > 0) {
            // Destroy existing DataTable (important)
            if ($.fn.DataTable.isDataTable("#districtTable")) {
                $("#districtTable").DataTable().destroy();
            }
            // Re-initialize
            $("#districtTable").DataTable({
                order: [[1, "asc"]],
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
    }, [districts]);


    const validator = () => {
        const newErrors = {};
        if (!formData.district.trim()) newErrors.district = "District is required";
        if (!formData.status.trim()) newErrors.status = "Status is required";
        return newErrors;
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

    const handleEdit = (districts) => {
        setFormData({
            district: districts.district,
            status: districts.status,
        });
        setIsEdit(districts.id);
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
                await axios.put(`http://127.0.0.1:8000/api/district/${isEdit}`, formData);
                alert("District updated successfully");
            }
            else {
                await axios.post("http://127.0.0.1:8000/api/district/save", formData);
                alert("District saved successfully");
            }
            setShowModal(false);
            fetchDistrict();
        }
        catch (error) {
            console.error("Error while saving/updating district", error);
        }
    }

    const fetchDistrict = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/district/list");
            setDistricts(res.data.message);
        }
        catch (error) {
            console.error("Error while fetching district");
        }
    }

    const handleDelete = async (id) => {
        const confirmMsg = window.confirm("Are you sure you want to delete District?");
        if (!confirmMsg) {
            return;
        }
        try {
            await axios.delete(`http://127.0.0.1:8000/api/district/${id}`);
            alert("District deleted successfully");
            fetchDistrict();
        }
        catch (errors) {
            console.errors("Error while deleting district", errors);
        }
    }

    const handleReset = () => {
        setFormData({
            district: "",
            status: "",
        });
    }

    const handleAddDistrict = () => {
        setShowModal(true);
        setIsEdit(false);
        handleReset();
    }

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-light mb-0">Districts List </h5>
                            <button className="btn btn-primary btn-sm" onClick={handleAddDistrict}>Add District</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="table-responsive">
                            <table className="custom-table" id="districtTable">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>District</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {districts.map((dist, index) => (
                                        <tr key={index}>
                                            <td></td>
                                            <td>{dist.district}</td>
                                            <td>{dist.status == 1 ? "Active" : "Inactive"}</td>
                                            <td className="d-flex gap-1">
                                                <button className="btn btn-sm btn-primary" type="button" onClick={() => handleEdit(dist)}><FaEdit /></button>
                                                <button className="btn btn-sm btn-danger" type="submit" onClick={() => handleDelete(dist.id)}><FaTrash /></button>
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
                                <h5 className="modal-title">{isEdit ? "Edit District" : "Add District"}</h5>
                                <button className="btn btn-sm btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 my-1">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <input type="text" name="district" id="district" onChange={handleChange} value={formData.district} className={`form-control ${errors.district ? "is-invalid" : ""}`} />
                                        </div>
                                        {errors.district && (
                                            <div className="text-danger small">{errors.district}</div>
                                        )}

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" id="status" onChange={handleChange} value={formData.status} className={`form-control ${errors.status ? "is-invalid" : ""}`}>
                                                <option value="">Select Status</option>
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
                                    <button className="btn btn-muted btn-sm border" type="button" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className="btn btn-primary btn-sm" type="submit">{isEdit ? "Update" : "Save"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Main>
    );
}

export default District;