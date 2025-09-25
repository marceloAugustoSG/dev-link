
import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    useEffect(() => {
        const onsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }
                localStorage.setItem("@reactlinks", JSON.stringify(userData));
                setLoading(false);
                setSigned(true);
                console.log(user);
            }
            else {
                setLoading(false);
                setSigned(false);
                console.log("Não existe user logado");
            }
        });
        return () => onsub();
    }, [])
    if (loading) {
        return (
            <div></div>
        )
    }
    if (!signed) {
        return <Navigate to="/login" />
    }
    return children
}