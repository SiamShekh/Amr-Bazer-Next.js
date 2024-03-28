"use client";

import { redirect } from "next/navigation";
import isUserSigned from "./isUserSigned";

const AuthChecker = ({ children }) => {
    const isUser = isUserSigned();
    if (isUser?.loaded) {
        if (!isUser?.uid) {
            console.log(isUser?.uid);
            redirect('/');
            return null;
        } else {
            return (
                <div className="">
                    {children}
                </div>
            )
        }
    }

};

export default AuthChecker;