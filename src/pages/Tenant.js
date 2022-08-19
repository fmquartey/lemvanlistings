import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Tenant = () => {
    const { setShowNav } = useContext(UserContext);

    useEffect(() => {
        setShowNav(false);
    }, []);

    return (
        <div>
            <h1>Tenant</h1>
        </div>
    );
}
export default Tenant;