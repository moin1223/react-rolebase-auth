import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    // const { auth } = useAuth();
    const location = useLocation();
    const auth = {"roles":[1], "accessToken":"gzfzG" }
    

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;