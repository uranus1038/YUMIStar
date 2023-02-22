import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/god-main.css'
export default function NavbarMain() {
  return (
    <body>
      <nav>
        <div className=" umi-container-full">
          <div className="umi-navbar umi-special-blue-c0">
            <ul className="umi-nav ">
              <div>
                <a href="#" className="umi-nav-brand f-shiro">Brand</a>
              </div>
              <li><a href="#" className="umi-nav-item f-shiro umi-active">Get started</a></li>
            </ul>
            <ul className="umi-nav ">
              <li>
                <div className="umi-nav-item umi-border-shiro f-shiro fs-medium ">
                  <i className="fas fa-globe"></i> TH</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  )
}

