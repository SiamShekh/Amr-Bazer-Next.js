import Nav from "@/components/Admin/shared/Nav";
import "../globals.css"
import { Teko } from "next/font/google";
const teko = Teko({ subsets: ["latin"] });

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body className={teko.className}>
                <div>
                    <Nav />
                    <div className="bg-gray-200 min-h-screen">
                        {children}
                    </div>
                </div>
            </body>
        </html>

    );
};

export default layout;