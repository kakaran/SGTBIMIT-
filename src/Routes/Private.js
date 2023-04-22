import { useState, useEffect } from "react";
import { useAuth } from "../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRouter() {
    const [ok, setOk] = useState();
    const [auth, setAuth] = useAuth();
    console.log(auth);
    useEffect(() => {
        const authCheck = async () => {
            // console.log("hi");
            const res = await axios.get("http://localhost:5000/admin-auth",);
            console.log(res);
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);
    console.log(ok);
    return ok ? <Outlet /> : 'Spinner';
}