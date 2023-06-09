import { useState, useEffect } from "react";
import { useAuth } from "../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export default function PrivateRouter() {
    const [ok, setOk] = useState();
    const [auth, setAuth] = useAuth();
    // console.log(auth);
    useEffect(() => {
        const authCheck = async () => {
            // console.log("hi");
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin-auth`,);
            // console.log(res);
            if (res.data.ok) {
                setOk(true)

            } else {
                setOk(false)
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);
    // console.log(ok);
    return ok ? <Outlet /> : <Spinner />;

} 