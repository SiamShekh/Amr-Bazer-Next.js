"use client";

import { useState as State, useEffect as Effect } from "react";
import auth from "../Admin/shared/ConfigFirebase";

export default function isUserSigned() {
    const [user, setUser] = State('');
    const [loaded, setLoaded] = State(false);
    const [uid, setUID] = State('');
    const [token, setToken] = State('');

    Effect(() => {
        setLoaded(false)
        auth.onAuthStateChanged(function handleAuth(user) {
            if (user?.uid) {
                setUser(user);
                setUID(user?.uid);
                setToken(user?.accessToken);
                setLoaded(true);
            } else {
                setUser('');
                setUID('');
                setToken('');
                setLoaded(true);
            }
        });
    }, [user]);

    return { user, loaded, uid, token };
}