import { Navigate, useNavigate } from "react-router-dom";
import '../yumi_assets/god-main.css'
export default function GetServices() {
  const navigation = useNavigate();
  return (
    <body >
      <nav>
        <div className=" umi-container-full" >
          <div className='umi-rows umi-justify-center umi-relative' style={{ bottom: -128 }}>
            <div className="umi-col-3 tx-center umi-special-blue-c3 ">
              <button onClick={() => {
                  navigation("/creator");
                }}  className=" fw-bolder fs-major btn umi-btn-shiro umi-btn-square ">Hello</button>
            </div>
            <div className="umi-col-3 tx-center umi-special-blue-c3 ">
              <button className=" fw-bolder fs-major btn umi-btn-shiro umi-btn-square ">Hello</button>
            </div>
          </div>
        </div>
      </nav>
    </body>
  )
}

