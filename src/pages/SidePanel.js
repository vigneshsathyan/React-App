import { Outlet } from "react-router-dom";
import { PageTopBar } from "../Bars/TopPage";
import { SidebarMain } from "../Bars/SideBar";
import { TopbarMain } from "../Bars/TopBar";



const Layout = () => {
    return (
        <>
            <TopbarMain />
            <div className="content">
                <div className="sidebar"><SidebarMain /></div>
                <div className="content_area">
                    <div className="pagetop"><PageTopBar /></div>
                    <div className="main"><Outlet /></div>
                </div>
            </div>

        </>
    )
};

export default Layout;
