import { useState as State, useEffect as Effect } from "react";
import auth from "../Admin/shared/ConfigFirebase";

export default function isUserSigned() {
    const [user, setUser] = State('');
    const [loading, setLoading] = State(false);

    Effect(() => {
        setLoading(true)
        auth.onAuthStateChanged(function handleAuth(user) {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false)
            }
        });
    }, [user]);

    return { user, loading };
}