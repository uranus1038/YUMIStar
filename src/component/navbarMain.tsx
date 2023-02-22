import { Navigate, useNavigate } from "react-router-dom";
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
export default function NavbarMain() {
  const navigation = useNavigate();
  return (
    <body>
      <nav>
        <div className=" umi-container-full">
          <div className="umi-navbar umi-special-blue-c0">
            <ul className="umi-nav ">
              <div>
                <a onClick={() => {
                  navigation("/");
                }} className="umi-nav-brand f-shiro btn">Brand</a>
              </div>
              <li><a href="#" className="umi-nav-item f-shiro umi-active">เริ่มต้นการใช้งาน</a></li>
            </ul>
            <ul className="umi-nav ">
              <li>
                <div className="umi-nav-item umi-border-shiro f-shiro fs-medium ">
                  <i className="fas fa-globe"></i> ไทย</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  )
}

