import Main from "../layouts/Main";
import { useState } from "react";

function User() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);

    return (
        <Main isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}>
            
        </Main>
    );
}

export default User;