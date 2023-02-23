import '../../yumi_assets/umi-god-main.css'
import { Navigate, useNavigate } from "react-router-dom";
export default function GetMenu() {
    // func link herf
    const navigation = useNavigate();
    return (
        <body >
            <div className='umi-special-blue-c1'><h2 className="f-shiro tx-center ">หน้าแรก</h2></div>
            <div className="umi-rows p-5 umi-special-blue-c1">
                <div className="umi-col-3 tx-center umi-rounded-3 umi-border-0 umi-border-shiro umi-special-blue-c2">
                    <div className="umi-rows ">
                        <div className="umi-col-2 p-3 ">
                            <button className="btn  fs-major ">
                                asd
                            </button>
                        </div>
                        <div className="umi-col-2">
                            asd
                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}

