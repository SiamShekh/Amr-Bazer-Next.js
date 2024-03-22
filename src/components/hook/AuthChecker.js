import { redirect } from "next/navigation";
import isUserSigned from "./isUserSigned";

const AuthChecker = () => {
    const isUser = isUserSigned();

    if (!isUser?.loading) {
        if (isUser?.user?.uid) {
            redirect('/');
        }
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthChecker;