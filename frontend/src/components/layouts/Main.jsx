import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../../public/assets/css/MainStyle.css";

function Main({ isCollapsed, toggleSidebar, children }) {

    return (
        <div className="d-flex" style={{ color: '#99a1af' }}>
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <Sidebar isCollapsed={isCollapsed} />
            <div className="flex-grow-1" style={{ marginLeft: isCollapsed ? "80px" : "250px", transition: "margin-left 0.3s ease", minWidth: 0 }} >
                <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
                <main className="p-4 mt-5" >{children}</main>
            </div>
        </div>
    );
}

export default Main;