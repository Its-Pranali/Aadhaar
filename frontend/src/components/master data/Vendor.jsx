import Main from "../layouts/Main";
import { useState } from "react";

function Vendor() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        vandor_name: "",
        vendor_mobile: "",
        vandor_email: "",
        vandor_address: "",
        status: "",
    });

    const handleAddVendor = () => {
        setShowModal(true);
    }

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-light mb-0">Vendor List </h5>
                            <button className="btn btn-primary btn-sm" onClick={handleAddVendor}>Add Vendor</button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: '#000000ad' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Vendor</h5>
                                <button className="btn btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form action="">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12 my-1">
                                            <label htmlFor="vandor_name" className="form-label">Vendor Name</label>
                                            <input type="text" name="vandor_name" id="vandor_name" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="vandor_mobile" className="form-label">Vendor Mobile</label>
                                            <input type="text" name="vandor_mobile" id="vandor_mobile" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="vandor_email" className="form-label">Vendor Email</label>
                                            <input type="text" name="vandor_email" id="vandor_email" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="vandor_address" className="form-label">Vendor Address</label>
                                            <input type="text" name="vandor_address" id="vandor_address" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="vandor_address" className="form-label">Email </label>
                                            <input type="text" name="vandor_address" id="vandor_address" className="form-control" />
                                        </div>

                                        <div className="col-md-12 my-1">
                                            <label htmlFor="status" className="form-label">Email </label>
                                            <input type="text" name="vandor_address" id="vandor_address" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-sm btn-muted border" onClick={() => setShowModal(false)} type="button">Cancel</button>
                                    <button className="btn btn-sm btn-primary" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Main>
    );
}
export default Vendor;