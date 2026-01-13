import { useState } from "react";
import Main from "../layouts/Main";

function District() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-card py-2">
                        <div>
                            <h5 className="text-light mb-0">Add District</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default District;