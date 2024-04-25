import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const LeftRight = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G filter="url(#a)">
            <Rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
        </G>
        <Path
            fill="#007CFF"
            d="M27.428 20.164a.984.984 0 0 0-.695-.287H15.355l4.217-4.203A.98.98 0 0 0 18.876 14c-.26 0-.51.103-.695.287l-5.893 5.876a.979.979 0 0 0 0 1.387l5.893 5.877a.985.985 0 0 0 1.679-.694.98.98 0 0 0-.288-.693l-4.217-4.204h11.378a.983.983 0 0 0 .982-.98.978.978 0 0 0-.287-.692Z"
        />
        <Path
            fill="#14A300"
            d="M21.717 26.45a.983.983 0 0 1 .694-.286H33.79l-4.217-4.204a.979.979 0 0 1 .695-1.674c.26 0 .511.104.695.287l5.893 5.877a.978.978 0 0 1 0 1.387l-5.893 5.876a.985.985 0 0 1-1.678-.694c0-.26.103-.51.288-.693l4.217-4.204H22.41a.983.983 0 0 1-.982-.979c0-.26.104-.509.288-.692Z"
        />
        <Defs></Defs>
    </Svg>
)
export default LeftRight
