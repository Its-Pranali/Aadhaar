import { useState } from "react";
import Main from "../layouts/Main";

function District() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        district: "",
        status: "",
    });

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

    const handleAddDistrict = () => {
        setShowModal(true);
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
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>District</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

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
                                <h5 className="modal-title">Add District</h5>
                                <button className="btn btn-sm btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form action="">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 my-1">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <input type="text" name="district" id="district" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" id="status" className="form-control">
                                                <option value="">Select Status</option>
                                                <option value="1">Active</option>
                                                <option value="2">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-muted btn-sm" type="button">Cancel</button>
                                    <button className="btn btn-primary btn-sm" type="submit">Save</button>
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