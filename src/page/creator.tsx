import { useState } from 'react'
//Add Component
import GetMenu from '../component/creator/getMenu'
import GetTabbar from '../component/creator/tabbar'
GetMenu
GetTabbar
export default function Creator() {
    const [count, setCount] = useState(0)
    return (
        <body>
            <div  className="umi-rows umi-item-start umi-container-full">
                <div className="umi-col vh-100  umi-special-blue-c1">
                    <GetTabbar />
                    <GetMenu />
                </div>
            </div>

        </body>
    )
}

