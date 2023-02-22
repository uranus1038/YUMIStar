import '../yumi_assets/god-main.css'
import { Navigate, useNavigate } from "react-router-dom";
export default function GetStart() {
    // func link herf
    const navigation = useNavigate();

    return (
        <body >
            <nav>
                <div className=" umi-container-full" >
                    <div className='umi-rows umi-justify-center umi-relative' style={{ bottom: -280 }}>
                        <div className="umi-col">
                            <button onClick={() => {
                                navigation("/services");
                            }}
                                className="fw-bolder fs-major btn umi-btn-shiro umi-btn-square ">สร้างแกลเลอรี่ของคุณ</button>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
    )
}

