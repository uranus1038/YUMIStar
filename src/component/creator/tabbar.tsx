import '../../yumi_assets/god-main.css'
import { Navigate, useNavigate } from "react-router-dom";
export default function GetTabbar() {
    // func link herf
    const navigation = useNavigate();
    return (
        <body >
            <div className="umi-rows">
                <div className="umi-col">
                    <button className="btn umi-btn-shiro">tab1</button>
                </div>
                <div className="umi-col">
                    <button className="btn umi-btn-shiro">tab1</button>
                </div>
            </div>

        </body>
    )
}

