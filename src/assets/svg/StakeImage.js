import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const StakeImage = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G filter="url(#a)">
            <Rect
                width={26}
                height={26}
                x={4}
                y={30}
                fill="#fff"
                rx={13}
                transform="rotate(-90 4 30)"
            />
            <Rect
                width={25}
                height={25}
                x={4.5}
                y={29.5}
                stroke="#14A300"
                rx={12.5}
                transform="rotate(-90 4.5 29.5)"
            />
            <Rect
                width={25}
                height={25}
                x={4.5}
                y={29.5}
                stroke="#000"
                strokeOpacity={0.2}
                rx={12.5}
                transform="rotate(-90 4.5 29.5)"
            />
        </G>
        <Path
            fill="#14A300"
            d="M20.2 17c1.76 0 3.2-1.44 3.2-3.2 0-1.76-1.44-3.2-3.2-3.2a3.21 3.21 0 0 0-3.2 3.2c0 1.76 1.44 3.2 3.2 3.2Zm-.8-4v-1.6H21V13h1.6v1.6H21v1.6h-1.6v-1.6h-1.6V13h1.6Zm-3.2.8c0-1.28.64-2.4 1.6-3.2H17c-3.12 0-5.6.72-5.6 1.6 0 .8 2.08 1.44 4.8 1.6ZM17 21c-3.12 0-5.6-.72-5.6-1.6v2.4c0 .88 2.48 1.6 5.6 1.6 3.12 0 5.6-.72 5.6-1.6v-2.4c0 .88-2.48 1.6-5.6 1.6Zm2.24-3.36c-.72.08-1.52.16-2.24.16-3.12 0-5.6-.72-5.6-1.6v2.4c0 .88 2.48 1.6 5.6 1.6 3.12 0 5.6-.72 5.6-1.6V17c-.72.56-1.52.8-2.4.8-.32 0-.64-.08-.96-.16ZM17 17h.8c-.8-.56-1.36-1.44-1.52-2.4-2.72-.08-4.88-.8-4.88-1.6v2.4c0 .88 2.48 1.6 5.6 1.6Z"
        />
        <Defs></Defs>
    </Svg>
)
export default StakeImage
