import Main from "../layouts/Main";
import { useEffect, useState } from "react";
import AgenciesSelect from "../common/AgenciesSelect";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function CDPODetails() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [cdpos, setCdpos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState({
        agency: "",
        district: "",
        taluka: "",
        office: "",
        officer_name: "",
        mobile: "",
        cdpo_email: "",
        address: "",
        pincode: "",
        center_id: "",
        station_id: "",
    });

    useEffect(() => {
        fetchCdpo();
    }, []);

    const validator = () => {
        const newErrors = {};
        if (!formData.agency) newErrors.agency = "Agency is required";
        if (!formData.district.trim()) newErrors.district = "District is required";
        if (!formData.taluka.trim()) newErrors.taluka = "Taluka is required";
        if (!formData.office.trim()) newErrors.office = "Office is required";
        if (!formData.officer_name.trim()) newErrors.officer_name = "Officer Name is required";
        if (!formData.mobile?.trim()) {
            newErrors.mobile = "Mobile is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter valid 10-digit mobile number";
        }

        if (!formData.cdpo_email?.trim()) {
            newErrors.cdpo_email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.cdpo_email)) {
            newErrors.cdpo_email = "Enter valid email address";
        }

        if (!formData.address?.trim()) newErrors.address = "Address is required";
        if (!formData.pincode?.trim()) {
            newErrors.pincode = "Pincode is required";
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = "Enter valid 6-digit pincode";
        }
        if (!formData.center_id.trim()) newErrors.center_id = "center id is required";
        if (!formData.station_id.trim()) newErrors.station_id = "station id is required";

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

    const handleEdit = (cdpos) => {
        // console.log("Id "+cdpos.id);
        setFormData({
            id:cdpos.id,
            agency: cdpos.agency,
            district: cdpos.district,
            taluka: cdpos.taluka,
            office: cdpos.office,
            officer_name: cdpos.officer_name,
            mobile: cdpos.mobile,
            cdpo_email: cdpos.cdpo_email,
            address: cdpos.address,
            pincode: cdpos.pincode,
            center_id: cdpos.center_id,
            station_id: cdpos.station_id,
        });
        setIsEdit(cdpos.id);
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
                await axios.put(`http://127.0.0.1:8000/api/cdpo-details/${isEdit}`, formData);
                alert("Data updated successfully");
            }
            else {
                await axios.post('http://127.0.0.1:8000/api/cdpo-details/save', formData);
                alert("Data saved successfully");
            }
            setShowModal(false);
            handleReset();
            setIsEdit(null);
            fetchCdpo();
        }
        catch (error) {
            console.error("Error while saving/updating data", error);
        }
    }

    // const handleDelete = async (id) => {
    //     const confirmMsg = window.confirm("Are you sure you want to delete the data?");
    //     if (!confirmMsg) {
    //         return;
    //     }

    //     try {
    //         await axios.delete(`http://127.0.0.1:8000/api/cdpo-details/${id}`);
    //         alert("Data deleted successfully");
    //     }
    //     catch (error) {
    //         console.error("Error while delete data", error);
    //     }
    // }

    const fetchCdpo = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/cdpo-details/list');
            setCdpos(res.data.message);
        }
        catch (error) {
            console.error("Error while fetching data", error);
        }
    }

    const handleAddCdpo = () => {
        setShowModal(true);
        setIsEdit(false);
        handleReset();
    }

    const handleReset = () => {
        setFormData({
            agency: "",
            district: "",
            taluka: "",
            office: "",
            officer_name: "",
            mobile: "",
            cdpo_email: "",
            address: "",
            pincode: "",
            center_id: "",
            station_id: "",
        });
    }

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-light mb-0">CDPO Details </h5>
                            <button className="btn btn-primary btn-sm" onClick={handleAddCdpo}>Add CDPO</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="scroll-table" style={{ width: '100%', overflowX: 'auto' }}>
                            <table className="custom-table text-nowrap " style={{ minWidth: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>District</th>
                                        <th>Taluka</th>
                                        <th>Office</th>
                                        <th>Officer Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Center Address</th>
                                        <th>Pincode</th>
                                        <th>Center Id</th>
                                        <th>Station Id</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cdpos.map((cdpo) => (
                                        <tr>
                                            <td>{cdpo.id}</td>
                                            <td>{cdpo.district}</td>
                                            <td>{cdpo.taluka}</td>
                                            <td>{cdpo.office}</td>
                                            <td>{cdpo.officer_name}</td>
                                            <td>{cdpo.mobile}</td>
                                            <td>{cdpo.cdpo_email}</td>
                                            <td>{cdpo.address}</td>
                                            <td>{cdpo.pincode}</td>
                                            <td>{cdpo.center_id}</td>
                                            <td>{cdpo.station_id}</td>
                                            <td className="d-flex gap-2">
                                                <button className="btn btn-sm btn-primary" onClick={() => handleEdit(cdpo)}><FaEdit /></button>
                                                {/* <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cdpo.id)}><FaTrash /></button> */}
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
                <div className="modal show fade" style={{ display: 'block', backgroundColor: '#000000ad' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEdit ? "Edit CDPO" : "Add CDPO"}</h5>
                                <button className="btn btn-sm btn-close" onClick={() => setShowModal(false)}></button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 my-1">
                                            <AgenciesSelect name="agency" id="agency" value={formData.agency} onChange={handleChange} />
                                            {errors.agency && (
                                                <div className="text-danger small">{errors.agency}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <input type="text" name="district" id="district" onChange={handleChange} value={formData.district} className={`form-control ${errors.district ? "is-invalid" : ""}`} />
                                            {errors.district && (
                                                <div className="text-danger small">{errors.district}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="taluka" className="form-label">Taluka</label>
                                            <input type="text" name="taluka" id="taluka" onChange={handleChange} value={formData.taluka} className={`form-control ${errors.taluka ? "is-invalid" : ""}`} />
                                            {errors.taluka && (
                                                <div className="text-danger small">{errors.taluka}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="office" className="form-label">Office</label>
                                            <input type="text" name="office" id="office" onChange={handleChange} value={formData.office} className={`form-control ${errors.office ? "is-invalid" : ""}`} />
                                            {errors.office && (
                                                <div className="text-danger small">{errors.office}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="officer_name" className="form-label">Officer Name</label>
                                            <input type="text" name="officer_name" id="officer_name" onChange={handleChange} value={formData.officer_name} className={`form-control ${errors.officer_name ? "is-invalid" : ""}`} />
                                            {errors.officer_name && (
                                                <div className="text-danger small">{errors.officer_name}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="mobile" className="form-label">Mobile No</label>
                                            <input type="tel" name="mobile" id="mobile" onChange={handleChange} value={formData.mobile} className={`form-control ${errors.mobile ? "is-invalid" : ""}`} />
                                            {errors.mobile && (
                                                <div className="text-danger small">{errors.mobile}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="cdpo_email" className="form-label">CDPO Email</label>
                                            <input type="email" name="cdpo_email" id="cdpo_email" onChange={handleChange} value={formData.cdpo_email} className={`form-control ${errors.cdpo_email ? "is-invalid" : ""}`} />
                                            {errors.cdpo_email && (
                                                <div className="text-danger small">{errors.cdpo_email}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" name="address" id="address" onChange={handleChange} value={formData.address} className={`form-control ${errors.address ? "is-invalid" : ""}`} />
                                            {errors.address && (
                                                <div className="text-danger small">{errors.address}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="pincode" className="form-label">Pincode</label>
                                            <input type="text" name="pincode" id="pincode" onChange={handleChange} value={formData.pincode} className={`form-control ${errors.pincode ? "is-invalid" : ""}`} />
                                            {errors.pincode && (
                                                <div className="text-danger small">{errors.pincode}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="center_id" className="form-label">Center Id</label>
                                            <input type="text" name="center_id" id="center_id" onChange={handleChange} value={formData.center_id} className={`form-control ${errors.center_id ? "is-invalid" : ""}`} />
                                            {errors.center_id && (
                                                <div className="text-danger small">{errors.center_id}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4 my-1">
                                            <label htmlFor="station_id" className="form-label">Station Id</label>
                                            <input type="text" name="station_id" id="station_id" onChange={handleChange} value={formData.station_id} className={`form-control ${errors.station_id ? "is-invalid" : ""}`} />
                                            {errors.station_id && (
                                                <div className="text-danger small">{errors.station_id}</div>
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

export default CDPODetails;