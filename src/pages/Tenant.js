import {
    Box,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TenantSideBar from "../components/tenant/Sidebar";
import TenantPages from "../components/tenant/Pages";
import TenantDrawer from "../components/tenant/TenantDrawer";


const Tenant = () => {
    const { setShowNav } = useContext(UserContext);

    useEffect(() => {
        setShowNav(false);
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                position: "fixed",
            }}>
            
            <TenantDrawer />
            <TenantSideBar />
            <TenantPages />
        </Box>
    );
}
export default Tenant;